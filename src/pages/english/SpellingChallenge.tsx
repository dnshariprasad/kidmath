import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Card,
  PageContainer,
  Tag,
  TagList,
  SidebarTitle,
  SettingsCard,
  ControlBar,
  PageHeader,
  PageTitle,
  PageSubtitle,
  SessionStats,
  GhostHeader,
} from "../../theme/KidStyles";
import SpeakIcon from "../../components/SpeakIcon";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { SpellCheck, Star, HelpCircle, CheckCircle2, XCircle } from "lucide-react";
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

const OptionLabel = styled.label<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  background: ${(props) => (props.$isActive ? props.theme.colors.primary + "15" : "transparent")};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 5px;
  border: 2px solid ${(props) => (props.$isActive ? props.theme.colors.primary : "transparent")};
  font-size: 0.95rem;

  &:hover {
    background: ${(props) => props.theme.colors.primary}08;
  }

  input {
    width: 18px;
    height: 18px;
    accent-color: ${(props) => props.theme.colors.primary};
  }
`;

const GameLayout = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const MainSide = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    order: 1;
  }
`;

const SidebarSide = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    order: 2;
    margin-top: 0;
  }
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
    const val = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
    if (val.length <= currentWord.length) {
      setInputValue(val);
      if (feedback) setFeedback(null);
    }
  };

  const handleSubmit = () => {
    if (inputValue.length === 0) return;

    if (currentWord === inputValue) {
      setFeedback({ message: "Brilliant! You nailed it! 🌟", isCorrect: true });
      readText("Brilliant");
      setHistory((prev) => [currentWord, ...prev].slice(0, 8));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#4F46E5", "#FF7675"],
      });
      setTimeout(generateChallenge, 2500);
    } else {
      setFeedback({ message: "Almost there! Try again! 💪", isCorrect: false });
      readText("Try again");
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <PageContainer data-testid="page-spelling-bee">
      <HiddenInput
        id="spelling-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      
      <GameLayout>
        <MainSide>
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

          <Card style={{ textAlign: "center", minHeight: "550px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "none", position: "relative" }}>
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
              <KidoText fontSize="0.9rem" color="textSecondary">Tap to listen</KidoText>
            </BigSpeakWrapper>

            <LetterSlots>
              {currentWord.split("").map((char, i) => (
                <LetterSlot
                  key={i}
                  $isActive={inputValue.length === i}
                  $isError={feedback?.isCorrect === false}
                  $isSuccess={feedback?.isCorrect === true}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {inputValue[i] || (showHint ? char : "")}
                </LetterSlot>
              ))}
            </LetterSlots>

            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "10px",
                    color: feedback.isCorrect ? "#00B894" : "#FF7675",
                    marginBottom: "30px"
                  }}
                >
                  {feedback.isCorrect ? <CheckCircle2 size={32} /> : <XCircle size={32} />}
                  <h2 style={{ fontSize: "1.8rem", margin: 0 }}>{feedback.message}</h2>
                </motion.div>
              )}
            </AnimatePresence>

            {!feedback && (
              <ControlBar>
                <KidButton 
                  title="Check Spelling" 
                  variant="success" 
                  onClick={handleSubmit}
                  style={{ minWidth: "220px" }}
                />
              </ControlBar>
            )}
            
            {showHint && !feedback && (
              <KidoText color="accent" fontSize="1rem" style={{ marginTop: "20px" }}>
                Hint: Focus on the letters in the boxes! 🔍
              </KidoText>
            )}
          </Card>
        </MainSide>

        <SidebarSide>
          <GhostHeader>
            <PageHeader>
              <PageTitle>
                <SpellCheck size={40} />
                Ghost
              </PageTitle>
              <PageSubtitle>Ghost</PageSubtitle>
              <SessionStats>
                <span style={{ fontSize: "1.8rem" }}>⭐</span>
              </SessionStats>
            </PageHeader>
          </GhostHeader>
          <SettingsCard>
            <SidebarTitle style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <SpellCheck size={20} color="#6366F1" />
              Game Difficulty
            </SidebarTitle>
            <div style={{ marginBottom: "20px" }}>
              {(["Easy", "Medium", "Hard"] as const).map((level) => (
                <OptionLabel key={level} $isActive={complexity === level}>
                  <input
                    type="radio"
                    name="complexity"
                    checked={complexity === level}
                    onChange={() => setComplexity(level)}
                  />
                  {level} {level === "Easy" ? "🌱" : level === "Medium" ? "🚀" : "🏆"}
                </OptionLabel>
              ))}
            </div>

            <SidebarTitle style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
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
          </SettingsCard>
        </SidebarSide>
      </GameLayout>
    </PageContainer>
  );
};

export default SpellingChallenge;
