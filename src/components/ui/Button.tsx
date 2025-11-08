import type { MouseEventHandler } from "react";

interface ButtonProps {
  name: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function Button({
  name,
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const defaultStyleButton = "w-64 py-3 bg-lime mt-10 text-text-main";

  const combinedClassName = `${defaultStyleButton} ${className || ""}`;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={combinedClassName}
    >
      {name}
    </button>
  );
}

export default Button;
