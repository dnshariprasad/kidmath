import React from "react";
import { AnimatePresence } from "framer-motion";
import { FeedbackWrapper } from "../theme/globalStyles";
import { KidoText } from "./KidoText";

interface FeedbackDisplayProps {
  feedback: { message: string; isCorrect: boolean } | null;
  fontSize?: string;
}

const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ feedback, fontSize = "1.5rem" }) => {
  return (
    <AnimatePresence>
      {feedback && (
        <FeedbackWrapper
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
        >
          <KidoText
            color={feedback.isCorrect ? "success" : "accent"}
            fontSize={fontSize}
            fontWeight="bold"
          >
            {feedback.message}
          </KidoText>
        </FeedbackWrapper>
      )}
    </AnimatePresence>
  );
};

export default FeedbackDisplay;
