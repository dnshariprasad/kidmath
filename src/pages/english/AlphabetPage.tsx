import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  ActivityArea,
  SettingsArea,
  PageContainer,
  Tag,
  TagList,
  NavControlBar,
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
import SpeakIcon from "../../components/SpeakIcon";
import NextIcon from "../../components/NextIcon";
import PreviousIcon from "../../components/PreviousIcon";
import { Type } from "lucide-react";
import { SurpriseCard } from "../../components/SurpriseCard";
import { readText } from "../../util/util";
import { RootState } from "../../store/store";

const BigLetter = styled(motion.div)`
  font-size: clamp(12rem, 30vw, 24rem);
  font-weight: 900;
  color: #6366f1;
  text-shadow: 
    0 10px 0 #4f46e5,
    0 20px 30px rgba(99, 102, 241, 0.3);
  margin-bottom: 20px;
  font-family: ${(props) => props.theme.fonts.primary};
`;

const AlphabetPage = () => {
  const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [index, setIndex] = useState(0);
  const [letterCase, setLetterCase] = useState<"big" | "small">("big");
  
  const currentLetterData = big[index];
  const currentLetter = letterCase === "big" ? currentLetterData : currentLetterData.toLowerCase();

  const handleNext = () => setIndex((prev) => (prev + 1) % big.length);
  const handlePrevious = () => setIndex((prev) => (prev - 1 + big.length) % big.length);
  
  const handleFeelingLucky = () => {
    const randomIndex = Math.floor(Math.random() * big.length);
    setIndex(randomIndex);
    readText("Alphabet Surprise!");
  };

  return (
    <PageContainer data-testid="page-alphabet">
      <GameLayout>
        <TitleArea data-testid="title-area">
          <PageHeader>
            <PageTitle>
              <Type size={40} color="#6366F1" strokeWidth={2.5} />
              ABC Alphabet
            </PageTitle>
            <PageSubtitle>Learn letters and phonics with fun!</PageSubtitle>
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
          title="Ready for a surprise?"
          onShuffle={handleFeelingLucky}
        />

        <ActivityArea data-testid="activity-area" style={{ textAlign: "center", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
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

          <NavControlBar>
            <PreviousIcon onClick={handlePrevious} />
            <SpeakIcon text={currentLetter} />
            <NextIcon onClick={handleNext} />
          </NavControlBar>
        </ActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Letter Case</ConfigSubTitle>
            <OptionLabel $isActive={letterCase === "big"}>
              <input
                type="radio"
                name="case"
                checked={letterCase === "big"}
                onChange={() => setLetterCase("big")}
              />
              BIG LETTERS (A)
            </OptionLabel>
            <OptionLabel $isActive={letterCase === "small"}>
              <input
                type="radio"
                name="case"
                checked={letterCase === "small"}
                onChange={() => setLetterCase("small")}
              />
              small letters (a)
            </OptionLabel>
          </ConfigSection>

          <ConfigSection>
            <ConfigSubTitle>Pick a Letter</ConfigSubTitle>
            <TagList>
              {big.map((letter, i) => (
                <Tag
                  key={letter}
                  $isActive={index === i}
                  onClick={() => setIndex(i)}
                >
                  {letter}
                </Tag>
              ))}
            </TagList>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default AlphabetPage;
