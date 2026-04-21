import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import {
  PageContainer,
  Tag,
  TagList,
  SettingsArea,
  NavControlBar,
  GameLayout,
  ConfigSection,
  ConfigSubTitle,
  GameActivityArea,
} from "../../../theme/globalStyles";
import SpeakIcon from "../../../components/SpeakIcon";
import NextIcon from "../../../components/NextIcon";
import PreviousIcon from "../../../components/PreviousIcon";
import { Languages } from "lucide-react";
import { SurpriseCard } from "../../../components/SurpriseCard";
import { readText } from "../../../utils/index";
import {
  cha,
  hindiCombinedCharacters,
  hindiVowels,
  kha,
  ta,
  tha,
  pa,
  ya,
  se,
} from "../../../constants/hindiAlphabet";
import { RootState } from "../../../store/store";
import { HindiDisplay } from "./styles";
import ChallengeHeader from "../../../components/ChallengeHeader";
import DifficultyPicker from "../../../components/DifficultyPicker";

const AlphabetHindiChallenge = () => {
  const streak = useSelector((state: RootState) => state.alphabet.userStats.streak);
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "vowels" | "consonants">("all");

  const filteredAlphabet = useMemo(() => {
    if (filter === "vowels") return hindiVowels;
    if (filter === "consonants") return [...kha, ...cha, ...pa, ...se, ...ta, ...tha, ...ya];
    return [
      ...hindiVowels,
      ...kha,
      ...cha,
      ...pa,
      ...se,
      ...ta,
      ...tha,
      ...ya,
      ...hindiCombinedCharacters,
    ];
  }, [filter]);

  const currentLetter = filteredAlphabet[index % filteredAlphabet.length];

  const handleNext = () => setIndex((prev) => (prev + 1) % filteredAlphabet.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + filteredAlphabet.length) % filteredAlphabet.length);

  const handleFeelingLucky = () => {
    const randomIndex = Math.floor(Math.random() * filteredAlphabet.length);
    setIndex(randomIndex);
    readText("Hindi Surprise!");
  };

  const filterOptions = [
    { value: "all", label: "All Characters" },
    { value: "vowels", label: "Vowels (Svar)" },
    { value: "consonants", label: "Consonants (Vyanjan)" },
  ];

  return (
    <PageContainer data-testid="page-hindi-alphabet">
      <GameLayout>
        <ChallengeHeader
          icon={Languages}
          title="Hindi Alphabet"
          subtitle="Explore the beautiful Hindi Varnamala!"
          streak={streak}
        />

        <SurpriseCard title="Hindi surprise?" onShuffle={handleFeelingLucky} />

        <GameActivityArea>
          <AnimatePresence mode="wait">
            <HindiDisplay
              key={currentLetter}
              initial={{ y: 20, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 1.2 }}
              transition={{ type: "spring", damping: 12 }}
            >
              {currentLetter}
            </HindiDisplay>
          </AnimatePresence>

          <NavControlBar>
            <PreviousIcon onClick={handlePrev} />
            <SpeakIcon text={currentLetter} lang="hi-IN" />
            <NextIcon onClick={handleNext} />
          </NavControlBar>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <DifficultyPicker
            title="Filter"
            name="filter"
            options={filterOptions}
            currentValue={filter}
            onChange={(val) => setFilter(val as "all" | "vowels" | "consonants")}
          />

          <ConfigSection>
            <ConfigSubTitle>Pick a Character</ConfigSubTitle>
            <TagList>
              {filteredAlphabet.map((char, i) => (
                <Tag key={`${char}-${i}`} $isActive={index === i} onClick={() => setIndex(i)}>
                  {char}
                </Tag>
              ))}
            </TagList>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default AlphabetHindiChallenge;
