import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementScore } from "../../store/slice/AlphabetSlice";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { PageContainer, NavControlBar } from "../../theme/globalStyles";
import {
  Trophy,
  SpellCheck,
  Search,
  Scale,
  CheckCircle2,
  Languages,
  XCircle,
  Brain,
  ArrowUpDown,
  ChevronDown,
  RotateCcw,
  Home as HomeIcon,
} from "lucide-react";
import confetti from "canvas-confetti";
import Certificate from "../../components/Certificate";
import SpeakIcon from "../../components/SpeakIcon";
import NextIcon from "../../components/NextIcon";
import PreviousIcon from "../../components/PreviousIcon";
import {
  PopupOverlay,
  ActionsMenu,
  ActionMenuItem,
  CheckboxContainer,
  CheckboxInput,
} from "../../theme/globalStyles";
import {
  TestContainer,
  QuestionCard,
  QuestionNumber,
  SubjectBadge,
  QuestionHeader,
  QuestionContent,
  BigDisplay,
  ComparisonGrid,
  ChoiceCard,
  ResultsOverlay,
  ReviewList,
  ReviewItem,
  CorrectionRow,
  IconWrapper,
  PromptText,
  SpeakContainer,
  ResultBox,
  ReviewHeader,
  ScoreValue,
  FeedbackText,
  SubFeedbackText,
  ActionsGrid,
  ReviewOverlayBox,
  ReviewSubHeader,
  ReviewRow,
  CarouselSlide,
  CertificateWrapper,
  CardProgressBar,
  CardProgressFill,
  LogicDisplay,
  GradeBadge,
} from "./styles";
import { SettingsArea, GameLayout } from "../../theme/globalStyles";
import DifficultyPicker from "../../components/DifficultyPicker";
import { SurpriseCard } from "../../components/SurpriseCard";
import ChallengeHeader from "../../components/ChallengeHeader";
import { TRANSLATIONS } from "../../constants/translations";
import { getAllWords, getRandomWord } from "../../utils/wordUtils";
import { readText } from "../../utils/index";

type QuestionType =
  | "math"
  | "spelling"
  | "missing_letter"
  | "comparison"
  | "hindi"
  | "logic"
  | "sorting";

interface Question {
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

const MasterTest: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showResultMenu, setShowResultMenu] = useState(false);
  const [showReviewMenu, setShowReviewMenu] = useState(false);
  const [complexity, setComplexity] = useState<number>(1);
  const [allowNegative, setAllowNegative] = useState(false);
  const [allowDecimals, setAllowDecimals] = useState(false);
  const isMasterTest = testId === "master_test" || !testId;
  const t = TRANSLATIONS.en;

  const hasStarted = currentIndex > 0 || Object.keys(answers).length > 0;

  const difficultyOptions = [
    { value: 1, label: "Level 1", info: "Single digits (1-9)" },
    { value: 2, label: "Level 2", info: "One single & one double digit" },
    { value: 3, label: "Level 3", info: "Two double digits (10-99)" },
    { value: 4, label: "Level 4", info: "3-digit numbers (100-999)" },
  ];

  const getTestTitle = () => {
    if (isMasterTest) return t.mst_grandMaster;
    switch (testId) {
      case "math_addition":
        return t.math_addition;
      case "math_subtraction":
        return t.math_subtraction;
      case "math_multiplication":
        return t.math_multiplication;
      case "math_division":
        return t.math_division;
      case "math_test":
        return t.math_mathHero;
      case "math_sorting":
        return t.math_sorting;
      case "english_missing_letters":
        return t.eng_missingLetters;
      case "english_spelling":
        return t.eng_listenAndFind;
      case "spelling_test":
        return t.eng_spellingHero;
      case "hindi_test":
        return t.hindi_hindiLegend;
      case "logic_test":
        return t.log_grandLogic;
      default:
        return t.com_tryAgain;
    }
  };

  const generateTest = useCallback(() => {
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

    if (words.length === 0) words = allWords; // Fallback

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
            n1 = isN1Single
              ? Math.floor(Math.random() * 9) + 1
              : Math.floor(Math.random() * 90) + 10;
            n2 = isN1Single
              ? Math.floor(Math.random() * 90) + 10
              : Math.floor(Math.random() * 9) + 1;
          } else if (complexity === 3) {
            n1 = Math.floor(Math.random() * 90) + 10;
            n2 = Math.floor(Math.random() * 90) + 10;
          } else {
            // Level 4: 3-digit numbers (100-999)
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
              const q = Math.floor(Math.random() * multMax) + 1;
              const r = Math.floor(Math.random() * num2_final);
              num1_final = num2_final * q + r;
              ans = `Q:${q} R:${r}`;
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
              // Generate string distractor for Q:X R:Y
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
    setQuestions(newQuestions);
    setAnswers({});
    setIsSubmitted(false);
    setShowReview(false);
    setShowCertificate(false);
    setScore(0);
    setCurrentIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [testId, t, complexity, allowNegative, allowDecimals]);

  useEffect(() => {
    generateTest();
  }, [generateTest]);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (currentQuestion && !isSubmitted) {
      const textToSpeak =
        currentQuestion.type === "math"
          ? `What is ${currentQuestion.data.n1} ${currentQuestion.data.op === "+" ? "plus" : currentQuestion.data.op === "-" ? "minus" : currentQuestion.data.op === "*" ? "times" : "divided by"} ${currentQuestion.data.n2}?`
          : currentQuestion.type === "missing_letter"
            ? `What is the missing letter in the word ${currentQuestion.data.word}?`
            : currentQuestion.data.word || currentQuestion.data.letter || currentQuestion.prompt;

      const lang = currentQuestion.type === "hindi" ? "hi-IN" : "en-US";
      const timer = setTimeout(() => {
        readText(textToSpeak, lang);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentQuestion, isSubmitted]);

  const handleInputChange = (id: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const handleSubmit = () => {
    let finalScore = 0;
    questions.forEach((q) => {
      if (answers[q.id]?.trim().toUpperCase() === q.correctAnswer.trim().toUpperCase()) {
        finalScore++;
      }
    });
    setScore(finalScore);
    setIsSubmitted(true);

    if (finalScore >= 8) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
      dispatch(incrementScore("master_test"));
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const renderQuestion = (q: Question) => {
    if (!q) return null;
    const currentVal = answers[q.id] || "";

    return (
      <QuestionCard $type={q.type}>
        <CardProgressBar>
          <CardProgressFill
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / 10) * 100}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </CardProgressBar>
        <QuestionNumber>QUESTION {q.id} OF 10</QuestionNumber>
        <SubjectBadge $type={q.type}>{q.type.replace("_", " ")}</SubjectBadge>

        {q.type !== "math" && (
          <QuestionHeader>
            <IconWrapper>
              {q.type === "spelling" && <SpellCheck size={40} />}
              {q.type === "missing_letter" && <Search size={40} />}
              {q.type === "comparison" && <Scale size={40} />}
              {q.type === "hindi" && <Languages size={40} />}
              {q.type === "logic" && <Brain size={40} />}
              {q.type === "sorting" && <ArrowUpDown size={40} />}
            </IconWrapper>
            <PromptText fontSize="clamp(1.2rem, 4vw, 1.75rem)" fontWeight={900} color="textPrimary">
              {q.prompt}
            </PromptText>
          </QuestionHeader>
        )}

        <QuestionContent>
          {q.type === "math" && q.data && (
            <BigDisplay>
              {q.data.n1 ?? 0} {q.data.op ?? "+"} {q.data.n2 ?? 0}
            </BigDisplay>
          )}

          {(q.type === "spelling" || q.type === "hindi") && q.data && (
            <SpeakContainer>
              <KidoText color="textSecondary" fontSize="md" fontWeight={600}>
                {t.eng_tapSpeaker}
              </KidoText>
            </SpeakContainer>
          )}

          {q.type === "missing_letter" && q.data && <BigDisplay>{q.data.displayWord}</BigDisplay>}

          {q.type === "logic" && q.data && <LogicDisplay>{q.data.displayWord}</LogicDisplay>}

          {q.type === "sorting" && q.data && (
            <BigDisplay $fontSize="clamp(2rem, 8vw, 4rem)">{q.data.displayWord}</BigDisplay>
          )}

          {q.data.optionsStrings && (
            <ComparisonGrid $isLong={q.data.optionsStrings.some((s) => s.length > 12)}>
              {q.data.optionsStrings.map((opt, i) => (
                <ChoiceCard
                  key={i}
                  $selected={currentVal === opt}
                  $color="#6366F1"
                  onClick={() => handleInputChange(q.id, opt)}
                  whileTap={{ scale: 0.95 }}
                >
                  {opt}
                </ChoiceCard>
              ))}
            </ComparisonGrid>
          )}

          <NavControlBar>
            <PreviousIcon onClick={handlePrev} />
            <SpeakIcon
              text={
                q.type === "math"
                  ? `What is ${q.data.n1} ${q.data.op === "+" ? "plus" : q.data.op === "-" ? "minus" : q.data.op === "*" ? "times" : "divided by"} ${q.data.n2}?`
                  : q.type === "missing_letter"
                    ? `What is the missing letter in the word ${q.data.word}?`
                    : q.data.word || q.data.letter || q.prompt
              }
              lang={q.type === "hindi" ? "hi-IN" : "en-US"}
            />
            {currentIndex === questions.length - 1 ? (
              <KidButton
                title={t.com_finish.toUpperCase()}
                onClick={handleNext}
                variant="primary"
                minWidth="180px"
              />
            ) : (
              <NextIcon onClick={handleNext} />
            )}
          </NavControlBar>
        </QuestionContent>
      </QuestionCard>
    );
  };

  return (
    <PageContainer>
      <GameLayout>
        <ChallengeHeader
          icon={Trophy}
          title={getTestTitle()}
          subtitle={t.mst_subtitle}
          streak={0}
        />

        <SurpriseCard title={t.com_readyForTest} subtitle={t.mst_subtitle} onClick={() => {}} />

        <TestContainer>
          <AnimatePresence mode="wait">
            {currentQuestion && (
              <CarouselSlide
                key={currentQuestion.id}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
              >
                {renderQuestion(currentQuestion)}
              </CarouselSlide>
            )}
          </AnimatePresence>
        </TestContainer>

        {!isSubmitted && (
          <SettingsArea data-testid="settings-area">
            <DifficultyPicker
              name="complexity"
              title={t.com_difficulty}
              options={difficultyOptions}
              currentValue={complexity}
              onChange={(val) => setComplexity(Number(val))}
              disabled={hasStarted}
            />

            {(testId === "math_subtraction" || testId === "math_test" || isMasterTest) && (
              <CheckboxContainer $disabled={hasStarted}>
                <CheckboxInput
                  type="checkbox"
                  checked={allowNegative}
                  onChange={(e) => !hasStarted && setAllowNegative(e.target.checked)}
                  disabled={hasStarted}
                />
                Allow Negative Numbers
              </CheckboxContainer>
            )}

            {(testId === "math_division" || testId === "math_test" || isMasterTest) && (
              <CheckboxContainer $disabled={hasStarted}>
                <CheckboxInput
                  type="checkbox"
                  checked={allowDecimals}
                  onChange={(e) => !hasStarted && setAllowDecimals(e.target.checked)}
                  disabled={hasStarted}
                />
                {t.com_allowDecimals}
              </CheckboxContainer>
            )}
          </SettingsArea>
        )}
      </GameLayout>

      {isSubmitted && (
        <ResultsOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {!showReview && !showCertificate && (
            <ResultBox initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10 }}
              >
                <Trophy size={120} color={score >= 8 ? "#FFD700" : "#94A3B8"} />
              </motion.div>

              <ScoreValue fontSize="4rem" fontWeight={900} color="primary">
                {score} / 10
              </ScoreValue>

              <GradeBadge
                $score={score}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {score === 10
                  ? "GRAND MASTER"
                  : score === 9
                    ? "LEGEND"
                    : score === 8
                      ? "PRODIGY"
                      : "KIDDOO HERO"}
              </GradeBadge>

              <FeedbackText fontSize="2rem" fontWeight={800}>
                {score >= 8 ? t.com_genius : t.com_goodEffort}
              </FeedbackText>

              <SubFeedbackText fontSize="lg" color="textSecondary">
                {score >= 8 ? t.com_masteredCurriculum : t.com_keepPracticing}
              </SubFeedbackText>

              <ActionsGrid>
                {score >= 8 && (
                  <KidButton
                    title={t.com_getCertificate}
                    onClick={() => setShowCertificate(true)}
                    variant="primary"
                  />
                )}

                <KidButton
                  title="Options ▾"
                  onClick={() => setShowResultMenu(!showResultMenu)}
                  variant="secondary"
                  icon={<ChevronDown size={20} />}
                />

                <AnimatePresence>
                  {showResultMenu && (
                    <>
                      <PopupOverlay onClick={() => setShowResultMenu(false)} />
                      <ActionsMenu
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      >
                        <ActionMenuItem
                          onClick={() => {
                            setShowReview(true);
                            setShowResultMenu(false);
                          }}
                        >
                          <Search size={18} /> {t.com_reviewAnswers}
                        </ActionMenuItem>
                        <ActionMenuItem
                          onClick={() => {
                            generateTest();
                            setShowResultMenu(false);
                          }}
                        >
                          <RotateCcw size={18} /> {t.com_tryAgain}
                        </ActionMenuItem>
                        <ActionMenuItem
                          onClick={() => {
                            navigate("/");
                            setShowResultMenu(false);
                          }}
                        >
                          <HomeIcon size={18} /> {t.com_home}
                        </ActionMenuItem>
                      </ActionsMenu>
                    </>
                  )}
                </AnimatePresence>
              </ActionsGrid>
            </ResultBox>
          )}

          {showReview && !showCertificate && (
            <ReviewOverlayBox initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <ReviewHeader fontSize="2rem" fontWeight={900} color="primary">
                {t.com_testReview}
              </ReviewHeader>
              <ReviewSubHeader color="textSecondary">{t.com_seeWhatLearned}</ReviewSubHeader>

              <ReviewList>
                {questions.map((q) => {
                  const isCorrect =
                    answers[q.id]?.trim().toUpperCase() === q.correctAnswer.trim().toUpperCase();
                  return (
                    <ReviewItem key={q.id} $correct={isCorrect}>
                      <ReviewRow>
                        <KidoText fontSize="md" fontWeight={800} color="textPrimary">
                          Question {q.id}: {q.prompt}
                        </KidoText>
                        {isCorrect ? (
                          <CheckCircle2 color="#10B981" size={24} />
                        ) : (
                          <XCircle color="#F59E0B" size={24} />
                        )}
                      </ReviewRow>

                      <CorrectionRow>
                        <KidoText fontSize="sm" color="textSecondary">
                          {t.com_yourAnswer}
                        </KidoText>
                        <KidoText
                          fontSize="sm"
                          fontWeight={700}
                          color={isCorrect ? "success" : "warning"}
                        >
                          {answers[q.id] || "(No answer)"}
                        </KidoText>
                      </CorrectionRow>

                      {!isCorrect && (
                        <CorrectionRow>
                          <KidoText fontSize="sm" color="textSecondary">
                            {t.com_correctAnswer}
                          </KidoText>
                          <KidoText fontSize="sm" fontWeight={700} color="success">
                            {q.correctAnswer}
                          </KidoText>
                        </CorrectionRow>
                      )}
                    </ReviewItem>
                  );
                })}
              </ReviewList>

              <ActionsGrid>
                {score >= 8 && (
                  <KidButton
                    title={t.com_getCertificate}
                    onClick={() => setShowCertificate(true)}
                    variant="primary"
                  />
                )}

                <KidButton
                  title="Options ▾"
                  onClick={() => setShowReviewMenu(!showReviewMenu)}
                  variant="secondary"
                  icon={<ChevronDown size={20} />}
                />

                <AnimatePresence>
                  {showReviewMenu && (
                    <>
                      <PopupOverlay onClick={() => setShowReviewMenu(false)} />
                      <ActionsMenu
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      >
                        <ActionMenuItem
                          onClick={() => {
                            setShowReview(false);
                            setShowReviewMenu(false);
                          }}
                        >
                          <Search size={18} /> {t.com_backToScore}
                        </ActionMenuItem>
                        <ActionMenuItem
                          onClick={() => {
                            navigate("/");
                            setShowReviewMenu(false);
                          }}
                        >
                          <HomeIcon size={18} /> {t.com_home}
                        </ActionMenuItem>
                      </ActionsMenu>
                    </>
                  )}
                </AnimatePresence>
              </ActionsGrid>
            </ReviewOverlayBox>
          )}

          {showCertificate && (
            <CertificateWrapper>
              <Certificate
                onClose={() => setShowCertificate(false)}
                challengeName={testId?.replace("_", " ").toUpperCase() || "Master Test"}
                score={score}
                level="Genius"
              />
            </CertificateWrapper>
          )}
        </ResultsOverlay>
      )}
    </PageContainer>
  );
};

export default MasterTest;
