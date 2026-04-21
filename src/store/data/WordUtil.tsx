import { wordFamilies } from "./WordsData";
import { sentences } from "../../store/data/WordsData";

export const getRandomWord = (stringList: string[]) => {
  if (!stringList || stringList.length === 0) return "";
  return stringList[randomNumber(stringList.length)];
};

export const getAllWords = () => {
  return wordFamilies.filter((f) => f.enabled).flatMap((f) => f.words);
};

export const randomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const createMissingLetterWord = (word: string, missingIndex: number) => {
  return word
    .split("")
    .map((char, index) => (index === missingIndex ? " _ " : char))
    .join("");
};

export const getSentencesOfWord = (word: string | undefined): string[] => {
  if (!word) return [];

  return (
    sentences.filter((s: string) => {
      const wordsInSentence = s.toLowerCase().split(/[\s.,!?]+/);
      return wordsInSentence.includes(word.toLowerCase());
    }) || []
  );
};
