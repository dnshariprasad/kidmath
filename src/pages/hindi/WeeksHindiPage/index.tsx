import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  PageContainer,
  Tag,
  SettingsArea,
  NavControlBar,
  GameLayout,
  GameActivityArea,
  ConfigSection,
  ConfigSubTitle,
} from "../../../theme/globalStyles";
import SpeakIcon from "../../../components/SpeakIcon";
import NextIcon from "../../../components/NextIcon";
import PreviousIcon from "../../../components/PreviousIcon";
import { Calendar } from "lucide-react";
import ChallengeHeader from "../../../components/ChallengeHeader";
import { SurpriseCard } from "../../../components/SurpriseCard";
import { hindiWeeks } from "../../../constants/weeksData";
import { BigDisplay, EmojiDisplay, SubLabel } from "../../shared/learnStyles";

const FACTS = [
  { emoji: "📅", fact: "सप्ताह में 7 दिन होते हैं। (7 days in a week)" },
  { emoji: "🗓️", fact: "महीने में 4 सप्ताह होते हैं। (4 weeks in a month)" },
  { emoji: "📆", fact: "साल में 52 सप्ताह होते हैं। (52 weeks in a year)" },
  { emoji: "☀️", fact: "सप्ताह रविवार से शुरू होता है। (Week starts on Sunday)" },
  { emoji: "🎉", fact: "शनिवार और रविवार सप्ताहांत हैं! (Sat & Sun are weekend!)" },
];

const WeeksHindiPage = () => {
  const [index, setIndex] = useState(0);
  const current = hindiWeeks[index];

  const handleNext = () => setIndex((p) => (p + 1) % hindiWeeks.length);
  const handlePrev = () => setIndex((p) => (p - 1 + hindiWeeks.length) % hindiWeeks.length);

  return (
    <PageContainer data-testid="view-weeks-hindi">
      <GameLayout>
        <ChallengeHeader
          icon={Calendar}
          title="सप्ताह के दिन"
          subtitle="Learn the 7 days of the week in Hindi!"
          streak={0}
        />

        <SurpriseCard
          title="प्रो टिप! 💡"
          subtitle="हर दिन का अपना महत्व है! रविवार छुट्टी का दिन होता है। (Every day is special!)"
        />

        <GameActivityArea data-testid="activity-area">
          <AnimatePresence mode="wait">
            <BigDisplay
              key={current.name}
              initial={{ y: 20, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 1.2 }}
              transition={{ type: "spring", damping: 12 }}
            >
              <EmojiDisplay>{current.emoji}</EmojiDisplay>
              {current.name}
              <SubLabel>{current.meaning}</SubLabel>
            </BigDisplay>
          </AnimatePresence>

          <NavControlBar>
            <PreviousIcon onClick={handlePrev} />
            <SpeakIcon text={current.name} lang="hi-IN" />
            <NextIcon onClick={handleNext} />
          </NavControlBar>

          <div style={{ marginTop: "20px" }}>
            <h4
              style={{
                textAlign: "center",
                fontSize: "0.85rem",
                fontWeight: 700,
                marginBottom: "10px",
                color: "inherit",
              }}
            >
              दिन चुनें (Pick a Day)
            </h4>
            <div
              style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}
            >
              {hindiWeeks.map((day, i) => (
                <Tag key={day.name} $isActive={index === i} onClick={() => setIndex(i)}>
                  {day.emoji} {day.short}
                </Tag>
              ))}
            </div>
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>क्या आप जानते हैं? 🌟</ConfigSubTitle>
            {FACTS.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "10px 0",
                  borderBottom: i < FACTS.length - 1 ? "1px dashed rgba(99,102,241,0.15)" : "none",
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{f.emoji}</span>
                <span>{f.fact}</span>
              </div>
            ))}
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default WeeksHindiPage;
