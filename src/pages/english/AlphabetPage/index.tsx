import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { AnimatePresence } from "framer-motion";
import {
  SettingsArea,
  PageContainer,
  Tag,
  NavControlBar,
  GameLayout,
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

const BIG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// English alphabet in rows: A-G, H-N, O-U, V-Z
const LETTER_GROUPS = [
  BIG.slice(0, 7), // A–G
  BIG.slice(7, 14), // H–N
  BIG.slice(14, 21), // O–U
  BIG.slice(21), // V–Z
];

const AlphabetPage = () => {
  const navigate = useNavigate();
  const streak = useSelector((state: RootState) => state.alphabet.gameStats?.alphabet?.streak ?? 0);
  const [index, setIndex] = useState(0);
  const [letterCase, setLetterCase] = useState<"big" | "small">("big");

  const currentLetterData = BIG[index];
  const currentLetter = letterCase === "big" ? currentLetterData : currentLetterData.toLowerCase();

  const handleNext = () => setIndex((prev) => (prev + 1) % BIG.length);
  const handlePrevious = () => setIndex((prev) => (prev - 1 + BIG.length) % BIG.length);

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

          <div style={{ marginTop: "20px", width: "100%" }}>
            <h4
              style={{
                justifyContent: "center",
                display: "flex",
                color: "inherit",
                fontSize: "0.85rem",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Pick a Letter
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}
            >
              {LETTER_GROUPS.map((group, gi) => (
                <div key={gi} style={{ display: "flex", gap: "6px", flexWrap: "nowrap" }}>
                  {group.map((letter) => {
                    const flatIdx = BIG.indexOf(letter);
                    return (
                      <Tag
                        key={letter}
                        $isActive={index === flatIdx}
                        onClick={() => setIndex(flatIdx)}
                      >
                        {letterCase === "big" ? letter : letter.toLowerCase()}
                      </Tag>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            title="Letter Case"
            name="case"
            options={caseOptions}
            currentValue={letterCase}
            onChange={(val) => setLetterCase(val as "big" | "small")}
          />
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default AlphabetPage;
