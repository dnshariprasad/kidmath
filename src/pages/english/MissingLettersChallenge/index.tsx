import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  PageContainer,
  StyledInput,
  SettingsArea,
  ControlBar,
  GameLayout,
  GameActivityArea,
  SessionStats,
  NumberedStar,
  StarEmoji,
  StarNumber,
  PlusSign,
} from "../../../theme/globalStyles";
import KidButton from "../../../components/KidButton";
import { KidoText } from "../../../components/KidoText";
import { Type, HelpCircle } from "lucide-react";
import { SurpriseCard } from "../../../components/SurpriseCard";
import { readText } from "../../../utils/index";
import {
  getAllWords,
  getRandomWord,
  createMissingLetterWord,
  randomNumber,
} from "../../../utils/wordUtils";
import confetti from "canvas-confetti";
import { RootState } from "../../../store/store";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";
import FeedbackDisplay from "../../../components/FeedbackDisplay";
import Certificate from "../../../components/Certificate";
import { incrementScore, resetStreak, resetAll } from "../../../store/slice/AlphabetSlice";
import { HintIconWrapper, ChallengeTextContainer, WordDisplay } from "./styles";

const MissingLettersChallenge = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const streak = useSelector(
    (state: RootState) => state.alphabet.gameStats?.missing_letters?.streak ?? 0,
  );
  const [randomString, setRandomString] = useState<string>("");
  const [randomStringWithMissingLetter, setRandomStringWithMissingLetter] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [complexity, setComplexity] = useState<"Easy" | "Medium" | "Hard">("Easy");
  const [showHint, setShowHint] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const generateChallenge = useCallback(() => {
    let words = getAllWords();
    if (complexity === "Easy") words = words.filter((w) => w.length <= 4);
    else if (complexity === "Medium") words = words.filter((w) => w.length > 4 && w.length <= 7);
    else words = words.filter((w) => w.length > 7);

    const rs = getRandomWord(words);
    setRandomString(rs);
    setRandomStringWithMissingLetter(createMissingLetterWord(rs, randomNumber(rs.length)));
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

  const handleSubmit = () => {
    if (randomString.toLowerCase() === inputValue.toLowerCase()) {
      setFeedback({ message: "You got it! 🌟", isCorrect: true });
      readText("You got it");
      dispatch(incrementScore("missing_letters"));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#4F46E5", "#FF7675"],
      });
      setTimeout(generateChallenge, 2000);
    } else {
      setFeedback({ message: "Not quite, try again! 😅", isCorrect: false });
      readText("Try again");
      dispatch(resetStreak("missing_letters"));
    }
  };

  const difficultyOptions = [
    { value: "Easy", label: "Easy Words" },
    { value: "Medium", label: "Medium Words" },
    { value: "Hard", label: "Hard Words" },
  ];

  return (
    <PageContainer data-testid="view-missing-letters">
      <GameLayout>
        <ChallengeHeader
          icon={Type}
          title="Missing Letters"
          subtitle="Fill in the gap to complete the word!"
          streak={streak}
        />

        <SurpriseCard
          title="Ready for the Test? 🏆"
          subtitle="Try the Spelling Hero exam!"
          onClick={() => navigate("/test/spelling_hero")}
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
            onClick={() => {
              setShowHint(true);
              setTimeout(() => setShowHint(false), 2000);
            }}
            title="Need a hint?"
          >
            <HelpCircle size={28} />
          </HintIconWrapper>

          <ChallengeTextContainer>
            <AnimatePresence mode="wait">
              <motion.div
                key={randomString}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
              >
                <WordDisplay>
                  <KidoText fontSize="clamp(3rem, 15vw, 6rem)" color="primary" fontWeight={900}>
                    {showHint ? randomString : randomStringWithMissingLetter}
                  </KidoText>
                </WordDisplay>
              </motion.div>
            </AnimatePresence>
          </ChallengeTextContainer>

          <StyledInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="?"
            width="180px"
            onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            autoFocus
          />

          <ControlBar>
            <KidButton
              title="Check Answer"
              onClick={handleSubmit}
              variant="primary"
              minWidth="220px"
            />
          </ControlBar>

          <FeedbackDisplay feedback={feedback} fontSize="md" />
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            name="complexity"
            options={difficultyOptions}
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
            challengeName="Missing Letters"
            score={streak}
            level={complexity}
          />
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default MissingLettersChallenge;
