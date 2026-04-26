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
import { hindi100 } from "../../../constants/numbersData";
import { BigDisplay } from "../../shared/learnStyles";
import { SurpriseCard } from "../../../components/SurpriseCard";

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
        <ChallengeHeader
          icon={Hash}
          title="गिनती (1-100)"
          subtitle="Learn Hindi numbers and spellings!"
          streak={0}
        />

        <SurpriseCard
          title="प्रो टिप! 💡"
          subtitle="गिनती सुनने के लिए स्पीकर पर टैप करें! (Tap speaker to hear counting!)"
        />

        <GameActivityArea data-testid="activity-area">
          <AnimatePresence mode="wait">
            <BigDisplay
              key={index}
              initial={{ y: 20, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 1.2 }}
              transition={{ type: "spring", damping: 12 }}
            >
              <div style={{ fontSize: "min(10rem, 25vw)", marginBottom: "-10px" }}>
                {current.id}
              </div>
              <div
                style={{
                  fontSize: "min(3.5rem, 8vw)",
                  fontWeight: 800,
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
            <SpeakIcon text={current.spell} lang="hi-IN" />
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
              गिनती चुनें (1-100)
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
              {hindi100.map((num, i) => (
                <Tag key={num.id} $isActive={index === i} onClick={() => setIndex(i)}>
                  {num.id}
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

export default NumbersHindiPage;
