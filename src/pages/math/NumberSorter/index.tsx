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
} from "../../../theme/globalStyles";
import { readText } from "../../../utils/index";
import { incrementScore, resetStreak, resetAll } from "../../../store/slice/AlphabetSlice";
import confetti from "canvas-confetti";
import { getRandomNumber, getMaxNumber } from "../../../utils/mathUtils";
import { RootState } from "../../../store/store";
import { SortContainer, SortItem } from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";
import FeedbackDisplay from "../../../components/FeedbackDisplay";
import Certificate from "../../../components/Certificate";

export const NumberSorter: React.FC = () => {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.gameStats.sorting.streak);
  const [maxDigits, setMaxDigits] = useState(1);
  const [order, setOrder] = useState<"ascending" | "descending">("ascending");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

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

  const handleFeelingLucky = () => {
    const randomOrder = Math.random() > 0.5 ? "ascending" : "descending";
    const randomDigits = Math.floor(Math.random() * 3) + 1;
    setOrder(randomOrder);
    setMaxDigits(randomDigits);
    readText("Shuffle Surprise!");
  };

  useEffect(() => {
    resetGame();
  }, [resetGame, order]);

  useEffect(() => {
    if (streak > 0 && streak % 10 === 0) {
      setShowCertificate(true);
    }
  }, [streak]);

  const checkOrder = () => {
    const sorted = [...numbers].sort((a, b) => (order === "ascending" ? a - b : b - a));
    const isCorrect = numbers.every((num, i) => num === sorted[i]);

    if (isCorrect) {
      setFeedback({ message: "Perfectly Sorted! 🌟", isCorrect: true });
      readText("Perfectly Sorted");
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

        <SurpriseCard title="Shuffle surprise?" onShuffle={handleFeelingLucky} />

        <GameActivityArea>
          <KidoText fontSize="1.5rem" color="textSecondary" fontWeight="bold">
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

          <FeedbackDisplay feedback={feedback} fontSize="1.2rem" />
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

      <AnimatePresence>
        {showCertificate && (
          <Certificate
            onClose={() => {
              setShowCertificate(false);
              dispatch(resetAll());
            }}
            challengeName="Number Sorter"
            score={streak}
          />
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default NumberSorter;
