import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  PageContainer,
  StyledInput,
  Tag,
  TagList,
  SidebarTitle,
  HeaderArea,
  SettingsCard,
  ControlBar,
} from "../../theme/KidStyles";
import SpeakIcon from "../../components/SpeakIcon";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import { Search } from "lucide-react";
import { readText } from "../../util/util";
import {
  getAllWords,
  getRandomWord,
  createMissingLetterWord,
  randomNumber,
} from "../../store/data/WordUtil";
import confetti from "canvas-confetti";

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

const SidebarSide = styled.div`
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

const MissingLettersChallenge = () => {
  const [randomString, setRandomString] = useState<string>("");
  const [randomStringWithMissingLetter, setRandomStringWithMissingLetter] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const generateChallenge = () => {
    let rs = getRandomWord(getAllWords());
    setRandomString(rs);
    setRandomStringWithMissingLetter(
      createMissingLetterWord(rs, randomNumber(rs.length))
    );
    setInputValue("");
    setFeedback(null);
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  const handleSubmit = () => {
    if (randomString.toLowerCase() === inputValue.toLowerCase()) {
      setFeedback({ message: "You got it! 🌟", isCorrect: true });
      readText("You got it");
      setHistory((prev) => [randomString, ...prev].slice(0, 5));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6C5CE7", "#00CEC9", "#FF7675"],
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
        <MainSide data-testid="layout-main-content">
          <HeaderArea>
            <KidoText fontSize="32px" color="primary" margin="0 0 10px" textAlign="center" width="100%" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <Search size={32} strokeWidth={2.5} />
              Missing Letters
            </KidoText>
          </HeaderArea>
          <Card style={{ textAlign: "center", minHeight: "450px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "none" }}>
            <div style={{ width: "100%", textAlign: "center", marginBottom: "30px" }}>
              <KidoText fontSize="clamp(3rem, 15vw, 6rem)" color="primary" fontWeight={900} style={{ letterSpacing: "8px", whiteSpace: "nowrap" }}>
                {randomStringWithMissingLetter}
              </KidoText>
            </div>
            
            <ControlBar>
              <StyledInput
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="?"
                width="160px"
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                autoFocus
              />
              <SpeakIcon text={randomString} />
              <KidButton title="Check Answer" onClick={handleSubmit} variant="success" />
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
        </MainSide>

        <SidebarSide data-testid="layout-settings-panel">
          <HeaderArea style={{ visibility: "hidden" }}>
            <KidoText fontSize="32px" margin="0 0 10px">
              Missing Letters
            </KidoText>
          </HeaderArea>
          <SettingsCard>
            <SidebarTitle>✅ Solved Recently:</SidebarTitle>
            <TagList>
              {history.length === 0 ? (
                <KidoText color="#636E72" fontSize="0.9rem">Start solving to see your list! ✍️</KidoText>
              ) : (
                history.map((word, index) => (
                  <Tag key={index}>{word}</Tag>
                ))
              )}
            </TagList>
            <div style={{ marginTop: "30px", textAlign: "center" }}>
              <KidButton title="New Challenge" onClick={generateChallenge} variant="secondary" />
            </div>
          </SettingsCard>
        </SidebarSide>
      </GameLayout>
    </PageContainer>
  );
};

export default MissingLettersChallenge;
