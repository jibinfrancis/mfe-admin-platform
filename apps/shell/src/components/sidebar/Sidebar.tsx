import { NavLink } from "react-router-dom";
import { NAVIGATION } from "../../config/navigation.config";


export default function Sidebar() {
    return (
        <aside
            className="
        w-60 h-full
        bg-sidebar
        shadow-lg
        flex flex-col
        py-6
        pr-4
      "
        >
            <div className="mb-8 px-2">
                <h1 className="text-base px-4 font-semibold text-font-primary">
                    Admin Panel
                </h1>
            </div>
            <nav className="flex-1 space-y-2">
                {NAVIGATION.map(item => {
                    const Icon = item.icon;
                    return <NavLink
                        key={item.path}
                        to={item.path}
                        end
                        className={({ isActive }) =>
                            `
              h-11
              px-4
              flex items-center gap-3
              rounded-r-sm
              text-sm font-medium
              transition-all
              ${isActive
                                ? "bg-linear-to-r border-l-2 border-primary from-primary via-primary/75  to-primary-soft/50 text-white shadow-md"
                                : "text-font-secondary hover:bg-primary-hover hover:text-white"
                            }
            `
                        }
                    >
                        <span className="text-lg leading-none">
                            {Icon && <Icon size={18} strokeWidth={1.75} />}
                        </span>
                        <span>{item.label}</span>
                    </NavLink>
                })}
            </nav>

            {/* Footer */}
            <div className="pt-6 mt-6 border-t border-border text-xs text-font-muted">
                © 2028 Your Company
            </div>
        </aside>
    );
}
