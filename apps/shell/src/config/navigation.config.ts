import {
    LayoutDashboard,
    Users,
    FileText,
    Settings
} from "lucide-react";

export type NavItem = {
    label: string;
    path: string;
    icon: React.ComponentType<{ size?: number, strokeWidth?: number }> | undefined;
    roles?: string[];
    exact?: boolean;
};

export const NAVIGATION: NavItem[] = [
    {
        label: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
        exact: true
    },
    {
        label: "Users",
        path: "/forms",
        icon: Users
    },
    {
        label: "Reports",
        path: "/reports",
        icon: FileText
    },
    {
        label: "Settings",
        path: "/settings",
        icon: Settings
    }
];
