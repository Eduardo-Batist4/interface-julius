import type { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  name: string;
  className?: string;
  icon?: ReactNode;
  width?: string;
  height?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function Button({
  name,
  className,
  icon,
  width = "w-64",
  height = "h-12",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const defaultStyleButton = `bg-kiwi text-black rounded-sm  capitalize
    cursor-pointer font-bold hover:bg-input-bg hover:text-kiwi  transition duration-300 ease-in-out gap-2
    `;

  const combinedClassName = `${defaultStyleButton} ${className || ""}`;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${width} ${height} ${combinedClassName}`}
    >
      {icon}
      {name}
    </button>
  );
}

export default Button;
