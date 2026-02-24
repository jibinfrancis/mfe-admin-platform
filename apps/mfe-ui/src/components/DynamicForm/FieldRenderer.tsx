import { memo, useCallback } from "react";
import { Control, FieldValues, useController, UseFormRegister, UseFormSetValue, useWatch } from "react-hook-form";

import { FieldConfig } from "./types";
import { Select } from "../Select";
import { CustomInput, Radio, TextArea, Checkbox } from "../inputs";



interface FieldRendererProps {
    field: FieldConfig;
    fields: FieldConfig[];
    control: Control<FieldValues>;
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
}

export const FieldRenderer = memo(
    ({ field, fields, control, register, setValue }: FieldRendererProps) => {
        const deps = Array.isArray(field.dependsOn)
            ? field.dependsOn
            : field.dependsOn
                ? [field.dependsOn]
                : [];

        // 👇 watch ONLY dependency fields
        const parentValues = useWatch({
            control,
            name: deps
        });

        const { field: ctrl }: any = field.name
            ? useController({
                name: field.name,
                control
            })
            : { field: {} };

        // ---- reset children ----
        const resetChildren = (parent: string | undefined) => {
            fields.forEach((f: FieldConfig) => {
                const childDeps = Array.isArray(f.dependsOn)
                    ? f.dependsOn
                    : [f.dependsOn];

                if (childDeps?.includes(parent)) {
                    setValue(f.name, null);
                }
            });
        };

        const load = useCallback(
            (input: string) => {
                const obj: Record<string, any> = {};
                deps.forEach((d, i) => {
                    obj[d] = parentValues?.[i];
                });

                return field.loadOptions
                    ? field.loadOptions(obj, input)
                    : Promise.resolve([]);
            },
            [parentValues]
        );

        // ---- Layout Elements ----
        if (field.type === "section") {
            return (
                <div>
                    <h3 className="text-xl font-semibold mb-4">{field.label}</h3>
                    <hr className="border-t-2 mb-2 border-gray-300" />
                </div>
            );
        }

        if (field.type === "divider") {
            return <hr className="my-2 border-t border-gray-300" />;
        }

        if (field.type === "component") {
            return <>{field.render?.()}</>;
        }

        // ---- Inputs ----
        if (field.type === "text") {
            return (
                <div>
                    <label>{field.label}</label>
                    <CustomInput type={field.type} {...register(field.name)} />
                </div>
            );
        }

        if (field.type === "textarea") {
            return (
                <div>
                    <label>{field.label}</label>
                    <TextArea {...register(field.name)} />
                </div>
            );
        }

        if (field.type === "radio") {
            return (
                <Radio
                    label={field.label}
                    value={ctrl.value}
                    onChange={ctrl.onChange}
                    options={field.options}
                    isDisabled={field.isDisabled}
                />
            );
        }

        if (field.type === "checkbox") {
            return (
                <Checkbox
                    label={field.label}
                    value={ctrl.value}
                    onChange={ctrl.onChange}
                    isDisabled={field.isDisabled}
                />
            )
        }
        if (field.type === "select") {
            return (
                <div>
                    <label>{field.label}</label>

                    <Select
                        value={ctrl.value}
                        onChange={(val) => {
                            ctrl.onChange(val);
                            resetChildren(field.name);
                        }}
                        options={field.options}
                        loadOptions={field.loadOptions ? load : undefined}
                        isDisabled={
                            field.isDisabled
                        }
                    />
                </div>
            );
        }


        return null;
    }
);