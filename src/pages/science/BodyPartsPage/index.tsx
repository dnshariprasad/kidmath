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
import { HeartPulse } from "lucide-react";
import ChallengeHeader from "../../../components/ChallengeHeader";
import { SurpriseCard } from "../../../components/SurpriseCard";
import { bodyParts, bodyPartsGroups } from "../../../constants/scienceData";
import { BigDisplay, EmojiDisplay, SubLabel } from "../../shared/learnStyles";

const FACTS = [
  { emoji: "🦴", fact: "Adults have 206 bones in their body!" },
  { emoji: "🧠", fact: "Your brain controls everything you do." },
  { emoji: "❤️", fact: "Your heart pumps blood all day and night." },
  { emoji: "💪", fact: "There are over 600 muscles in your body." },
  { emoji: "🦷", fact: "Enamel on your teeth is the hardest part of your body!" },
  { emoji: "🖐️", fact: "Your skin is the largest organ you have!" },
];

const BodyPartsPage = () => {
  const [index, setIndex] = useState(0);
  const current = bodyParts[index];

  const handleNext = () => setIndex((p) => (p + 1) % bodyParts.length);
  const handlePrev = () => setIndex((p) => (p - 1 + bodyParts.length) % bodyParts.length);

  const groupLabels = ["Head", "Torso", "Arms", "Legs"];

  return (
    <PageContainer data-testid="view-body-parts">
      <GameLayout>
        <ChallengeHeader
          icon={HeartPulse}
          title="Body Parts"
          subtitle="Learn the parts of our body!"
          streak={0}
        />

        <SurpriseCard
          title="Stay Healthy! 🍎"
          subtitle="Eat fruits and exercise every day to keep your body parts strong!"
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
              Pick a Body Part
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {bodyPartsGroups.map((group, gi) => (
                <div
                  key={gi}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      opacity: 0.5,
                      letterSpacing: "1px",
                    }}
                  >
                    {groupLabels[gi]}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {group.map((part) => {
                      const idx = bodyParts.findIndex(
                        (b) => b.name === part.name && b.description === part.description,
                      );
                      return (
                        <Tag
                          key={`${part.name}-${gi}`}
                          $isActive={index === idx}
                          onClick={() => setIndex(idx)}
                        >
                          {part.emoji} {part.name}
                        </Tag>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>Amazing Body Facts! 🌟</ConfigSubTitle>
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

export default BodyPartsPage;
