
import { dashboardWidgets } from "../../configs/dashboardWidgets.config";
import { User, FileText, AlertTriangle, Activity } from "lucide-react";
import { DashboardWidget } from "./DashboardWidgetCard";

const ICON_MAP: any = {
    user: <User size={20} />,
    activity: <Activity size={20} />,
    file: <FileText size={20} />,
    alert: <AlertTriangle size={20} />
};

export default function DashboardWidgets() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {dashboardWidgets.map(widget => (
                <DashboardWidget
                    key={widget.id}
                    title={widget.title}
                    value={widget.value}
                    cardGradient={widget.cardGradient}
                    iconGradient={widget.iconGradient}
                    icon={ICON_MAP[widget.icon]}
                />
            ))}
        </div>
    );
}