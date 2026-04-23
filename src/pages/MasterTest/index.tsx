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
} from "lucide-react";
import confetti from "canvas-confetti";
import Certificate from "../../components/Certificate";
import SpeakIcon from "../../components/SpeakIcon";
import NextIcon from "../../components/NextIcon";
import PreviousIcon from "../../components/PreviousIcon";
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
} from "./styles";
import ChallengeHeader from "../../components/ChallengeHeader";
import { TRANSLATIONS } from "../../constants/translations";
import { getAllWords, getRandomWord } from "../../utils/wordUtils";

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
  const isMasterTest = testId === "master_test" || !testId;
  const t = TRANSLATIONS.en;

  const getTestTitle = () => {
    if (isMasterTest) return t.mst_grandMaster;
    switch (testId) {
      case "math_addition":
        return t.math_addition;
      case "math_subtraction":
        return t.math_subtraction;
      case "math_multiplication":
        return t.math_multiplication;
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
      testId === "math_multiplication"
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

    const words = getAllWords();
    const hindiLetters = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ"];

    for (let i = 1; i <= 10; i++) {
      const type = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
      const q: Partial<Question> = { id: i, type };

      if (type === "math") {
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;

        let op = "+";
        if (testId === "math_addition") op = "+";
        else if (testId === "math_subtraction") op = "-";
        else if (testId === "math_multiplication") op = "*";
        else {
          const ops = ["+", "-"];
          if (testId === "math_test" || testId === "math_multiplication" || !testId) {
            ops.push("*");
          }
          op = ops[Math.floor(Math.random() * ops.length)];
        }

        let num1_final = n1;
        let num2_final = n2;
        let ans = 0;

        if (op === "+") {
          ans = n1 + n2;
        } else if (op === "-") {
          num1_final = Math.max(n1, n2);
          num2_final = Math.min(n1, n2);
          ans = num1_final - num2_final;
        } else {
          ans = n1 * n2;
        }

        q.prompt = t.math_solveMath;
        q.correctAnswer = ans.toString();
        const opts = new Set<string>([q.correctAnswer]);
        while (opts.size < 4) {
          const off = Math.floor(Math.random() * 5) + 1;
          opts.add((Math.random() > 0.5 ? ans + off : Math.max(0, ans - off)).toString());
        }
        q.data = {
          n1: num1_final,
          n2: num2_final,
          op,
          optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5),
        };
      } else if (type === "spelling") {
        const word = getRandomWord(words).toUpperCase();
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
        while (nums.length < 4) {
          const n = Math.floor(Math.random() * 100);
          if (!nums.includes(n)) nums.push(n);
        }
        const findSmallest = Math.random() > 0.5;
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
        q.prompt = t.hindi_tapLetter;
        q.correctAnswer = letter;
        const opts = new Set<string>([letter]);
        while (opts.size < 4)
          opts.add(hindiLetters[Math.floor(Math.random() * hindiLetters.length)]);
        q.data = { letter, optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5) };
      } else if (type === "sorting") {
        const nums: number[] = [];
        while (nums.length < 3) {
          const n = Math.floor(Math.random() * 20) + 1;
          if (!nums.includes(n)) nums.push(n);
        }
        const isAsc = Math.random() > 0.5;
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
  }, [testId, t]);

  useEffect(() => {
    generateTest();
  }, [generateTest]);

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

  const currentQuestion = questions[currentIndex];

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
            <ComparisonGrid>
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
                  ? `What is ${q.data.n1} ${q.data.op === "+" ? "plus" : q.data.op === "-" ? "minus" : "times"} ${q.data.n2}?`
                  : q.type === "missing_letter"
                    ? `What is the missing letter in the word ${q.data.word}?`
                    : q.data.word || q.data.letter || q.prompt
              }
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
      <ChallengeHeader icon={Trophy} title={getTestTitle()} subtitle={t.mst_subtitle} streak={0} />
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

              <FeedbackText fontSize="2rem" fontWeight={800}>
                {score >= 8 ? t.com_genius : t.com_goodEffort}
              </FeedbackText>

              <SubFeedbackText fontSize="lg" color="textSecondary">
                {score >= 8 ? t.com_masteredCurriculum : t.com_keepPracticing}
              </SubFeedbackText>

              <ActionsGrid>
                <KidButton
                  title={t.com_reviewAnswers}
                  onClick={() => setShowReview(true)}
                  variant="secondary"
                />
                {score >= 8 && (
                  <KidButton
                    title={t.com_getCertificate}
                    onClick={() => setShowCertificate(true)}
                    variant="primary"
                  />
                )}
                <KidButton title={t.com_tryAgain} onClick={generateTest} variant="secondary" />
                <KidButton title={t.com_home} onClick={() => navigate("/")} variant="primary" />
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
                <KidButton
                  title={t.com_backToScore}
                  onClick={() => setShowReview(false)}
                  variant="secondary"
                />
                {score >= 8 && (
                  <KidButton
                    title={t.com_getCertificate}
                    onClick={() => setShowCertificate(true)}
                    variant="primary"
                  />
                )}
                <KidButton title={t.com_home} onClick={() => navigate("/")} variant="primary" />
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
