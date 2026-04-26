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
  Timer,
  Info,
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
  Card,
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
import { GameLayout } from "../../theme/globalStyles";
import DifficultyPicker from "../../components/DifficultyPicker";
import ChallengeHeader from "../../components/ChallengeHeader";
import { TRANSLATIONS } from "../../constants/translations";
import { readText } from "../../utils/index";

import { Question, generateTestQuestions, getQuestionTextToSpeak, getGradeTitle } from "./utils";
import { colors } from "../../theme/colors";

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
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const isMasterTest = testId === "master_test" || !testId;
  const t = TRANSLATIONS.en;

  const difficultyOptions = [
    { value: 1, label: t.com_level + " 1", info: "Single digits (1-9)" },
    { value: 2, label: t.com_level + " 2", info: "One single & one double digit" },
    { value: 3, label: t.com_level + " 3", info: "Two double digits (10-99)" },
    { value: 4, label: t.com_level + " 4", info: "3-digit numbers (100-999)" },
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
    const newQuestions = generateTestQuestions(testId, complexity, allowNegative, allowDecimals, t);
    setQuestions(newQuestions);
    setAnswers({});
    setIsSubmitted(false);
    setShowReview(false);
    setShowCertificate(false);
    setScore(0);
    setCurrentIndex(0);
    setTimer(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [testId, t, complexity, allowNegative, allowDecimals]);

  useEffect(() => {
    generateTest();
  }, [generateTest]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isTestStarted && !isSubmitted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTestStarted, isSubmitted]);

  const currentQuestion = questions[currentIndex];

  const handleInputChange = (id: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const startTest = () => {
    setIsTestStarted(true);
    setTimer(0);
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <QuestionNumber>
            {t.test_question} {q.id} {t.test_of} 10
          </QuestionNumber>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: colors.primary,
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            <Timer size={18} />
            {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
          </div>
        </div>
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
            <BigDisplay
              onClick={() =>
                readText(getQuestionTextToSpeak(q), q.type === "hindi" ? "hi-IN" : "en-US")
              }
            >
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

          {q.type === "missing_letter" && q.data && (
            <BigDisplay
              onClick={() =>
                readText(getQuestionTextToSpeak(q), q.type === "hindi" ? "hi-IN" : "en-US")
              }
            >
              {q.data.displayWord}
            </BigDisplay>
          )}

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
                  $color={colors.primary}
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
              text={getQuestionTextToSpeak(q)}
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
        <div style={{ gridColumn: "1 / -1", width: "100%" }}>
          <ChallengeHeader
            icon={Trophy}
            title={getTestTitle()}
            subtitle={t.mst_subtitle}
            streak={0}
          />
        </div>

        {!isTestStarted && !isSubmitted && (
          <div
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              width: "100%",
              maxWidth: "none",
              margin: "0 auto",
              padding: 0,
            }}
          >
            <div style={{ width: "100%", borderRadius: "24px", overflow: "hidden" }}>
              <Card>
                <div style={{ padding: "20px 40px 40px", textAlign: "center" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: colors.primary + "15",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: colors.primary,
                      }}
                    >
                      <Info size={40} />
                    </div>
                  </div>
                  <div style={{ marginBottom: "30px" }}>
                    <KidoText fontSize="xxl" fontWeight={900} color="primary">
                      {t.test_instructions}
                    </KidoText>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "20px",
                      textAlign: "left",
                      marginBottom: "40px",
                    }}
                  >
                    {[
                      { icon: <Brain size={20} />, text: t.test_qCount },
                      { icon: <CheckCircle2 size={20} />, text: t.test_selectBest },
                      { icon: <Timer size={20} />, text: t.test_timeRecorded },
                      { icon: <Trophy size={20} />, text: t.test_scoreForCert },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "16px",
                          background: colors.primary + "08",
                          borderRadius: "16px",
                          border: "1px solid " + colors.primary + "15",
                          color: "#475569",
                          fontWeight: 600,
                        }}
                      >
                        <div style={{ color: colors.primary }}>{item.icon}</div>
                        {item.text}
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: "40px" }}>
                    <DifficultyPicker
                      name="complexity"
                      title={t.com_difficulty}
                      options={difficultyOptions}
                      currentValue={complexity}
                      onChange={(val) => setComplexity(Number(val))}
                    />

                    {(testId === "math_subtraction" || testId === "math_test" || isMasterTest) && (
                      <CheckboxContainer>
                        <CheckboxInput
                          type="checkbox"
                          checked={allowNegative}
                          onChange={(e) => setAllowNegative(e.target.checked)}
                        />
                        {t.com_allowNegative}
                      </CheckboxContainer>
                    )}

                    {(testId === "math_division" || testId === "math_test" || isMasterTest) && (
                      <CheckboxContainer>
                        <CheckboxInput
                          type="checkbox"
                          checked={allowDecimals}
                          onChange={(e) => setAllowDecimals(e.target.checked)}
                        />
                        {t.com_allowDecimals}
                      </CheckboxContainer>
                    )}
                  </div>

                  <div style={{ marginTop: "40px" }}>
                    <KidButton
                      title={t.test_start}
                      onClick={startTest}
                      variant="primary"
                      size="xl"
                      width="100%"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {isTestStarted && !isSubmitted && (
          <div style={{ gridColumn: "1 / -1", width: "100%" }}>
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
          </div>
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

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#64748B",
                  marginBottom: "20px",
                }}
              >
                <Timer size={24} />
                Time: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
              </div>

              <GradeBadge
                $score={score}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {getGradeTitle(score)}
              </GradeBadge>

              <FeedbackText fontSize="2rem" fontWeight={800}>
                {score >= 8 ? t.com_genius : t.com_goodEffort}
              </FeedbackText>

              <SubFeedbackText fontSize="lg" color="textSecondary">
                {score >= 8 ? t.com_masteredCurriculum : t.test_keepPracticing}
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
                            setIsTestStarted(false);
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
                timeTaken={`${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, "0")}`}
              />
            </CertificateWrapper>
          )}
        </ResultsOverlay>
      )}
    </PageContainer>
  );
};

export default MasterTest;
