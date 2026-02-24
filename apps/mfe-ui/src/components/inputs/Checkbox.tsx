import React from "react";

interface CheckboxProps {
  label?: string;
  value?: boolean;
  onChange?: (val: boolean) => void;
  isDisabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  onChange,
  isDisabled
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={!!value}
        disabled={isDisabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="accent-blue-600"
      />

      {label && <span>{label}</span>}
    </label>
  );
};