import styled from "styled-components";
import { motion } from "framer-motion";

export const MathExpression = styled(motion.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`;

export const OperatorSpan = styled.span`
  color: #ff7675;
`;

export const EqualSpan = styled.span`
  color: #6366f1;
`;

export const QuestionSpan = styled.span`
  color: #dfe6e9;
`;

export const AnswerGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  flex-wrap: wrap;

  & > button {
    flex: 1;
    min-width: 120px;
    height: 80px;
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-width: 400px;

    & > button {
      height: 64px;
      font-size: 1.5rem;
      min-width: 0;
    }
  }
`;
