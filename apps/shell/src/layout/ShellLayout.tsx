
import { ReactNode } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

interface ShellLayoutProps {
    children: ReactNode;
}

const ShellLayout = ({ children }: ShellLayoutProps) => {
    return (
        <div className="h-screen bg-bg flex">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <div className="flex-1 overflow-y-auto p-5">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default ShellLayout;