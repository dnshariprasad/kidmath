import { getRandomNumber, getMaxNumber } from "../../../utils/mathUtils";

export const calculateCorrectAnswer = (
  num1: number,
  num2: number,
  operator: string,
  allowDecimals: boolean,
): number | string => {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;

  if (allowDecimals) {
    return Number((num1 / (num2 || 1)).toFixed(1));
  } else {
    const q = Math.floor(num1 / (num2 || 1));
    const r = num1 % (num2 || 1);
    return `Q:${q} R:${r}`;
  }
};

export const generateMathQuestion = (
  maxDigits: number,
  operator: string,
  allowNegative: boolean,
  allowDecimals: boolean,
  history: string[],
) => {
  const maxVal = getMaxNumber(maxDigits);
  let attempts = 0;
  let n1 = 0;
  let n2 = 0;

  while (attempts < 10) {
    n1 = getRandomNumber(maxVal);
    n2 = getRandomNumber(maxVal);

    if (operator === "-" && n1 < n2 && !allowNegative) {
      [n1, n2] = [n2, n1];
    }

    const sig = `${n1}${operator}${n2}`;
    if (!history.includes(sig)) {
      break;
    }
    attempts++;
  }

  const correctAnswer = calculateCorrectAnswer(n1, n2, operator, allowDecimals);

  const newOptions = new Set<number | string>([correctAnswer]);
  while (newOptions.size < 4) {
    if (typeof correctAnswer === "number") {
      const offset = getRandomNumber(10) - 5;
      if (offset !== 0) {
        const opt = allowDecimals
          ? Number((correctAnswer + offset / 10).toFixed(1))
          : correctAnswer + offset;
        if (allowNegative || opt >= 0) newOptions.add(opt);
      }
    } else {
      const qOffset = getRandomNumber(5) - 2;
      const rOffset = getRandomNumber(5) - 2;
      const q = Math.max(0, Math.floor(n1 / (n2 || 1)) + qOffset);
      const r = Math.max(0, (n1 % (n2 || 1)) + rOffset);
      const opt = `Q:${q} R:${r}`;
      if (opt !== correctAnswer) newOptions.add(opt);
    }
  }

  return {
    num1: n1,
    num2: n2,
    correctAnswer,
    options: Array.from(newOptions).sort(() => Math.random() - 0.5),
    signature: `${n1}${operator}${n2}`,
  };
};
