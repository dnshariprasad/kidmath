import React, { useState, useEffect } from "react";
import { Hash } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import {
  SettingsArea,
  PageContainer,
  Tag,
  TagList,
  GameLayout,
  ConfigSection,
  ConfigSubTitle,
  GameActivityArea,
  NavControlBar,
} from "../../../theme/globalStyles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import { SurpriseCard } from "../../../components/SurpriseCard";
import SpeakIcon from "../../../components/SpeakIcon";
import NextIcon from "../../../components/NextIcon";
import PreviousIcon from "../../../components/PreviousIcon";
import { readText } from "../../../utils/index";
import { NumbersLayout, MainNumberDisplay, ObjectContainer, InteractiveObject } from "./styles";

const NUM_ITEMS = Array.from({ length: 100 }).map((_, i) => {
  const emojis = [
    "🍎",
    "🍌",
    "🥕",
    "🍦",
    "🚗",
    "⚽",
    "🦋",
    "🍭",
    "🎈",
    "⭐",
    "🍓",
    "🧸",
    "🚁",
    "🐳",
    "🍕",
    "🦁",
    "🦖",
    "🍩",
    "🎸",
    "🚀",
    "🍒",
    "🍇",
    "🍔",
    "🍰",
    "🚲",
    "⛵",
    "🎨",
    "🧩",
    "🦄",
    "🐼",
  ];
  return {
    value: i + 1,
    emoji: emojis[i % emojis.length],
  };
});

const NumbersPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = NUM_ITEMS[currentIndex];

  // Generate stable random positions for the current number of items
  const itemPositions = React.useMemo(() => {
    const gridSize = 6; // 6x6 grid
    const cells: { r: number; c: number }[] = [];

    // Create a list of all potential grid cells
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        // Skip the middle 2x2 cells where the number sits
        const isCenter = r >= 2 && r <= 3 && c >= 2 && c <= 3;
        if (!isCenter) {
          cells.push({ r, c });
        }
      }
    }

    // Shuffle cells to pick random unique spots
    const shuffled = [...cells].sort(() => Math.random() - 0.5);
    const selectedCells = shuffled.slice(0, currentItem.value);

    return selectedCells.map((cell) => {
      // Calculate base position from grid
      // Each cell is ~16.6% (100/6)
      const cellSize = 100 / gridSize;

      // Add "jitter" (random offset within the cell) to make it look more natural
      // Use 20% to 80% of the cell's space to avoid edges
      const jitterX = 20 + Math.random() * 60;
      const jitterY = 20 + Math.random() * 60;

      const left = cell.c * cellSize + (jitterX * cellSize) / 100;
      const top = cell.r * cellSize + (jitterY * cellSize) / 100;

      return {
        top: `${top}%`,
        left: `${left}%`,
        rotate: Math.random() * 40 - 20,
      };
    });
  }, [currentItem.value]);

  useEffect(() => {
    // Speak the number when it changes
    readText(currentItem.value.toString());
  }, [currentIndex, currentItem.value]);

  const nextNumber = () => {
    if (currentIndex < NUM_ITEMS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevNumber = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <PageContainer>
      <GameLayout>
        <ChallengeHeader
          icon={Hash}
          title="Learn Numbers"
          subtitle="Discover numbers and count fun things together!"
          streak={0}
        />

        <SurpriseCard
          title="Counting is Fun! 🔢"
          subtitle={
            currentItem.value <= 9
              ? "Click on the items around the number to count them one by one!"
              : "Look at this big number! Can you say it out loud?"
          }
        />

        <GameActivityArea>
          <NumbersLayout>
            <AnimatePresence mode="wait">
              <MainNumberDisplay
                key={currentItem.value}
                initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={() => readText(currentItem.value.toString())}
              >
                {currentItem.value}
              </MainNumberDisplay>
            </AnimatePresence>

            {currentItem.value <= 9 && (
              <ObjectContainer>
                <AnimatePresence mode="popLayout">
                  {itemPositions.map((pos, i) => (
                    <InteractiveObject
                      key={`${currentItem.value}-${i}`}
                      $top={pos.top}
                      $left={pos.left}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1, rotate: pos.rotate }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ delay: i * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.3, rotate: pos.rotate + 10 }}
                      whileTap={{ scale: 0.8 }}
                      onClick={() => readText((i + 1).toString())}
                    >
                      {currentItem.emoji}
                    </InteractiveObject>
                  ))}
                </AnimatePresence>
              </ObjectContainer>
            )}
          </NumbersLayout>

          <NavControlBar>
            <PreviousIcon onClick={prevNumber} />
            <SpeakIcon text={currentItem.value.toString()} />
            <NextIcon onClick={nextNumber} />
          </NavControlBar>
        </GameActivityArea>

        <SettingsArea>
          <ConfigSection>
            <ConfigSubTitle>Pick a Number</ConfigSubTitle>
            <TagList>
              {NUM_ITEMS.map((item, idx) => (
                <Tag
                  key={item.value}
                  $isActive={currentIndex === idx}
                  onClick={() => setCurrentIndex(idx)}
                >
                  {item.value}
                </Tag>
              ))}
            </TagList>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default NumbersPage;
