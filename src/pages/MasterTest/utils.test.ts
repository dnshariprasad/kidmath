import { describe, it, expect } from "vitest";
import { generateTestQuestions } from "./utils";
import { TRANSLATIONS } from "../../constants/translations";

const t = TRANSLATIONS.en;

describe("MasterTest Generation Logic", () => {
  it("should generate 10 questions", () => {
    const questions = generateTestQuestions("master_test", 1, false, false, t);
    expect(questions.length).toBe(10);
  });

  it("should ensure all questions in a test are unique", () => {
    for (let i = 0; i < 10; i++) {
      const questions = generateTestQuestions("master_test", 1, false, false, t);
      const signatures = questions.map((q) => {
        if (q.type === "math") return `math-${q.data.n1}${q.data.op}${q.data.n2}`;
        if (q.type === "comparison" || q.type === "sorting")
          return `${q.type}-${q.data.optionsStrings?.join(",")}`;
        return `${q.type}-${q.data.word || q.data.displayWord || q.data.letter}`;
      });
      const uniqueSignatures = new Set(signatures);
      expect(uniqueSignatures.size).toBe(10);
    }
  });

  it("should respect math complexity ranges", () => {
    const questions = generateTestQuestions("math_test", 1, false, false, t);
    questions.forEach((q) => {
      if (q.type === "math") {
        expect(q.data.n1).toBeLessThanOrEqual(10);
        expect(q.data.n2).toBeLessThanOrEqual(10);
      }
    });
  });

  it("should include multiplication and division for Level 3", () => {
    let hasMult = false;
    let hasDiv = false;
    // Generate multiple times to increase chance of seeing all types
    for (let i = 0; i < 10; i++) {
      const questions = generateTestQuestions("math_test", 3, false, false, t);
      questions.forEach((q) => {
        if (q.type === "math") {
          if (q.data.op === "*") hasMult = true;
          if (q.data.op === "/") hasDiv = true;
        }
      });
    }
    expect(hasMult).toBe(true);
    expect(hasDiv).toBe(true);
  });
});
