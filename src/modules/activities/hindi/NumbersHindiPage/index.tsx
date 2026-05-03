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
import { hindi100 } from "../../../../constants/numbersData";
import { BigDisplay, DisplayWrapper, PulseCircle } from "../../shared/learnStyles";
import { GridContainer, NumberTile } from "../../english/AlphabetPage/styles";

const FACTS = [
  { emoji: "🔢", fact: "Counting is fun in every language!" },
  { emoji: "🇮🇳", fact: "Zero (Shunya) was invented in India!" },
  { emoji: "🎈", fact: "Each number has a special name and sound." },
  { emoji: "🚀", fact: "We can count all the way to 100!" },
];

const NumbersHindiPage = () => {
  const [index, setIndex] = useState(0); // 0 to 99
  const current = hindi100[index];

  const handleNext = () => setIndex((p) => (p + 1) % 100);
  const handlePrev = () => setIndex((p) => (p - 1 + 100) % 100);

  return (
    <PageContainer data-testid="view-numbers-hindi">
      <GameLayout>
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={Hash}
            title="गिनती (1-100)"
            subtitle="Learn Hindi numbers and spellings!"
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
                key={index}
                initial={{ scale: 0.2, opacity: 0, rotate: -10, y: 30 }}
                animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 10, y: -30 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div style={{ fontSize: "min(10rem, 25vw)", marginBottom: "-10px" }}>
                  {current.id}
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
              <SpeakIcon text={current.spell} lang="hi-IN" size={70} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NextIcon onClick={handleNext} />
            </motion.div>
          </NavControlBar>

          <GridContainer>
            {hindi100.map((num, i) => (
              <NumberTile
                key={num.id}
                $isActive={index === i}
                onClick={() => setIndex(i)}
                whileTap={{ scale: 0.9 }}
              >
                {num.id}
              </NumberTile>
            ))}
          </GridContainer>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>क्या आप जानते हैं? 🌟</ConfigSubTitle>
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

export default NumbersHindiPage;
