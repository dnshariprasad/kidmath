import React, { useState } from "react";
import styled from "styled-components";
import {
  Card,
  PageContainer,
  HeaderArea,
  SettingsCard,
  SidebarTitle,
} from "../../theme/KidStyles";
import { KidoText } from "../../components/KidoText";
import KidButton from "../../components/KidButton";
import { Grid as GridIcon } from "lucide-react";

type Cell = {
  value: string;
  isEditable: boolean;
};

type Grid = Cell[][];

const initialGrid: Grid = [
  [
    { value: "C", isEditable: false },
    { value: "", isEditable: true },
    { value: "", isEditable: true },
    { value: "A", isEditable: false },
    { value: "", isEditable: true },
    { value: "", isEditable: true },
    { value: "T", isEditable: false },
    { value: "", isEditable: true },
    { value: "", isEditable: true },
  ],
  [
    { value: "", isEditable: true },
    { value: "", isEditable: true },
    { value: "", isEditable: true },
    { value: "", isEditable: true },
    { value: "P", isEditable: false },
    { value: "", isEditable: true },
    { value: "", isEditable: true },
    { value: "O", isEditable: false },
    { value: "", isEditable: true },
  ],
  // Add more rows to form a 9x9 grid...
];

const GameLayout = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainSide = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    order: 1;
  }
`;

const SidebarSide = styled.div`
  flex: 1;
  width: 100%;
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    order: 2;
    position: static;
    margin-top: 20px;
  }
`;

const SudokuGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  gap: 8px;
  justify-content: center;
  background: rgba(108, 92, 231, 0.05);
  padding: 20px;
  border-radius: 20px;
  border: 2px solid rgba(108, 92, 231, 0.1);
`;

const SudokuRow = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 8px;
`;

const CellInput = styled.input<{ $isEditable: boolean }>`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
  border-radius: 12px;
  border: 2px solid ${(props) => (props.$isEditable ? "rgba(108, 92, 231, 0.2)" : "transparent")};
  background-color: ${(props) => (props.$isEditable ? "white" : "rgba(108, 92, 231, 0.1)")};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(108, 92, 231, 0.1);
  }

  &:disabled {
    cursor: default;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

const CrosswordSudoku: React.FC = () => {
  const [grid, setGrid] = useState<Grid>(initialGrid);

  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex].value = value.toUpperCase().slice(-1);
    setGrid(newGrid);
  };

  const validateSolution = () => {
    const isCorrect = grid.every((row) =>
      row.every((cell) => (cell.isEditable ? /^[A-Z]$/.test(cell.value) : true))
    );
    alert(isCorrect ? "Puzzle solved correctly! 🌟" : "Some answers are wrong! 😅");
  };

  const solvePuzzle = () => {
    const solvedGrid = grid.map((row) =>
      row.map((cell) =>
        cell.isEditable ? { ...cell, value: "A" } : cell
      )
    );
    setGrid(solvedGrid);
  };

  const resetPuzzle = () => {
    const resetGrid = grid.map((row) =>
      row.map((cell) => (cell.isEditable ? { ...cell, value: "" } : cell))
    );
    setGrid(resetGrid);
  };

  return (
    <PageContainer data-testid="page-sudoku">
      <GameLayout>
        <MainSide data-testid="layout-main-content">
          <HeaderArea>
            <KidoText fontSize="32px" color="primary" margin="0 0 10px" textAlign="center" width="100%" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <GridIcon size={32} strokeWidth={2.5} />
              Crossword Sudoku
            </KidoText>
          </HeaderArea>
          <Card style={{ textAlign: "center", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "none" }}>
            <SudokuGrid>
              {grid.map((row, rowIndex) => (
                <SudokuRow key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <CellInput
                      key={colIndex}
                      value={cell.value}
                      disabled={!cell.isEditable}
                      onChange={(e) =>
                        handleChange(rowIndex, colIndex, e.target.value)
                      }
                      $isEditable={cell.isEditable}
                    />
                  ))}
                </SudokuRow>
              ))}
            </SudokuGrid>
          </Card>
        </MainSide>

        <SidebarSide data-testid="layout-settings-panel">
          <HeaderArea style={{ visibility: "hidden" }}>
            <KidoText fontSize="32px" margin="0 0 10px">
              Crossword Sudoku
            </KidoText>
          </HeaderArea>
          <SettingsCard>
            <SidebarTitle>⚙️ Game Controls</SidebarTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <KidButton onClick={validateSolution} title="Check Answers" variant="success" />
              <KidButton onClick={solvePuzzle} title="Show Solution" variant="primary" />
              <KidButton onClick={resetPuzzle} title="Reset Puzzle" variant="secondary" />
            </div>
          </SettingsCard>
        </SidebarSide>
      </GameLayout>
    </PageContainer>
  );
};

export default CrosswordSudoku;
