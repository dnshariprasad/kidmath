import { wordFamilies } from "./WordsData";
import { sentences } from "../../store/data/WordsData";

export const getRandomWord = (stringList: string[]) => {
  return stringList[randomNumber(stringList.length)];
};

export const getAllWords = () => {
  return wordFamilies.filter((f) => f.enabled).flatMap((f) => f.words);
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

export const getSentencesOfWord = (word: String): string[] => {
  return (
    sentences.filter((s: string) => {
      const wordsInSentence = s.toLowerCase().split(/[\s.,!?]+/);
      return wordsInSentence.includes(word.toLowerCase());
    }) || []
  );
};
