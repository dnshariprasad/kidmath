import styled from "styled-components";
import { motion } from "framer-motion";
import SpeakIcon from "../components/SpeakIcon";

interface SentenceReaderProps {
  sentence?: string[];
}

const SentenceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const SentenceItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${(props) => props.theme.colors.background};
  padding: 12px 16px;
  border-radius: ${(props) => props.theme.borderRadius.small};
  border-left: 4px solid ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: left;
`;

const SectionHeader = styled.h4`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.1rem;
  margin: 0 0 10px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "📖";
  }
`;

const SentenceReader = (props: SentenceReaderProps) => {
  const sentences = props.sentence || [];

  if (sentences.length === 0) return null;

  return (
    <SentenceList>
      <SectionHeader>Example Sentences:</SectionHeader>
      {sentences.map((sentence, index) => (
        <SentenceItem
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ x: 5, background: "rgba(0, 206, 201, 0.05)" }}
        >
          <SpeakIcon text={sentence} />
          <span>{sentence}</span>
        </SentenceItem>
      ))}
    </SentenceList>
  );
};

export default SentenceReader;
