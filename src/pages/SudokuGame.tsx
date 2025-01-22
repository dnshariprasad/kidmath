import React, { useState } from "react";
import styled from "styled-components";

type Cell = {
  value: string; // Letter in the cell
  isEditable: boolean; // Whether the cell is editable
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
  // Add rows to form a 9x9 grid...
];

const CrosswordSudoku: React.FC = () => {
  const [grid, setGrid] = useState<Grid>(initialGrid);

  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex].value = value.toUpperCase();
    setGrid(newGrid);
  };

  const validateSolution = () => {
    // Example validation logic
    const isCorrect = grid.every((row) =>
      row.every((cell) => (cell.isEditable ? /^[A-Z]$/.test(cell.value) : true))
    );
    alert(isCorrect ? "Puzzle solved correctly!" : "Some answers are wrong!");
  };

  const solvePuzzle = () => {
    // Example solution filling logic
    const solvedGrid = grid.map((row) =>
      row.map((cell) =>
        cell.isEditable ? { ...cell, value: "A" /* Example */ } : cell
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
    <Container>
      <Title>Crossword Sudoku</Title>
      <GridContainer>
        {grid.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((cell, colIndex) => (
              <CellInput
                key={colIndex}
                value={cell.value}
                disabled={!cell.isEditable}
                onChange={(e) =>
                  handleChange(rowIndex, colIndex, e.target.value)
                }
                isEditable={cell.isEditable}
              />
            ))}
          </Row>
        ))}
      </GridContainer>
      <ButtonContainer>
        <Button onClick={validateSolution}>Validate</Button>
        <Button onClick={solvePuzzle}>Solve</Button>
        <Button onClick={resetPuzzle}>Reset</Button>
      </ButtonContainer>
    </Container>
  );
};

export default CrosswordSudoku;

// Styled Components
const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  gap: 5px;
  justify-content: center;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
`;

const CellInput = styled.input<{ isEditable: boolean }>`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.isEditable ? "white" : "#f0f0f0")};
  &:disabled {
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
