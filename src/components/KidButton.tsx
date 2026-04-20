import styled from "styled-components";
import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
  variant?: "primary" | "secondary" | "accent" | "success";
  style?: React.CSSProperties;
}

const StyledButton = styled(motion.button)<{ $variant: string }>`
  padding: 16px 32px;
  margin: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => {
    switch (props.$variant) {
      case "success": return "white";
      case "primary": return "white";
      case "accent": return "white";
      case "secondary": return "white";
      default: return "white";
    }
  }};
  background: ${(props) => {
    switch (props.$variant) {
      case "success": return props.theme.colors.primary;
      case "primary": return props.theme.colors.primary;
      case "accent": return props.theme.colors.primary;
      case "secondary": return props.theme.colors.primary;
      default: return props.theme.colors.primary;
    }
  }};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  position: relative;
  letter-spacing: 0.1px;
  min-width: 160px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`;

const KidButton: React.FC<ButtonProps> = ({
  title,
  onClick,
  isActive = true,
  variant = "primary",
  style,
}) => {
  return (
    <StyledButton
      data-testid="comp-kid-button"
      $variant={isActive ? variant : "sub"}
      onClick={onClick}
      style={style}
      whileHover={{ 
        scale: 1.02, 
        y: -1
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {title}
    </StyledButton>
  );
};

export default KidButton;
