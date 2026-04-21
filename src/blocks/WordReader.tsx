import { useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  ActivityArea,
  SettingsArea,
  PageContainer,
  Tag,
  TagList,
  NavControlBar,
  PageHeader,
  PageTitle,
  PageSubtitle,
  SessionStats,
  TitleArea,
  GameLayout,
  ConfigSection,
  ConfigSubTitle,
  OptionLabel,
} from "../theme/KidStyles";
import SpeakIcon from "../components/SpeakIcon";
import NextIcon from "../components/NextIcon";
import PreviousIcon from "../components/PreviousIcon";
import { BookOpen, Wand2 } from "lucide-react";
import KidButton from "../components/KidButton";
import { SurpriseCard } from "../components/SurpriseCard";
import { KidoText } from "../components/KidoText";
import { readText } from "../util/util";
import { getAllWords } from "../store/data/WordUtil";
import { RootState } from "../store/store";

const WordDisplay = styled(motion.div)`
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: 900;
  color: #6366f1;
  text-align: center;
  margin: 40px 0;
  font-family: ${(props) => props.theme.fonts.primary};
  text-transform: capitalize;
  text-shadow:
    0 10px 0 #4f46e5,
    0 20px 30px rgba(99, 102, 241, 0.2);
`;

const WordReader = () => {
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [level, setLevel] = useState(1);
  const [count, setCount] = useState(0);

  const allWords = getAllWords();
  const filteredWords = useMemo(() => {
    return allWords.filter((w) => {
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

  return (
    <PageContainer data-testid="page-sight-words">
      <GameLayout>
        <TitleArea data-testid="title-area">
          <PageHeader>
            <PageTitle>
              <BookOpen size={40} color="#6366F1" strokeWidth={2.5} />
              Sight Words
            </PageTitle>
            <PageSubtitle>Practice reading and speaking high-frequency words!</PageSubtitle>
            <SessionStats>
              {Array.from({ length: Math.min(12, streak) }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, delay: i * 0.05 }}
                  style={{ fontSize: "1.8rem" }}
                >
                  ⭐
                </motion.span>
              ))}
            </SessionStats>
          </PageHeader>
        </TitleArea>

        <SurpriseCard title="Reading surprise?" onShuffle={handleFeelingLucky} />

        <ActivityArea
          style={{
            textAlign: "center",
            minHeight: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {filteredWords.length > 0 ? (
            <>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "30px",
                padding: "40px",
              }}
            >
              <KidoText
                fontSize="1.8rem"
                color="textSecondary"
                fontWeight="bold"
                style={{ textAlign: "center", lineHeight: 1.4 }}
              >
                No words found for this level.
                <br />
                Let's try another! 🎈
              </KidoText>
              <KidButton
                variant="primary"
                onClick={handleFeelingLucky}
                style={{ padding: "15px 40px" }}
              >
                <Wand2 size={20} style={{ marginRight: "10px" }} />
                Magic Shuffle
              </KidButton>
            </div>
          )}
        </ActivityArea>

        <SettingsArea>
          <ConfigSection>
            <ConfigSubTitle>Reading Level</ConfigSubTitle>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[1, 2, 3].map((lvl) => (
                <OptionLabel key={lvl} $isActive={level === lvl}>
                  <input
                    type="radio"
                    name="level"
                    checked={level === lvl}
                    onChange={() => setLevel(lvl)}
                  />
                  Level {lvl}
                </OptionLabel>
              ))}
            </div>
          </ConfigSection>

          <ConfigSection>
            <ConfigSubTitle>Word List</ConfigSubTitle>
            <TagList>
              {filteredWords.map((word, i) => (
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

export default WordReader;
