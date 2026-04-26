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
import { readText, getEncouragement } from "../../../utils/index";
import { incrementScore, resetStreak } from "../../../store/slice/AlphabetSlice";
import confetti from "canvas-confetti";

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

import { TRANSLATIONS } from "../../../constants/translations";
import { generateComparisonQuestion, checkComparisonAnswer } from "./utils";
import { colors } from "../../../theme/colors";

export const GreaterLessEqualGame: React.FC = () => {
  const dispatch = useDispatch();
  const t = TRANSLATIONS.en;
  const streak = useSelector(
    (state: RootState) => state.alphabet.gameStats?.comparison?.streak ?? 0,
  );
  const [maxDigits, setMaxDigits] = useState(2);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const resetGame = useCallback(() => {
    const { num1: n1, num2: n2 } = generateComparisonQuestion(maxDigits);
    setNum1(n1);
    setNum2(n2);
    setFeedback(null);
  }, [maxDigits]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  useEffect(() => {
    if (streak > 0 && streak % 10 === 0) {
      setFeedback({ message: "Incredible! 10 in a row! 🌟", isCorrect: true });
      readText("Incredible! 10 in a row! You are a superstar!");
      confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#4f46e5", "#818cf8"],
      });
      const timer = setTimeout(() => {
        dispatch(resetStreak("comparison"));
        setFeedback(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [streak, dispatch]);

  const handleChoice = (choice: "greater" | "less" | "equal") => {
    if (checkComparisonAnswer(num1, num2, choice)) {
      const msg = getEncouragement(streak);
      setFeedback({ message: msg, isCorrect: true });
      readText(msg);
      dispatch(incrementScore("comparison"));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: [colors.primary, colors.primaryDark, colors.accentLight],
      });
      setTimeout(resetGame, 1500);
    } else {
      setFeedback({ message: t.fb_oops, isCorrect: false });
      readText(t.fb_oopsRead);
      dispatch(resetStreak("comparison"));
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  const difficultyOptions = [
    { value: 1, label: t.gle_digits9 },
    { value: 2, label: t.gle_digits99 },
    { value: 3, label: t.gle_digits999 },
  ];

  return (
    <PageContainer data-testid="view-comparison">
      <GameLayout>
        <ChallengeHeader
          icon={Scale}
          title={t.gle_title}
          subtitle={t.gle_subtitle}
          streak={streak}
        />

        <SurpriseCard
          title={t.sdk_certProgress}
          subtitle={
            streak < 10 ? `${10 - (streak % 10)} ${t.sdk_moreForCert}` : t.sdk_milestoneReached
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
            <ConfigSubTitle>{t.gle_quickTips}</ConfigSubTitle>
            <TipsContainer>
              <TipRow>
                <TipSign>&gt;</TipSign>
                <TipText>
                  {t.gle_means} <b>{t.gle_greater.toUpperCase()}</b> {t.gle_than}
                </TipText>
              </TipRow>
              <TipRow>
                <TipSign>&lt;</TipSign>
                <TipText>
                  {t.gle_means} <b>{t.gle_less.toUpperCase()}</b> {t.gle_than}
                </TipText>
              </TipRow>
              <TipRow>
                <TipSign>=</TipSign>
                <TipText>
                  {t.gle_means} <b>{t.gle_equal.toUpperCase()}</b> {t.gle_to}
                </TipText>
              </TipRow>
            </TipsContainer>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default GreaterLessEqualGame;
