import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import KidButton from "../../components/KidButton";
import { Calculator } from "lucide-react";
import {
  PageContainer,
  Card,
  StyledInput,
  SidebarTitle,
  SettingsCard,
  ControlBar,
  PageHeader,
  PageTitle,
  PageSubtitle,
  SessionStats,
  GhostHeader,
} from "../../theme/KidStyles";
import { COUNTING_COMPLEXITY } from "../../store/data/Constants";
import {
  generateChallenge,
  calculateResult,
  operations,
} from "../../util/MathUtil";
import { readText } from "../../util/util";
import { incrementScore, resetStreak } from "../../store/slice/AlphabetSlice";
import confetti from "canvas-confetti";
import { RootState } from "../../store/store";

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

const SettingsSide = styled.div`
  flex: 1;
  width: 100%;
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  /* Precisely calculated: Title(48) + SessionStats(35) + Margins(35) = 118px */
  margin-top: 0; 

  @media (max-width: 992px) {
    order: 2;
    position: static;
    margin-top: 0;
  }
`;

const GameSide = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    order: 1;
  }
`;

// Standardized HeaderArea is now imported from KidStyles.tsx

const MathDisplay = styled(motion.div)`
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-shadow: 0 10px 20px ${(props) => props.theme.colors.shadow};
  white-space: nowrap;
  width: 100%;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 15vw, 3.5rem);
    gap: 10px;
  }
`;

const ConfigSection = styled.div`
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px dashed ${(props) => props.theme.colors.primary}15;

  &:last-child {
    border-bottom: none;
  }
`;

const ConfigSubTitle = styled.h4`
  color: #636E72;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 0.9rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
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

  &:hover {
    background: ${(props) => props.theme.colors.primary}08;
  }

  input {
    width: 18px;
    height: 18px;
    accent-color: ${(props) => props.theme.colors.primary};
  }
`;

const MathChallenge = () => {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [complexity, setComplexity] = useState(COUNTING_COMPLEXITY.SINGLE_DIGIT);
  const [selectedOperations, setSelectedOperations] = useState(["+"]);
  const [inputValue, setInputValue] = useState("");
  const [negativeCounting, setNegativeCounting] = useState(false);
  const [maxDigits] = useState(2);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const showNewChallenge = () => {
    const challenge = generateChallenge(
      maxDigits,
      complexity,
      selectedOperations,
      negativeCounting
    );
    setNum1(challenge.num1);
    setNum2(challenge.num2);
    setOperation(challenge.operation);
    setFeedback(null);
    setInputValue("");
  };

  const handleSubmit = () => {
    const result = calculateResult(num1, num2, operation);
    const userAnswer = Number(inputValue);
    if (userAnswer === result) {
      setFeedback({ message: "Brilliant! 🌟", isCorrect: true });
      readText("Brilliant");
      dispatch(incrementScore());
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#4F46E5", "#FF7675"],
      });
      setTimeout(showNewChallenge, 2000);
    } else {
      setFeedback({ message: "Oops! Try again! 😅", isCorrect: false });
      readText("Oops! Try again");
      dispatch(resetStreak());
    }
  };

  useEffect(() => {
    showNewChallenge();
  }, [complexity, selectedOperations, negativeCounting]);

  return (
    <PageContainer data-testid="page-math-challenge">
      <GameLayout>
        <GameSide data-testid="layout-main-content">
          <PageHeader>
            <PageTitle>
              <Calculator size={40} color="#6366F1" strokeWidth={2.5} />
              Counting Fun
            </PageTitle>
            <PageSubtitle>Solve fun math problems and win stars!</PageSubtitle>
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
          <Card style={{ textAlign: "center", minHeight: "450px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "none" }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={showNewChallenge}
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
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 17 5-5-5-5M13 17l5-5-5-5"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <MathDisplay
                key={`${num1}${operation}${num2}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span>{num1}</span>
                <span style={{ color: "#a29bfe" }}>{operation}</span>
                <span>{num2}</span>
                <span style={{ color: "#a29bfe" }}>=</span>
              </MathDisplay>
            </AnimatePresence>

            <ControlBar>
              <StyledInput
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="?"
                width="160px"
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                autoFocus
              />
            </ControlBar>

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
                <motion.h2
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  style={{
                    color: feedback.isCorrect ? "#55EFC4" : "#FF7675",
                    marginTop: "25px",
                    fontSize: "2.2rem"
                  }}
                >
                  {feedback.message}
                </motion.h2>
              )}
            </AnimatePresence>
          </Card>
        </GameSide>

        <SettingsSide data-testid="layout-settings-panel">
          <GhostHeader>
            <PageHeader>
              <PageTitle>
                <Calculator size={40} />
                Ghost
              </PageTitle>
              <PageSubtitle>Ghost</PageSubtitle>
              <SessionStats>
                <span style={{ fontSize: "1.8rem" }}>⭐</span>
              </SessionStats>
            </PageHeader>
          </GhostHeader>

          <SettingsCard>
            <SidebarTitle>⚙️ Game Rules</SidebarTitle>
            
            <ConfigSection>
              <ConfigSubTitle>Operations</ConfigSubTitle>
              {operations.map((op) => (
                <OptionLabel key={op} $isActive={selectedOperations.includes(op)}>
                  <input
                    type="checkbox"
                    checked={selectedOperations.includes(op)}
                    onChange={() => {
                      setSelectedOperations((prev) => {
                        if (prev.length === 1 && prev.includes(op)) return prev;
                        return prev.includes(op) ? prev.filter((o) => o !== op) : [...prev, op];
                      });
                    }}
                  />
                  {op === "+" ? "Addition ➕" : op === "-" ? "Subtraction ➖" : op === "*" ? "Multiplication ✖️" : "Division ➗"}
                </OptionLabel>
              ))}
            </ConfigSection>

            <ConfigSection>
              <ConfigSubTitle>Difficulty</ConfigSubTitle>
              {[
                { id: COUNTING_COMPLEXITY.SINGLE_DIGIT, label: "Easy Peasy (1-9)" },
                { id: COUNTING_COMPLEXITY.SINGLE_DOUBLEDIGIT, label: "Medium (10-99)" },
                { id: COUNTING_COMPLEXITY.MULTI_DIGIT, label: "Super Hard! 🚀" },
              ].map((lvl) => (
                <OptionLabel key={lvl.id} $isActive={complexity === lvl.id}>
                  <input
                    type="radio"
                    name="complexity"
                    checked={complexity === lvl.id}
                    onChange={() => setComplexity(lvl.id)}
                  />
                  {lvl.label}
                </OptionLabel>
              ))}
            </ConfigSection>

            <ConfigSection>
              <OptionLabel $isActive={negativeCounting}>
                <input
                  type="checkbox"
                  checked={negativeCounting}
                  onChange={() => setNegativeCounting(!negativeCounting)}
                />
                Allow Negative (-) Numbers
              </OptionLabel>
            </ConfigSection>
          </SettingsCard>
        </SettingsSide>
      </GameLayout>
    </PageContainer>
  );
};

export default MathChallenge;
