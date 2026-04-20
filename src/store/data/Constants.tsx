export const COUNTING_COMPLEXITY = {
  SINGLE_DIGIT: "singleDigit",
  SINGLE_DOUBLEDIGIT: "oneDoubleDigit",
  MULTI_DIGIT: "multiDigit",
};

export const MAIN_MENU = [
  {
    isEnabled: true,
    main: "English",
    iconName: "Book",
    color: "#F97316", // Creative Orange
    sub: [
      {
        title: "ABC Alphabet",
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
    ],
  },
  {
    isEnabled: true,
    main: "Math",
    iconName: "Calculator",
    color: "#3B82F6", // Logic Blue
    sub: [
      {
        title: "Counting Fun",
        path: "/counting",
        isEnabled: true,
      },
      {
        title: "Big or Small?",
        path: "/comparison",
        isEnabled: true,
      },
      {
        title: "Number Sorter",
        path: "/sorting_numbers",
        isEnabled: true,
      },
    ],
  },
  {
    isEnabled: true,
    main: "Hindi",
    iconName: "Languages",
    color: "#8B5CF6", // Heritage Purple
    sub: [
      {
        title: "Hindi Alphabet",
        path: "/alphabet_hindi",
        isEnabled: true,
      },
    ],
  },
];
