import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
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
} from "../../../theme/globalStyles";
import { readText } from "../../../utils/index";
import { RootState } from "../../../store/store";
import { SudokuGrid, SudokuCell, NumberPad, TipsBox } from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";

const SudokuGame: React.FC = () => {
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [grid, setGrid] = useState<(number | null)[]>(Array(16).fill(null));
  const [fixed, setFixed] = useState<boolean[]>(Array(16).fill(false));
  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<"Easy" | "Hard">("Easy");
  const [feedback] = useState<string | null>(null);

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

  const handleFeelingLucky = () => {
    const difficulties: ("Easy" | "Hard")[] = ["Easy", "Hard"];
    const randomDiff = difficulties[Math.floor(Math.random() * difficulties.length)];
    setDifficulty(randomDiff);
    readText("Sudoku Surprise!");
  };

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
    }
  };

  const diffOptions = [
    { value: "Easy", label: "Easy (8 Hints)" },
    { value: "Hard", label: "Hard (4 Hints)" },
  ];

  return (
    <PageContainer data-testid="page-sudoku">
      <GameLayout>
        <ChallengeHeader
          icon={Grid3X3}
          title="Kid Sudoku"
          subtitle="Fill the grid so every row and block has numbers 1-4!"
          streak={streak}
        />

        <SurpriseCard title="Sudoku surprise?" onShuffle={handleFeelingLucky} />

        <GameActivityArea>
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
