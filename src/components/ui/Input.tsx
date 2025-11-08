interface InputProps {
  type: string;
  className?: string;
}

function Input({ type, className }: InputProps) {
  const defaultStyleInput = "w-full h-10 bg-input-bg rounded-sm px-3";

  const combinedClassName = `${defaultStyleInput} ${className || ""}`;

  return <input type={type} className={combinedClassName} />;
}

export default Input;
