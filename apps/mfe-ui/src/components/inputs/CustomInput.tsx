type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function CustomInput({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`
        h-10 w-full rounded-xs border border-border
        bg-surface px-3 text-sm text-font-primary
        placeholder:text-font-muted
        focus:outline-none focus:ring-2 focus:ring-primary
        ${className}
      `}
    />
  );
}
