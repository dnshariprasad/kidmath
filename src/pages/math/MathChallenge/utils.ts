import { getRandomRange, MATH_LEVELS } from "../../../utils/mathUtils";

export const calculateCorrectAnswer = (
  num1: number,
  num2: number,
  operator: string,
  allowDecimals: boolean,
): number | string => {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;

  if (operator === "/") {
    if (num2 === 0) return "∞";
    if (allowDecimals) {
      return Number((num1 / num2).toFixed(1));
    } else {
      const q = Math.floor(num1 / num2);
      const r = num1 % num2;
      return `Q:${q} R:${r}`;
    }
  }
  return 0;
};

export const generateMathQuestion = (
  level: number,
  operator: string,
  allowNegative: boolean,
  allowDecimals: boolean,
  history: string[],
) => {
  const levelKey = `LEVEL_${level}` as keyof typeof MATH_LEVELS;
  const config = MATH_LEVELS[levelKey] || MATH_LEVELS.LEVEL_1;

  let attempts = 0;
  let n1 = 0;
  let n2 = 0;

  while (attempts < 50) {
    if (operator === "*") {
      n1 = getRandomRange(1, config.multMax);
      n2 = getRandomRange(1, config.multMax);
    } else if (operator === "/") {
      const divisorMax = Math.min(config.multMax, 12);
      n2 = getRandomRange(1, divisorMax);
      if (allowDecimals) {
        n1 = getRandomRange(config.min, config.max);
      } else {
        // For simple division, ensure easy multiples for lower levels
        const q = getRandomRange(1, divisorMax);
        const r = level >= 3 ? getRandomRange(0, n2 - 1) : 0;
        n1 = n2 * q + r;
      }
    } else if (level === 2) {
      const isN1Single = Math.random() > 0.5;
      n1 = isN1Single ? getRandomRange(1, 9) : getRandomRange(10, 99);
      n2 = isN1Single ? getRandomRange(10, 99) : getRandomRange(1, 9);
    } else if (level === 3) {
      n1 = getRandomRange(10, 99);
      n2 = getRandomRange(10, 99);
    } else {
      n1 = getRandomRange(config.min, config.max);
      n2 = getRandomRange(config.min, config.max);
    }

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
      const offset = getRandomRange(1, 10) * (Math.random() > 0.5 ? 1 : -1);
      const opt = allowDecimals
        ? Number((correctAnswer + offset / 10).toFixed(1))
        : correctAnswer + offset;
      if (allowNegative || opt >= 0) newOptions.add(opt);
    } else {
      const qOffset = getRandomRange(-2, 2);
      const rOffset = getRandomRange(-2, 2);
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
