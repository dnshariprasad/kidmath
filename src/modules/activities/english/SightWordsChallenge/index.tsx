import { useState, useEffect, useRef, useMemo } from "react";
import { KidoText } from "../../../../components/KidoText";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import {
  PageContainer,
  Tag,
  NavControlBar,
  GameLayout,
  ConfigSection,
  ConfigSubTitle,
  GameActivityArea,
  SettingsArea,
} from "../../../../theme/globalStyles";
import SpeakIcon from "../../../../components/SpeakIcon";
import NextIcon from "../../../../components/NextIcon";
import PreviousIcon from "../../../../components/PreviousIcon";
import { BookOpen, Wand2 } from "lucide-react";
import KidButton from "../../../../components/KidButton";

import { readText } from "../../../../utils/index";
import { getAllWords, getSentencesOfWord } from "../../../../utils/wordUtils";
import { RootState } from "../../../../store/store";
import {
  WordDisplay,
  EmptyStateWrapper,
  IconMargin,
  SentenceContainer,
  ExampleSentence,
  TagsWrapper,
} from "./styles";
import ChallengeHeader from "../../../../components/ChallengeHeader";
import DifficultyPicker from "../../../../components/DifficultyPicker";
import { DisplayWrapper, PulseCircle } from "../../shared/learnStyles";

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
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={BookOpen}
            title="Sight Words"
            subtitle="Practice reading and speaking high-frequency words!"
            streak={streak}
          />
          {filteredWords.length > 0 ? (
            <>
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      zIndex: 1,
                    }}
                  >
                    <WordDisplay
                      key={currentWord}
                      initial={{ scale: 0.2, opacity: 0, rotate: -5, y: 20 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
                      exit={{ scale: 1.5, opacity: 0, rotate: 5, y: -20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {currentWord}
                    </WordDisplay>
                  </div>
                </AnimatePresence>
              </DisplayWrapper>

              <NavControlBar>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <PreviousIcon onClick={handlePrevious} />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <SpeakIcon text={currentWord} size={70} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <NextIcon onClick={handleNext} />
                </motion.div>
              </NavControlBar>

              {getSentencesOfWord(currentWord).length > 0 && (
                <div
                  style={{
                    width: "100%",
                    marginTop: "0",
                    borderTop: "1px dashed rgba(99, 102, 241, 0.15)",
                    paddingTop: "16px",
                    maxWidth: "600px",
                  }}
                >
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}
                  >
                    {getSentencesOfWord(currentWord)
                      .slice(0, 3)
                      .map((sentence, idx) => (
                        <SentenceContainer
                          key={`${currentWord}-s-${idx}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <ExampleSentence>{sentence}</ExampleSentence>
                          <SpeakIcon text={sentence} size="small" />
                        </SentenceContainer>
                      ))}
                  </div>
                </div>
              )}

              <TagsWrapper>
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
              </TagsWrapper>
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
            <ConfigSubTitle>Reading Tips! 🌟</ConfigSubTitle>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, fontWeight: 600, opacity: 0.8 }}>
              Sight words are common words that kids should recognize instantly without sounding
              them out.
              <br />
              <br />
              Keep practicing every day to become a reading superstar!
            </p>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default SightWordsChallenge;
