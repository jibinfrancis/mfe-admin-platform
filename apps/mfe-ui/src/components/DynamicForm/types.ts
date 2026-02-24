import { Control, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Option } from "../Select";

export interface DynamicFormProps {
    fields: FieldConfig[];
    control: Control<any>;
    register: UseFormRegister<any>;
    setValue: UseFormSetValue<any>;
}

export type loadOptionsFn = (
    parents: Record<string, any> | undefined,
    input: string
) => Promise<Option[]>;

export interface FieldConfig {
    span?: {
        xs?: number;
        md?: number;
        lg?: number;
    };
    validation?: any;
    name: string;
    type: string;
    label?: string;
    dependsOn?: string | string[];
    options?: Option[];
    rows?: number;
    showIf?: (values: Record<string, any>) => boolean;
    isDisabled?: boolean;
    render?: () => React.ReactNode;
    loadOptions?: loadOptionsFn;
}