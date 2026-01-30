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
  