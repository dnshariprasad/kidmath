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
import { englishWeeks } from "../../../constants/weeksData";
import { BigDisplay, EmojiDisplay, SubLabel } from "../../shared/learnStyles";

const FACTS = [
  { emoji: "📅", fact: "There are 7 days in a week." },
  { emoji: "🗓️", fact: "4 weeks make 1 month." },
  { emoji: "📆", fact: "52 weeks make 1 year." },
  { emoji: "☀️", fact: "The week starts on Sunday." },
  { emoji: "🎉", fact: "Saturday and Sunday are the weekend!" },
];

const WeeksPage = () => {
  const [index, setIndex] = useState(0);
  const current = englishWeeks[index];

  const handleNext = () => setIndex((p) => (p + 1) % englishWeeks.length);
  const handlePrev = () => setIndex((p) => (p - 1 + englishWeeks.length) % englishWeeks.length);

  return (
    <PageContainer data-testid="view-weeks-english">
      <GameLayout>
        <ChallengeHeader
          icon={Calendar}
          title="Days of the Week"
          subtitle="Learn the 7 days of the week!"
          streak={0}
        />

        <SurpriseCard
          title="Fun Fact! 📅"
          subtitle="There are 7 days in a week and 52 weeks in a year!"
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
              <SubLabel>{current.short}</SubLabel>
            </BigDisplay>
          </AnimatePresence>

          <NavControlBar>
            <PreviousIcon onClick={handlePrev} />
            <SpeakIcon text={current.name} lang="en-US" />
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
              Pick a Day
            </h4>
            <div
              style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}
            >
              {englishWeeks.map((day, i) => (
                <Tag key={day.name} $isActive={index === i} onClick={() => setIndex(i)}>
                  {day.emoji} {day.short}
                </Tag>
              ))}
            </div>
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Did You Know? 🌟</ConfigSubTitle>
            {FACTS.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "10px 0",
                  borderBottom: i < FACTS.length - 1 ? "1px dashed rgba(99,102,241,0.15)" : "none",
                  fontSize: "0.85rem",
                  lineHeight: 1.5,
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

export default WeeksPage;
