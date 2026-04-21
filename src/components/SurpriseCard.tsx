import React from "react";
import { GhostHeader, MagicButton } from "../theme/KidStyles";
import { KidoText } from "./KidoText";
import { Wand2 } from "lucide-react";

interface SurpriseCardProps {
  title?: string;
  onShuffle: () => void;
  buttonText?: string;
}

export const SurpriseCard: React.FC<SurpriseCardProps> = ({ 
  title = "Ready for a surprise?", 
  onShuffle,
  buttonText = "Magic Shuffle"
}) => {
  return (
    <GhostHeader data-testid="ghost-area">
      <KidoText 
        fontSize="0.9rem" 
        color="white" 
        fontWeight="bold" 
        style={{ marginBottom: "12px", opacity: 0.9, zIndex: 1 }}
      >
        {title}
      </KidoText>
      <MagicButton 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onShuffle}
      >
        <Wand2 size={18} />
        {buttonText}
      </MagicButton>
    </GhostHeader>
  );
};
