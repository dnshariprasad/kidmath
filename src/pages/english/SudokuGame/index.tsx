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
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";
import { incrementScore, resetStreak } from "../../../store/slice/AlphabetSlice";
import { readText, getEncouragement } from "../../../utils/index";
import confetti from "canvas-confetti";

const SudokuGame: React.FC = () => {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.gameStats?.sudoku?.streak ?? 0);
  const [grid, setGrid] = useState<(number | null)[]>(Array(16).fill(null));
  const [fixed, setFixed] = useState<boolean[]>(Array(16).fill(false));
  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<"Easy" | "Hard">("Easy");
  const [feedback, setFeedback] = useState<string | null>(null);

  const generatePuzzle = useCallback(() => {
    const newGrid: (number | null)[] = Array(16).fill(null);
    const newFixed: boolean[] = Array(16).fill(false);

    const base = [
      [1, 2, 3, 4],
      [3, 4, 1, 2],
      [2, 1, 4, 3],
      [4, 3, 2, 1],
    ].flat();

    const fillCount = difficulty === "Easy" ? 8 : 4;
    const indices = Array.from({ length: 16 }, (_, i) => i).sort(() => Math.random() - 0.5);

    for (let i = 0; i < fillCount; i++) {
      const idx = indices[i];
      newGrid[idx] = base[idx];
      newFixed[idx] = true;
    }

    setGrid(newGrid);
    setFixed(newFixed);
    setSelectedCell(null);
  }, [difficulty]);

  useEffect(() => {
    generatePuzzle();
  }, [generatePuzzle]);

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

      // Check if complete and correct
      const isComplete = newGrid.every((cell) => cell !== null);
      if (isComplete) {
        // Validation logic for 4x4 Sudoku
        const checkCorrect = () => {
          // Row check
          for (let r = 0; r < 4; r++) {
            const row = newGrid.slice(r * 4, r * 4 + 4);
            if (new Set(row).size !== 4) return false;
          }
          // Col check
          for (let c = 0; c < 4; c++) {
            const col = [newGrid[c], newGrid[c + 4], newGrid[c + 8], newGrid[c + 12]];
            if (new Set(col).size !== 4) return false;
          }
          // Block check (2x2)
          const blocks = [
            [0, 1, 4, 5],
            [2, 3, 6, 7],
            [8, 9, 12, 13],
            [10, 11, 14, 15],
          ];
          for (const b of blocks) {
            const block = b.map((idx) => newGrid[idx]);
            if (new Set(block).size !== 4) return false;
          }
          return true;
        };

        if (checkCorrect()) {
          const msg = getEncouragement(streak);
          setFeedback(msg);
          readText(msg);
          dispatch(incrementScore("sudoku"));
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#6366F1", "#4F46E5", "#FF7675"],
          });
          setTimeout(generatePuzzle, 3000);
        } else {
          setFeedback("Almost! Some numbers are repeated. Check again! 💪");
          readText("Try again");
          dispatch(resetStreak("sudoku"));
        }
      } else {
        setFeedback(null);
      }
    }
  };

  const diffOptions = [
    { value: "Easy", label: "Easy (8 Hints)" },
    { value: "Hard", label: "Hard (4 Hints)" },
  ];

  return (
    <PageContainer data-testid="view-sudoku">
      <GameLayout>
        <ChallengeHeader
          icon={Grid3X3}
          title="Kid Sudoku"
          subtitle="Fill the grid so every row and block has numbers 1-4!"
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
            title="Puzzle Level"
            name="diff"
            options={diffOptions}
            currentValue={difficulty}
            onChange={(val) => setDifficulty(val as "Easy" | "Hard")}
          />

          <ConfigSection>
            <ConfigSubTitle>How to Play</ConfigSubTitle>
            <TipsBox>
              <KidoText fontSize="sm" color="textSecondary">
                • Pick a white box
                <br />
                • Tap a number to fill it
                <br />• Every 2x2 box must have 1, 2, 3, and 4!
              </KidoText>
            </TipsBox>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default SudokuGame;
