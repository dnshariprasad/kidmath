import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { Grid3X3, Trash2 } from "lucide-react";
import { SurpriseCard } from "../../components/SurpriseCard";
import {
  ActivityArea,
  PageContainer,
  SettingsArea,
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
import { RootState } from "../../store/store";

const SudokuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 450px;
  margin: 30px 0;

  @media (max-width: 576px) {
    gap: 8px;
    max-width: 320px;
  }
`;

const SudokuCell = styled(motion.div)<{ $isActive: boolean; $isFixed: boolean; $isError: boolean }>`
  aspect-ratio: 1;
  background: ${(props) => (props.$isFixed ? "#F8F9FA" : "white")};
  border: 3px solid
    ${(props) => {
      if (props.$isError) return props.theme.colors.accent;
      if (props.$isActive) return props.theme.colors.primary;
      return "#F0F0F0";
    }};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${(props) => (props.$isFixed ? "#636E72" : props.theme.colors.primary)};
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: ${(props) => (props.$isFixed ? "default" : "pointer")};
  box-shadow: ${(props) => (props.$isActive ? "0 8px 16px rgba(99, 102, 241, 0.15)" : "none")};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => !props.$isFixed && props.theme.colors.primary}80;
  }
`;

const NumberPad = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

const SudokuGame: React.FC = () => {
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [grid, setGrid] = useState<(number | null)[]>(Array(16).fill(null));
  const [fixed, setFixed] = useState<boolean[]>(Array(16).fill(false));
  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<"Easy" | "Hard">("Easy");
  const [feedback, setFeedback] = useState<string | null>(null);

  const generatePuzzle = () => {
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
    setFeedback(null);
  };

  const handleFeelingLucky = () => {
    const difficulties: ("Easy" | "Hard")[] = ["Easy", "Hard"];
    const randomDiff = difficulties[Math.floor(Math.random() * difficulties.length)];
    setDifficulty(randomDiff);
    readText("Sudoku Surprise!");
  };

  useEffect(() => {
    generatePuzzle();
  }, [difficulty]);

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

  return (
    <PageContainer data-testid="page-sudoku">
      <GameLayout>
        <TitleArea data-testid="title-area">
          <PageHeader>
            <PageTitle>
              <Grid3X3 size={40} color="#6366F1" strokeWidth={2.5} />
              Kid Sudoku
            </PageTitle>
            <PageSubtitle>Fill the grid so every row and block has numbers 1-4!</PageSubtitle>
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

        <SurpriseCard title="Sudoku surprise?" onShuffle={handleFeelingLucky} />

        <ActivityArea
          style={{
            textAlign: "center",
            minHeight: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}
              />
            ))}
            <KidButton
              title=""
              onClick={() => handleNumberInput(null)}
              variant="accent"
              style={{ width: "60px", height: "60px" }}
            >
              <Trash2 size={24} />
            </KidButton>
          </NumberPad>

          {feedback && (
            <KidoText color="primary" fontSize="1.2rem" style={{ marginTop: "20px" }}>
              {feedback}
            </KidoText>
          )}
        </ActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Puzzle Level</ConfigSubTitle>
            <OptionLabel $isActive={difficulty === "Easy"}>
              <input
                type="radio"
                name="diff"
                checked={difficulty === "Easy"}
                onChange={() => setDifficulty("Easy")}
              />
              Easy (8 Hints)
            </OptionLabel>
            <OptionLabel $isActive={difficulty === "Hard"}>
              <input
                type="radio"
                name="diff"
                checked={difficulty === "Hard"}
                onChange={() => setDifficulty("Hard")}
              />
              Hard (4 Hints)
            </OptionLabel>
          </ConfigSection>

          <ConfigSection>
            <ConfigSubTitle>How to Play</ConfigSubTitle>
            <div
              style={{
                padding: "15px",
                background: "rgba(99, 102, 241, 0.05)",
                borderRadius: "15px",
              }}
            >
              <KidoText fontSize="0.9rem" color="textSecondary">
                • Pick a white box
                <br />
                • Tap a number to fill it
                <br />• Every 2x2 box must have 1, 2, 3, and 4!
              </KidoText>
            </div>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default SudokuGame;
