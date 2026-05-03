import styled from "styled-components";
import { motion } from "framer-motion";

export const HindiDisplayWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
  }
`;

export const DecorativeCircle = styled(motion.div)`
  position: absolute;
  width: 250px;
  height: 250px;
  background: ${(props) => props.theme.colors.primary}10;
  border-radius: 50%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

export const HindiDisplay = styled(motion.div)`
  font-size: clamp(6rem, 20vw, 12rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  z-index: 1;
  text-shadow: 0 20px 40px ${(props) => props.theme.colors.primary}20;
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
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }
`;

export const CharTile = styled(motion.div)<{ $isActive: boolean }>`
  aspect-ratio: 1;
  background: ${(props) =>
    props.$isActive ? props.theme.colors.primary : props.theme.colors.surface};
  color: ${(props) => (props.$isActive ? "white" : props.theme.colors.textPrimary)};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
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
    font-size: 1rem;
    border-radius: 10px;
  }
`;

export const NumberTile = styled(CharTile);
