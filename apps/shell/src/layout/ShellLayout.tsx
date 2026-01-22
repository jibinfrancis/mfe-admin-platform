
import { ReactNode } from "react";

interface ShellLayoutProps {
    children: ReactNode;
}

const ShellLayout = ({ children }: ShellLayoutProps) => {
    return (
        <div className="h-screen flex">
            <div className="w-1/3 flex justify-center">SideBar</div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="h-10">header</div>
                <div className="flex-1 overflow-y-auto p-5">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default ShellLayout;