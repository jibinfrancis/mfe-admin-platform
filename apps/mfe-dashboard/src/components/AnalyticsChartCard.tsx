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
            <h3 className="text-sm text-slate-500 mb-4">User Growth</h3>

            <div className="h-65">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="users"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}