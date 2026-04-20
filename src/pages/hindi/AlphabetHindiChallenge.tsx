import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CenteredContainerHorizontally,
  PageContainer,
  Tag,
  TagList,
  SidebarTitle,
  HeaderArea,
  SettingsCard,
} from "../../theme/KidStyles";
import SpeakIcon from "../../components/SpeakIcon";
import NextIcon from "../../components/NextIcon";
import { KidoText } from "../../components/KidoText";
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
  font-size: 8rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  text-shadow: 0 10px 20px ${(props) => props.theme.colors.shadow};
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 5rem;
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
  const [randomString, setRandomString] = useState<string>("");

  const generateChallenge = () => {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    setRandomString(alphabet[randomIndex]);
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  const handleNext = () => {
    generateChallenge();
  };

  return (
    <PageContainer data-testid="page-hindi-alphabet">
      <GameLayout>
        <MainSide data-testid="layout-main-content">
          <HeaderArea>
            <KidoText fontSize="32px" color="primary" margin="0 0 10px" textAlign="center" width="100%" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <Languages size={32} strokeWidth={2.5} />
              Hindi Alphabet
            </KidoText>
          </HeaderArea>
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

            <CenteredContainerHorizontally style={{ marginTop: "20px" }}>
              <SpeakIcon text={randomString} lang="hi-IN" />
              <NextIcon onClick={handleNext} />
            </CenteredContainerHorizontally>
          </Card>
        </MainSide>

        <SidebarSide data-testid="layout-settings-panel">
          <HeaderArea style={{ visibility: "hidden" }}>
            <KidoText fontSize="32px" margin="0 0 10px">
              Hindi Alphabet
            </KidoText>
          </HeaderArea>
          <SettingsCard>
            <SidebarTitle>Pick a character:</SidebarTitle>
            <TagList style={{ gap: "10px" }}>
              {alphabet.map((tag, index) => (
                <Tag
                  key={index}
                  onClick={() => setRandomString(tag)}
                  style={{
                    background: randomString === tag ? "#00CEC9" : "",
                    borderColor: randomString === tag ? "#6C5CE7" : "transparent",
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
