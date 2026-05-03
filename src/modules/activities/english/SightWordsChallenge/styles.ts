import styled from "styled-components";
import { motion } from "framer-motion";

export const WordDisplay = styled(motion.div)`
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin: 0;
  font-family: ${(props) => props.theme.fonts.primary};
  text-transform: capitalize;
`;

export const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 16px;
`;

export const IconMargin = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const SentenceContainer = styled(motion.div)`
  margin-top: 0;
  padding: 16px 20px;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 16px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.primary}10;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${(props) => props.theme.colors.primary};
    opacity: 0.7;
  }
`;

export const ExampleSentence = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  flex: 1;

  &::before {
    content: '"';
    color: ${(props) => props.theme.colors.primary};
    margin-right: 2px;
    font-family: serif;
    font-size: 1.2rem;
  }

  &::after {
    content: '"';
    color: ${(props) => props.theme.colors.primary};
    margin-left: 2px;
    font-family: serif;
    font-size: 1.2rem;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`;
