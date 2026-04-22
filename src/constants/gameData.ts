export type GameMode = "learn" | "practice" | "test";
export type Subject = "English" | "Hindi" | "Math" | "Logic";

export interface GameInfo {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  path: string;
  subject: Subject;
}

export const GAME_CATEGORIES: Record<GameMode, GameInfo[]> = {
  learn: [
    {
      id: "alphabet",
      title: "ABC Alphabet",
      desc: "Learn letters and sounds",
      iconName: "Type",
      path: "/alphabet",
      subject: "English",
    },
    {
      id: "learn_numbers",
      title: "Learn Numbers",
      desc: "Count 1, 2, 3 with fun objects",
      iconName: "Hash",
      path: "/learn_numbers",
      subject: "Math",
    },
    {
      id: "alphabet_hindi",
      title: "Hindi Letters",
      desc: "Varnamala with joy",
      iconName: "Languages",
      path: "/alphabet_hindi",
      subject: "Hindi",
    },
    {
      id: "sight_words",
      title: "Sight Words",
      desc: "Words like The, Is, And",
      iconName: "BookOpen",
      path: "/sight_words",
      subject: "English",
    },
  ],
  practice: [
    {
      id: "missing_letters",
      title: "Missing Letters",
      desc: "Complete the words",
      iconName: "Search",
      path: "/missing_letters",
      subject: "English",
    },
    {
      id: "spelling",
      title: "Spelling Bee",
      desc: "Type the correct word",
      iconName: "Gamepad2",
      path: "/spelling",
      subject: "English",
    },
    {
      id: "math",
      title: "Math Magic",
      desc: "Fun addition/subtraction",
      iconName: "Calculator",
      path: "/counting",
      subject: "Math",
    },
    {
      id: "sudoku",
      title: "Kid Sudoku",
      desc: "Solve logic puzzles",
      iconName: "Grid3X3",
      path: "/sudoku",
      subject: "Math",
    },
    {
      id: "sorting",
      title: "Sorting Fun",
      desc: "Order numbers correctly",
      iconName: "ArrowUpDown",
      path: "/sorting_numbers",
      subject: "Math",
    },
    {
      id: "comparison",
      title: "Big or Small",
      desc: "Compare the values",
      iconName: "LayoutGrid",
      path: "/comparison",
      subject: "Math",
    },
  ],
  test: [
    {
      id: "math_addition",
      title: "Addition",
      desc: "Practice plus (+) sums",
      iconName: "Calculator",
      path: "/test/math_addition",
      subject: "Math",
    },
    {
      id: "math_subtraction",
      title: "Subtraction",
      desc: "Practice minus (-) sums",
      iconName: "Calculator",
      path: "/test/math_subtraction",
      subject: "Math",
    },
    {
      id: "math_multiplication",
      title: "Multiplication",
      desc: "Practice times (x) sums",
      iconName: "Calculator",
      path: "/test/math_multiplication",
      subject: "Math",
    },
    {
      id: "math_test",
      title: "Math Hero",
      desc: "Mix of + , - , x",
      iconName: "Trophy",
      path: "/test/math_test",
      subject: "Math",
    },
    {
      id: "english_missing_letters",
      title: "Missing Letters",
      desc: "Find the hidden letter",
      iconName: "Search",
      path: "/test/english_missing_letters",
      subject: "English",
    },
    {
      id: "english_spelling",
      title: "Listen and Find",
      desc: "Tap the word you hear",
      iconName: "Gamepad2",
      path: "/test/english_spelling",
      subject: "English",
    },
    {
      id: "spelling_test",
      title: "Spelling Hero",
      desc: "Mix of Spellings",
      iconName: "SpellCheck",
      path: "/test/spelling_test",
      subject: "English",
    },
    {
      id: "hindi_test",
      title: "Hindi Legend",
      desc: "Master the Varnamala",
      iconName: "Languages",
      path: "/test/hindi_test",
      subject: "Hindi",
    },
    {
      id: "logic_test",
      title: "Grand Logic",
      desc: "Patterns & Puzzles",
      iconName: "Brain",
      path: "/test/logic_test",
      subject: "Logic",
    },
    {
      id: "master_test",
      title: "Grand Master",
      desc: "A mix of everything!",
      iconName: "Trophy",
      path: "/master_test",
      subject: "Logic",
    },
  ],
};
