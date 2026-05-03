import styled from "styled-components";
import { motion } from "framer-motion";

export const DisplayWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PulseCircle = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: ${(props) => props.theme.colors.primary}10;
  border-radius: 50%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const BigDisplay = styled(motion.div)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  line-height: 1.2;
  text-align: center;
  flex-direction: column;
  z-index: 1;
  text-shadow: 0 10px 20px ${(props) => props.theme.colors.primary}15;
`;

export const EmojiDisplay = styled.span`
  font-size: clamp(4rem, 12vw, 8rem);
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
`;

export const SubLabel = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: ${(props) => props.theme.fonts.secondary};
  margin: 0 0;
  font-weight: 600;
  max-width: 400px;
`;

export const SenseCard = styled(motion.div)<{ $isActive?: boolean }>`
  background: ${(props) =>
    props.$isActive ? props.theme.colors.primary : props.theme.colors.surface};
  border: 2px solid
    ${(props) => (props.$isActive ? props.theme.colors.primary : props.theme.colors.primary + "15")};
  border-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 180px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) =>
    props.$isActive ? `0 10px 20px ${props.theme.colors.primary}30` : "none"};

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-4px);
    background: ${(props) =>
      props.$isActive ? props.theme.colors.primary : props.theme.colors.primary + "05"};
  }

  * {
    color: ${(props) => (props.$isActive ? "white" : "inherit")};
    opacity: ${(props) => (props.$isActive ? 1 : "inherit")};
  }

  h3 {
    color: ${(props) => (props.$isActive ? "white" : props.theme.colors.primary)};
    opacity: 1;
  }
`;

export const SenseEmoji = styled.span`
  font-size: 3.5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
`;

export const SenseName = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  margin: 0;
`;

export const SenseDesc = styled.p<{ $isActive?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: ${(props) => props.theme.fonts.secondary};
  margin: 0;
  text-align: center;
  font-weight: 500;
  opacity: ${(props) => (props.$isActive ? 1 : 0.8)};
`;
