import styled from "styled-components";
import { motion } from "framer-motion";

export const NumbersLayout = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  @media (max-width: 768px) {
  }
`;

export const DecorativeCircle = styled(motion.div)`
  position: absolute;
  width: 350px;
  background: ${(props) => props.theme.colors.primary}10;
  border-radius: 50%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

export const MainNumberDisplay = styled(motion.div)`
  font-size: clamp(10rem, 30vw, 18rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 0 20px 40px ${(props) => props.theme.colors.primary}20;
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

export const GridHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  background: ${(props) => props.theme.colors.surfaceVariant}20;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.primary}08;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }
`;

export const NumberTile = styled(motion.div)<{ $isActive: boolean }>`
  aspect-ratio: 1;
  background: ${(props) =>
    props.$isActive ? props.theme.colors.primary : props.theme.colors.surface};
  color: ${(props) => (props.$isActive ? "white" : props.theme.colors.textPrimary)};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1rem;
  cursor: pointer;
  border: 2px solid
    ${(props) => (props.$isActive ? props.theme.colors.primary : props.theme.colors.primary + "10")};
  box-shadow: ${(props) =>
    props.$isActive ? `0 8px 16px ${props.theme.colors.primary}30` : "none"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.primary};
    background: ${(props) =>
      props.$isActive ? props.theme.colors.primary : props.theme.colors.primary + "05"};
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    border-radius: 8px;
  }
`;
