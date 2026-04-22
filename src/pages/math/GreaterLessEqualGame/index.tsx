import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import KidButton from "../../../components/KidButton";
import { Scale } from "lucide-react";
import { SurpriseCard } from "../../../components/SurpriseCard";
import {
  PageContainer,
  SettingsArea,
  GameLayout,
  ConfigSection,
  ConfigSubTitle,
  GameActivityArea,
  SessionStats,
  NumberedStar,
  StarEmoji,
  StarNumber,
  PlusSign,
} from "../../../theme/globalStyles";
import { readText } from "../../../utils/index";
import { incrementScore, resetStreak, resetAll } from "../../../store/slice/AlphabetSlice";
import confetti from "canvas-confetti";
import { getRandomNumber, getMaxNumber } from "../../../utils/mathUtils";
import { RootState } from "../../../store/store";
import {
  NumberDisplay,
  QuestionMark,
  TipsContainer,
  TipRow,
  TipSign,
  TipText,
  SignControlBar,
} from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";
import FeedbackDisplay from "../../../components/FeedbackDisplay";
import Certificate from "../../../components/Certificate";

export const GreaterLessEqualGame: React.FC = () => {
  const dispatch = useDispatch();
  const streak = useSelector(
    (state: RootState) => state.alphabet.gameStats?.comparison?.streak ?? 0,
  );
  const [maxDigits, setMaxDigits] = useState(2);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const resetGame = useCallback(() => {
    const maxVal = getMaxNumber(maxDigits);
    setNum1(getRandomNumber(maxVal));
    setNum2(getRandomNumber(maxVal));
    setFeedback(null);
  }, [maxDigits]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  useEffect(() => {
    if (streak > 0 && streak % 10 === 0) {
      setShowCertificate(true);
    }
  }, [streak]);

  const handleChoice = (choice: "greater" | "less" | "equal") => {
    let correct = false;
    if (choice === "greater" && num1 > num2) correct = true;
    else if (choice === "less" && num1 < num2) correct = true;
    else if (choice === "equal" && num1 === num2) correct = true;

    if (correct) {
      setFeedback({ message: "Correct! Awesome! 🌟", isCorrect: true });
      readText("Correct");
      dispatch(incrementScore("comparison"));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#4F46E5", "#FF7675"],
      });
      setTimeout(resetGame, 1500);
    } else {
      setFeedback({ message: "Oops! Try again! 😅", isCorrect: false });
      readText("Oops! Try again");
      dispatch(resetStreak("comparison"));
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  const difficultyOptions = [
    { value: 1, label: "Numbers to 9" },
    { value: 2, label: "Numbers to 99" },
    { value: 3, label: "Numbers to 999" },
  ];

  return (
    <PageContainer data-testid="view-comparison">
      <GameLayout>
        <ChallengeHeader
          icon={Scale}
          title="Big or Small?"
          subtitle="Compare the numbers and pick the right sign!"
          streak={streak}
        />

        <SurpriseCard
          title="Certificate Progress"
          subtitle={
            streak < 10
              ? `${10 - (streak % 10)} more for a Certificate! 🏆`
              : "Milestone reached! 🎉"
          }
        />

        <GameActivityArea data-testid="activity-area">
          <SessionStats>
            {Array.from({ length: streak % 10 || (streak > 0 ? 10 : 0) }).map((_, i) => (
              <NumberedStar
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, delay: i * 0.05 }}
              >
                <StarEmoji>⭐</StarEmoji>
                <StarNumber>{i + 1}</StarNumber>
              </NumberedStar>
            ))}
            {streak >= 10 && <PlusSign>+</PlusSign>}
          </SessionStats>

          <AnimatePresence mode="wait">
            <NumberDisplay
              key={`${num1}-${num2}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
            >
              <span>{num1}</span>
              <QuestionMark>?</QuestionMark>
              <span>{num2}</span>
            </NumberDisplay>
          </AnimatePresence>

          <SignControlBar>
            <KidButton title="<" onClick={() => handleChoice("less")} variant="secondary" />
            <KidButton title="=" onClick={() => handleChoice("equal")} variant="secondary" />
            <KidButton title=">" onClick={() => handleChoice("greater")} variant="secondary" />
          </SignControlBar>

          <FeedbackDisplay feedback={feedback} />
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            name="digits"
            options={difficultyOptions}
            currentValue={maxDigits}
            onChange={setMaxDigits}
          />

          <ConfigSection>
            <ConfigSubTitle>Quick Tips</ConfigSubTitle>
            <TipsContainer>
              <TipRow>
                <TipSign>&gt;</TipSign>
                <TipText>
                  means <b>GREATER</b> than
                </TipText>
              </TipRow>
              <TipRow>
                <TipSign>&lt;</TipSign>
                <TipText>
                  means <b>LESS</b> than
                </TipText>
              </TipRow>
              <TipRow>
                <TipSign>=</TipSign>
                <TipText>
                  means <b>EQUAL</b> to
                </TipText>
              </TipRow>
            </TipsContainer>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>

      <AnimatePresence>
        {showCertificate && (
          <Certificate
            onClose={() => {
              setShowCertificate(false);
              dispatch(resetAll());
            }}
            challengeName="Big or Small?"
            score={streak}
            level={`${maxDigits} Digits`}
          />
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default GreaterLessEqualGame;
