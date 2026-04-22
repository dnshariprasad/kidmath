import React, { useState, useEffect } from "react";
import { Hash, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import {
  PageContainer,
  GameLayout,
  GameActivityArea,
  SettingsArea,
} from "../../../theme/globalStyles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import { SurpriseCard } from "../../../components/SurpriseCard";
import KidButton from "../../../components/KidButton";
import { readText } from "../../../utils/index";
import {
  NumbersLayout,
  MainNumberDisplay,
  ObjectGrid,
  InteractiveObject,
  ControlBar,
  NumberGrid,
  SmallNumberBtn,
} from "./styles";

const NUM_ITEMS = [
  { value: 1, emoji: "🍎" },
  { value: 2, emoji: "🍌" },
  { value: 3, emoji: "🥕" },
  { value: 4, emoji: "🍦" },
  { value: 5, emoji: "🚗" },
  { value: 6, emoji: "⚽" },
  { value: 7, emoji: "🦋" },
  { value: 8, emoji: "🍭" },
  { value: 9, emoji: "🎈" },
  { value: 10, emoji: "⭐" },
  { value: 11, emoji: "🍓" },
  { value: 12, emoji: "🧸" },
  { value: 13, emoji: "🚁" },
  { value: 14, emoji: "🐳" },
  { value: 15, emoji: "🍕" },
  { value: 16, emoji: "🦁" },
  { value: 17, emoji: "🦖" },
  { value: 18, emoji: "🍩" },
  { value: 19, emoji: "🎸" },
  { value: 20, emoji: "🚀" },
];

const NumbersPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = NUM_ITEMS[currentIndex];

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
          subtitle="Click on the objects to hear them counted, or use the numbers below to jump to any count."
        />

        <GameActivityArea>
          <NumbersLayout>
            <AnimatePresence mode="wait">
              <MainNumberDisplay
                key={currentItem.value}
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 10 }}
                onClick={() => readText(currentItem.value.toString())}
              >
                {currentItem.value}
              </MainNumberDisplay>
            </AnimatePresence>

            <ObjectGrid>
              <AnimatePresence mode="popLayout">
                {Array.from({ length: currentItem.value }).map((_, i) => (
                  <InteractiveObject
                    key={`${currentItem.value}-${i}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: i * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => readText((i + 1).toString())}
                  >
                    {currentItem.emoji}
                  </InteractiveObject>
                ))}
              </AnimatePresence>
            </ObjectGrid>

            <ControlBar>
              <KidButton
                title="Previous"
                onClick={prevNumber}
                variant="secondary"
                disabled={currentIndex === 0}
                icon={<ChevronLeft size={24} />}
              />
              <KidButton
                title="Repeat"
                onClick={() => readText(currentItem.value.toString())}
                variant="primary"
                icon={<Play size={20} />}
              />
              <KidButton
                title="Next"
                onClick={nextNumber}
                variant="secondary"
                disabled={currentIndex === NUM_ITEMS.length - 1}
                icon={<ChevronRight size={24} />}
              />
            </ControlBar>
          </NumbersLayout>
        </GameActivityArea>

        <SettingsArea>
          <NumberGrid>
            {NUM_ITEMS.map((item, idx) => (
              <SmallNumberBtn
                key={item.value}
                $active={currentIndex === idx}
                onClick={() => setCurrentIndex(idx)}
              >
                {item.value}
              </SmallNumberBtn>
            ))}
          </NumberGrid>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default NumbersPage;
