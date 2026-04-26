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
import { incrementScore, resetStreak, resetAll } from "../../../store/slice/AlphabetSlice";
import { readText, getEncouragement } from "../../../utils/index";
import confetti from "canvas-confetti";
import { getRandomNumber, getMaxNumber } from "../../../utils/mathUtils";
import { RootState } from "../../../store/store";
import { MathExpression, OperatorSpan, EqualSpan, QuestionSpan, AnswerGrid } from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";
import FeedbackDisplay from "../../../components/FeedbackDisplay";
import Certificate from "../../../components/Certificate";
import { TRANSLATIONS } from "../../../constants/translations";

export const MathChallenge: React.FC = () => {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.gameStats?.math?.streak ?? 0);
  const [maxDigits, setMaxDigits] = useState(1);
  const [operator, setOperator] = useState<"+" | "-" | "*" | "/">("+");
  const [allowDecimals, setAllowDecimals] = useState(false);
  const [allowNegative, setAllowNegative] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [options, setOptions] = useState<(number | string)[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const t = TRANSLATIONS.en;

  const historyRef = React.useRef<string[]>([]);
  const generateQuestion = useCallback(() => {
    const maxVal = getMaxNumber(maxDigits);
    let attempts = 0;
    let n1 = 0;
    let n2 = 0;

    while (attempts < 10) {
      n1 = getRandomNumber(maxVal);
      n2 = getRandomNumber(maxVal);

      if (operator === "-" && n1 < n2 && !allowNegative) {
        [n1, n2] = [n2, n1];
      }

      const sig = `${n1}${operator}${n2}`;
      if (!historyRef.current.includes(sig)) {
        historyRef.current = [sig, ...historyRef.current].slice(0, 10);
        break;
      }
      attempts++;
    }

    setNum1(n1);
    setNum2(n2);

    let correctAnswer: number | string;
    if (operator === "+") correctAnswer = n1 + n2;
    else if (operator === "-") correctAnswer = n1 - n2;
    else if (operator === "*") correctAnswer = n1 * n2;
    else {
      if (allowDecimals) {
        correctAnswer = Number((n1 / (n2 || 1)).toFixed(1));
      } else {
        const q = Math.floor(n1 / (n2 || 1));
        const r = n1 % (n2 || 1);
        correctAnswer = `Q:${q} R:${r}`;
      }
    }

    const newOptions = new Set<number | string>([correctAnswer]);
    while (newOptions.size < 4) {
      if (typeof correctAnswer === "number") {
        const offset = getRandomNumber(10) - 5;
        if (offset !== 0) {
          const opt = allowDecimals
            ? Number((correctAnswer + offset / 10).toFixed(1))
            : correctAnswer + offset;
          if (allowNegative || opt >= 0) newOptions.add(opt);
        }
      } else {
        const qOffset = getRandomNumber(5) - 2;
        const rOffset = getRandomNumber(5) - 2;
        const q = Math.max(0, Math.floor(n1 / (n2 || 1)) + qOffset);
        const r = Math.max(0, (n1 % (n2 || 1)) + rOffset);
        const opt = `Q:${q} R:${r}`;
        if (opt !== correctAnswer) newOptions.add(opt);
      }
    }
    setOptions(Array.from(newOptions).sort(() => Math.random() - 0.5));
    setFeedback(null);
  }, [maxDigits, operator, allowDecimals, allowNegative]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  useEffect(() => {
    if (streak > 0 && streak % 10 === 0) {
      setShowCertificate(true);
    }
  }, [streak]);

  const handleAnswer = (choice: number | string) => {
    let correctAnswer: number | string;
    if (operator === "+") correctAnswer = num1 + num2;
    else if (operator === "-") correctAnswer = num1 - num2;
    else if (operator === "*") correctAnswer = num1 * num2;
    else {
      if (allowDecimals) {
        correctAnswer = Number((num1 / (num2 || 1)).toFixed(1));
      } else {
        const q = Math.floor(num1 / (num2 || 1));
        const r = num1 % (num2 || 1);
        correctAnswer = `Q:${q} R:${r}`;
      }
    }
    if (choice === correctAnswer) {
      const msg = getEncouragement(streak);
      setFeedback({ message: msg, isCorrect: true });
      readText(msg);
      dispatch(incrementScore("math"));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#4F46E5", "#FF7675"],
      });
      setTimeout(generateQuestion, 1500);
    } else {
      setFeedback({ message: "Keep trying! 💪", isCorrect: false });
      readText("Keep trying");
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

      <AnimatePresence>
        {showCertificate && (
          <Certificate
            onClose={() => {
              setShowCertificate(false);
              dispatch(resetAll());
            }}
            challengeName={t.math_mathMagic}
            score={streak}
            level={`${maxDigits} ${t.com_level}`}
          />
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default MathChallenge;
