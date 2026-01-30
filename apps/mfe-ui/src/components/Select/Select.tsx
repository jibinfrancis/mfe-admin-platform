import ReactSelect from "react-select";
import AsyncSelect from "react-select/async";
import { SelectProps } from "./types";
import "./select.css";

export function Select({
    label,
    value,
    onChange,
    options,
    loadOptions,
    isMulti,
    isClearable = true,
    placeholder = "Select",
    isDisabled,
    error
}: SelectProps) {
    const Component = loadOptions ? AsyncSelect : ReactSelect;

    return (
        <div className="space-y-1">
            {label && (
                <label className="text-sm text-font-secondary">
                    {label}
                </label>
            )}

            <Component
                value={value as any}
                onChange={onChange as any}
                options={options}
                loadOptions={loadOptions}
                isMulti={isMulti}
                isClearable={isClearable}
                isDisabled={isDisabled}
                placeholder={placeholder}
                classNamePrefix="ui-select"
            />

            {error && (
                <p className="text-xs text-danger">
                    {error}
                </p>
            )}
        </div>
    );
}
