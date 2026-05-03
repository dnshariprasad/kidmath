import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  PageContainer,
  SettingsArea,
  NavControlBar,
  GameLayout,
  GameActivityArea,
  ConfigSection,
  ConfigSubTitle,
} from "../../../../theme/globalStyles";
import SpeakIcon from "../../../../components/SpeakIcon";
import NextIcon from "../../../../components/NextIcon";
import PreviousIcon from "../../../../components/PreviousIcon";
import { Hash } from "lucide-react";
import ChallengeHeader from "../../../../components/ChallengeHeader";
import { english100 } from "../../../../constants/numbersData";
import { BigDisplay, DisplayWrapper, PulseCircle } from "../../shared/learnStyles";
import { GridContainer, NumberTile } from "../AlphabetPage/styles";

const FACTS = [
  { emoji: "🔢", fact: "Numbers are everywhere!" },
  { emoji: "🍎", fact: "Counting is the first step in Math." },
  { emoji: "✨", fact: "Zero is a very important number!" },
  { emoji: "🚀", fact: "We can count to infinity!" },
];

const NumbersEnglishPage = () => {
  const [index, setIndex] = useState(0);
  const current = english100[index];

  const handleNext = () => setIndex((p) => (p + 1) % english100.length);
  const handlePrev = () => setIndex((p) => (p - 1 + english100.length) % english100.length);

  return (
    <PageContainer data-testid="view-numbers-english">
      <GameLayout>
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={Hash}
            title="Numbers"
            subtitle="Learn to spell numbers 1 to 100!"
            streak={0}
          />
          <DisplayWrapper>
            <PulseCircle
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
              <BigDisplay
                key={current.value}
                initial={{ scale: 0.2, opacity: 0, rotate: -10, y: 30 }}
                animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 10, y: -30 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div style={{ fontSize: "min(10rem, 25vw)", marginBottom: "-10px" }}>
                  {current.value}
                </div>
                <div
                  style={{
                    fontSize: "min(4rem, 9vw)",
                    fontWeight: 900,
                    color: "#6366F1",
                    textAlign: "center",
                  }}
                >
                  {current.spell}
                </div>
              </BigDisplay>
            </AnimatePresence>
          </DisplayWrapper>

          <NavControlBar>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PreviousIcon onClick={handlePrev} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SpeakIcon text={`${current.value}. ${current.spell}`} lang="en-US" size={70} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NextIcon onClick={handleNext} />
            </motion.div>
          </NavControlBar>

          <GridContainer>
            {english100.map((num, i) => (
              <NumberTile
                key={num.value}
                $isActive={index === i}
                onClick={() => setIndex(i)}
                whileTap={{ scale: 0.9 }}
              >
                {num.value}
              </NumberTile>
            ))}
          </GridContainer>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Fun Facts! 🌟</ConfigSubTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {FACTS.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "12px",
                    background: i % 2 === 0 ? "rgba(99,102,241,0.03)" : "transparent",
                    borderRadius: "12px",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{f.emoji}</span>
                  <span>{f.fact}</span>
                </div>
              ))}
            </div>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default NumbersEnglishPage;
