import type { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

function Input({ type, value, className, onChange, ...res }: InputProps) {
  const defaultStyleInput = "w-full h-10 bg-white rounded-sm px-3";

  const combinedClassName = `${defaultStyleInput} ${className || ""}`;

  return (
    <input
      type={type}
      className={combinedClassName}
      value={value}
      onChange={onChange}
      {...res}
    />
  );
}

export default Input;
