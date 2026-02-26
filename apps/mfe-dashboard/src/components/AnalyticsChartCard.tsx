import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

const data = [
    { name: "Mon", users: 120 },
    { name: "Tue", users: 210 },
    { name: "Wed", users: 180 },
    { name: "Thu", users: 260 },
    { name: "Fri", users: 300 },
    { name: "Sat", users: 240 },
    { name: "Sun", users: 320 }
];

export default function AnalyticsChartCard() {
    return (
        <div className="p-6 bg-white rounded-2xl ring-1 ring-slate-200/60 shadow-sm h-full">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <p className="text-xs text-slate-400">User Growth</p>
                    <h3 className="text-xl font-semibold text-slate-800">
                        +18.4%
                    </h3>
                </div>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-500">
                    This Week
                </span>
            </div>
            <div className="h-65">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid stroke="#f1f5f9" vertical={false} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                        />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="users"
                            stroke="#3b82f6"
                            strokeWidth={2.5}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}