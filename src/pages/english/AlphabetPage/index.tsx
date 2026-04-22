import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { AnimatePresence } from "framer-motion";
import {
  SettingsArea,
  PageContainer,
  Tag,
  TagList,
  NavControlBar,
  GameLayout,
  ConfigSection,
  ConfigSubTitle,
  GameActivityArea,
} from "../../../theme/globalStyles";
import SpeakIcon from "../../../components/SpeakIcon";
import NextIcon from "../../../components/NextIcon";
import PreviousIcon from "../../../components/PreviousIcon";
import { useNavigate } from "react-router-dom";
import { Type } from "lucide-react";
import { SurpriseCard } from "../../../components/SurpriseCard";
import { BigLetter } from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";

const AlphabetPage = () => {
  const navigate = useNavigate();
  const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const streak = useSelector((state: RootState) => state.alphabet.gameStats?.alphabet?.streak ?? 0);
  const [index, setIndex] = useState(0);
  const [letterCase, setLetterCase] = useState<"big" | "small">("big");

  const currentLetterData = big[index];
  const currentLetter = letterCase === "big" ? currentLetterData : currentLetterData.toLowerCase();

  const handleNext = () => setIndex((prev) => (prev + 1) % big.length);
  const handlePrevious = () => setIndex((prev) => (prev - 1 + big.length) % big.length);

  const caseOptions = [
    { value: "big", label: "BIG LETTERS (A)" },
    { value: "small", label: "small letters (a)" },
  ];

  return (
    <PageContainer data-testid="view-alphabet">
      <GameLayout>
        <ChallengeHeader
          icon={Type}
          title="ABC Alphabet"
          subtitle="Learn letters and phonics with fun!"
          streak={streak}
        />

        <SurpriseCard
          title="Time to Practice? 🎯"
          subtitle="Try the practice games for this subject!"
          onClick={() => navigate("/missing_letters")}
        />

        <GameActivityArea data-testid="activity-area">
          <AnimatePresence mode="wait">
            <BigLetter
              key={currentLetter}
              initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 1.5, opacity: 0, rotate: 5 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {currentLetter}
            </BigLetter>
          </AnimatePresence>

          <NavControlBar>
            <PreviousIcon onClick={handlePrevious} />
            <SpeakIcon text={currentLetter} />
            <NextIcon onClick={handleNext} />
          </NavControlBar>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            title="Letter Case"
            name="case"
            options={caseOptions}
            currentValue={letterCase}
            onChange={(val) => setLetterCase(val as "big" | "small")}
          />

          <ConfigSection>
            <ConfigSubTitle>Pick a Letter</ConfigSubTitle>
            <TagList>
              {big.map((letter, i) => (
                <Tag key={letter} $isActive={index === i} onClick={() => setIndex(i)}>
                  {letter}
                </Tag>
              ))}
            </TagList>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default AlphabetPage;
