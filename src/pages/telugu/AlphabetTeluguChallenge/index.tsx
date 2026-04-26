import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import {
  PageContainer,
  Tag,
  SettingsArea,
  NavControlBar,
  GameLayout,
  GameActivityArea,
} from "../../../theme/globalStyles";
import SpeakIcon from "../../../components/SpeakIcon";
import NextIcon from "../../../components/NextIcon";
import PreviousIcon from "../../../components/PreviousIcon";
import { Languages } from "lucide-react";
import { SurpriseCard } from "../../../components/SurpriseCard";
import {
  teluguVowels,
  teluguConsonants,
  teluguCombined,
  teluguVowelsGroups,
  teluguConsonantsGroups,
  teluguGroups,
} from "../../../constants/teluguAlphabet";
import { RootState } from "../../../store/store";
import { TeluguDisplay } from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";
import { TRANSLATIONS } from "../../../constants/translations";

const AlphabetTeluguChallenge = () => {
  const navigate = useNavigate();
  const streak = useSelector(
    (state: RootState) => state.alphabet.gameStats?.alphabet_telugu?.streak ?? 0,
  );
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "vowels" | "consonants">("all");
  const t = TRANSLATIONS.en;

  const filteredAlphabet = useMemo(() => {
    if (filter === "vowels") return teluguVowels;
    if (filter === "consonants") return teluguConsonants;
    return teluguCombined;
  }, [filter]);

  const filteredGroups = useMemo(() => {
    if (filter === "vowels") return teluguVowelsGroups;
    if (filter === "consonants") return teluguConsonantsGroups;
    return teluguGroups;
  }, [filter]);

  const currentLetter = filteredAlphabet[index % filteredAlphabet.length];

  const handleNext = () => setIndex((prev) => (prev + 1) % filteredAlphabet.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + filteredAlphabet.length) % filteredAlphabet.length);

  const filterOptions = [
    { value: "all", label: "All Characters" },
    { value: "vowels", label: t.tel_achulu },
    { value: "consonants", label: t.tel_hallulu },
  ];

  // Build a flat index map to know the flat index of each char in each group
  const flatChars = filteredGroups.flat();

  return (
    <PageContainer data-testid="view-telugu">
      <GameLayout>
        <ChallengeHeader
          icon={Languages}
          title={t.tel_title}
          subtitle={t.tel_subtitle}
          streak={streak}
        />

        <SurpriseCard
          title="Take the Test? ✍️"
          subtitle="Try the Telugu Legend exam!"
          onClick={() => navigate("/test/telugu_test")}
        />

        <GameActivityArea data-testid="activity-area">
          <AnimatePresence mode="wait">
            <TeluguDisplay
              key={currentLetter}
              initial={{ y: 20, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 1.2 }}
              transition={{ type: "spring", damping: 12 }}
            >
              {currentLetter}
            </TeluguDisplay>
          </AnimatePresence>

          <NavControlBar>
            <PreviousIcon onClick={handlePrev} />
            <SpeakIcon text={currentLetter} lang="te-IN" />
            <NextIcon onClick={handleNext} />
          </NavControlBar>

          <div style={{ marginTop: "20px", width: "100%" }}>
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                color: "inherit",
                fontSize: "0.85rem",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Pick a Character
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}
            >
              {filteredGroups.map((group, gi) => (
                <div key={gi} style={{ display: "flex", gap: "6px", flexWrap: "nowrap" }}>
                  {group.map((char) => {
                    const flatIdx = flatChars.indexOf(char);
                    return (
                      <Tag
                        key={char}
                        $isActive={index === flatIdx}
                        onClick={() => setIndex(flatIdx)}
                      >
                        {char}
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
            title="Filter"
            name="filter"
            options={filterOptions}
            currentValue={filter}
            onChange={(val) => setFilter(val as "all" | "vowels" | "consonants")}
          />
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default AlphabetTeluguChallenge;
