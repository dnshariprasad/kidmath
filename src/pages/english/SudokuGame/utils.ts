export const validateSudoku = (grid: (number | null)[]): boolean => {
  // Row check
  for (let r = 0; r < 4; r++) {
    const row = grid.slice(r * 4, r * 4 + 4);
    if (new Set(row.filter((v) => v !== null)).size !== 4) return false;
  }
  // Col check
  for (let c = 0; c < 4; c++) {
    const col = [grid[c], grid[c + 4], grid[c + 8], grid[c + 12]];
    if (new Set(col.filter((v) => v !== null)).size !== 4) return false;
  }
  // Block check (2x2)
  const blocks = [
    [0, 1, 4, 5],
    [2, 3, 6, 7],
    [8, 9, 12, 13],
    [10, 11, 14, 15],
  ];
  for (const b of blocks) {
    const block = b.map((idx) => grid[idx]);
    if (new Set(block.filter((v) => v !== null)).size !== 4) return false;
  }
  return true;
};

export const generateSudokuPuzzle = (difficulty: "Easy" | "Hard") => {
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

  return { grid: newGrid, fixed: newFixed };
};
