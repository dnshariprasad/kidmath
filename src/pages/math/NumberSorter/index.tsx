import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import KidButton from "../../../components/KidButton";
import { KidoText } from "../../../components/KidoText";
import { ArrowUpDown } from "lucide-react";
import { SurpriseCard } from "../../../components/SurpriseCard";
import {
  PageContainer,
  SettingsArea,
  ControlBar,
  GameLayout,
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
import { getRandomNumber, getMaxNumber } from "../../../utils/mathUtils";
import { RootState } from "../../../store/store";
import { SortContainer, SortItem } from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";
import FeedbackDisplay from "../../../components/FeedbackDisplay";

export const NumberSorter: React.FC = () => {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.gameStats?.sorting?.streak ?? 0);
  const [maxDigits, setMaxDigits] = useState(1);
  const [order, setOrder] = useState<"ascending" | "descending">("ascending");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const resetGame = useCallback(() => {
    const maxVal = getMaxNumber(maxDigits);
    const newNumbers: number[] = [];
    while (newNumbers.length < 4) {
      const n = getRandomNumber(maxVal);
      if (!newNumbers.includes(n)) newNumbers.push(n);
    }
    setNumbers(newNumbers.sort(() => Math.random() - 0.5));
    setFeedback(null);
  }, [maxDigits]);

  useEffect(() => {
    resetGame();
  }, [resetGame, order]);

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
        dispatch(resetStreak("sorting"));
        setFeedback(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [streak, dispatch]);

  const checkOrder = () => {
    const sorted = [...numbers].sort((a, b) => (order === "ascending" ? a - b : b - a));
    const isCorrect = numbers.every((num, i) => num === sorted[i]);

    if (isCorrect) {
      const msg = getEncouragement(streak);
      setFeedback({ message: msg, isCorrect: true });
      readText(msg);
      dispatch(incrementScore("sorting"));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#4F46E5", "#FF7675"],
      });
      setTimeout(resetGame, 2000);
    } else {
      setFeedback({ message: "Not quite right! Try again! 💪", isCorrect: false });
      readText("Try again");
      dispatch(resetStreak("sorting"));
      setTimeout(() => setFeedback(null), 2000);
    }
  };

  const orderOptions = [
    { value: "ascending", label: "Ascending" },
    { value: "descending", label: "Descending" },
  ];

  const difficultyOptions = [
    { value: 1, label: "1-9" },
    { value: 2, label: "10-99" },
    { value: 3, label: "100-999" },
  ];

  return (
    <PageContainer data-testid="page-number-sorter">
      <GameLayout>
        <ChallengeHeader
          icon={ArrowUpDown}
          title="Number Sorter"
          subtitle="Drag and drop numbers to put them in order!"
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

          <KidoText fontSize="xl" color="textSecondary" fontWeight="bold">
            Sort in {order} order
          </KidoText>

          <SortContainer
            axis="y"
            values={numbers}
            onReorder={(newOrder) => setNumbers(newOrder as number[])}
          >
            <AnimatePresence>
              {numbers.map((num) => (
                <SortItem key={num} value={num}>
                  {num}
                </SortItem>
              ))}
            </AnimatePresence>
          </SortContainer>

          <ControlBar>
            <KidButton
              title="Check Order"
              onClick={checkOrder}
              variant="primary"
              minWidth="200px"
            />
          </ControlBar>

          <FeedbackDisplay feedback={feedback} fontSize="lg" />
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            title="Order Type"
            name="order"
            options={orderOptions}
            currentValue={order}
            onChange={(val) => setOrder(val as "ascending" | "descending")}
          />

          <DifficultyPicker
            name="digits"
            options={difficultyOptions}
            currentValue={maxDigits}
            onChange={setMaxDigits}
          />
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default NumberSorter;
