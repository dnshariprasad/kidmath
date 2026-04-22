import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementScore } from "../../store/slice/AlphabetSlice";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { PageContainer } from "../../theme/globalStyles";
import {
  Trophy,
  Calculator,
  SpellCheck,
  Search,
  Scale,
  CheckCircle2,
  Languages,
  XCircle,
} from "lucide-react";
import Certificate from "../../components/Certificate";
import ChallengeHeader from "../../components/ChallengeHeader";
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
  VSLabel,
  TestInput,
  ResultsOverlay,
  ProgressBarContainer,
  ProgressTrack,
  ProgressFill,
  ReviewList,
  ReviewItem,
  CorrectionRow,
  IconWrapper,
  PromptText,
  SpeakContainer,
  NavButtons,
  ProgressHeader,
  CenterBox,
  ResultBox,
  ReviewHeader,
  ScoreValue,
  FeedbackText,
  SubFeedbackText,
  ActionsGrid,
  ReviewOverlayBox,
  ReviewSubHeader,
  ReviewRow,
  InnerTrack,
  CarouselSlide,
  CertificateWrapper,
} from "./styles";
import confetti from "canvas-confetti";
import SpeakIcon from "../../components/SpeakIcon";
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
        q.prompt = `What is ${op === "+" ? n1 : Math.max(n1, n2)} ${op} ${op === "+" ? n2 : Math.min(n1, n2)}?`;
        q.correctAnswer = ans.toString();
        q.data = {
          n1: op === "+" ? n1 : Math.max(n1, n2),
          n2: op === "+" ? n2 : Math.min(n1, n2),
          op,
        };
      } else if (type === "spelling") {
        const word = getRandomWord(words).toUpperCase();
        q.prompt = "Listen and type the word!";
        q.correctAnswer = word;
        q.data = { word };
      } else if (type === "missing_letter") {
        const word = getRandomWord(words).toUpperCase();
        const missingIndex = Math.floor(Math.random() * word.length);
        const displayWord = word.split("");
        const actualLetter = displayWord[missingIndex];
        displayWord[missingIndex] = "_";
        q.prompt = "What is the missing letter?";
        q.correctAnswer = actualLetter;
        q.data = { displayWord: displayWord.join(""), word };
      } else if (type === "comparison") {
        const n1 = Math.floor(Math.random() * 50);
        const n2 = Math.floor(Math.random() * 50);
        q.prompt = "Tap the bigger number!";
        q.correctAnswer = n1 > n2 ? n1.toString() : n2.toString();
        q.data = { n1, n2 };
      } else if (type === "hindi") {
        const letter = hindiLetters[Math.floor(Math.random() * hindiLetters.length)];
        q.prompt = "Listen and identify the letter!";
        q.correctAnswer = letter;
        q.data = { letter };
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
        <QuestionNumber>QUESTION {q.id} OF 10</QuestionNumber>
        <SubjectBadge $type={q.type}>{q.type.replace("_", " ")}</SubjectBadge>

        <QuestionHeader>
          <IconWrapper>
            {q.type === "math" && <Calculator size={40} />}
            {q.type === "spelling" && <SpellCheck size={40} />}
            {q.type === "missing_letter" && <Search size={40} />}
            {q.type === "comparison" && <Scale size={40} />}
            {q.type === "hindi" && <Languages size={40} />}
          </IconWrapper>
          <PromptText fontSize="xl" fontWeight={900} color="textPrimary">
            {q.prompt}
          </PromptText>
        </QuestionHeader>

        <QuestionContent>
          {q.type === "math" && q.data && (
            <BigDisplay>
              {q.data.n1 ?? 0} {q.data.op ?? "+"} {q.data.n2 ?? 0}
            </BigDisplay>
          )}

          {(q.type === "spelling" || q.type === "hindi") && q.data && (
            <SpeakContainer>
              <SpeakIcon text={q.data.word || q.data.letter || ""} size="huge" />
              <KidoText color="textSecondary" fontSize="md" fontWeight={600}>
                Tap the speaker to hear
              </KidoText>
            </SpeakContainer>
          )}

          {q.type === "missing_letter" && q.data && <BigDisplay>{q.data.displayWord}</BigDisplay>}

          {q.type === "comparison" && q.data && (
            <ComparisonGrid>
              <ChoiceCard
                $selected={currentVal === (q.data.n1 ?? 0).toString()}
                $color="#6366F1"
                onClick={() => handleInputChange(q.id, (q.data.n1 ?? 0).toString())}
                whileTap={{ scale: 0.95 }}
              >
                {q.data.n1}
              </ChoiceCard>
              <VSLabel>VS</VSLabel>
              <ChoiceCard
                $selected={currentVal === (q.data.n2 ?? 0).toString()}
                $color="#6366F1"
                onClick={() => handleInputChange(q.id, (q.data.n2 ?? 0).toString())}
                whileTap={{ scale: 0.95 }}
              >
                {q.data.n2}
              </ChoiceCard>
            </ComparisonGrid>
          )}

          {q.type !== "comparison" && (
            <CenterBox>
              <TestInput
                value={currentVal}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                placeholder="Type answer here..."
                autoFocus
              />
            </CenterBox>
          )}

          <NavButtons>
            <KidButton
              title="PREVIOUS"
              onClick={handlePrev}
              variant="secondary"
              isActive={currentIndex !== 0}
              minWidth="140px"
            />
            <KidButton
              title={currentIndex === questions.length - 1 ? "FINISH TEST" : "NEXT QUESTION"}
              onClick={handleNext}
              variant="primary"
              minWidth="180px"
            />
          </NavButtons>
        </QuestionContent>
      </QuestionCard>
    );
  };

  const getTestIcon = () => {
    switch (testId) {
      case "math_test":
        return Calculator;
      case "spelling_test":
        return SpellCheck;
      case "hindi_test":
        return Languages;
      default:
        return Trophy;
    }
  };

  return (
    <PageContainer>
      <ChallengeHeader
        icon={getTestIcon()}
        title={testId?.replace("_", " ").toUpperCase() || "Master Test"}
        subtitle="Focus on one question at a time. You've got this!"
        streak={0}
      />

      <ProgressBarContainer>
        <InnerTrack>
          <ProgressHeader>
            <KidoText fontSize="sm" fontWeight={700} color="textSecondary">
              QUESTION {currentIndex + 1} PROGRESS
            </KidoText>
            <KidoText fontSize="sm" fontWeight={900} color="primary">
              {currentIndex + 1} / 10
            </KidoText>
          </ProgressHeader>
          <ProgressTrack>
            <ProgressFill
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / 10) * 100}%` }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </ProgressTrack>
        </InnerTrack>
      </ProgressBarContainer>

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
