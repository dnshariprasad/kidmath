import styled from "styled-components";
import { motion } from "framer-motion";

export const LetterSlots = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
`;

export const LetterSlot = styled(motion.div)<{
  $isActive: boolean;
  $isError: boolean;
  $isSuccess: boolean;
}>`
  width: 60px;
  height: 70px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.surface};
  border: 3px solid
    ${(props) => {
      if (props.$isSuccess) return props.theme.colors.success;
      if (props.$isError) return props.theme.colors.accent;
      if (props.$isActive) return props.theme.colors.primary;
      return props.theme.colors.primary + "15";
    }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 45px;
    height: 55px;
    font-size: 1.8rem;
    border-radius: 12px;
  }
`;

export const BigSpeakWrapper = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  padding: 30px;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid ${(props) => props.theme.colors.primary}10;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary}40;
    transform: translateY(-2px);
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const HintIconWrapper = styled(motion.div)<{ $showHint: boolean }>`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: ${(props) =>
    props.$showHint ? props.theme.colors.primary : props.theme.colors.textSecondary + "40"};
  transition: color 0.2s ease;
`;

export const SkipIconWrapper = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textSecondary + "40"};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const EmptyHistoryBox = styled.div`
  text-align: center;
  padding: 20px;
  width: 100%;
`;

export const EmptyIconWrapper = styled.div`
  margin-bottom: 10px;
`;

export const FeedbackDisplayWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;
