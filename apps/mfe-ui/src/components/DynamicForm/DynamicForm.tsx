import { useWatch } from "react-hook-form";
import { FieldRenderer } from "./FieldRenderer";
import { FieldRegistryProvider } from "./FieldRegistry";

import { Control, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { DynamicFormProps, FieldConfig } from "./types";
import { lgMap, mdMap, xsMap } from "./Config";

const getColClass = (span?: any) => {
    const xs = span?.xs || 12;
    const md = span?.md || xs;
    const lg = span?.lg || md;

    // Now returning full, static strings that Tailwind can "see"
    return `${xsMap[xs]} ${mdMap[md]} ${lgMap[lg]}`;
};

export const DynamicForm: React.FC<DynamicFormProps> = ({
    fields,
    control,
    register,
    setValue
}) => {
    const values = useWatch({ control });

    return (
        <FieldRegistryProvider fields={fields}>
            <div className="grid grid-cols-12 gap-3">
                {fields.map((field, index) => {
                    // conditional rendering
                    if (field.showIf && !field.showIf(values)) {
                        return null;
                    }

                    if (
                        field.type === "section" ||
                        field.type === "divider" ||
                        field.type === "component"
                    ) {
                        return (
                            <div
                                key={index}
                                className="col-span-12"
                            >
                                <FieldRenderer
                                    field={field}
                                    control={control}
                                    register={register}
                                    setValue={setValue}
                                    fields={fields}
                                />
                            </div>
                        );
                    }

                    return (
                        <div
                            key={field.name || index}
                            className={getColClass(field.span)}
                        >
                            <FieldRenderer
                                // key={field.name || index}
                                field={field}
                                fields={fields}
                                control={control}
                                register={register}
                                setValue={setValue}
                            />
                        </div>

                    );
                })}
            </div>
        </FieldRegistryProvider>
    );
};