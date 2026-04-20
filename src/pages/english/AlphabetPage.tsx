import { useState } from "react";
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
} from "../../theme/KidStyles";
import SpeakIcon from "../../components/SpeakIcon";
import NextIcon from "../../components/NextIcon";
import PreviousIcon from "../../components/PreviousIcon";
import { Type, ArrowLeftRight } from "lucide-react";
import { big, small } from "../../store/data/Alphabet";

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

  &:hover {
    background: rgba(108, 92, 231, 0.05);
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
  }
`;

const SidebarSide = styled.div`
  flex: 1;
  width: 100%;
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  /* Precisely calculated: 32px * 1.5 (line-height) + 20px (margin) = 68px */
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

const BigLetter = styled(motion.div)`
  font-size: clamp(5rem, 15vw, 12rem);
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
    font-size: clamp(4rem, 20vw, 8rem);
  }
`;

const AlphabetPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUppercase, setIsUppercase] = useState(true);

  const alphabetData = isUppercase ? big : small;

  const nextLetter = () => {
    setCurrentIndex((prev) => (prev + 1) % alphabetData.length);
  };

  const prevLetter = () => {
    setCurrentIndex((prev) => (prev - 1 + alphabetData.length) % alphabetData.length);
  };

  const currentLetter = alphabetData[currentIndex];

  return (
    <PageContainer data-testid="page-alphabet">
      <GameLayout>
        <MainSide data-testid="layout-main-content">
          <PageHeader>
            <PageTitle>
              <Type size={40} color="#6C5CE7" strokeWidth={2.5} />
              ABC Alphabet
            </PageTitle>
            <PageSubtitle>Learn letters and phonics with fun!</PageSubtitle>
          </PageHeader>
          <Card style={{ textAlign: "center", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "none" }}>
            <AnimatePresence mode="wait">
              <BigLetter
                key={currentLetter}
                initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {currentLetter}
              </BigLetter>
            </AnimatePresence>

            <ControlBar>
              <PreviousIcon onClick={prevLetter} />
              <SpeakIcon text={currentLetter} />
              <NextIcon onClick={nextLetter} />
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
            <ConfigSection>
              <ConfigSubTitle>
                <ArrowLeftRight size={16} />
                Letter Case
              </ConfigSubTitle>
              <OptionLabel $isActive={isUppercase}>
                <input
                  type="radio"
                  name="case"
                  checked={isUppercase}
                  onChange={() => setIsUppercase(true)}
                />
                BIG LETTERS (A)
              </OptionLabel>
              <OptionLabel $isActive={!isUppercase}>
                <input
                  type="radio"
                  name="case"
                  checked={!isUppercase}
                  onChange={() => setIsUppercase(false)}
                />
                small letters (a)
              </OptionLabel>
            </ConfigSection>

            <SidebarTitle>Pick a Letter:</SidebarTitle>
            <TagList style={{ gap: "10px" }}>
              {alphabetData.map((letter: string, index: number) => (
                <Tag
                  key={letter}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    background: currentIndex === index ? "#00CEC9" : "",
                    borderColor: currentIndex === index ? "#6C5CE7" : "transparent",
                  }}
                >
                  {letter}
                </Tag>
              ))}
            </TagList>
          </SettingsCard>
        </SidebarSide>
      </GameLayout>
    </PageContainer>
  );
};

export default AlphabetPage;
