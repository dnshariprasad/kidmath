import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import KidButton from "../../../components/KidButton";
import { Calculator } from "lucide-react";
import { SurpriseCard } from "../../../components/SurpriseCard";
import {
  PageContainer,
  SettingsArea,
  GameLayout,
  GameActivityArea,
  SessionStats,
  NumberedStar,
  StarEmoji,
  StarNumber,
  PlusSign,
  CheckboxContainer,
  CheckboxInput,
} from "../../../theme/globalStyles";
import { incrementScore, resetStreak } from "../../../store/slice/AlphabetSlice";
import { readText, getEncouragement } from "../../../utils/index";
import confetti from "canvas-confetti";
import { RootState } from "../../../store/store";
import { MathExpression, OperatorSpan, EqualSpan, QuestionSpan, AnswerGrid } from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";
import FeedbackDisplay from "../../../components/FeedbackDisplay";

import { TRANSLATIONS } from "../../../constants/translations";

import { generateMathQuestion, calculateCorrectAnswer } from "./utils";

export const MathChallenge: React.FC = () => {
  const dispatch = useDispatch();
  const t = TRANSLATIONS.en;
  const streak = useSelector((state: RootState) => state.alphabet.gameStats?.math?.streak ?? 0);
  const [maxDigits, setMaxDigits] = useState(1);
  const [operator, setOperator] = useState<"+" | "-" | "*" | "/">("+");
  const [allowDecimals, setAllowDecimals] = useState(false);
  const [allowNegative, setAllowNegative] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [options, setOptions] = useState<(number | string)[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const historyRef = React.useRef<string[]>([]);
  const generateQuestion = useCallback(() => {
    const {
      num1: n1,
      num2: n2,
      options: newOptions,
      signature,
    } = generateMathQuestion(maxDigits, operator, allowNegative, allowDecimals, historyRef.current);

    historyRef.current = [signature, ...historyRef.current].slice(0, 10);
    setNum1(n1);
    setNum2(n2);
    setOptions(newOptions);
    setFeedback(null);
  }, [maxDigits, operator, allowDecimals, allowNegative]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  useEffect(() => {
    if (streak > 0 && streak % 10 === 0) {
      setFeedback({
        message: "Incredible! 10 in a row! 🌟",
        isCorrect: true,
      });
      readText("Incredible! 10 in a row! You are a superstar!");
      confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#4f46e5", "#818cf8"],
      });
      const timer = setTimeout(() => {
        dispatch(resetStreak("math"));
        setFeedback(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [streak, dispatch]);

  const handleAnswer = (choice: number | string) => {
    const correctAnswer = calculateCorrectAnswer(num1, num2, operator, allowDecimals);

    if (choice === correctAnswer) {
      const msg = getEncouragement(streak);
      setFeedback({ message: msg, isCorrect: true });
      readText(msg);
      dispatch(incrementScore("math"));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#4f46e5", "#818cf8"],
      });
      setTimeout(generateQuestion, 1500);
    } else {
      setFeedback({ message: t.fb_keepTrying, isCorrect: false });
      readText(t.fb_tryAgain);
      dispatch(resetStreak("math"));
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  const opOptions = [
    { value: "+", label: t.math_addition },
    { value: "-", label: t.math_subtraction },
    { value: "*", label: t.math_multiplication },
    { value: "/", label: t.math_division },
  ];

  const diffOptions = [
    { value: 1, label: "1-9" },
    { value: 2, label: "10-99" },
    { value: 3, label: "100-999" },
  ];

  return (
    <PageContainer data-testid="view-counting">
      <GameLayout>
        <ChallengeHeader
          icon={Calculator}
          title={t.math_mathMagic}
          subtitle={t.math_countingDesc}
          streak={streak}
        />

        <SurpriseCard title={t.com_readyForTest} subtitle={t.com_masterTryTrophy} />

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
            <MathExpression
              key={`${num1}-${num2}-${operator}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
            >
              <span>{num1}</span>
              <OperatorSpan>{operator}</OperatorSpan>
              <span>{num2}</span>
              <EqualSpan>=</EqualSpan>
              <QuestionSpan>?</QuestionSpan>
            </MathExpression>
          </AnimatePresence>

          <AnswerGrid>
            {options.map((opt, i) => (
              <KidButton
                key={i}
                title={opt.toString()}
                onClick={() => handleAnswer(opt)}
                variant="secondary"
              />
            ))}
          </AnswerGrid>

          <FeedbackDisplay feedback={feedback} />
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            title={t.com_operation}
            name="operator"
            options={opOptions}
            currentValue={operator}
            onChange={(val) => setOperator(val as "+" | "-" | "*" | "/")}
          />

          {operator === "/" && (
            <CheckboxContainer>
              <CheckboxInput
                type="checkbox"
                checked={allowDecimals}
                onChange={(e) => setAllowDecimals(e.target.checked)}
              />
              {t.com_allowDecimals}
            </CheckboxContainer>
          )}

          {operator === "-" && (
            <CheckboxContainer>
              <CheckboxInput
                type="checkbox"
                checked={allowNegative}
                onChange={(e) => setAllowNegative(e.target.checked)}
              />
              {t.com_allowNegative}
            </CheckboxContainer>
          )}

          <DifficultyPicker
            name="digits"
            options={diffOptions}
            currentValue={maxDigits}
            onChange={setMaxDigits}
          />
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default MathChallenge;
