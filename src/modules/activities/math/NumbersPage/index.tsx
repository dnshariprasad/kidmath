import React, { useState } from "react";
import { Hash } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  PageContainer,
  GameLayout,
  GameActivityArea,
  NavControlBar,
} from "../../../../theme/globalStyles";
import ChallengeHeader from "../../../../components/ChallengeHeader";

import SpeakIcon from "../../../../components/SpeakIcon";
import NextIcon from "../../../../components/NextIcon";
import PreviousIcon from "../../../../components/PreviousIcon";
import { readText } from "../../../../utils/index";
import {
  NumbersLayout,
  MainNumberDisplay,
  ObjectContainer,
  InteractiveObject,
  DecorativeCircle,
  GridContainer,
  NumberTile,
} from "./styles";

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
    "🐶",
    "🐱",
    "🦊",
    "🐸",
    "🐧",
    "🦉",
    "🐝",
    "🐞",
    "🐙",
    "🐠",
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
      const cellSize = 100 / gridSize;
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
    <PageContainer data-testid="view-learn-numbers">
      <GameLayout>
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={Hash}
            title="Learn Numbers"
            subtitle="Discover numbers and count fun things together!"
            streak={0}
          />
          <NumbersLayout>
            <DecorativeCircle
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
              <MainNumberDisplay
                key={currentItem.value}
                initial={{ scale: 0.2, opacity: 0, rotate: -20, y: 40 }}
                animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 20, y: -40 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
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
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PreviousIcon onClick={prevNumber} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SpeakIcon text={currentItem.value.toString()} size={70} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NextIcon onClick={nextNumber} />
            </motion.div>
          </NavControlBar>

          <GridContainer>
            {NUM_ITEMS.map((item, idx) => (
              <NumberTile
                key={item.value}
                $isActive={currentIndex === idx}
                onClick={() => setCurrentIndex(idx)}
                whileTap={{ scale: 0.9 }}
              >
                {item.value}
              </NumberTile>
            ))}
          </GridContainer>
        </GameActivityArea>
      </GameLayout>
    </PageContainer>
  );
};

export default NumbersPage;
