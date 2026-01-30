type Props = {
    children: React.ReactNode;
    className?: string;
  };
  
  export function Table({ children }: Props) {
    return (
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full border-collapse">{children}</table>
      </div>
    );
  }
  
  export function TableHeader({ children }: Props) {
    return (
      <thead className="bg-sidebar text-font-secondary text-sm">
        {children}
      </thead>
    );
  }
  
  export function TableRow({ children, className = "" }: Props) {
    return (
      <tr className={`border-b border-border hover:bg-bg ${className}`}>
        {children}
      </tr>
    );
  }
  
  export function TableCell({ children, className = "" }: Props) {
    return (
      <td className={`px-4 py-3 text-sm text-font-primary ${className}`}>
        {children}
      </td>
    );
  }
  