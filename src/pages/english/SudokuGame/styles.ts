import styled from "styled-components";
import { motion } from "framer-motion";

export const SudokuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 450px;

  @media (max-width: 576px) {
    gap: 8px;
    max-width: 320px;
  }
`;

export const SudokuCell = styled(motion.div)<{
  $isActive: boolean;
  $isFixed: boolean;
  $isError: boolean;
}>`
  aspect-ratio: 1;
  background: ${(props) => (props.$isFixed ? "#F8F9FA" : "white")};
  border: 3px solid
    ${(props) => {
      if (props.$isError) return props.theme.colors.accent;
      if (props.$isActive) return props.theme.colors.primary;
      return "#F0F0F0";
    }};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${(props) => (props.$isFixed ? "#636E72" : props.theme.colors.primary)};
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: ${(props) => (props.$isFixed ? "default" : "pointer")};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => !props.$isFixed && props.theme.colors.primary}80;
  }
`;

export const NumberPad = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`;

export const TipsBox = styled.div`
  padding: 15px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 15px;
`;
