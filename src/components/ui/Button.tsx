import type { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  name: string | ReactNode;
  className?: string;
  width?: string;
  height?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function Button({
  name,
  className,
  width = "w-64",
  height = "h-12",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const defaultStyleButton = `bg-kiwi text-black rounded-sm 
    cursor-pointer font-bold hover:bg-input-bg hover:text-kiwi  transition duration-300 ease-in-out
    `;

  const combinedClassName = `${defaultStyleButton} ${width} ${height} ${
    className || ""
  }`;

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
