import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementScore } from "../../store/slice/AlphabetSlice";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { PageContainer, NavControlBar } from "../../theme/globalStyles";
import { Trophy, SpellCheck, Search, Scale, CheckCircle2, Languages, XCircle } from "lucide-react";
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
  EncouragementBadge,
} from "./styles";
import { getAllWords, getRandomWord } from "../../utils/wordUtils";

type QuestionType = "math" | "spelling" | "missing_letter" | "comparison" | "hindi";

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

  const generateTest = useCallback(() => {
    const newQuestions: Question[] = [];
    let allowedTypes: QuestionType[] = ["math", "spelling", "missing_letter", "comparison"];
    if (testId === "math_test") allowedTypes = ["math", "comparison"];
    if (testId === "spelling_test") allowedTypes = ["spelling", "missing_letter"];
    if (testId === "hindi_test") allowedTypes = ["hindi"];

    const words = getAllWords();
    const hindiLetters = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ"];

    for (let i = 1; i <= 10; i++) {
      const type = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
      const q: Partial<Question> = { id: i, type };

      if (type === "math") {
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;
        const op = Math.random() > 0.5 ? "+" : "-";
        const ans = op === "+" ? n1 + n2 : Math.max(n1, n2) - Math.min(n1, n2);
        q.prompt = "Solve the math!";
        q.correctAnswer = ans.toString();
        const opts = new Set<string>([q.correctAnswer]);
        while (opts.size < 4) {
          const off = Math.floor(Math.random() * 5) + 1;
          opts.add((Math.random() > 0.5 ? ans + off : Math.max(0, ans - off)).toString());
        }
        q.data = { n1, n2, op, optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5) };
      } else if (type === "spelling") {
        const word = getRandomWord(words).toUpperCase();
        q.prompt = "Tap the word you hear!";
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
        q.prompt = "Choose the missing letter!";
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
        q.prompt = "Tap the biggest number!";
        q.correctAnswer = Math.max(...nums).toString();
        q.data = { optionsStrings: nums.map(String) };
      } else if (type === "hindi") {
        const letter = hindiLetters[Math.floor(Math.random() * hindiLetters.length)];
        q.prompt = "Tap the letter you hear!";
        q.correctAnswer = letter;
        const opts = new Set<string>([letter]);
        while (opts.size < 4)
          opts.add(hindiLetters[Math.floor(Math.random() * hindiLetters.length)]);
        q.data = { letter, optionsStrings: Array.from(opts).sort(() => Math.random() - 0.5) };
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
  }, [testId]);

  useEffect(() => {
    generateTest();
  }, [generateTest]);

  const handleInputChange = (id: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const getEncouragement = (index: number) => {
    if (index === 0) return "Let's go! You can do it! 🚀";
    if (index === 1) return "Nice one! Next up... 🌟";
    if (index === 2) return "Great start! Keep going! 🔥";
    if (index === 3) return "You're a star! Super! ⭐";
    if (index === 4) return "Halfway there! Amazing! ✨";
    if (index === 5) return "Fantastic! You got this! 🙌";
    if (index === 6) return "So smart! Keep it up! 🧠";
    if (index === 7) return "Almost finished! Be careful! 💪";
    if (index === 8) return "Nearly there! On fire! 🚒";
    if (index === 9) return "Last one! Go for gold! 🏆";
    return "Doing great! 🌟";
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <SubjectBadge $type={q.type}>{q.type.replace("_", " ")}</SubjectBadge>
          <EncouragementBadge
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {getEncouragement(currentIndex)}
          </EncouragementBadge>
        </div>

        {q.type !== "math" && (
          <QuestionHeader>
            <IconWrapper>
              {q.type === "spelling" && <SpellCheck size={40} />}
              {q.type === "missing_letter" && <Search size={40} />}
              {q.type === "comparison" && <Scale size={40} />}
              {q.type === "hindi" && <Languages size={40} />}
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
                Tap the speaker below to hear
              </KidoText>
            </SpeakContainer>
          )}

          {q.type === "missing_letter" && q.data && <BigDisplay>{q.data.displayWord}</BigDisplay>}

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
                title="FINISH TEST"
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
                {score >= 8 ? "You're a Genius! 🎉" : "Good effort! 💪"}
              </FeedbackText>

              <SubFeedbackText fontSize="lg" color="textSecondary">
                {score >= 8
                  ? "You've mastered the curriculum! Your brain is officially a supercomputer."
                  : "Keep practicing and you'll get a perfect score next time!"}
              </SubFeedbackText>

              <ActionsGrid>
                <KidButton
                  title="Review Answers"
                  onClick={() => setShowReview(true)}
                  variant="secondary"
                />
                {score >= 8 && (
                  <KidButton
                    title="Get Certificate"
                    onClick={() => setShowCertificate(true)}
                    variant="primary"
                  />
                )}
                <KidButton title="Try Again" onClick={generateTest} variant="secondary" />
                <KidButton title="Home" onClick={() => navigate("/")} variant="primary" />
              </ActionsGrid>
            </ResultBox>
          )}

          {showReview && !showCertificate && (
            <ReviewOverlayBox initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <ReviewHeader fontSize="2rem" fontWeight={900} color="primary">
                Test Review
              </ReviewHeader>
              <ReviewSubHeader color="textSecondary">See what you learned today!</ReviewSubHeader>

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
                          Your answer:
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
                            Correct answer:
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
                  title="Back to Score"
                  onClick={() => setShowReview(false)}
                  variant="secondary"
                />
                {score >= 8 && (
                  <KidButton
                    title="Get Certificate"
                    onClick={() => setShowCertificate(true)}
                    variant="primary"
                  />
                )}
                <KidButton title="Home" onClick={() => navigate("/")} variant="primary" />
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
