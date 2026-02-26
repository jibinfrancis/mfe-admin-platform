const activities = [
    { id: 1, text: "New user registered", time: "2m ago" },
    { id: 2, text: "Report generated", time: "10m ago" },
    { id: 3, text: "Server restarted", time: "1h ago" },
    { id: 4, text: "Error logged", time: "3h ago" }
];

export default function ActivityPanel() {
    return (
        <div className="p-6 bg-white rounded-2xl ring-1 ring-slate-200/60 shadow-sm h-full">
            <h3 className="text-sm text-slate-500 mb-4">Recent Activity</h3>

            <div className="flex flex-col gap-4">
                {activities.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-slate-700">{item.text}</span>
                        <span className="text-slate-400">{item.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}