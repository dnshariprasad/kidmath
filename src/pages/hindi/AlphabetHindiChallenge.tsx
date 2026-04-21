import { useState, useMemo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  ActivityArea,
  PageContainer,
  Tag,
  TagList,
  SettingsArea,
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
import { Languages } from "lucide-react";
import { SurpriseCard } from "../../components/SurpriseCard";
import { readText } from "../../util/util";
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
import { RootState } from "../../store/store";

const HindiDisplay = styled(motion.div)`
  font-size: clamp(4rem, 20vw, 10rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  text-shadow: 0 10px 20px ${(props) => props.theme.colors.shadow};
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: clamp(3rem, 25vw, 6rem);
  }
`;

const AlphabetHindiChallenge = () => {
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "vowels" | "consonants">("all");

  const filteredAlphabet = useMemo(() => {
    if (filter === "vowels") return hindiVowels;
    if (filter === "consonants") return [...kha, ...cha, ...pa, ...se, ...ta, ...tha, ...ya];
    return [
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
  }, [filter]);

  const currentLetter = filteredAlphabet[index % filteredAlphabet.length];

  const handleNext = () => setIndex((prev) => (prev + 1) % filteredAlphabet.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + filteredAlphabet.length) % filteredAlphabet.length);
  
  const handleFeelingLucky = () => {
    const randomIndex = Math.floor(Math.random() * filteredAlphabet.length);
    setIndex(randomIndex);
    readText("Hindi Surprise!");
  };

  return (
    <PageContainer data-testid="page-hindi-alphabet">
      <GameLayout>
        <TitleArea data-testid="title-area">
          <PageHeader>
            <PageTitle>
              <Languages size={40} color="#6366F1" strokeWidth={2.5} />
              Hindi Alphabet
            </PageTitle>
            <PageSubtitle>Explore the beautiful Hindi Varnamala!</PageSubtitle>
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
          title="Hindi surprise?"
          onShuffle={handleFeelingLucky}
        />

        <ActivityArea style={{ textAlign: "center", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <AnimatePresence mode="wait">
            <HindiDisplay
              key={currentLetter}
              initial={{ y: 20, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 1.2 }}
              transition={{ type: "spring", damping: 12 }}
            >
              {currentLetter}
            </HindiDisplay>
          </AnimatePresence>

          <NavControlBar>
            <PreviousIcon onClick={handlePrev} />
            <SpeakIcon text={currentLetter} lang="hi-IN" />
            <NextIcon onClick={handleNext} />
          </NavControlBar>
        </ActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Filter</ConfigSubTitle>
            {(["all", "vowels", "consonants"] as const).map((f) => (
              <OptionLabel key={f} $isActive={filter === f}>
                <input
                  type="radio"
                  name="filter"
                  checked={filter === f}
                  onChange={() => setFilter(f)}
                />
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </OptionLabel>
            ))}
          </ConfigSection>

          <ConfigSection>
            <ConfigSubTitle>Pick a Character</ConfigSubTitle>
            <TagList>
              {filteredAlphabet.map((char, i) => (
                <Tag
                  key={`${char}-${i}`}
                  $isActive={index === i}
                  onClick={() => setIndex(i)}
                >
                  {char}
                </Tag>
              ))}
            </TagList>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default AlphabetHindiChallenge;
