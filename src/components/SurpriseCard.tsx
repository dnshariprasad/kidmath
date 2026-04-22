import React from "react";
import styled from "styled-components";
import { GhostHeader } from "../theme/globalStyles";
import { KidoText } from "./KidoText";
import { Trophy } from "lucide-react";

interface SurpriseCardProps {
  title?: string;
  subtitle?: string;
  streak?: number;
}

const StyledSurpriseText = styled(KidoText)`
  margin-bottom: 4px;
  opacity: 0.9;
  z-index: 1;
`;

const SubtitleText = styled(KidoText)`
  opacity: 0.8;
  z-index: 1;
  font-style: italic;
`;

const TrophyWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SurpriseCard: React.FC<SurpriseCardProps> = ({
  title = "Achievement Progress",
  subtitle,
}) => {
  return (
    <GhostHeader data-testid="ghost-area">
      <TrophyWrapper>
        <Trophy size={24} color="white" />
      </TrophyWrapper>

      <TextContainer>
        <StyledSurpriseText fontSize="sm" color="white" fontWeight="bold">
          {title}
        </StyledSurpriseText>
        {subtitle && (
          <SubtitleText fontSize="xs" color="white">
            {subtitle}
          </SubtitleText>
        )}
      </TextContainer>
    </GhostHeader>
  );
};
