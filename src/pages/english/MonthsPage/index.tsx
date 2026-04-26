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
import { CalendarDays } from "lucide-react";
import ChallengeHeader from "../../../components/ChallengeHeader";
import { SurpriseCard } from "../../../components/SurpriseCard";
import { englishMonths, monthGroups } from "../../../constants/monthsData";
import { BigDisplay, EmojiDisplay, SubLabel } from "../../shared/learnStyles";

const FACTS = [
  { emoji: "📅", fact: "There are 12 months in a year." },
  { emoji: "🗓️", fact: "Most months have 30 or 31 days." },
  { emoji: "💝", fact: "February has 28 days (29 in a leap year!)." },
  { emoji: "📆", fact: "365 days make 1 year." },
  { emoji: "🌍", fact: "366 days make a Leap Year!" },
];

const MonthsPage = () => {
  const [index, setIndex] = useState(0);
  const current = englishMonths[index];

  const handleNext = () => setIndex((p) => (p + 1) % englishMonths.length);
  const handlePrev = () => setIndex((p) => (p - 1 + englishMonths.length) % englishMonths.length);

  return (
    <PageContainer data-testid="view-months-english">
      <GameLayout>
        <ChallengeHeader
          icon={CalendarDays}
          title="Months of the Year"
          subtitle="Learn all 12 months of the year!"
          streak={0}
        />

        <SurpriseCard
          title="Great Job! 🌟"
          subtitle="A year has 12 months. Each month has its own season and special days!"
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
              <SubLabel>
                Month {current.num} · {current.short}
              </SubLabel>
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
              Pick a Month
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}
            >
              {monthGroups.map((group, gi) => (
                <div key={gi} style={{ display: "flex", gap: "6px" }}>
                  {group.map((m) => (
                    <Tag
                      key={m.name}
                      $isActive={index === m.num - 1}
                      onClick={() => setIndex(m.num - 1)}
                    >
                      {m.emoji} {m.short}
                    </Tag>
                  ))}
                </div>
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

export default MonthsPage;
