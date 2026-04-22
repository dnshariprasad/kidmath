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

export const MathChallenge: React.FC = () => {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.gameStats?.math?.streak ?? 0);
  const [maxDigits, setMaxDigits] = useState(1);
  const [operator, setOperator] = useState<"+" | "-" | "*">("+");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [options, setOptions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const generateQuestion = useCallback(() => {
    const maxVal = getMaxNumber(maxDigits);
    let n1 = getRandomNumber(maxVal);
    let n2 = getRandomNumber(maxVal);

    if (operator === "-" && n1 < n2) {
      [n1, n2] = [n2, n1];
    }

    setNum1(n1);
    setNum2(n2);

    const correctAnswer = operator === "+" ? n1 + n2 : operator === "-" ? n1 - n2 : n1 * n2;
    const newOptions = new Set<number>([correctAnswer]);
    while (newOptions.size < 4) {
      const offset = getRandomNumber(10) - 5;
      if (offset !== 0) newOptions.add(correctAnswer + offset);
    }
    setOptions(Array.from(newOptions).sort(() => Math.random() - 0.5));
    setFeedback(null);
  }, [maxDigits, operator]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  useEffect(() => {
    if (streak > 0 && streak % 10 === 0) {
      setShowCertificate(true);
    }
  }, [streak]);

  const handleAnswer = (choice: number) => {
    const correctAnswer =
      operator === "+" ? num1 + num2 : operator === "-" ? num1 - num2 : num1 * num2;
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
    { value: "+", label: "Addition" },
    { value: "-", label: "Subtraction" },
    { value: "*", label: "Multiplication" },
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
          title="Math Magic"
          subtitle="Master numbers with fun addition and subtraction!"
          streak={streak}
        />

        <SurpriseCard
          title="Ready for the Big Test? 🏆"
          subtitle="Once you master these sums, try the 'Math Master' test to win a trophy!"
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
            title="Operation"
            name="operator"
            options={opOptions}
            currentValue={operator}
            onChange={(val) => setOperator(val as "+" | "-" | "*")}
          />

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
            challengeName="Math Magic"
            score={streak}
            level={`${maxDigits} Digits`}
          />
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default MathChallenge;
