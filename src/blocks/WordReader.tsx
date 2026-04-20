import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
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
} from "../theme/KidStyles";
import SpeakIcon from "../components/SpeakIcon";
import NextIcon from "../components/NextIcon";
import PreviousIcon from "../components/PreviousIcon";
import { KidoText } from "../components/KidoText";
import { BookOpen } from "lucide-react";
import SentenceReader from "./SentenceReader";
import { getSentencesOfWord } from "../store/data/WordUtil";

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

const WordDisplay = styled(motion.div)`
  font-size: clamp(3rem, 15vw, 6rem);
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  text-shadow: 0 8px 16px ${(props) => props.theme.colors.shadow};
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 20vw, 4.5rem);
  }
`;

interface IWord {
  mame?: string;
  words?: string[];
  enabled?: boolean;
}

const WordReader = (props: IWord) => {
  const words = props.words || [];
  const [count, setCount] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const activeTab = scrollRef.current.children[count] as HTMLElement;
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [count]);

  if (words.length === 0) {
    return (
      <PageContainer>
        <KidoText fontSize="24px" color="textSecondary">
          No words found. Let's try another section! 🎈
        </KidoText>
      </PageContainer>
    );
  }

  const handleNext = () => {
    setCount((prev) => (prev + 1) % words.length);
  };

  const handlePrevious = () => {
    setCount((prev) => (prev - 1 + words.length) % words.length);
  };

  const currentWord = words[count];

  return (
    <PageContainer data-testid="page-sight-words">
      <GameLayout>
        <MainSide data-testid="layout-main-content">
          <PageHeader>
            <PageTitle>
              <BookOpen size={40} color="#6C5CE7" strokeWidth={2.5} />
              Sight Words
            </PageTitle>
            <PageSubtitle>Practice reading and speaking high-frequency words!</PageSubtitle>
          </PageHeader>
          <Card style={{ textAlign: "center", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "none" }}>
            <AnimatePresence mode="wait">
              <WordDisplay
                key={currentWord}
                initial={{ scale: 0.8, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 1.1, opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {currentWord}
              </WordDisplay>
            </AnimatePresence>

            <ControlBar>
              <PreviousIcon onClick={handlePrevious} />
              <SpeakIcon text={currentWord} />
              <NextIcon onClick={handleNext} />
            </ControlBar>

            <div style={{ marginTop: "40px", borderTop: "2px dashed #f0f0f0", paddingTop: "20px", width: "100%" }}>
              <SentenceReader sentence={getSentencesOfWord(currentWord)} />
            </div>
          </Card>
        </MainSide>

        <SidebarSide data-testid="layout-settings-panel">
          <div style={{ visibility: "hidden", pointerEvents: "none" }}>
            <PageHeader>
              <PageTitle>Ghost</PageTitle>
              <PageSubtitle>Ghost</PageSubtitle>
            </PageHeader>
          </div>
          <SettingsCard>
            <SidebarTitle>Pick a word:</SidebarTitle>
            <TagList style={{ gap: "10px" }}>
              {words.map((tag, index) => (
                <Tag
                  key={index}
                  onClick={() => setCount(index)}
                  style={{
                    background: count === index ? "#00CEC9" : "",
                    borderColor: count === index ? "#6C5CE7" : "transparent",
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </TagList>
          </SettingsCard>
        </SidebarSide>
      </GameLayout>
    </PageContainer>
  );
};

export default WordReader;
