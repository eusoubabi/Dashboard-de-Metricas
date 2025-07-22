interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  label,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition ${className}`}
  >
    {label}
  </button>
);

export default Button;
