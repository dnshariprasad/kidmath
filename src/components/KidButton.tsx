import styled from "styled-components";
import { motion } from "framer-motion";

interface ButtonProps {
  title?: string;
  isActive?: boolean;
  onClick: () => void;
  variant?: "primary" | "secondary" | "accent" | "success";
  children?: React.ReactNode;
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
  font-size: ${(props) => props.$fontSize || "1.1rem"};
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
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  position: relative;
  letter-spacing: 0.1px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
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
      {title}
      {children}
    </StyledButton>
  );
};

export default KidButton;
