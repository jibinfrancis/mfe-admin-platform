export type Option = {
    label: string;
    value: string;
};

export type SelectValue = Option | Option[] | null;

export type SelectProps = {
    label?: string;
    value?: SelectValue;
    onChange?: (value: SelectValue) => void;

    options?: Option[];
    loadOptions?: (input: string) => Promise<Option[]>;

    isMulti?: boolean;
    isClearable?: boolean;
    placeholder?: string;
    isDisabled?: boolean;

    error?: string;
};
