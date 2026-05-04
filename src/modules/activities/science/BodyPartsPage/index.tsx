import { useState } from "react";
import { KidoText } from "../../../../components/KidoText";
import { AnimatePresence, motion } from "framer-motion";
import {
  PageContainer,
  Tag,
  SettingsArea,
  NavControlBar,
  GameLayout,
  GameActivityArea,
  ConfigSection,
  ConfigSubTitle,
} from "../../../../theme/globalStyles";
import SpeakIcon from "../../../../components/SpeakIcon";
import NextIcon from "../../../../components/NextIcon";
import PreviousIcon from "../../../../components/PreviousIcon";
import { HeartPulse } from "lucide-react";
import ChallengeHeader from "../../../../components/ChallengeHeader";
import { TRANSLATIONS } from "../../../../constants/translations";

import { bodyParts, bodyPartsGroups } from "../../../../constants/scienceData";
import {
  BigDisplay,
  EmojiDisplay,
  SubLabel,
  DisplayWrapper,
  PulseCircle,
} from "../../shared/learnStyles";

const BodyPartsPage = () => {
  const t = TRANSLATIONS.en;
  const [index, setIndex] = useState(0);
  const current = bodyParts[index];

  const handleNext = () => setIndex((p) => (p + 1) % bodyParts.length);
  const handlePrev = () => setIndex((p) => (p - 1 + bodyParts.length) % bodyParts.length);

  const groupLabels = [t.sci_groupHead, t.sci_groupTorso, t.sci_groupArms, t.sci_groupLegs];

  return (
    <PageContainer data-testid="view-body-parts">
      <GameLayout>
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={HeartPulse}
            title={t.sci_bodyParts}
            subtitle={t.sci_bodySubtitle}
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
                  <SubLabel>{current.description}</SubLabel>
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
              <SpeakIcon text={current.name} lang="en-US" size={70} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NextIcon onClick={handleNext} />
            </motion.div>
          </NavControlBar>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            {bodyPartsGroups.map((group, gi) => (
              <div
                key={gi}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    opacity: 0.6,
                    letterSpacing: "1px",
                    color: "#6366F1",
                  }}
                >
                  {groupLabels[gi]}
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
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
                        <span style={{ marginRight: "6px" }}>{part.emoji}</span>
                        {part.name}
                      </Tag>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>{t.sci_amazingFacts}</ConfigSubTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {t.sci_facts.map((f, i) => (
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

export default BodyPartsPage;
