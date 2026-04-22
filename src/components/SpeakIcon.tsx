import { readText } from "../utils/index";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";

const SpeakButton = styled(motion.div)<{ $size?: string }>`
  width: ${(props) => {
    switch (props.$size) {
      case "huge":
        return "120px";
      case "large":
        return "80px";
      case "small":
        return "40px";
      default:
        return "56px";
    }
  }};
  height: ${(props) => {
    switch (props.$size) {
      case "huge":
        return "120px";
      case "large":
        return "80px";
      case "small":
        return "40px";
      default:
        return "56px";
    }
  }};
  flex-shrink: 0;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease;

  svg {
    width: ${(props) => {
      switch (props.$size) {
        case "huge":
          return "60px";
        case "large":
          return "40px";
        case "small":
          return "20px";
        default:
          return "28px";
      }
    }};
    height: ${(props) => {
      switch (props.$size) {
        case "huge":
          return "60px";
        case "large":
          return "40px";
        case "small":
          return "20px";
        default:
          return "28px";
      }
    }};
  }

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.onPrimary};
  }
`;

interface SpeakIconProps {
  text: string;
  lang?: string;
  size?: "small" | "medium" | "large" | "huge";
}

const SpeakIcon: React.FC<SpeakIconProps> = ({ text, lang = "en-US", size }) => {
  return (
    <SpeakButton
      data-testid="comp-speak-icon"
      $size={size}
      onClick={() => readText(text, lang)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      aria-label="Read text"
    >
      <Volume2 strokeWidth={2.5} />
    </SpeakButton>
  );
};

export default SpeakIcon;
