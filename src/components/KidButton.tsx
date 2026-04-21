import styled from "styled-components";
import { motion } from "framer-motion";

interface ButtonProps {
  title?: string;
  isActive?: boolean;
  onClick: () => void;
  variant?: "primary" | "secondary" | "accent" | "success" | "sub";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: string;
  width?: string;
  minWidth?: string;
  fontSize?: string;
}

const StyledButton = styled(motion.button)<{
  $variant: string;
  $size?: string;
  $width?: string;
  $minWidth?: string;
  $fontSize?: string;
}>`
  padding: ${(props) => (props.$size ? "0" : "16px 32px")};
  width: ${(props) => props.$size || props.$width || "auto"};
  min-width: ${(props) => props.$minWidth || "auto"};
  height: ${(props) => props.$size || "auto"};
  font-size: ${(props) => {
    const size = props.$fontSize as keyof typeof props.theme.fontSize;
    return props.theme.fontSize[size] || props.$fontSize || props.theme.fontSize.md;
  }};
  font-weight: 700;
  background: ${(props) => {
    switch (props.$variant) {
      case "success":
        return props.theme.colors.success;
      case "accent":
        return props.theme.colors.accent;
      case "secondary":
        return props.theme.colors.primaryContainer;
      case "sub":
        return "#F0F0F0";
      case "primary":
      default:
        return props.theme.colors.primary;
    }
  }};
  color: ${(props) => {
    switch (props.$variant) {
      case "secondary":
        return props.theme.colors.primary;
      case "sub":
        return "#999";
      default:
        return "white";
    }
  }};
  border: ${(props) =>
    props.$variant === "secondary" ? `2px solid ${props.theme.colors.primary}30` : "none"};
  border-radius: 20px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  outline: none;
  position: relative;
  letter-spacing: 0.1px;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => {
      if (props.$variant === "secondary") return props.theme.colors.primaryContainer;
      return props.theme.colors.primary;
    }};
    opacity: 0.9;
  }
`;

const KidButton: React.FC<ButtonProps> = ({
  title,
  onClick,
  isActive = true,
  variant = "primary",
  children,
  size,
  width,
  minWidth,
  fontSize,
  icon,
}) => {
  return (
    <StyledButton
      data-testid="comp-kid-button"
      $variant={isActive ? variant : "sub"}
      $size={size}
      $width={width}
      $minWidth={minWidth}
      $fontSize={fontSize}
      onClick={onClick}
      whileHover={{
        scale: 1.02,
        y: -1,
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {icon}
      {title}
      {children}
    </StyledButton>
  );
};

export default KidButton;
