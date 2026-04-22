import React from "react";
import styled from "styled-components";
import { GhostHeader } from "../theme/globalStyles";
import { KidoText } from "./KidoText";
import { motion } from "framer-motion";

interface SurpriseCardProps {
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

const ClickableHeader = styled(motion.div)<{ $isClickable: boolean }>`
  cursor: ${(props) => (props.$isClickable ? "pointer" : "default")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
`;

const StyledSurpriseText = styled(KidoText)`
  margin-bottom: 4px;
  opacity: 0.95;
`;

const SubtitleText = styled(KidoText)`
  opacity: 0.85;
  line-height: 1.2;
`;

const GhostWrapper = styled(GhostHeader)`
  padding: 0;
`;

export const SurpriseCard: React.FC<SurpriseCardProps> = ({
  title = "Achievement",
  subtitle,
  onClick,
}) => {
  return (
    <GhostWrapper data-testid="ghost-area">
      <ClickableHeader
        $isClickable={!!onClick}
        onClick={onClick}
        whileHover={onClick ? { backgroundColor: "rgba(255,255,255,0.08)" } : {}}
        whileTap={onClick ? { scale: 0.98 } : {}}
      >
        <StyledSurpriseText fontSize="sm" color="white" fontWeight="800">
          {title}
        </StyledSurpriseText>
        {subtitle && (
          <SubtitleText fontSize="xs" color="white" fontWeight="500">
            {subtitle}
          </SubtitleText>
        )}
      </ClickableHeader>
    </GhostWrapper>
  );
};
