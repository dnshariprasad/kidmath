import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import {
  PageContainer,
  StyledInput,
  Tag,
  TagList,
  SidebarTitle,
  SettingsArea,
  ControlBar,
  PageHeader,
  PageTitle,
  PageSubtitle,
  SessionStats,
  TitleArea,
  ActivityArea,
  GameLayout,
  ConfigSection,
  ConfigSubTitle,
  OptionLabel,
} from "../../theme/KidStyles";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { Type, HelpCircle, Settings2 } from "lucide-react";
import { SurpriseCard } from "../../components/SurpriseCard";
import { readText } from "../../util/util";
import {
  getAllWords,
  getRandomWord,
  createMissingLetterWord,
  randomNumber,
} from "../../store/data/WordUtil";
import confetti from "canvas-confetti";
import { RootState } from "../../store/store";

const MissingLettersChallenge = () => {
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [randomString, setRandomString] = useState<string>("");
  const [randomStringWithMissingLetter, setRandomStringWithMissingLetter] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<"Easy" | "Medium" | "Hard">("Easy");
  const [showHint, setShowHint] = useState(false);

  const generateChallenge = () => {
    let words = getAllWords();
    if (complexity === "Easy") words = words.filter(w => w.length <= 4);
    else if (complexity === "Medium") words = words.filter(w => w.length > 4 && w.length <= 7);
    else words = words.filter(w => w.length > 7);

    let rs = getRandomWord(words);
    setRandomString(rs);
    setRandomStringWithMissingLetter(
      createMissingLetterWord(rs, randomNumber(rs.length))
    );
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
      setHistory((prev) => [randomString, ...prev].slice(0, 5));
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

  return (
    <PageContainer data-testid="page-missing-letters">
      <GameLayout>
        <TitleArea data-testid="title-area">
          <PageHeader>
            <PageTitle>
              <Type size={40} color="#6366F1" strokeWidth={2.5} />
              Missing Letters
            </PageTitle>
            <PageSubtitle>Fill in the gap to complete the word!</PageSubtitle>
            <SessionStats>
              {Array.from({ length: Math.min(12, streak) }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, delay: i * 0.05 }}
                  style={{ fontSize: "1.8rem" }}
                >
                  ⭐
                </motion.span>
              ))}
            </SessionStats>
          </PageHeader>
        </TitleArea>

        <SurpriseCard 
          title="Word surprise?"
          onShuffle={handleFeelingLucky}
        />

        <ActivityArea data-testid="activity-area" style={{ textAlign: "center", minHeight: "550px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setShowHint(true);
              setTimeout(() => setShowHint(false), 2000);
            }}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              cursor: "pointer",
              color: showHint ? "#6366F1" : "#dfe6e9",
              transition: "color 0.2s ease"
            }}
            title="Need a hint?"
          >
            <HelpCircle size={28} />
          </motion.div>
          
          <div style={{ marginBottom: "30px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={randomString}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
              >
                <KidoText 
                  fontSize="clamp(3rem, 15vw, 6rem)" 
                  color="primary" 
                  fontWeight={900} 
                  style={{ letterSpacing: "8px", whiteSpace: "nowrap" }}
                >
                  {showHint ? randomString : randomStringWithMissingLetter}
                </KidoText>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <StyledInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="?"
            width="180px"
            onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            autoFocus
            style={{ marginBottom: "10px" }}
          />

          <ControlBar>
            <KidButton 
              title="Check Answer" 
              onClick={handleSubmit} 
              variant="success" 
              style={{ minWidth: "220px" }}
            />
          </ControlBar>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ marginTop: "20px" }}
              >
                <KidoText color={feedback.isCorrect ? "success" : "accent"} fontSize="1.2rem">
                  {feedback.message}
                </KidoText>
              </motion.div>
            )}
          </AnimatePresence>
        </ActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Difficulty</ConfigSubTitle>
            {(["Easy", "Medium", "Hard"] as const).map((level) => (
              <OptionLabel key={level} $isActive={complexity === level}>
                <input
                  type="radio"
                  name="complexity"
                  checked={complexity === level}
                  onChange={() => setComplexity(level)}
                />
                {level} Words
              </OptionLabel>
            ))}
          </ConfigSection>

          <ConfigSection>
            <SidebarTitle style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Settings2 size={20} />
              Recent Success
            </SidebarTitle>
            <TagList>
              {history.map((word, i) => (
                <Tag key={i} style={{ background: "#F0FFF4", color: "#2F855A", borderColor: "#C6F6D5" }}>
                  {word}
                </Tag>
              ))}
            </TagList>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default MissingLettersChallenge;
