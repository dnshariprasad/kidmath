import styled from "styled-components";
import { motion } from "framer-motion";

export const NumbersLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const MainNumberDisplay = styled(motion.div)`
  font-size: 15rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 8px 8px 0px ${(props) => props.theme.colors.primary}15;
  line-height: 1;
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 8rem;
  }
`;

export const ObjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  max-width: 800px;
  width: 100%;
  padding: 40px;
  background: ${(props) => props.theme.colors.surfaceVariant}30;
  border-radius: 32px;
  border: 3px dashed ${(props) => props.theme.colors.primary}15;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const InteractiveObject = styled(motion.div)`
  font-size: 3rem;
  cursor: pointer;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const ControlBar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const NumberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 40px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const SmallNumberBtn = styled.button<{ $active: boolean }>`
  padding: 12px;
  border-radius: 12px;
  border: 2px solid
    ${(props) => (props.$active ? props.theme.colors.primary : props.theme.colors.primary + "20")};
  background: ${(props) => (props.$active ? props.theme.colors.primary + "10" : "transparent")};
  color: ${(props) =>
    props.$active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  font-weight: ${(props) => (props.$active ? "800" : "600")};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: ${(props) => props.theme.fonts.primary};

  &:hover {
    transform: scale(1.05);
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
