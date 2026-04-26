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
import { Eye } from "lucide-react";
import ChallengeHeader from "../../../components/ChallengeHeader";
import { SurpriseCard } from "../../../components/SurpriseCard";
import { senseOrgans } from "../../../constants/scienceData";
import { BigDisplay, EmojiDisplay, SubLabel } from "../../shared/learnStyles";

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
        <ChallengeHeader
          icon={Eye}
          title="Sense Organs"
          subtitle="Our 5 amazing sense organs!"
          streak={0}
        />

        <SurpriseCard
          title="Super Senses! 🦸‍♂️"
          subtitle="Your senses help you explore the world every day. Which is your favorite?"
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
              <SubLabel>{current.description}</SubLabel>
            </BigDisplay>
          </AnimatePresence>

          <NavControlBar>
            <PreviousIcon onClick={handlePrev} />
            <SpeakIcon text={`${current.name}. ${current.description}`} lang="en-US" />
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
              All 5 Senses
            </h4>
            <div
              style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}
            >
              {senseOrgans.map((organ, i) => (
                <Tag key={organ.name} $isActive={index === i} onClick={() => setIndex(i)}>
                  {organ.emoji} {organ.name}
                </Tag>
              ))}
            </div>
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Sense Facts! 🌟</ConfigSubTitle>
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

export default SenseOrgansPage;
