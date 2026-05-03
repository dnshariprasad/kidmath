import { describe, it, expect } from "vitest";
import { generateMathQuestion, calculateCorrectAnswer } from "./utils";

describe("Math Generation Logic", () => {
  describe("calculateCorrectAnswer", () => {
    it("should add correctly", () => {
      expect(calculateCorrectAnswer(5, 3, "+", false)).toBe(8);
    });

    it("should subtract correctly", () => {
      expect(calculateCorrectAnswer(10, 4, "-", false)).toBe(6);
    });

    it("should multiply correctly", () => {
      expect(calculateCorrectAnswer(6, 7, "*", false)).toBe(42);
    });

    it("should divide with remainder correctly", () => {
      expect(calculateCorrectAnswer(10, 3, "/", false)).toBe("Q:3 R:1");
    });

    it("should divide with decimals correctly", () => {
      expect(calculateCorrectAnswer(10, 3, "/", true)).toBe(3.3);
    });

    it("should handle division by zero", () => {
      expect(calculateCorrectAnswer(10, 0, "/", false)).toBe("∞");
    });
  });

  describe("generateMathQuestion", () => {
    it("should generate Level 1 questions within range 1-10", () => {
      for (let i = 0; i < 100; i++) {
        const q = generateMathQuestion(1, "+", false, false, []);
        expect(q.num1).toBeGreaterThanOrEqual(1);
        expect(q.num1).toBeLessThanOrEqual(10);
        expect(q.num2).toBeGreaterThanOrEqual(1);
        expect(q.num2).toBeLessThanOrEqual(10);
      }
    });

    it("should respect history and avoid duplicates", () => {
      const history = ["5+5", "3+2"];
      for (let i = 0; i < 100; i++) {
        const q = generateMathQuestion(1, "+", false, false, history);
        const sig = `${q.num1}+${q.num2}`;
        expect(history).not.toContain(sig);
      }
    });

    it("should ensure n1 >= n2 for subtraction when allowNegative is false", () => {
      for (let i = 0; i < 100; i++) {
        const q = generateMathQuestion(2, "-", false, false, []);
        expect(q.num1).toBeGreaterThanOrEqual(q.num2);
      }
    });

    it("should generate Level 2 questions with one single and one double digit", () => {
      for (let i = 0; i < 100; i++) {
        const q = generateMathQuestion(2, "+", false, false, []);
        const isN1Single = q.num1 >= 1 && q.num1 <= 9;
        const isN2Single = q.num2 >= 1 && q.num2 <= 9;
        const isN1Double = q.num1 >= 10 && q.num1 <= 99;
        const isN2Double = q.num2 >= 10 && q.num2 <= 99;

        expect((isN1Single && isN2Double) || (isN1Double && isN2Single)).toBe(true);
      }
    });

    it("should generate Level 3 questions with strictly double digits", () => {
      for (let i = 0; i < 100; i++) {
        const q = generateMathQuestion(3, "+", false, false, []);
        expect(q.num1).toBeGreaterThanOrEqual(10);
        expect(q.num1).toBeLessThanOrEqual(99);
        expect(q.num2).toBeGreaterThanOrEqual(10);
        expect(q.num2).toBeLessThanOrEqual(99);
      }
    });

    it("should generate Level 5 questions with strictly 4 digits", () => {
      for (let i = 0; i < 100; i++) {
        const q = generateMathQuestion(5, "+", false, false, []);
        expect(q.num1).toBeGreaterThanOrEqual(1000);
        expect(q.num1).toBeLessThanOrEqual(9999);
        expect(q.num2).toBeGreaterThanOrEqual(1000);
        expect(q.num2).toBeLessThanOrEqual(9999);
      }
    });

    it("should allow multiplication up to 30 in Level 5", () => {
      let sawHigh = false;
      for (let i = 0; i < 200; i++) {
        const q = generateMathQuestion(5, "*", false, false, []);
        if (q.num1 > 20 || q.num2 > 20) sawHigh = true;
        expect(q.num1).toBeLessThanOrEqual(30);
        expect(q.num2).toBeLessThanOrEqual(30);
      }
      expect(sawHigh).toBe(true);
    });
  });
});
