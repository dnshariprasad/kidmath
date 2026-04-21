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
  background: white;
  border: 3px solid
    ${(props) => {
      if (props.$isSuccess) return props.theme.colors.success;
      if (props.$isError) return props.theme.colors.accent;
      if (props.$isActive) return props.theme.colors.primary;
      return "#F0F0F0";
    }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  box-shadow: ${(props) => (props.$isActive ? "0 10px 20px rgba(99, 102, 241, 0.2)" : "none")};
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 45px;
    height: 55px;
    font-size: 1.8rem;
    border-radius: 12px;
  }
`;

export const BigSpeakWrapper = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 40px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid #f0f0f0;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary}40;
    transform: translateY(-5px);
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
  color: ${(props) => (props.$showHint ? "#6366F1" : "#dfe6e9")};
  transition: color 0.2s ease;
`;

export const SkipIconWrapper = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: #dfe6e9;
  transition: color 0.2s ease;

  &:hover {
    color: #6366f1;
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
