import { getAllWords, getRandomWord } from "../../utils/wordUtils";
import { TranslationKeys } from "../../constants/translations";
import { getRandomRange, MATH_LEVELS } from "../../utils/mathUtils";

export type QuestionType =
  | "math"
  | "spelling"
  | "missing_letter"
  | "comparison"
  | "hindi"
  | "telugu"
  | "logic"
  | "sorting";

export interface Question {
  id: number;
  type: QuestionType;
  prompt: string;
  correctAnswer: string;
  data: {
    n1?: number;
    n2?: number;
    op?: string;
    word?: string;
    displayWord?: string;
    letter?: string;
    optionsStrings?: string[];
  };
}

export const generateTestQuestions = (
  testId: string | undefined,
  complexity: number,
  allowNegative: boolean,
  allowDecimals: boolean,
  t: TranslationKeys,
  selectedMathOps: string[] = ["+", "-", "*", "/"],
): Question[] => {
  const newQuestions: Question[] = [];
  let allowedTypes: QuestionType[] = [
    "math",
    "spelling",
    "missing_letter",
    "comparison",
    "hindi",
    "logic",
    "sorting",
  ];

  if (
    testId === "math_addition" ||
    testId === "math_subtraction" ||
    testId === "math_multiplication" ||
    testId === "math_division"
  ) {
    allowedTypes = ["math"];
  }
  if (testId === "math_test") allowedTypes = ["math"];
  if (testId === "math_sorting") allowedTypes = ["sorting"];
  if (testId === "english_missing_letters") allowedTypes = ["missing_letter"];
  if (testId === "english_spelling") allowedTypes = ["spelling"];
  if (testId === "spelling_test") allowedTypes = ["spelling", "missing_letter"];
  if (testId === "hindi_test") allowedTypes = ["hindi"];
  if (testId === "logic_test") allowedTypes = ["logic", "comparison"];

  const allWords = getAllWords();
  let words = allWords;
  if (complexity === 1) words = allWords.filter((w) => w.length <= 4);
  else if (complexity === 2 || complexity === 3)
    words = allWords.filter((w) => w.length > 4 && w.length <= 7);
  else words = allWords.filter((w) => w.length > 7);

  if (words.length === 0) words = allWords;

  const hindiLetters = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ"];
  const teluguLetters = ["అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఎ", "ఏ", "ఐ", "క", "ఖ", "గ", "ఘ"];
  const seenSignatures = new Set<string>();

  for (let i = 1; i <= 10; i++) {
    let q: Partial<Question> = {};
    let attempts = 0;
    let signature = "";

    while (attempts < 100) {
      const type = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
      q = { id: i, type };

      if (type === "math") {
        const levelKey = `LEVEL_${complexity}` as keyof typeof MATH_LEVELS;
        const config = MATH_LEVELS[levelKey] || MATH_LEVELS.LEVEL_1;

        let n1, n2;

        let op = "+";
        if (testId === "math_addition") op = "+";
        else if (testId === "math_subtraction") op = "-";
        else if (testId === "math_multiplication") op = "*";
        else if (testId === "math_division") op = "/";
        else {
          // If in general math_test or master_test, use the selected operations
          const ops = selectedMathOps.length > 0 ? selectedMathOps : ["+"];
          op = ops[Math.floor(Math.random() * ops.length)];
        }

        if (op === "*") {
          n1 = getRandomRange(1, config.multMax);
          n2 = getRandomRange(1, config.multMax);
        } else if (op === "/") {
          const divisorMax = Math.min(config.multMax, 12);
          n2 = getRandomRange(1, divisorMax);
          n1 = n2 * getRandomRange(1, divisorMax);
          if (allowDecimals && complexity >= 4) {
            n1 += getRandomRange(0, n2 - 1);
          }
        } else if (complexity === 2) {
          const isN1Single = Math.random() > 0.5;
          n1 = isN1Single ? getRandomRange(1, 9) : getRandomRange(10, 99);
          n2 = isN1Single ? getRandomRange(10, 99) : getRandomRange(1, 9);
        } else if (complexity === 3) {
          n1 = getRandomRange(10, 99);
          n2 = getRandomRange(10, 99);
        } else {
          n1 = getRandomRange(config.min, config.max);
          n2 = getRandomRange(config.min, config.max);
        }

        let num1_final = n1;
        let num2_final = n2;
        let ans: number | string = 0;

        if (op === "+") {
          ans = n1 + n2;
        } else if (op === "-") {
          if (!allowNegative) {
            num1_final = Math.max(n1, n2);
            num2_final = Math.min(n1, n2);
          }
          ans = num1_final - num2_final;
        } else if (op === "*") {
          ans = n1 * n2;
        } else if (op === "/") {
          if (allowDecimals && complexity >= 4) {
            ans = Number((num1_final / num2_final).toFixed(1));
          } else {
            const qVal = Math.floor(num1_final / num2_final);
            const rVal = num1_final % num2_final;
            ans = rVal === 0 ? qVal : `Q:${qVal} R:${rVal}`;
          }
        }

        signature = `math-${num1_final}${op}${num2_final}`;
        q.prompt = t.math_solveMath;
        q.correctAnswer = ans.toString();
        const opts = new Set<string>([q.correctAnswer]);
        while (opts.size < 4) {
          const off = Math.floor(Math.random() * 5) + 1;
          if (typeof ans === "number") {
            opts.add((Math.random() > 0.5 ? ans + off : Math.max(0, ans - off)).toString());
          } else {
            const qOff = Math.floor(Math.random() * 3) - 1;
            const rOff = Math.floor(Math.random() * 3) - 1;
            const qVal = Math.max(0, Math.floor(num1_final / (num2_final || 1)) + qOff);
            const rVal = Math.max(0, (num1_final % (num2_final || 1)) + rOff);
            opts.add(`Q:${qVal} R:${rVal}`);
          }
        }
        q.data = {
          n1: num1_final,
          n2: num2_final,
          op,
          optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5),
        };
      } else if (type === "spelling") {
        const word = getRandomWord(words).toUpperCase();
        signature = `spelling-${word}`;
        q.prompt = t.eng_tapTheWord;
        q.correctAnswer = word;
        const opts = new Set<string>([word]);
        while (opts.size < 4) opts.add(getRandomWord(words).toUpperCase());
        q.data = { word, optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5) };
      } else if (type === "missing_letter") {
        const word = getRandomWord(words).toUpperCase();
        const missingIndex = Math.floor(Math.random() * word.length);
        const displayWord = word.split("");
        const actualLetter = displayWord[missingIndex];
        displayWord[missingIndex] = "_";
        signature = `missing-${word}-${missingIndex}`;
        q.prompt = t.eng_chooseMissing;
        q.correctAnswer = actualLetter;
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const opts = new Set<string>([actualLetter]);
        while (opts.size < 4) opts.add(alphabet[Math.floor(Math.random() * 26)]);
        q.data = {
          displayWord: displayWord.join(""),
          word,
          optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5),
        };
      } else if (type === "comparison") {
        const nums: number[] = [];
        let maxComp = 20;
        if (complexity === 2 || complexity === 3) maxComp = 50;
        if (complexity === 4) maxComp = 1000;

        while (nums.length < 4) {
          const n = Math.floor(Math.random() * maxComp);
          if (!nums.includes(n)) nums.push(n);
        }
        const findSmallest = Math.random() > 0.5;
        signature = `comp-${nums.sort().join(",")}-${findSmallest}`;
        q.prompt = findSmallest ? t.math_smallestNumber : t.math_biggestNumber;
        q.correctAnswer = findSmallest
          ? Math.min(...nums).toString()
          : Math.max(...nums).toString();
        q.data = { optionsStrings: nums.map(String) };
      } else if (type === "logic") {
        const patterns = [
          { sequence: ["🍎", "🍌", "🍎"], next: "🍌" },
          { sequence: ["🐶", "🐱", "🐶"], next: "🐱" },
          { sequence: ["1", "2", "1"], next: "2" },
          { sequence: ["⭐", "🌙", "⭐"], next: "🌙" },
          { sequence: ["🔴", "🔵", "🔴"], next: "🔵" },
          { sequence: ["🚗", "🚕", "🚗"], next: "🚕" },
          { sequence: ["🍦", "🍩", "🍦"], next: "🍩" },
          { sequence: ["🛸", "🚀", "🛸"], next: "🚀" },
          { sequence: ["🍎", "🍎", "🍌"], next: "🍌" },
          { sequence: ["1", "3", "5"], next: "7" },
          { sequence: ["A", "B", "A"], next: "B" },
          { sequence: ["🔼", "🔽", "🔼"], next: "🔽" },
          { sequence: ["🟢", "🟡", "🟢"], next: "🟡" },
          { sequence: ["10", "20", "30"], next: "40" },
          { sequence: ["M", "N", "M"], next: "N" },
          { sequence: ["🦁", "🐯", "🦁"], next: "🐯" },
        ];
        const p = patterns[Math.floor(Math.random() * patterns.length)];
        signature = `logic-${p.sequence.join("")}`;
        q.prompt = t.log_whatNext;
        q.correctAnswer = p.next;
        const opts = new Set<string>([p.next]);
        while (opts.size < 4) {
          const randomNext = patterns[Math.floor(Math.random() * patterns.length)].next;
          opts.add(randomNext);
        }
        q.data = {
          displayWord: p.sequence.join(" ") + " ?",
          optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5),
        };
      } else if (type === "hindi") {
        const letter = hindiLetters[Math.floor(Math.random() * hindiLetters.length)];
        signature = `hindi-${letter}`;
        q.prompt = t.hindi_tapLetter;
        q.correctAnswer = letter;
        const opts = new Set<string>([letter]);
        while (opts.size < 4)
          opts.add(hindiLetters[Math.floor(Math.random() * hindiLetters.length)]);
        q.data = { letter, optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5) };
      } else if (type === "telugu") {
        const letter = teluguLetters[Math.floor(Math.random() * teluguLetters.length)];
        signature = `telugu-${letter}`;
        q.prompt = t.tel_tapLetter;
        q.correctAnswer = letter;
        const opts = new Set<string>([letter]);
        while (opts.size < 4)
          opts.add(teluguLetters[Math.floor(Math.random() * teluguLetters.length)]);
        q.data = { letter, optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5) };
      } else if (type === "sorting") {
        const nums: number[] = [];
        let sortCount = 3;
        let sortMax = 10;
        if (complexity === 2 || complexity === 3) {
          sortCount = 4;
          sortMax = 20;
        }
        if (complexity === 4) {
          sortCount = 5;
          sortMax = 50;
        }

        while (nums.length < sortCount) {
          const n = Math.floor(Math.random() * sortMax) + 1;
          if (!nums.includes(n)) nums.push(n);
        }
        const isAsc = Math.random() > 0.5;
        signature = `sort-${nums.sort().join(",")}-${isAsc}`;
        q.prompt = isAsc ? t.math_sortAsc : t.math_sortDesc;
        const sorted = isAsc ? [...nums].sort((a, b) => a - b) : [...nums].sort((a, b) => b - a);
        q.correctAnswer = sorted.join(", ");

        const opts = new Set<string>([q.correctAnswer]);
        while (opts.size < 4) {
          const shuffled = [...nums].sort(() => Math.random() - 0.5);
          opts.add(shuffled.join(", "));
        }
        q.data = {
          displayWord: nums.join("  •  "),
          optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5),
        };
      }

      if (!seenSignatures.has(signature)) {
        seenSignatures.add(signature);
        break;
      }
      attempts++;
    }

    newQuestions.push(q as Question);
  }
  return newQuestions;
};

export const getQuestionTextToSpeak = (q: Question) => {
  if (q.type === "math") {
    const opMap: Record<string, string> = {
      "+": "plus",
      "-": "minus",
      "*": "times",
      "/": "divided by",
    };
    return `What is ${q.data.n1} ${opMap[q.data.op || "+"]} ${q.data.n2}?`;
  }
  if (q.type === "missing_letter") {
    return `What is the missing letter in the word ${q.data.word}?`;
  }
  if (q.type === "hindi" || q.type === "telugu") {
    return q.data.letter || q.correctAnswer;
  }
  return q.data.word || q.data.letter || q.prompt;
};

export const getGradeTitle = (score: number): string => {
  if (score === 10) return "GRAND MASTER";
  if (score === 9) return "LEGEND";
  if (score === 8) return "PRODIGY";
  return "KIDDOO HERO";
};
