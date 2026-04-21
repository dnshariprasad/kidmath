import React from "react";
import styled from "styled-components";
import { GhostHeader, MagicButton } from "../theme/globalStyles";
import { KidoText } from "./KidoText";
import { Wand2 } from "lucide-react";

interface SurpriseCardProps {
  title?: string;
  onShuffle: () => void;
  buttonText?: string;
}

const StyledSurpriseText = styled(KidoText)`
  margin-bottom: 12px;
  opacity: 0.9;
  z-index: 1;
`;

export const SurpriseCard: React.FC<SurpriseCardProps> = ({
  title = "Ready for a surprise?",
  onShuffle,
  buttonText = "Magic Shuffle",
}) => {
  return (
    <GhostHeader data-testid="ghost-area">
      <StyledSurpriseText fontSize="0.9rem" color="white" fontWeight="bold">
        {title}
      </StyledSurpriseText>
      <MagicButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onShuffle}>
        <Wand2 size={18} />
        {buttonText}
      </MagicButton>
    </GhostHeader>
  );
};
