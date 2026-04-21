import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import {
  PageContainer,
  StyledInput,
  SettingsArea,
  ControlBar,
  GameLayout,
  GameActivityArea,
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
import { HintIconWrapper, ChallengeTextContainer, WordDisplay } from "./styles";

const MissingLettersChallenge = () => {
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [randomString, setRandomString] = useState<string>("");
  const [randomStringWithMissingLetter, setRandomStringWithMissingLetter] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [complexity, setComplexity] = useState<"Easy" | "Medium" | "Hard">("Easy");
  const [showHint, setShowHint] = useState(false);

  const generateChallenge = () => {
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
  };

  const handleFeelingLucky = () => {
    const complexites: ("Easy" | "Medium" | "Hard")[] = ["Easy", "Medium", "Hard"];
    const randomComp = complexites[Math.floor(Math.random() * complexites.length)];
    setComplexity(randomComp);
    readText("Word Surprise!");
  };

  useEffect(() => {
    generateChallenge();
  }, [complexity]);

  const handleSubmit = () => {
    if (randomString.toLowerCase() === inputValue.toLowerCase()) {
      setFeedback({ message: "You got it! 🌟", isCorrect: true });
      readText("You got it");
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
    }
  };

  const difficultyOptions = [
    { value: "Easy", label: "Easy Words" },
    { value: "Medium", label: "Medium Words" },
    { value: "Hard", label: "Hard Words" },
  ];

  return (
    <PageContainer data-testid="page-missing-letters">
      <GameLayout>
        <ChallengeHeader
          icon={Type}
          title="Missing Letters"
          subtitle="Fill in the gap to complete the word!"
          streak={streak}
        />

        <SurpriseCard title="Word surprise?" onShuffle={handleFeelingLucky} />

        <GameActivityArea data-testid="activity-area">
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

          <FeedbackDisplay feedback={feedback} fontSize="1.2rem" />
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
    </PageContainer>
  );
};

export default MissingLettersChallenge;
