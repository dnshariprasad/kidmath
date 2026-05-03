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
  teluguVowels,
  teluguConsonants,
  teluguCombined,
} from "../../../../constants/teluguAlphabet";
import { RootState } from "../../../../store/store";
import {
  TeluguDisplay,
  TeluguDisplayWrapper,
  DecorativeCircle,
  GridContainer,
  CharTile,
} from "./styles";
import ChallengeHeader from "../../../../components/ChallengeHeader";
import DifficultyPicker from "../../../../components/DifficultyPicker";
import { TRANSLATIONS } from "../../../../constants/translations";

const AlphabetTeluguChallenge = () => {
  const streak = useSelector(
    (state: RootState) => state.alphabet.gameStats?.alphabet_telugu?.streak ?? 0,
  );
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "vowels" | "consonants">("all");
  const t = TRANSLATIONS.en;

  const filteredAlphabet = useMemo(() => {
    if (filter === "vowels") return teluguVowels;
    if (filter === "consonants") return teluguConsonants;
    return teluguCombined;
  }, [filter]);

  const currentLetter = filteredAlphabet[index % filteredAlphabet.length];

  const handleNext = () => setIndex((prev) => (prev + 1) % filteredAlphabet.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + filteredAlphabet.length) % filteredAlphabet.length);

  const filterOptions = [
    { value: "all", label: "All Characters" },
    { value: "vowels", label: t.tel_achulu },
    { value: "consonants", label: t.tel_hallulu },
  ];

  return (
    <PageContainer data-testid="view-telugu">
      <GameLayout>
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={Languages}
            title={t.tel_title}
            subtitle={t.tel_subtitle}
            streak={streak}
          />
          <TeluguDisplayWrapper>
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
              <TeluguDisplay
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
              </TeluguDisplay>
            </AnimatePresence>
          </TeluguDisplayWrapper>

          <NavControlBar>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PreviousIcon onClick={handlePrev} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SpeakIcon text={currentLetter} lang="te-IN" size={70} />
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

export default AlphabetTeluguChallenge;
