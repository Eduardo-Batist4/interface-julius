import type { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isInvalid?: boolean;
}

function Input({
  type,
  value,
  className,
  onChange,
  isInvalid,
  ...res
}: InputProps) {
  const defaultStyleInput = "w-full h-10 bg-white rounded-sm px-3";

  const borderStyle = isInvalid
    ? "border border-red-500 focus:ring-red-500"
    : "border-none";

  const combinedClassName = `${defaultStyleInput} ${borderStyle} ${
    className || ""
  }`;

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
