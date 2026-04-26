import styled from "styled-components";
import { motion } from "framer-motion";

export const NumberDisplay = styled(motion.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  white-space: nowrap;
  width: 100%;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`;

export const QuestionMark = styled.span`
  color: ${(props) => props.theme.colors.questionMark};

  width: 80px;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.primary};
`;

export const SignControlBar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  & > button {
    width: 80px;
    height: 80px;
    font-size: 2rem;
    border-radius: 24px;
  }

  @media (max-width: 576px) {
    gap: 12px;
    & > button {
      width: 64px;
      height: 64px;
      font-size: 1.5rem;
      border-radius: 16px;
    }
  }
`;

export const TipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const TipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(4px);
    border-color: ${(props) => props.theme.colors.primary}40;
  }
`;

export const TipSign = styled.span`
  font-weight: 900;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
  width: 24px;
  text-align: center;
`;

export const TipText = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 600;

  b {
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;
