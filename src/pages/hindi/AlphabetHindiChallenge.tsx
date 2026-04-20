import { useState } from "react";
import styled, { useTheme } from "styled-components";
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
} from "../../theme/KidStyles";
import SpeakIcon from "../../components/SpeakIcon";
import NextIcon from "../../components/NextIcon";
import PreviousIcon from "../../components/PreviousIcon";
import { Languages } from "lucide-react";
import {
  cha,
  hindiCombinedCharacters,
  hindiVowels,
  kha,
  ta,
  tha,
  pa,
  ya,
  se,
} from "../../store/data/HindiAlphabet";

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

const HindiDisplay = styled(motion.div)`
  font-size: clamp(4rem, 20vw, 8rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  text-shadow: 0 10px 20px ${(props) => props.theme.colors.shadow};
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: clamp(3rem, 25vw, 5rem);
  }
`;

const alphabet = [
  ...hindiVowels,
  ...kha,
  ...cha,
  ...pa,
  ...se,
  ...ta,
  ...tha,
  ...ya,
  ...hindiCombinedCharacters,
];

const AlphabetHindiChallenge = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const randomString = alphabet[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % alphabet.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + alphabet.length) % alphabet.length);
  };

  return (
    <PageContainer data-testid="page-hindi-alphabet">
      <GameLayout>
        <MainSide data-testid="layout-main-content">
          <PageHeader>
            <PageTitle>
              <Languages size={40} color="#6366F1" strokeWidth={2.5} />
              Hindi Alphabet
            </PageTitle>
            <PageSubtitle>Explore the beautiful Hindi Varnamala!</PageSubtitle>
          </PageHeader>
          <Card style={{ textAlign: "center", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "none" }}>
            <AnimatePresence mode="wait">
              <HindiDisplay
                key={randomString}
                initial={{ y: 20, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -20, opacity: 0, scale: 1.2 }}
                transition={{ type: "spring", damping: 12 }}
              >
                {randomString}
              </HindiDisplay>
            </AnimatePresence>

            <ControlBar>
              <PreviousIcon onClick={handlePrev} />
              <SpeakIcon text={randomString} lang="hi-IN" />
              <NextIcon onClick={handleNext} />
            </ControlBar>
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
            <SidebarTitle>Pick a character:</SidebarTitle>
            <TagList style={{ gap: "10px" }}>
              {alphabet.map((tag, i) => (
                <Tag
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    background: index === i ? theme.colors.primary : "",
                    borderColor: index === i ? theme.colors.primary : "transparent",
                    color: index === i ? "white" : "",
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

export default AlphabetHindiChallenge;
