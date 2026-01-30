
import { ModalProps } from "./types";

const widthMap = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg"
};

export function Modal({
    open,
    onClose,
    title,
    children,
    variant = "side",
    width = "md"
}: ModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />
            {variant === "center" ? (
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div
                        className={`w-full ${widthMap[width]} bg-surface rounded-xl shadow-lg`}
                    >
                        {title && (
                            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                                <h2 className="text-lg font-semibold text-font-primary">
                                    {title}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="text-font-muted hover:text-font-primary"
                                >
                                    ✕
                                </button>
                            </div>
                        )}
                        <div className="p-5">
                            {children}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`absolute inset-y-0 right-0 w-full ${widthMap[width]} bg-surface shadow-xl`}>
                    <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                        <h2 className="text-lg font-semibold text-font-primary">
                            {title}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-font-muted hover:text-font-primary"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="p-5 overflow-y-auto h-full">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
