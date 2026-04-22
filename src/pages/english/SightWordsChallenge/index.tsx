import { useState, useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import {
  PageContainer,
  Tag,
  TagList,
  NavControlBar,
  GameLayout,
  ConfigSection,
  ConfigSubTitle,
  GameActivityArea,
  SettingsArea,
  SessionStats,
  NumberedStar,
  StarEmoji,
  StarNumber,
  PlusSign,
} from "../../../theme/globalStyles";
import SpeakIcon from "../../../components/SpeakIcon";
import NextIcon from "../../../components/NextIcon";
import PreviousIcon from "../../../components/PreviousIcon";
import { BookOpen, Wand2 } from "lucide-react";
import KidButton from "../../../components/KidButton";
import { SurpriseCard } from "../../../components/SurpriseCard";
import { KidoText } from "../../../components/KidoText";
import { readText } from "../../../utils/index";
import { getAllWords } from "../../../utils/wordUtils";
import { RootState } from "../../../store/store";
import { WordDisplay, EmptyStateWrapper, IconMargin } from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";

const SightWordsChallenge = () => {
  const streak = useSelector(
    (state: RootState) => state.alphabet.gameStats?.sight_words?.streak ?? 0,
  );
  const [level, setLevel] = useState(1);
  const [count, setCount] = useState(0);

  const allWords = getAllWords();
  const filteredWords = useMemo(() => {
    return allWords.filter((w: string) => {
      if (level === 1) return w.length <= 4;
      if (level === 2) return w.length > 4 && w.length <= 6;
      return w.length > 6;
    });
  }, [allWords, level]);

  const activeTabRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setCount(0);
  }, [level]);

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [count]);

  const handleNext = () => setCount((prev) => (prev + 1) % filteredWords.length);
  const handlePrevious = () =>
    setCount((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);

  const handleFeelingLucky = () => {
    const randomLvl = Math.floor(Math.random() * 3) + 1;
    setLevel(randomLvl);
    readText("Sight Word Surprise!");
  };

  const currentWord = filteredWords[count];

  const levelOptions = [
    { value: 1, label: "Level 1" },
    { value: 2, label: "Level 2" },
    { value: 3, label: "Level 3" },
  ];

  return (
    <PageContainer data-testid="page-sight-words">
      <GameLayout>
        <ChallengeHeader
          icon={BookOpen}
          title="Sight Words"
          subtitle="Practice reading and speaking high-frequency words!"
          streak={streak}
        />

        <SurpriseCard
          title="Certificate Progress"
          subtitle={
            streak < 10
              ? `${10 - (streak % 10)} more for a Certificate! 🏆`
              : "Milestone reached! 🎉"
          }
        />

        <GameActivityArea data-testid="activity-area">
          {filteredWords.length > 0 ? (
            <>
              <SessionStats>
                {Array.from({ length: streak % 10 || (streak > 0 ? 10 : 0) }).map((_, i) => (
                  <NumberedStar
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10, delay: i * 0.05 }}
                  >
                    <StarEmoji>⭐</StarEmoji>
                    <StarNumber>{i + 1}</StarNumber>
                  </NumberedStar>
                ))}
                {streak >= 10 && <PlusSign>+</PlusSign>}
              </SessionStats>

              <AnimatePresence mode="wait">
                <WordDisplay
                  key={currentWord}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ type: "spring", damping: 15 }}
                >
                  {currentWord}
                </WordDisplay>
              </AnimatePresence>

              <NavControlBar>
                <PreviousIcon onClick={handlePrevious} />
                <SpeakIcon text={currentWord} />
                <NextIcon onClick={handleNext} />
              </NavControlBar>
            </>
          ) : (
            <EmptyStateWrapper>
              <KidoText fontSize="xl" color="textSecondary" fontWeight="bold">
                Tap the word you hear:
                <br />
                Let's try another! 🎈
              </KidoText>
              <KidButton variant="primary" onClick={handleFeelingLucky}>
                <IconMargin>
                  <Wand2 size={20} />
                </IconMargin>
                Magic Shuffle
              </KidButton>
            </EmptyStateWrapper>
          )}
        </GameActivityArea>

        <SettingsArea>
          <DifficultyPicker
            title="Reading Level"
            name="level"
            options={levelOptions}
            currentValue={level}
            onChange={setLevel}
          />

          <ConfigSection>
            <ConfigSubTitle>Word List</ConfigSubTitle>
            <TagList>
              {filteredWords.map((word: string, i: number) => (
                <Tag
                  key={word}
                  $isActive={count === i}
                  onClick={() => setCount(i)}
                  ref={count === i ? activeTabRef : null}
                >
                  {word}
                </Tag>
              ))}
            </TagList>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default SightWordsChallenge;
