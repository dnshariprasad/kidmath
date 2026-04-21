import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import {
  ActivityArea,
  PageContainer,
  Tag,
  TagList,
  SidebarTitle,
  SettingsArea,
  PageHeader,
  PageTitle,
  PageSubtitle,
  SessionStats,
  TitleArea,
  GameLayout,
  ConfigSection,
  ConfigSubTitle,
  OptionLabel,
} from "../../theme/KidStyles";
import SpeakIcon from "../../components/SpeakIcon";
import { KidoText } from "../../components/KidoText";
import { SpellCheck, Star, HelpCircle, CheckCircle2, XCircle } from "lucide-react";
import { SurpriseCard } from "../../components/SurpriseCard";
import { readText } from "../../util/util";
import { getAllWords, getRandomWord } from "../../store/data/WordUtil";
import confetti from "canvas-confetti";
import { RootState } from "../../store/store";

const LetterSlots = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
`;

const LetterSlot = styled(motion.div)<{ $isActive: boolean; $isError: boolean; $isSuccess: boolean }>`
  width: 60px;
  height: 70px;
  border-radius: 16px;
  background: white;
  border: 3px solid ${(props) => {
    if (props.$isSuccess) return props.theme.colors.success;
    if (props.$isError) return props.theme.colors.accent;
    if (props.$isActive) return props.theme.colors.primary;
    return "#F0F0F0";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.$isActive ? "0 10px 20px rgba(99, 102, 241, 0.2)" : "none"};
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 45px;
    height: 55px;
    font-size: 1.8rem;
    border-radius: 12px;
  }
`;

const BigSpeakWrapper = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 40px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid #f0f0f0;
  
  &:hover {
    border-color: ${(props) => props.theme.colors.primary}40;
    transform: translateY(-5px);
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const SpellingChallenge = () => {
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [complexity, setComplexity] = useState<"Easy" | "Medium" | "Hard">("Easy");

  const generateChallenge = () => {
    let allWords = getAllWords();
    
    // Filter by complexity
    if (complexity === "Easy") {
      allWords = allWords.filter(w => w.length <= 4);
    } else if (complexity === "Medium") {
      allWords = allWords.filter(w => w.length > 4 && w.length <= 7);
    } else if (complexity === "Hard") {
      allWords = allWords.filter(w => w.length > 7);
    }

    const word = getRandomWord(allWords);
    setCurrentWord(word.toUpperCase());
    setInputValue("");
    setFeedback(null);
    setShowHint(false);
  };

  const handleFeelingLucky = () => {
    const complexites: ("Easy" | "Medium" | "Hard")[] = ["Easy", "Medium", "Hard"];
    const randomComp = complexites[Math.floor(Math.random() * complexites.length)];
    setComplexity(randomComp);
    readText("Spelling Surprise!");
  };

  useEffect(() => {
    generateChallenge();
  }, [complexity]);

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
      setHistory((prev) => [currentWord, ...prev].slice(0, 8));
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
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

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
        <TitleArea data-testid="title-area">
          <PageHeader>
            <PageTitle>
              <SpellCheck size={40} color="#6366F1" strokeWidth={2.5} />
              Spelling Bee
            </PageTitle>
            <PageSubtitle>Listen to the word and spell it out!</PageSubtitle>
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
          title="Spelling surprise?"
          onShuffle={handleFeelingLucky}
        />

        <ActivityArea style={{ textAlign: "center", minHeight: "550px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowHint(true)}
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

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={generateChallenge}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
              color: "#dfe6e9",
              transition: "color 0.2s ease"
            }}
            title="Skip to next"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6366F1")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#dfe6e9")}
          >
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 17 5-5-5-5M13 17l5-5-5-5"/>
              </svg>
            </motion.div>
          </motion.div>

          <BigSpeakWrapper 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => readText(currentWord)}
          >
            <SpeakIcon text={currentWord} />
            <KidoText fontSize="1rem" color="textSecondary" fontWeight="bold">Click to listen</KidoText>
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
                {inputValue[i] || (showHint && (i === 0 || i === currentWord.length - 1) ? letter : "")}
              </LetterSlot>
            ))}
          </LetterSlots>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}
              >
                {feedback.isCorrect ? <CheckCircle2 color="#4CAF50" /> : <XCircle color="#FF7675" />}
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
                {level === "Easy" ? "Short (3-4)" : level === "Medium" ? "Medium (5-7)" : "Long (8+)"}
              </OptionLabel>
            ))}
          </ConfigSection>
 
          <ConfigSection>
            <SidebarTitle style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
              <Star size={20} fill="#FFD700" color="#FFD700" />
              Words Mastered
            </SidebarTitle>
            <TagList>
              {history.length === 0 ? (
                <div style={{ textAlign: "center", padding: "20px", width: "100%" }}>
                  <HelpCircle size={40} color="#dfe6e9" style={{ marginBottom: "10px" }} />
                  <KidoText color="#636E72" fontSize="0.9rem">No words solved yet.<br/>Start typing to win!</KidoText>
                </div>
              ) : (
                history.map((word, index) => (
                  <Tag key={index} style={{ background: "#F0FFF4", color: "#2F855A", borderColor: "#C6F6D5" }}>
                    {word}
                  </Tag>
                ))
              )}
            </TagList>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default SpellingChallenge;
