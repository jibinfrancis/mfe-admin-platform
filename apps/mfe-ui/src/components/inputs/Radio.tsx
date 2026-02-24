import React from "react";

type Option = {
  label: string;
  value: string | number;
};

interface RadioProps {
  label?: string;
  value?: string | number;
  onChange?: (val: any) => void;
  options?: Option[];
  isDisabled?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  value,
  onChange,
  options = [],
  isDisabled
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 font-medium">
          {label}
        </label>
      )}

      <div className="flex gap-4">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              value={opt.value}
              checked={value === opt.value}
              disabled={isDisabled}
              onChange={() => onChange?.(opt.value)}
              className="accent-blue-600"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};