import { Filter } from "./types";
import { CustomInput } from "../inputs/CustomInput";

export function TableToolbar({ filters }: { filters?: Filter[] }) {
    if (!filters) return null;

    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-3">
                {filters.map(filter =>
                    filter.type === "text" ? (
                        <CustomInput
                            key={filter.key}
                            placeholder={filter.label}
                        />
                    ) : (
                        <p>select</p>
                    )
                )}
            </div>
        </div>
    );
}
