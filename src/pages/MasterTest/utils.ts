import { getAllWords, getRandomWord } from "../../utils/wordUtils";

export type QuestionType =
  | "math"
  | "spelling"
  | "missing_letter"
  | "comparison"
  | "hindi"
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
  t: Record<string, string>,
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
  if (testId === "math_test") allowedTypes = ["math", "comparison", "sorting"];
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
  const seenSignatures = new Set<string>();

  for (let i = 1; i <= 10; i++) {
    let q: Partial<Question> = {};
    let attempts = 0;
    let signature = "";

    while (attempts < 20) {
      const type = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
      q = { id: i, type };

      if (type === "math") {
        let n1, n2;
        if (complexity === 1) {
          n1 = Math.floor(Math.random() * 9) + 1;
          n2 = Math.floor(Math.random() * 9) + 1;
        } else if (complexity === 2) {
          const isN1Single = Math.random() > 0.5;
          n1 = isN1Single ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 90) + 10;
          n2 = isN1Single ? Math.floor(Math.random() * 90) + 10 : Math.floor(Math.random() * 9) + 1;
        } else if (complexity === 3) {
          n1 = Math.floor(Math.random() * 90) + 10;
          n2 = Math.floor(Math.random() * 90) + 10;
        } else {
          n1 = Math.floor(Math.random() * 900) + 100;
          n2 = Math.floor(Math.random() * 900) + 100;
        }

        let op = "+";
        if (testId === "math_addition") op = "+";
        else if (testId === "math_subtraction") op = "-";
        else if (testId === "math_multiplication") op = "*";
        else if (testId === "math_division") op = "/";
        else {
          const ops = ["+", "-"];
          if (
            (testId === "math_test" ||
              !testId ||
              testId === "math_multiplication" ||
              testId === "math_division") &&
            complexity !== 1
          ) {
            ops.push("*");
            if (complexity >= 3) ops.push("/");
          }
          op = ops[Math.floor(Math.random() * ops.length)];
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
          } else {
            num1_final = n1;
            num2_final = n2;
          }
          ans = num1_final - num2_final;
        } else if (op === "*") {
          let multMax = 5;
          if (complexity === 2 || complexity === 3) multMax = 8;
          if (complexity === 4) multMax = 12;
          num1_final = Math.floor(Math.random() * multMax) + 1;
          num2_final = Math.floor(Math.random() * multMax) + 1;
          ans = num1_final * num2_final;
        } else if (op === "/") {
          const multMax = complexity === 1 ? 5 : complexity === 2 ? 8 : 12;
          num2_final = Math.floor(Math.random() * multMax) + 1;
          if (allowDecimals) {
            num1_final = Math.floor(Math.random() * (multMax * 5)) + 1;
            ans = Number((num1_final / num2_final).toFixed(1));
          } else {
            const qVal = Math.floor(Math.random() * multMax) + 1;
            const rVal = Math.floor(Math.random() * num2_final);
            num1_final = num2_final * qVal + rVal;
            ans = `Q:${qVal} R:${rVal}`;
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
  return q.data.word || q.data.letter || q.prompt;
};

export const getGradeTitle = (score: number): string => {
  if (score === 10) return "GRAND MASTER";
  if (score === 9) return "LEGEND";
  if (score === 8) return "PRODIGY";
  return "KIDDOO HERO";
};
