import { useState, useMemo } from "react";

import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import {
  PageContainer,
  SettingsArea,
  NavControlBar,
  GameLayout,
  GameActivityArea,
} from "../../../../theme/globalStyles";
import SpeakIcon from "../../../../components/SpeakIcon";
import NextIcon from "../../../../components/NextIcon";
import PreviousIcon from "../../../../components/PreviousIcon";
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
} from "../../../../constants/hindiAlphabet";
import { RootState } from "../../../../store/store";
import {
  HindiDisplay,
  HindiDisplayWrapper,
  DecorativeCircle,
  GridContainer,
  CharTile,
} from "./styles";
import ChallengeHeader from "../../../../components/ChallengeHeader";
import DifficultyPicker from "../../../../components/DifficultyPicker";

const AlphabetHindiChallenge = () => {
  const streak = useSelector(
    (state: RootState) => state.alphabet.gameStats?.alphabet_hindi?.streak ?? 0,
  );
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
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + filteredAlphabet.length) % filteredAlphabet.length);

  const filterOptions = [
    { value: "all", label: "All Characters" },
    { value: "vowels", label: "Vowels (Svar)" },
    { value: "consonants", label: "Consonants (Vyanjan)" },
  ];

  return (
    <PageContainer data-testid="view-hindi">
      <GameLayout>
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={Languages}
            title="Hindi Alphabet"
            subtitle="Explore the beautiful Hindi Varnamala!"
            streak={streak}
          />
          <HindiDisplayWrapper>
            <DecorativeCircle
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <AnimatePresence mode="wait">
              <HindiDisplay
                key={currentLetter}
                initial={{ scale: 0.2, opacity: 0, rotate: -20, y: 40 }}
                animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 20, y: -40 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                {currentLetter}
              </HindiDisplay>
            </AnimatePresence>
          </HindiDisplayWrapper>

          <NavControlBar>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PreviousIcon onClick={handlePrev} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SpeakIcon text={currentLetter} lang="hi-IN" size={70} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NextIcon onClick={handleNext} />
            </motion.div>
          </NavControlBar>

          <GridContainer>
            {filteredAlphabet.map((char, idx) => (
              <CharTile
                key={char}
                $isActive={index === idx}
                onClick={() => setIndex(idx)}
                whileTap={{ scale: 0.9 }}
              >
                {char}
              </CharTile>
            ))}
          </GridContainer>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            title="Filter"
            name="filter"
            options={filterOptions}
            currentValue={filter}
            onChange={(val) => setFilter(val as "all" | "vowels" | "consonants")}
          />
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default AlphabetHindiChallenge;
