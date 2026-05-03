import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { AnimatePresence, motion } from "framer-motion";
import {
  SettingsArea,
  PageContainer,
  NavControlBar,
  GameLayout,
  GameActivityArea,
} from "../../../../theme/globalStyles";
import SpeakIcon from "../../../../components/SpeakIcon";
import NextIcon from "../../../../components/NextIcon";
import PreviousIcon from "../../../../components/PreviousIcon";
import { Type } from "lucide-react";

import {
  BigLetter,
  LetterDisplayWrapper,
  DecorativeCircle,
  GridContainer,
  LetterTile,
} from "./styles";
import ChallengeHeader from "../../../../components/ChallengeHeader";
import DifficultyPicker from "../../../../components/DifficultyPicker";

const BIG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetPage = () => {
  const streak = useSelector((state: RootState) => state.alphabet.gameStats?.alphabet?.streak ?? 0);
  const [index, setIndex] = useState(0);
  const [letterCase, setLetterCase] = useState<"big" | "small">("big");

  const currentLetterData = BIG[index];
  const currentLetter = letterCase === "big" ? currentLetterData : currentLetterData.toLowerCase();

  const handleNext = () => setIndex((prev) => (prev + 1) % BIG.length);
  const handlePrevious = () => setIndex((prev) => (prev - 1 + BIG.length) % BIG.length);

  const caseOptions = [
    { value: "big", label: "BIG LETTERS (A)" },
    { value: "small", label: "small letters (a)" },
  ];

  return (
    <PageContainer data-testid="view-alphabet">
      <GameLayout>
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={Type}
            title="ABC Alphabet"
            subtitle="Learn letters and phonics with fun!"
            streak={streak}
          />
          <LetterDisplayWrapper>
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
              <BigLetter
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
              </BigLetter>
            </AnimatePresence>
          </LetterDisplayWrapper>

          <NavControlBar>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PreviousIcon onClick={handlePrevious} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SpeakIcon text={currentLetter} size={70} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NextIcon onClick={handleNext} />
            </motion.div>
          </NavControlBar>

          <GridContainer>
            {BIG.map((letter, idx) => (
              <LetterTile
                key={letter}
                $isActive={index === idx}
                onClick={() => setIndex(idx)}
                whileTap={{ scale: 0.9 }}
              >
                {letterCase === "big" ? letter : letter.toLowerCase()}
              </LetterTile>
            ))}
          </GridContainer>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            title="Letter Case"
            name="case"
            options={caseOptions}
            currentValue={letterCase}
            onChange={(val) => setLetterCase(val as "big" | "small")}
          />
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default AlphabetPage;
