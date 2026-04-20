import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { Scale } from "lucide-react";
import { Card, PageContainer, SidebarTitle, SettingsCard, ControlBar, PageHeader, PageTitle, PageSubtitle } from "../../theme/KidStyles";
import { readText } from "../../util/util";
import { incrementScore, resetStreak } from "../../store/slice/AlphabetSlice";
import confetti from "canvas-confetti";
import { getRandomNumber, getMaxNumber } from "../../util/MathUtil";

const GameLayout = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SettingsSide = styled.div`
  flex: 1;
  width: 100%;
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 0; 

  @media (max-width: 992px) {
    order: 2;
    position: static;
    margin-top: 20px;
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

const GameCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: white;
  border: 4px solid ${(props) => props.theme.colors.primary}20;
  min-height: 450px;
`;

const NumberDisplay = styled(motion.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  text-shadow: 0 10px 20px ${(props) => props.theme.colors.shadow};
  white-space: nowrap;
  width: 100%;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`;

const FeedbackMessage = styled(motion.h2)<{ $isCorrect: boolean }>`
  color: ${(props) => (props.$isCorrect ? props.theme.colors.success : props.theme.colors.accent)};
  margin-top: 25px;
  font-size: 2.2rem;
  text-align: center;
`;

const ConfigSection = styled.div`
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px dashed rgba(108, 92, 231, 0.1);

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
  background: ${(props) => (props.$isActive ? "rgba(108, 92, 231, 0.1)" : "transparent")};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 5px;
  border: 2px solid ${(props) => (props.$isActive ? props.theme.colors.primary : "transparent")};
  font-size: 0.95rem;

  &:hover {
    background: rgba(108, 92, 231, 0.05);
  }

  input {
    width: 18px;
    height: 18px;
    accent-color: ${(props) => props.theme.colors.primary};
  }
`;

export const GreaterLessEqualGame: React.FC = () => {
  const dispatch = useDispatch();
  const [maxDigits, setMaxDigits] = useState(2);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const resetGame = () => {
    const maxVal = getMaxNumber(maxDigits);
    setNum1(getRandomNumber(maxVal));
    setNum2(getRandomNumber(maxVal));
    setFeedback(null);
  };

  useEffect(() => {
    resetGame();
  }, [maxDigits]);

  const handleChoice = (choice: "greater" | "less" | "equal") => {
    let correct = false;
    if (choice === "greater" && num1 > num2) correct = true;
    else if (choice === "less" && num1 < num2) correct = true;
    else if (choice === "equal" && num1 === num2) correct = true;

    if (correct) {
      setFeedback({ message: "Correct! Awesome! 🌟", isCorrect: true });
      readText("Correct");
      dispatch(incrementScore());
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6C5CE7", "#00CEC9", "#FF7675"],
      });
      setTimeout(resetGame, 1500);
    } else {
      setFeedback({ message: "Oops! Try again! 😅", isCorrect: false });
      readText("Oops! Try again");
      dispatch(resetStreak());
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  return (
    <PageContainer data-testid="page-greater-less-equal">
      <GameLayout>
        <GameSide data-testid="layout-main-content">
          <PageHeader>
            <PageTitle>
              <Scale size={40} color="#6C5CE7" strokeWidth={2.5} />
              Big or Small?
            </PageTitle>
            <PageSubtitle>Compare the numbers and pick the right sign!</PageSubtitle>
          </PageHeader>
          <GameCard style={{ maxWidth: "none" }}>
            <KidoText fontSize="22px" color="textSecondary" margin="0 0 10px">
              Compare the numbers:
            </KidoText>
            
            <AnimatePresence mode="wait">
              <NumberDisplay
                key={`${num1}-${num2}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span>{num1}</span>
                <span style={{ color: "#a29bfe", fontSize: "4rem" }}>?</span>
                <span>{num2}</span>
              </NumberDisplay>
            </AnimatePresence>

            <ControlBar>
              <KidButton
                title=">"
                onClick={() => handleChoice("greater")}
                variant="primary"
                style={{ fontSize: "2rem", width: "80px", height: "80px" }}
              />
              <KidButton
                title="="
                onClick={() => handleChoice("equal")}
                variant="secondary"
                style={{ fontSize: "2rem", width: "80px", height: "80px" }}
              />
              <KidButton
                title="<"
                onClick={() => handleChoice("less")}
                variant="accent"
                style={{ fontSize: "2rem", width: "80px", height: "80px" }}
              />
            </ControlBar>

            <AnimatePresence>
              {feedback && (
                <FeedbackMessage
                  $isCorrect={feedback.isCorrect}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                >
                  {feedback.message}
                </FeedbackMessage>
              )}
            </AnimatePresence>
          </GameCard>
        </GameSide>

        <SettingsSide data-testid="layout-settings-panel">
          <div style={{ visibility: "hidden", pointerEvents: "none" }}>
            <PageHeader>
              <PageTitle>Ghost</PageTitle>
              <PageSubtitle>Ghost</PageSubtitle>
            </PageHeader>
          </div>
          <SettingsCard>
            <SidebarTitle>⚙️ Game Rules</SidebarTitle>
            
            <ConfigSection>
              <ConfigSubTitle>Difficulty</ConfigSubTitle>
              {[
                { id: 1, label: "Single Digits (1-9)" },
                { id: 2, label: "Double Digits (10-99)" },
                { id: 3, label: "Triple Digits (100+)" },
              ].map((lvl) => (
                <OptionLabel key={lvl.id} $isActive={maxDigits === lvl.id}>
                  <input
                    type="radio"
                    name="difficulty"
                    checked={maxDigits === lvl.id}
                    onChange={() => setMaxDigits(lvl.id)}
                  />
                  {lvl.label}
                </OptionLabel>
              ))}
            </ConfigSection>

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <KidButton title="New Numbers" onClick={resetGame} variant="secondary" />
            </div>
          </SettingsCard>
        </SettingsSide>
      </GameLayout>
    </PageContainer>
  );
};

export default GreaterLessEqualGame;
