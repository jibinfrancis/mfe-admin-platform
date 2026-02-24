export function TextArea({ className = '', ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className={`
                w-full rounded-xs border border-border
                bg-surface px-3 text-sm text-font-primary
                placeholder:text-font-muted
                focus:outline-none focus:ring-2 focus:ring-primary}
                ${className}`
            }
        />
    )
}