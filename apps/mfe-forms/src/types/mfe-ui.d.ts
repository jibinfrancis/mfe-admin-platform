declare module "mfeUi" {
    import * as React from "react";

    export type Option = {
        label: string;
        value: string;
    };

    export interface SelectProps {
        label?: string;
        value?: Option | Option[] | null;
        onChange?: (value: any) => void;
        options?: Option[];
        loadOptions?: (input: string) => Promise<Option[]>;
        isMulti?: boolean;
        isClearable?: boolean;
        placeholder?: string;
        isDisabled?: boolean;
        error?: string;
    }

    export type Column<T> = {
        key: keyof T;
        header: string;
        render?: (row: T) => React.ReactNode;
        width?: string;
        className?: string;
        headerClassName?: string;
        cellClassName?: (row: T) => string;
    };

    export type Filter = {
        key: string;
        label: string;
        type: "text" | "select";
        options?: { label: string; value: string }[];
    };

    export type TableAction<T> = {
        label: string;
        variant?: "primary" | "danger";
        onClick: (row: T) => void;
    };

    export type TableProps<T> = {
        data: T[];
        columns: Column<T>[];
        filters?: Filter[];
        actions?: TableAction<T>[];

        rowClassName?: (row: T) => string;
    };

    export type ModalVariant = "center" | "side";

    export type ModalWidth = "sm" | "md" | "lg";

    export interface ModalProps {
        open: boolean;
        onClose: () => void;
        title?: string;
        children: React.ReactNode;
        variant?: ModalVariant;
        width?: ModalWidth;
    }

    export const Modal: React.FC<ModalProps>;

    export const DataTable: React.FC<TableProps>;

    export const Select: React.FC<SelectProps>;
}
