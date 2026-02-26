type WidgetProps = {
    title: string;
    value: number;
    icon: React.ReactNode;
    cardGradient: string;
    iconGradient: string;
};

export const DashboardWidget = ({
    title,
    value,
    icon,
    cardGradient,
    iconGradient

}: WidgetProps) => {
    return (
        <div
            className={`p-6 rounded-2xl 
                hover:shadow-md
      hover:-translate-y-0.5
      transition-all duration-200
 relative shadow-sm border border-gray-100 bg-linear-to-br ${cardGradient}`}
        >
            <div className="flex flex-col items-center gap-3">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white bg-linear-to-br ${iconGradient} shadow`}>
                    {icon}
                </div>

                <h3 className="text-sm text-gray-500">{title}</h3>
                <p className="text-2xl font-semibold text-gray-800">{value}</p>
            </div>
        </div>
    );
};