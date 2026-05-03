import styled from "styled-components";
import { motion } from "framer-motion";

export const HintIconWrapper = styled(motion.div)<{ $showHint: boolean }>`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: ${(props) =>
    props.$showHint ? props.theme.colors.primary : props.theme.colors.textSecondary + "40"};
  transition: color 0.2s ease;
`;

export const ChallengeTextContainer = styled.div`
  margin-bottom: 30px;
`;

export const WordDisplay = styled.div`
  letter-spacing: 8px;
  white-space: nowrap;
`;
