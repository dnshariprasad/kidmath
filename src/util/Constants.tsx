export const COUNTING_COMPLEXITY = {
  SINGLE_DIGIT: "singleDigit",
  SINGLE_DOUBLEDIGIT: "oneDoubleDigit",
  MULTI_DIGIT: "multiDigit",
};

export const MAIN_MENU = [
  {
    isEnabled: true,
    main: "English",
    sub: [
      {
        title: "Alphabet",
        path: "/alphabet",
        isEnabled: true,
      },
      {
        title: "Sight Words",
        path: "/sight_words",
        isEnabled: true,
      },
      {
        title: "Spellings",
        path: "/spelling",
        isEnabled: true,
      },
      {
        title: "Missing Letters",
        path: "/missing_letters",
        isEnabled: true,
      },
      {
        title: "Sudoku",
        path: "/sudoku",
        isEnabled: false,
      },
    ],
  },
  {
    isEnabled: true,
    main: "Math",
    sub: [
      {
        title: "Counting",
        path: "/counting",
        isEnabled: true,
      },
      {
        title: "Comparison",
        path: "/comparison",
        isEnabled: true,
      },
      {
        title: "Missing Numbers",
        path: "/missing_numbers",
        isEnabled: false,
      },
      {
        title: "Number Sorting",
        path: "/sorting_numbers",
        isEnabled: true,
      },
    ],
  },
];
