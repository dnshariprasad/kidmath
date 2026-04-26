import { getRandomNumber, getMaxNumber } from "../../../utils/mathUtils";

export const generateComparisonQuestion = (maxDigits: number) => {
  const maxVal = getMaxNumber(maxDigits);
  return {
    num1: getRandomNumber(maxVal),
    num2: getRandomNumber(maxVal),
  };
};

export const checkComparisonAnswer = (
  num1: number,
  num2: number,
  choice: "greater" | "less" | "equal",
): boolean => {
  if (choice === "greater") return num1 > num2;
  if (choice === "less") return num1 < num2;
  if (choice === "equal") return num1 === num2;
  return false;
};
