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
import { Shapes } from "lucide-react";
import ChallengeHeader from "../../../components/ChallengeHeader";
import { SurpriseCard } from "../../../components/SurpriseCard";
import { shapesData, shapes2D, shapes3D } from "../../../constants/shapesData";
import { BigDisplay, EmojiDisplay, SubLabel } from "../../shared/learnStyles";

const FACTS = [
  { emoji: "⭕", fact: "2D shapes are flat, like a drawing on paper." },
  { emoji: "🧊", fact: "3D shapes are solid, like a toy or a ball." },
  { emoji: "⚽", fact: "A sphere is a perfectly round 3D shape." },
  { emoji: "🟦", fact: "A square has 4 equal sides." },
  { emoji: "📦", fact: "A cuboid is like a 3D rectangle (like a brick)." },
  { emoji: "⬡", fact: "A hexagon has 6 sides — like a honeycomb!" },
];

const ShapesPage = () => {
  const [index, setIndex] = useState(0);
  const current = shapesData[index];

  const handleNext = () => setIndex((p) => (p + 1) % shapesData.length);
  const handlePrev = () => setIndex((p) => (p - 1 + shapesData.length) % shapesData.length);

  return (
    <PageContainer data-testid="view-shapes">
      <GameLayout>
        <ChallengeHeader
          icon={Shapes}
          title="Shapes (2D & 3D)"
          subtitle="Explore flat and solid shapes!"
          streak={0}
        />

        <SurpriseCard
          title="Fun Fact! 📐"
          subtitle="A circle has no corners, while a square has four! Solid shapes like cubes have volume."
        />

        <GameActivityArea data-testid="activity-area">
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              background: current.type === "3D" ? "#6366F1" : "#10B981",
              color: "white",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: 800,
              zIndex: 10,
            }}
          >
            {current.type} SHAPE
          </div>

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
              <SubLabel>{current.sides}</SubLabel>
            </BigDisplay>
          </AnimatePresence>

          <NavControlBar>
            <PreviousIcon onClick={handlePrev} />
            <SpeakIcon text={current.name} lang="en-US" />
            <NextIcon onClick={handleNext} />
          </NavControlBar>

          <div style={{ marginTop: "20px", width: "100%" }}>
            <div style={{ marginBottom: "20px" }}>
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  marginBottom: "8px",
                  opacity: 0.6,
                  letterSpacing: "1px",
                }}
              >
                2D SHAPES (FLAT)
              </h4>
              <div
                style={{ display: "flex", gap: "6px", justifyContent: "center", flexWrap: "wrap" }}
              >
                {shapes2D.map((s) => {
                  const idx = shapesData.indexOf(s);
                  return (
                    <Tag key={s.name} $isActive={index === idx} onClick={() => setIndex(idx)}>
                      {s.emoji} {s.name}
                    </Tag>
                  );
                })}
              </div>
            </div>

            <div>
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  marginBottom: "8px",
                  opacity: 0.6,
                  letterSpacing: "1px",
                }}
              >
                3D SHAPES (SOLID)
              </h4>
              <div
                style={{ display: "flex", gap: "6px", justifyContent: "center", flexWrap: "wrap" }}
              >
                {shapes3D.map((s) => {
                  const idx = shapesData.indexOf(s);
                  return (
                    <Tag key={s.name} $isActive={index === idx} onClick={() => setIndex(idx)}>
                      {s.emoji} {s.name}
                    </Tag>
                  );
                })}
              </div>
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

export default ShapesPage;
