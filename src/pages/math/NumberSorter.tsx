import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { Puzzle, ArrowLeftRight, Hash, Layers, Plus, Minus } from "lucide-react";
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
} from "../../theme/KidStyles";
import { getRandomNumber, getMaxNumber } from "../../util/MathUtil";
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

const NumberPool = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin: 10px 0 20px;
  padding: 10px;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const BigNumber = styled(motion.div)`
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  text-shadow: 0 10px 20px ${(props) => props.theme.colors.shadow};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 15vw, 3.5rem);
    padding: 5px;
  }
`;

const SlotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin: 35px 0;
`;

const NumberSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SlotLabel = styled.span`
  font-size: 0.9rem;
  color: #636e72;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.primary};
`;

const ConfigSection = styled.div`
  margin-bottom: 20px;
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
  font-size: 0.9rem;

  &:hover {
    background: ${(props) => props.theme.colors.primary}08;
  }

  input {
    width: 18px;
    height: 18px;
    accent-color: ${(props) => props.theme.colors.primary};
  }
`;

export default function NumberSorter() {
  const dispatch = useDispatch();
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [maxDigits, setMaxDigits] = useState(1);
  const [numberSetSize, setNumberSetSize] = useState(4);
  const [order, setOrder] = useState<string>("ascending");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const generateNewSet = () => {
    const newNumbers = Array.from({ length: numberSetSize }, () =>
      getRandomNumber(getMaxNumber(maxDigits))
    );
    setNumbers(newNumbers);
    setUserInput(Array(numberSetSize).fill(""));
    setFeedback(null);
  };

  useEffect(() => {
    generateNewSet();
  }, [numberSetSize, maxDigits]);

  const handleChange = (index: number, value: string) => {
    const updatedInput = [...userInput];
    updatedInput[index] = value;
    setUserInput(updatedInput);
  };

  const checkSortedOrder = () => {
    const sortedNumbers =
      order === "ascending"
        ? [...numbers].sort((a, b) => a - b)
        : [...numbers].sort((a, b) => b - a);

    const userSorted = userInput
      .map((num) => parseInt(num, 10))
      .filter((num) => !isNaN(num));

    if (userSorted.length !== numbers.length) {
      setFeedback({ message: "Fill all boxes! 📝", isCorrect: false });
      return;
    }

    if (JSON.stringify(sortedNumbers) === JSON.stringify(userSorted)) {
      setFeedback({ message: "Perfect Sorting! 🌟", isCorrect: true });
      readText("Perfect Sorting");
      dispatch(incrementScore());
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#4F46E5", "#FF7675"],
      });
      setTimeout(generateNewSet, 2000);
    } else {
      setFeedback({ message: "Not quite right! 😅", isCorrect: false });
      readText("Try again");
      dispatch(resetStreak());
    }
  };

  return (
    <PageContainer data-testid="page-number-sorter">
      <GameLayout>
        <GameSide data-testid="layout-main-content">
          <PageHeader>
            <PageTitle>
              <Puzzle size={40} color="#6366F1" strokeWidth={2.5} />
              Number Sorter
            </PageTitle>
            <PageSubtitle>Drag and drop numbers to sort them in order!</PageSubtitle>
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
            <KidoText fontSize="22px" color="textSecondary" margin="0 0 10px">
              Sort these numbers in <strong>{order}</strong> order:
            </KidoText>

            <AnimatePresence mode="wait">
              <NumberPool key={numbers.join(",")}>
                {numbers.map((num, index) => (
                  <BigNumber
                    key={`${num}-${index}`}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: index * 0.1 }}
                  >
                    {num}
                  </BigNumber>
                ))}
                <ControlBar style={{ marginTop: "10px", width: "auto" }}>
                  {/* NextIcon removed, replaced by Skip button below */}
                </ControlBar>
              </NumberPool>
            </AnimatePresence>

            <SlotContainer>
              {userInput.map((value, index) => (
                <NumberSlot key={index}>
                  <SlotLabel>{index + 1}{index === 0 ? "st" : index === 1 ? "nd" : index === 2 ? "rd" : "th"}</SlotLabel>
                  <StyledInput
                    width="80px"
                    type="number"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    placeholder="?"
                  />
                </NumberSlot>
              ))}
            </SlotContainer>

            <div style={{ marginTop: "40px", width: "100%", display: "flex", justifyContent: "center", gap: "20px" }}>
              <KidButton title="Skip" onClick={generateNewSet} variant="secondary" />
              <KidButton title="Check Order" onClick={checkSortedOrder} variant="primary" />
            </div>

            <AnimatePresence>
              {feedback && (
                <motion.h2
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  style={{
                    color: feedback.isCorrect ? "#55EFC4" : "#FF7675",
                    marginTop: "25px",
                    fontSize: "2rem"
                  }}
                >
                  {feedback.message}
                </motion.h2>
              )}
            </AnimatePresence>
          </Card>
        </GameSide>

        <SettingsSide data-testid="layout-settings-panel">
          {/* Header gap synchronized with main content */}
          <div style={{ visibility: "hidden", pointerEvents: "none" }}>
            <PageHeader>
              <PageTitle>
                <Puzzle size={40} />
                Ghost
              </PageTitle>
              <PageSubtitle>Ghost</PageSubtitle>
              <SessionStats>
                <span style={{ fontSize: "1.8rem" }}>⭐</span>
              </SessionStats>
            </PageHeader>
          </div>
          <SettingsCard>
            <SidebarTitle>⚙️ Game Rules</SidebarTitle>
            
            <ConfigSection>
              <ConfigSubTitle>
                <ArrowLeftRight size={16} />
                Sorting Order
              </ConfigSubTitle>
              <OptionLabel $isActive={order === "ascending"}>
                <input
                  type="radio"
                  name="order"
                  checked={order === "ascending"}
                  onChange={() => setOrder("ascending")}
                />
                Smallest to Biggest (1, 2, 3)
              </OptionLabel>
              <OptionLabel $isActive={order === "descending"}>
                <input
                  type="radio"
                  name="order"
                  checked={order === "descending"}
                  onChange={() => setOrder("descending")}
                />
                Biggest to Smallest (3, 2, 1)
              </OptionLabel>
            </ConfigSection>

            <ConfigSection>
              <ConfigSubTitle>
                <Hash size={16} />
                Total Numbers
              </ConfigSubTitle>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", background: "#f8f9fa", padding: "10px", borderRadius: "12px" }}>
                <KidButton 
                  onClick={() => setNumberSetSize(prev => Math.max(2, prev - 1))} 
                  variant="secondary"
                  style={{ minWidth: "40px", height: "40px", padding: 0 }}
                >
                  <Minus size={18} />
                </KidButton>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <KidoText fontSize="1.1rem" fontWeight={700} color="primary">{numberSetSize}</KidoText>
                  <KidoText fontSize="0.7rem" color="textSecondary">Items</KidoText>
                </div>
                <KidButton 
                  onClick={() => setNumberSetSize(prev => Math.min(10, prev + 1))} 
                  variant="secondary"
                  style={{ minWidth: "40px", height: "40px", padding: 0 }}
                >
                  <Plus size={18} />
                </KidButton>
              </div>
            </ConfigSection>

            <ConfigSection>
              <ConfigSubTitle>
                <Layers size={16} />
                Max Digits
              </ConfigSubTitle>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", background: "#f8f9fa", padding: "10px", borderRadius: "12px" }}>
                <KidButton 
                  onClick={() => setMaxDigits(prev => Math.max(1, prev - 1))} 
                  variant="secondary"
                  style={{ minWidth: "40px", height: "40px", padding: 0 }}
                >
                  <Minus size={18} />
                </KidButton>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <KidoText fontSize="1.1rem" fontWeight={700} color="primary">{maxDigits}</KidoText>
                  <KidoText fontSize="0.7rem" color="textSecondary">{maxDigits === 1 ? "Digit" : "Digits"}</KidoText>
                </div>
                <KidButton 
                  onClick={() => setMaxDigits(prev => Math.min(5, prev + 1))} 
                  variant="secondary"
                  style={{ minWidth: "40px", height: "40px", padding: 0 }}
                >
                  <Plus size={18} />
                </KidButton>
              </div>
            </ConfigSection>
          </SettingsCard>
        </SettingsSide>
      </GameLayout>
    </PageContainer>
  );
}
