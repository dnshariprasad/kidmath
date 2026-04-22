import styled from "styled-components";
import { motion } from "framer-motion";

export const NumbersLayout = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

export const MainNumberDisplay = styled(motion.div)`
  font-size: clamp(8rem, 25vw, 16rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 0 10px 30px ${(props) => props.theme.colors.primary}30;
  line-height: 1;
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: pointer;
  user-select: none;
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ObjectContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
`;

export const InteractiveObject = styled(motion.div)<{ $top: string; $left: string }>`
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  font-size: 4rem;
  cursor: pointer;
  pointer-events: auto;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
