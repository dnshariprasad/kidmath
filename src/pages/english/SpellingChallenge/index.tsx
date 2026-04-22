import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  PageContainer,
  SettingsArea,
  GameLayout,
  GameActivityArea,
  SessionStats,
  NumberedStar,
  StarEmoji,
  StarNumber,
  PlusSign,
} from "../../../theme/globalStyles";
import SpeakIcon from "../../../components/SpeakIcon";
import { KidoText } from "../../../components/KidoText";
import { SpellCheck, HelpCircle, CheckCircle2, XCircle } from "lucide-react";
import { SurpriseCard } from "../../../components/SurpriseCard";
import { readText } from "../../../utils/index";
import { getAllWords, getRandomWord } from "../../../utils/wordUtils";
import confetti from "canvas-confetti";
import { RootState } from "../../../store/store";
import {
  LetterSlots,
  LetterSlot,
  BigSpeakWrapper,
  HiddenInput,
  HintIconWrapper,
  SkipIconWrapper,
  FeedbackDisplayWrapper,
} from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";
import Certificate from "../../../components/Certificate";
import { incrementScore, resetStreak, resetAll } from "../../../store/slice/AlphabetSlice";

const SpellingChallenge = () => {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.gameStats?.spelling?.streak ?? 0);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [complexity, setComplexity] = useState<"Easy" | "Medium" | "Hard">("Easy");
  const [showCertificate, setShowCertificate] = useState(false);

  const generateChallenge = useCallback(() => {
    let allWords = getAllWords();

    if (complexity === "Easy") {
      allWords = allWords.filter((w) => w.length <= 4);
    } else if (complexity === "Medium") {
      allWords = allWords.filter((w) => w.length > 4 && w.length <= 7);
    } else if (complexity === "Hard") {
      allWords = allWords.filter((w) => w.length > 7);
    }

    const word = getRandomWord(allWords);
    setCurrentWord(word.toUpperCase());
    setInputValue("");
    setFeedback(null);
    setShowHint(false);
  }, [complexity]);

  useEffect(() => {
    generateChallenge();
  }, [generateChallenge]);

  useEffect(() => {
    if (streak > 0 && streak % 10 === 0) {
      setShowCertificate(true);
    }
  }, [streak]);

  useEffect(() => {
    const handleGlobalClick = () => {
      document.getElementById("spelling-input")?.focus();
    };
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    if (val.length <= currentWord.length) {
      setInputValue(val);
    }
  };

  const handleSubmit = () => {
    if (inputValue === currentWord) {
      setFeedback({ message: "Excellent! You spelled it right! 🌟", isCorrect: true });
      readText("Excellent");
      dispatch(incrementScore("spelling"));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#4F46E5", "#FF7675"],
      });
      setTimeout(generateChallenge, 2000);
    } else {
      setFeedback({ message: "Almost! Try one more time! 💪", isCorrect: false });
      readText("Try again");
      dispatch(resetStreak("spelling"));
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  const diffOptions = [
    { value: "Easy", label: "Short (3-4)" },
    { value: "Medium", label: "Medium (5-7)" },
    { value: "Hard", label: "Long (8+)" },
  ];

  return (
    <PageContainer data-testid="page-spelling-challenge">
      <HiddenInput
        id="spelling-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        autoFocus
      />

      <GameLayout>
        <ChallengeHeader
          icon={SpellCheck}
          title="Spelling Bee"
          subtitle="Listen to the word and spell it out!"
          streak={streak}
        />

        <SurpriseCard
          title="Certificate Progress"
          subtitle={
            streak < 10
              ? `${10 - (streak % 10)} more for a Certificate! 🏆`
              : "Milestone reached! 🎉"
          }
        />

        <GameActivityArea data-testid="activity-area">
          <SessionStats>
            {Array.from({ length: streak % 10 || (streak > 0 ? 10 : 0) }).map((_, i) => (
              <NumberedStar
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, delay: i * 0.05 }}
              >
                <StarEmoji>⭐</StarEmoji>
                <StarNumber>{i + 1}</StarNumber>
              </NumberedStar>
            ))}
            {streak >= 10 && <PlusSign>+</PlusSign>}
          </SessionStats>

          <HintIconWrapper
            $showHint={showHint}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowHint(true)}
            title="Need a hint?"
          >
            <HelpCircle size={28} />
          </HintIconWrapper>

          <SkipIconWrapper
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={generateChallenge}
            title="Skip to next"
          >
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 17 5-5-5-5M13 17l5-5-5-5" />
              </svg>
            </motion.div>
          </SkipIconWrapper>

          <BigSpeakWrapper
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => readText(currentWord)}
          >
            <SpeakIcon text={currentWord} />
            <KidoText fontSize="base" color="textSecondary" fontWeight="bold">
              Click to listen
            </KidoText>
          </BigSpeakWrapper>

          <LetterSlots>
            {currentWord.split("").map((letter, i) => (
              <LetterSlot
                key={i}
                $isActive={inputValue.length === i}
                $isError={feedback?.isCorrect === false && inputValue.length === currentWord.length}
                $isSuccess={feedback?.isCorrect === true}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {inputValue[i] ||
                  (showHint && (i === 0 || i === currentWord.length - 1) ? letter : "")}
              </LetterSlot>
            ))}
          </LetterSlots>

          <AnimatePresence>
            {feedback && (
              <FeedbackDisplayWrapper
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {feedback.isCorrect ? (
                  <CheckCircle2 color="#4CAF50" />
                ) : (
                  <XCircle color="#FF7675" />
                )}
                <KidoText color={feedback.isCorrect ? "success" : "accent"} fontSize="md">
                  {feedback.message}
                </KidoText>
              </FeedbackDisplayWrapper>
            )}
          </AnimatePresence>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            name="complexity"
            options={diffOptions}
            currentValue={complexity}
            onChange={(val) => setComplexity(val as "Easy" | "Medium" | "Hard")}
          />
        </SettingsArea>
      </GameLayout>

      <AnimatePresence>
        {showCertificate && (
          <Certificate
            onClose={() => {
              setShowCertificate(false);
              dispatch(resetAll());
            }}
            challengeName="Spelling Bee"
            score={streak}
            level={complexity}
          />
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default SpellingChallenge;
