import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import KidButton from "../../../components/KidButton";
import { KidoText } from "../../../components/KidoText";
import { Grid3X3, Trash2 } from "lucide-react";
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

import { RootState } from "../../../store/store";
import { SudokuGrid, SudokuCell, NumberPad, TipsBox } from "./styles";
import { TRANSLATIONS } from "../../../constants/translations";
import { validateSudoku, generateSudokuPuzzle } from "./utils";

import { colors } from "../../../theme/colors";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";
import { incrementScore, resetStreak } from "../../../store/slice/AlphabetSlice";
import { readText, getEncouragement } from "../../../utils/index";
import confetti from "canvas-confetti";

const SudokuGame: React.FC = () => {
  const dispatch = useDispatch();
  const t = TRANSLATIONS.en;
  const streak = useSelector((state: RootState) => state.alphabet.gameStats?.sudoku?.streak ?? 0);
  const [grid, setGrid] = useState<(number | null)[]>(Array(16).fill(null));
  const [fixed, setFixed] = useState<boolean[]>(Array(16).fill(false));
  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<"Easy" | "Hard">("Easy");
  const [feedback, setFeedback] = useState<string | null>(null);

  const generatePuzzle = useCallback(() => {
    const { grid: newGrid, fixed: newFixed } = generateSudokuPuzzle(difficulty);
    setGrid(newGrid);
    setFixed(newFixed);
    setSelectedCell(null);
  }, [difficulty]);

  useEffect(() => {
    generatePuzzle();
  }, [generatePuzzle]);

  useEffect(() => {
    if (streak > 0 && streak % 10 === 0) {
      setFeedback("Incredible! 10 in a row! 🌟");
      readText("Incredible! 10 in a row! You are a superstar!");
      confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#4f46e5", "#818cf8"],
      });
      const timer = setTimeout(() => {
        dispatch(resetStreak("sudoku"));
        setFeedback(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [streak, dispatch]);

  const handleCellClick = (index: number) => {
    if (!fixed[index]) {
      setSelectedCell(index);
    }
  };

  const handleNumberInput = (num: number | null) => {
    if (selectedCell !== null && !fixed[selectedCell]) {
      const newGrid = [...grid];
      newGrid[selectedCell] = num;
      setGrid(newGrid);

      // Check if complete
      const isComplete = newGrid.every((cell) => cell !== null);
      if (isComplete) {
        if (validateSudoku(newGrid)) {
          const msg = getEncouragement(streak);
          setFeedback(msg);
          readText(msg);
          dispatch(incrementScore("sudoku"));
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: [colors.primary, colors.primaryDark, colors.accentLight],
          });
          setTimeout(generatePuzzle, 3000);
        } else {
          setFeedback(t.sdk_almost);
          readText(t.sdk_tryAgain);
          dispatch(resetStreak("sudoku"));
        }
      } else {
        setFeedback(null);
      }
    }
  };

  const diffOptions = [
    { value: "Easy", label: t.sdk_easyHints },
    { value: "Hard", label: t.sdk_hardHints },
  ];

  return (
    <PageContainer data-testid="view-sudoku">
      <GameLayout>
        <ChallengeHeader
          icon={Grid3X3}
          title={t.sdk_title}
          subtitle={t.sdk_subtitle}
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

          <SudokuGrid>
            {grid.map((val, i) => (
              <SudokuCell
                key={i}
                $isActive={selectedCell === i}
                $isFixed={fixed[i]}
                $isError={false}
                onClick={() => handleCellClick(i)}
                whileHover={!fixed[i] ? { scale: 1.05 } : {}}
                whileTap={!fixed[i] ? { scale: 0.95 } : {}}
              >
                {val}
              </SudokuCell>
            ))}
          </SudokuGrid>

          <NumberPad>
            {[1, 2, 3, 4].map((num) => (
              <KidButton
                key={num}
                title={num.toString()}
                onClick={() => handleNumberInput(num)}
                variant="secondary"
                size="60px"
                fontSize="lg"
              />
            ))}
            <KidButton
              title=""
              onClick={() => handleNumberInput(null)}
              variant="accent"
              size="60px"
            >
              <Trash2 size={24} />
            </KidButton>
          </NumberPad>

          {feedback && (
            <KidoText color="primary" fontSize="md">
              {feedback}
            </KidoText>
          )}
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            title={t.sdk_puzzleLevel}
            name="diff"
            options={diffOptions}
            currentValue={difficulty}
            onChange={(val) => setDifficulty(val as "Easy" | "Hard")}
          />

          <ConfigSection>
            <ConfigSubTitle>{t.sdk_howToPlay}</ConfigSubTitle>
            <TipsBox>
              <KidoText fontSize="sm" color="textSecondary">
                • {t.sdk_step1}
                <br />• {t.sdk_step2}
                <br />• {t.sdk_step3}
              </KidoText>
            </TipsBox>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default SudokuGame;
