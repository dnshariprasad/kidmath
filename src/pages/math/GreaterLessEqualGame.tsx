import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { Scale } from "lucide-react";
import { SurpriseCard } from "../../components/SurpriseCard";
import {
  ActivityArea,
  PageContainer,
  SettingsArea,
  ControlBar,
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
import { readText } from "../../util/util";
import { incrementScore, resetStreak } from "../../store/slice/AlphabetSlice";
import confetti from "canvas-confetti";
import { getRandomNumber, getMaxNumber } from "../../util/MathUtil";
import { RootState } from "../../store/store";

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

export const GreaterLessEqualGame: React.FC = () => {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
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

  const handleFeelingLucky = () => {
    const randomDigits = Math.floor(Math.random() * 3) + 1;
    setMaxDigits(randomDigits);
    readText("Greater Less Surprise!");
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
        colors: ["#6366F1", "#4F46E5", "#FF7675"],
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
        <TitleArea data-testid="title-area">
          <PageHeader>
            <PageTitle>
              <Scale size={40} color="#6366F1" strokeWidth={2.5} />
              Big or Small?
            </PageTitle>
            <PageSubtitle>Compare the numbers and pick the right sign!</PageSubtitle>
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
          title="Size surprise?"
          onShuffle={handleFeelingLucky}
        />

        <ActivityArea style={{ textAlign: "center", minHeight: "450px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <AnimatePresence mode="wait">
            <NumberDisplay
              key={`${num1}-${num2}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
            >
              <span>{num1}</span>
              <span style={{ color: "#dfe6e9", width: "80px", textAlign: "center" }}>?</span>
              <span>{num2}</span>
            </NumberDisplay>
          </AnimatePresence>

          <ControlBar>
            <KidButton 
              title="<" 
              onClick={() => handleChoice("less")} 
              variant="secondary" 
              style={{ fontSize: "2.5rem", width: "80px", height: "80px" }}
            />
            <KidButton 
              title="=" 
              onClick={() => handleChoice("equal")} 
              variant="secondary" 
              style={{ fontSize: "2.5rem", width: "80px", height: "80px" }}
            />
            <KidButton 
              title=">" 
              onClick={() => handleChoice("greater")} 
              variant="secondary" 
              style={{ fontSize: "2.5rem", width: "80px", height: "80px" }}
            />
          </ControlBar>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                style={{ marginTop: "20px" }}
              >
                <KidoText color={feedback.isCorrect ? "success" : "accent"} fontSize="1.5rem" fontWeight="bold">
                  {feedback.message}
                </KidoText>
              </motion.div>
            )}
          </AnimatePresence>
        </ActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Difficulty</ConfigSubTitle>
            {[1, 2, 3].map((digits) => (
              <OptionLabel key={digits} $isActive={maxDigits === digits}>
                <input
                  type="radio"
                  name="digits"
                  checked={maxDigits === digits}
                  onChange={() => setMaxDigits(digits)}
                />
                {digits === 1 ? "Numbers to 9" : digits === 2 ? "Numbers to 99" : "Numbers to 999"}
              </OptionLabel>
            ))}
          </ConfigSection>

          <ConfigSection>
            <ConfigSubTitle>Quick Tips</ConfigSubTitle>
            <div style={{ padding: "15px", background: "rgba(99, 102, 241, 0.05)", borderRadius: "15px" }}>
              <KidoText fontSize="0.9rem" color="textSecondary">
                • <b>{">"}</b> means GREATER than<br/>
                • <b>{"<"}</b> means LESS than<br/>
                • <b>{"="}</b> means EQUAL to
              </KidoText>
            </div>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default GreaterLessEqualGame;
