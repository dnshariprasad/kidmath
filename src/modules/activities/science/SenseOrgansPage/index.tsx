import { useState } from "react";
import { KidoText } from "../../../../components/KidoText";
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
import { Eye } from "lucide-react";
import ChallengeHeader from "../../../../components/ChallengeHeader";

import { senseOrgans } from "../../../../constants/scienceData";
import {
  BigDisplay,
  EmojiDisplay,
  SubLabel,
  DisplayWrapper,
  PulseCircle,
  SenseCard,
  SenseEmoji,
  SenseName,
  SenseDesc,
} from "../../shared/learnStyles";

const FACTS = [
  { emoji: "👁️", fact: "Humans blink about 15-20 times per minute!" },
  { emoji: "👂", fact: "Your ears never stop hearing, even when you sleep!" },
  { emoji: "👃", fact: "Your nose can remember 50,000 different scents." },
  { emoji: "👅", fact: "The tongue is the strongest muscle in the body!" },
  { emoji: "🤚", fact: "Fingertips are one of the most sensitive parts of the skin." },
];

const SenseOrgansPage = () => {
  const [index, setIndex] = useState(0);
  const current = senseOrgans[index];

  const handleNext = () => setIndex((p) => (p + 1) % senseOrgans.length);
  const handlePrev = () => setIndex((p) => (p - 1 + senseOrgans.length) % senseOrgans.length);

  return (
    <PageContainer data-testid="view-sense-organs">
      <GameLayout>
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={Eye}
            title="Sense Organs"
            subtitle="Our 5 amazing sense organs!"
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
                key={current.name}
                initial={{ scale: 0.2, opacity: 0, rotate: -10, y: 30 }}
                animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 10, y: -30 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <EmojiDisplay>{current.emoji}</EmojiDisplay>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <KidoText fontSize="lg" color="primary" fontWeight={900} $margin="0">
                    {current.name}
                  </KidoText>
                  <SubLabel>{current.description}</SubLabel>
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
              <SpeakIcon text={`${current.name}. ${current.description}`} lang="en-US" size={70} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NextIcon onClick={handleNext} />
            </motion.div>
          </NavControlBar>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
              maxWidth: "800px",
            }}
          >
            {senseOrgans.map((organ, i) => (
              <SenseCard
                key={organ.name}
                $isActive={index === i}
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SenseEmoji>{organ.emoji}</SenseEmoji>
                <SenseName>{organ.name}</SenseName>
                <SenseDesc $isActive={index === i}>
                  {(organ.description || "").split(" ")[0]} sense
                </SenseDesc>
              </SenseCard>
            ))}
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Sense Facts! 🌟</ConfigSubTitle>
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

export default SenseOrgansPage;
