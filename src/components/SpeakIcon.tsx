import { readText } from "../utils/index";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";

const SpeakButton = styled(motion.div)`
  width: 56px;
  height: 56px;
  flex-shrink: 0; /* Prevents squashing in flex containers */
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

interface SpeakIconProps {
  text: string;
  lang?: string;
}

const SpeakIcon: React.FC<SpeakIconProps> = ({ text, lang = "en-US" }) => {
  return (
    <SpeakButton
      data-testid="comp-speak-icon"
      onClick={() => readText(text, lang)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      aria-label="Read text"
    >
      <Volume2 size={28} strokeWidth={2.5} />
    </SpeakButton>
  );
};

export default SpeakIcon;
