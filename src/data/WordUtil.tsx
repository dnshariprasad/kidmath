import { allWords } from "./Words";

export const getRandomWord = (stringList: string[]) => {
  return stringList[randomNumber(stringList.length)];
};

export const getAllWords = () => {
  return allWords();
};

export const randomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const createMissingLetterWord = (word: String, missingIndex: number) => {
  return word
    .split("")
    .map((char, index) => (index === missingIndex ? " _ " : char))
    .join("");
};
