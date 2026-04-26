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
import { Hash } from "lucide-react";
import ChallengeHeader from "../../../components/ChallengeHeader";
import { english100 } from "../../../constants/numbersData";
import { BigDisplay } from "../../shared/learnStyles";
import { SurpriseCard } from "../../../components/SurpriseCard";

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
        <ChallengeHeader
          icon={Hash}
          title="Numbers"
          subtitle="Learn to spell numbers 1 to 100!"
          streak={0}
        />

        <SurpriseCard
          title="Pro Tip! 💡"
          subtitle="Tap the speaker to hear how the number is spelled!"
        />

        <GameActivityArea data-testid="activity-area">
          <AnimatePresence mode="wait">
            <BigDisplay
              key={current.value}
              initial={{ y: 20, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 1.2 }}
              transition={{ type: "spring", damping: 12 }}
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

          <NavControlBar>
            <PreviousIcon onClick={handlePrev} />
            <SpeakIcon text={`${current.value}. ${current.spell}`} lang="en-US" />
            <NextIcon onClick={handleNext} />
          </NavControlBar>

          <div style={{ marginTop: "20px", width: "100%" }}>
            <h4
              style={{
                textAlign: "center",
                fontSize: "0.85rem",
                fontWeight: 700,
                marginBottom: "10px",
                color: "inherit",
              }}
            >
              Pick a Number (1-100)
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
                gap: "6px",
                maxHeight: "220px",
                overflowY: "auto",
                padding: "12px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "16px",
                width: "100%",
              }}
            >
              {english100.map((num, i) => (
                <Tag key={num.value} $isActive={index === i} onClick={() => setIndex(i)}>
                  {num.value}
                </Tag>
              ))}
            </div>
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Fun Facts! 🌟</ConfigSubTitle>
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

export default NumbersEnglishPage;
