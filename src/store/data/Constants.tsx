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
    color: "#6366F1",
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
    color: "#6366F1", // Logic Blue
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
    color: "#6366F1", // Heritage Purple
    sub: [
      {
        title: "Hindi Alphabet",
        path: "/alphabet_hindi",
        isEnabled: true,
      },
    ],
  },
];
