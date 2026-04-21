import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { Calculator } from "lucide-react";
import { SurpriseCard } from "../../components/SurpriseCard";
import {
  ActivityArea,
  SettingsArea,
  PageContainer,
  PageHeader,
  PageTitle,
  PageSubtitle,
  SessionStats,
  TitleArea,
  GameLayout,
  ConfigSection,
  ConfigSubTitle,
  OptionLabel,
} from "../../theme/KidStyles";
import { incrementScore, resetStreak } from "../../store/slice/AlphabetSlice";
import { readText } from "../../util/util";
import confetti from "canvas-confetti";
import { getRandomNumber, getMaxNumber } from "../../util/MathUtil";
import { RootState } from "../../store/store";

const MathExpression = styled(motion.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  text-shadow: 0 10px 20px ${(props) => props.theme.colors.shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`;

const AnswerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const MathChallenge: React.FC = () => {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [maxDigits, setMaxDigits] = useState(1);
  const [operator, setOperator] = useState<"+" | "-" | "*">("+");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [options, setOptions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const generateQuestion = () => {
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
  };

  const handleFeelingLucky = () => {
    const randomDigits = Math.floor(Math.random() * 3) + 1;
    const operators: ("+" | "-" | "*")[] = ["+", "-", "*"];
    const randomOp = operators[Math.floor(Math.random() * operators.length)];
    setMaxDigits(randomDigits);
    setOperator(randomOp);
    readText("Math Surprise!");
  };

  useEffect(() => {
    generateQuestion();
  }, [maxDigits, operator]);

  const handleAnswer = (choice: number) => {
    const correctAnswer = operator === "+" ? num1 + num2 : operator === "-" ? num1 - num2 : num1 * num2;
    if (choice === correctAnswer) {
      setFeedback({ message: "Brilliant! 🌟", isCorrect: true });
      readText("Brilliant");
      dispatch(incrementScore());
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
      dispatch(resetStreak());
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  return (
    <PageContainer data-testid="page-math-challenge">
      <GameLayout>
        <TitleArea data-testid="title-area">
          <PageHeader>
            <PageTitle>
              <Calculator size={40} color="#6366F1" strokeWidth={2.5} />
              Math Magic
            </PageTitle>
            <PageSubtitle>Master numbers with fun addition and subtraction!</PageSubtitle>
            <SessionStats>
              {Array.from({ length: Math.min(12, streak) }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, delay: i * 0.05 }}
                  style={{ fontSize: "1.8rem" }}
                >
                  ⭐
                </motion.span>
              ))}
            </SessionStats>
          </PageHeader>
        </TitleArea>

        <SurpriseCard 
          title="Math surprise?"
          onShuffle={handleFeelingLucky}
        />

        <ActivityArea data-testid="activity-area" style={{ textAlign: "center", minHeight: "550px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
          <AnimatePresence mode="wait">
            <MathExpression
              key={`${num1}-${num2}-${operator}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
            >
              <span>{num1}</span>
              <span style={{ color: "#FF7675" }}>{operator}</span>
              <span>{num2}</span>
              <span style={{ color: "#6366F1" }}>=</span>
              <span style={{ color: "#dfe6e9" }}>?</span>
            </MathExpression>
          </AnimatePresence>

          <AnswerGrid>
            {options.map((opt, i) => (
              <KidButton
                key={i}
                title={opt.toString()}
                onClick={() => handleAnswer(opt)}
                variant="secondary"
                style={{ fontSize: "2rem", height: "80px" }}
              />
            ))}
          </AnswerGrid>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                style={{ marginTop: "30px" }}
              >
                <KidoText 
                  color={feedback.isCorrect ? "success" : "accent"} 
                  fontSize="1.5rem" 
                  fontWeight="bold"
                >
                  {feedback.message}
                </KidoText>
              </motion.div>
            )}
          </AnimatePresence>
        </ActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Operation</ConfigSubTitle>
            {(["+", "-", "*"] as const).map((op) => (
              <OptionLabel key={op} $isActive={operator === op}>
                <input
                  type="radio"
                  name="operator"
                  checked={operator === op}
                  onChange={() => setOperator(op)}
                />
                {op === "+" ? "Addition" : op === "-" ? "Subtraction" : "Multiplication"}
              </OptionLabel>
            ))}
          </ConfigSection>

          <ConfigSection>
            <ConfigSubTitle>Number Range</ConfigSubTitle>
            {[1, 2, 3].map((digits) => (
              <OptionLabel key={digits} $isActive={maxDigits === digits}>
                <input
                  type="radio"
                  name="digits"
                  checked={maxDigits === digits}
                  onChange={() => setMaxDigits(digits)}
                />
                {digits === 1 ? "1-9" : digits === 2 ? "10-99" : "100-999"}
              </OptionLabel>
            ))}
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default MathChallenge;
