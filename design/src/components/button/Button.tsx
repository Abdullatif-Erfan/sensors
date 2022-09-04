import React, { CSSProperties } from "react";
interface ButtonProps {
  color?: "primary" | "secondary" | "default" | "inherit";
  children: string | React.ReactNode;
  type?: "submit" | any;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}
const Button: React.FC<ButtonProps> = ({
  children,
  color,
  style,
  onClick,
  type,
  className
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      color={color}
      style={style}
      className={className}
    >
      {children}
    </button>
  );
};
export default React.memo(Button);
