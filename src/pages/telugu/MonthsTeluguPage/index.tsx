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
import { englishMonthsTelugu, englishMonthsTeluguGroups } from "../../../constants/monthsData";
import { BigDisplay, EmojiDisplay, SubLabel } from "../../shared/learnStyles";

const FACTS = [
  { emoji: "📅", fact: "సంవత్సరంలో 12 నెలలు ఉంటాయి. (12 months in a year)" },
  { emoji: "❄️", fact: "జనవరి మొదటి నెల. (January is the first month)" },
  { emoji: "🎄", fact: "డిసెంబర్ చివరి నెల. (December is the last month)" },
  { emoji: "🗓️", fact: "కొన్ని నెలల్లో 30, మరికొన్నింటిలో 31 రోజులు ఉంటాయి. (30 or 31 days)" },
];

const MonthsTeluguPage = () => {
  const [index, setIndex] = useState(0);
  const current = englishMonthsTelugu[index];

  const handleNext = () => setIndex((p) => (p + 1) % englishMonthsTelugu.length);
  const handlePrev = () =>
    setIndex((p) => (p - 1 + englishMonthsTelugu.length) % englishMonthsTelugu.length);

  return (
    <PageContainer data-testid="view-months-telugu">
      <GameLayout>
        <ChallengeHeader
          icon={CalendarDays}
          title="నెలల పేర్లు"
          subtitle="Learn the 12 months in Telugu!"
          streak={0}
        />

        <SurpriseCard
          title="నిజం! 🗓️"
          subtitle="సంవత్సరానికి 12 నెలలు ఉంటాయి. ప్రతి నెలా ఒక ప్రత్యేకత ఉంటుంది! (12 months in a year!)"
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
            <SpeakIcon text={current.name} lang="te-IN" />
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
              నెలను ఎంచుకోండి (Pick a Month)
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}
            >
              {englishMonthsTeluguGroups.map((group, gi) => (
                <div key={gi} style={{ display: "flex", gap: "6px" }}>
                  {group.map((m) => (
                    <Tag
                      key={m.name}
                      $isActive={index === m.num - 1}
                      onClick={() => setIndex(m.num - 1)}
                    >
                      {m.emoji} {m.name}
                    </Tag>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>తెలుసా? 🌟</ConfigSubTitle>
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

export default MonthsTeluguPage;
