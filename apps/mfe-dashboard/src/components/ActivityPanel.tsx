const activities = [
    { id: 1, text: "New user registered", time: "2m ago" },
    { id: 2, text: "Report generated", time: "10m ago" },
    { id: 3, text: "Server restarted", time: "1h ago" },
    { id: 4, text: "Error logged", time: "3h ago" }
];

export default function ActivityPanel() {
    return (
        <div className="p-6 bg-white rounded-2xl ring-1 ring-slate-200/60 shadow-sm h-full">
            <h3 className="text-sm font-medium text-slate-700 mb-6">
                Recent Activity
            </h3>
            <div className="relative flex flex-col gap-5">
                {activities.map((item, i) => (
                    <div key={item.id} className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-slate-300" />
                        <div className="flex-1 flex justify-between">
                            <p className="text-sm text-slate-600">
                                {item.text}
                            </p>
                            <span className="text-xs text-slate-400">
                                {item.time}
                            </span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}