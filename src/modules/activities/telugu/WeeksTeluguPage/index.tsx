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
  Tag,
} from "../../../../theme/globalStyles";
import SpeakIcon from "../../../../components/SpeakIcon";
import NextIcon from "../../../../components/NextIcon";
import PreviousIcon from "../../../../components/PreviousIcon";
import { Calendar } from "lucide-react";
import ChallengeHeader from "../../../../components/ChallengeHeader";

import { teluguWeeks } from "../../../../constants/weeksData";
import {
  BigDisplay,
  EmojiDisplay,
  SubLabel,
  DisplayWrapper,
  PulseCircle,
} from "../../shared/learnStyles";

const FACTS = [
  { emoji: "📅", fact: "వారంలో 7 రోజులు ఉంటాయి. (7 days in a week)" },
  { emoji: "🗓️", fact: "నెలలో 4 వారాలు ఉంటాయి. (4 weeks in a month)" },
  { emoji: "📆", fact: "సంవత్సరంలో 52 వారాలు ఉంటాయి. (52 weeks in a year)" },
  { emoji: "☀️", fact: "వారం ఆదివారంతో ప్రారంభమవుతుంది. (Week starts on Sunday)" },
  { emoji: "🎉", fact: "శని మరియు ఆది వారాంతాలు! (Sat & Sun are weekend!)" },
];

const WeeksTeluguPage = () => {
  const [index, setIndex] = useState(0);
  const current = teluguWeeks[index];

  const handleNext = () => setIndex((p) => (p + 1) % teluguWeeks.length);
  const handlePrev = () => setIndex((p) => (p - 1 + teluguWeeks.length) % teluguWeeks.length);

  return (
    <PageContainer data-testid="view-weeks-telugu">
      <GameLayout>
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={Calendar}
            title="వారాల పేర్లు"
            subtitle="Learn the 7 days of the week in Telugu!"
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
                  <SubLabel>{current.meaning}</SubLabel>
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
              <SpeakIcon text={current.name} lang="te-IN" size={70} />
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
              maxWidth: "600px",
            }}
          >
            {teluguWeeks.map((day, i) => (
              <Tag key={day.name} $isActive={index === i} onClick={() => setIndex(i)}>
                {day.emoji} {day.short}
              </Tag>
            ))}
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>తెలుసా? 🌟</ConfigSubTitle>
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

export default WeeksTeluguPage;
