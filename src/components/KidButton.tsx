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
  disabled?: boolean;
}

const StyledButton = styled(motion.button)<{
  $variant: string;
  $size?: string;
  $width?: string;
  $minWidth?: string;
  $fontSize?: string;
}>`
  padding: ${(props) => {
    switch (props.$size) {
      case "sm":
        return "10px 20px";
      case "lg":
        return "20px 40px";
      case "xl":
        return "24px 48px";
      default:
        return "16px 32px";
    }
  }};
  width: ${(props) => props.$width || "auto"};
  min-width: ${(props) => props.$minWidth || "auto"};
  font-size: ${(props) => {
    if (props.$size === "sm") return "0.85rem";
    if (props.$size === "lg") return "1.1rem";
    if (props.$size === "xl") return "1.25rem";
    const size = props.$fontSize as keyof typeof props.theme.fontSize;
    return props.theme.fontSize[size] || props.$fontSize || props.theme.fontSize.md;
  }};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: ${(props) => {
    switch (props.$variant) {
      case "success":
        return "#10B981";
      case "accent":
        return "#F59E0B";
      case "primary":
        return props.theme.colors.primary;
      case "secondary":
        return props.theme.colors.primary + "10";
      case "sub":
        return "#F0F0F0";
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
    props.$variant === "secondary" ? `2px solid ${props.theme.colors.primary}40` : "none"};
  border-radius: 24px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  white-space: nowrap;
  outline: none;
  position: relative;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) => (props.$variant === "primary" ? props.theme.shadows.md : "none")};

  &:hover {
    background: ${(props) => {
      if (props.$variant === "secondary") return props.theme.colors.primary + "15";
      return props.theme.colors.primary;
    }};
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.lg};
  }

  &:active {
    transform: translateY(0);
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
