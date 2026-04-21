import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import styled from "styled-components";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { ArrowUpDown } from "lucide-react";
import { SurpriseCard } from "../../components/SurpriseCard";
import {
  ActivityArea,
  PageContainer,
  SettingsArea,
  ControlBar,
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
import { readText } from "../../util/util";
import { incrementScore, resetStreak } from "../../store/slice/AlphabetSlice";
import confetti from "canvas-confetti";
import { getRandomNumber, getMaxNumber } from "../../util/MathUtil";
import { RootState } from "../../store/store";

const SortContainer = styled(Reorder.Group)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 400px;
  list-style: none;
  padding: 0;
  margin: 30px 0;
`;

const SortItem = styled(Reorder.Item)`
  background: white;
  padding: 20px;
  border-radius: 20px;
  border: 3px solid ${(props) => props.theme.colors.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  cursor: grab;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  &:active {
    cursor: grabbing;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const NumberSorter: React.FC = () => {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [maxDigits, setMaxDigits] = useState(1);
  const [order, setOrder] = useState<"ascending" | "descending">("ascending");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const resetGame = () => {
    const maxVal = getMaxNumber(maxDigits);
    const newNumbers: number[] = [];
    while (newNumbers.length < 4) {
      const n = getRandomNumber(maxVal);
      if (!newNumbers.includes(n)) newNumbers.push(n);
    }
    setNumbers(newNumbers.sort(() => Math.random() - 0.5));
    setFeedback(null);
  };

  const handleFeelingLucky = () => {
    const randomOrder = Math.random() > 0.5 ? "ascending" : "descending";
    const randomDigits = Math.floor(Math.random() * 3) + 1;
    setOrder(randomOrder);
    setMaxDigits(randomDigits);
    readText("Shuffle Surprise!");
  };

  useEffect(() => {
    resetGame();
  }, [maxDigits, order]);

  const checkOrder = () => {
    const sorted = [...numbers].sort((a, b) => (order === "ascending" ? a - b : b - a));
    const isCorrect = numbers.every((num, i) => num === sorted[i]);

    if (isCorrect) {
      setFeedback({ message: "Perfectly Sorted! 🌟", isCorrect: true });
      readText("Perfectly Sorted");
      dispatch(incrementScore());
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
      dispatch(resetStreak());
      setTimeout(() => setFeedback(null), 2000);
    }
  };

  return (
    <PageContainer data-testid="page-number-sorter">
      <GameLayout>
        <TitleArea data-testid="title-area">
          <PageHeader>
            <PageTitle>
              <ArrowUpDown size={40} color="#6366F1" strokeWidth={2.5} />
              Number Sorter
            </PageTitle>
            <PageSubtitle>Drag and drop numbers to put them in order!</PageSubtitle>
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
          title="Shuffle surprise?"
          onShuffle={handleFeelingLucky}
        />

        <ActivityArea style={{ textAlign: "center", minHeight: "550px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <KidoText fontSize="1.5rem" color="textSecondary" fontWeight="bold">
            Sort in {order} order
          </KidoText>

          <SortContainer axis="y" values={numbers} onReorder={(newOrder) => setNumbers(newOrder as number[])}>
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
              variant="success" 
              style={{ minWidth: "200px" }}
            />
          </ControlBar>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                style={{ marginTop: "20px" }}
              >
                <KidoText color={feedback.isCorrect ? "success" : "accent"} fontSize="1.2rem">
                  {feedback.message}
                </KidoText>
              </motion.div>
            )}
          </AnimatePresence>
        </ActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Order Type</ConfigSubTitle>
            {(["ascending", "descending"] as const).map((type) => (
              <OptionLabel key={type} $isActive={order === type}>
                <input
                  type="radio"
                  name="order"
                  checked={order === type}
                  onChange={() => setOrder(type)}
                />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </OptionLabel>
            ))}
          </ConfigSection>

          <ConfigSection>
            <ConfigSubTitle>Difficulty</ConfigSubTitle>
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

export default NumberSorter;
