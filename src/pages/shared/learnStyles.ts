import styled from "styled-components";
import { motion } from "framer-motion";

export const BigDisplay = styled(motion.div)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  line-height: 1.2;
  text-align: center;
  flex-direction: column;
`;

export const EmojiDisplay = styled.span`
  font-size: clamp(3rem, 10vw, 6rem);
`;

export const SubLabel = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: ${(props) => props.theme.fonts.secondary};
  margin: 4px 0 0;
  font-weight: 600;
`;

export const SenseCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border: 2px solid ${(props) => props.theme.colors.primary}20;
  border-radius: 20px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 180px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-4px);
  }
`;

export const SenseEmoji = styled.span`
  font-size: 3rem;
`;

export const SenseName = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  margin: 0;
`;

export const SenseDesc = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: ${(props) => props.theme.fonts.secondary};
  margin: 0;
  text-align: center;
  font-weight: 500;
`;
