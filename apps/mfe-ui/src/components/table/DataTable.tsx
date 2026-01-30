import { Column, Filter, TableAction } from "./types";
import {
    Table,
    TableHeader,
    TableRow,
    TableCell
} from "./TableUtils";
import { TableToolbar } from "./TableToolbar";

type Props<T> = {
    data: T[];
    columns: Column<T>[];
    filters?: Filter[];
    actions?: TableAction<T>[];

    rowClassName?: (row: T) => string;
};

export function DataTable<T>({
    data,
    columns,
    filters,
    actions,
    rowClassName
}: Props<T>) {
    return (
        <div className="space-y-3">
            <TableToolbar filters={filters} />

            <Table>
                <TableHeader>
                    <tr>
                        {columns.map(col => (
                            <th
                                key={String(col.key)}
                                className={`px-4 py-3 text-left font-medium ${col.headerClassName ?? ""}`}
                                style={{ width: col.width }}
                            >
                                {col.header}
                            </th>
                        ))}
                        {actions && <th className="px-4 py-3" />}
                    </tr>
                </TableHeader>

                <tbody>
                    {data.map((row, idx) => (
                        <TableRow
                            key={idx}
                            className={rowClassName?.(row)}
                        >
                            {columns.map(col => (
                                <TableCell
                                    key={String(col.key)}
                                    className={`
                    ${col.className ?? ""}
                    ${col.cellClassName ?? ""}
                  `}
                                >
                                    {col.render
                                        ? col.render(row)
                                        : (row as any)[col.key]}
                                </TableCell>
                            ))}

                            {actions && (
                                <TableCell>
                                    <div className="flex gap-2">
                                        {actions.map(action => (
                                            <button
                                                key={action.label}
                                                className={
                                                    action.variant === "danger"
                                                        ? "text-danger"
                                                        : "text-primary"
                                                }
                                                onClick={() => action.onClick(row)}
                                            >
                                                {action.label}
                                            </button>
                                        ))}
                                    </div>
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
