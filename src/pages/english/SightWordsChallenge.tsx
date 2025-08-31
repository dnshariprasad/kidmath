import { useEffect, useState } from "react";
import { getAllWords } from "../../store/data/WordUtil";
import WordReader from "../../blocks/WordReader";

const SightWordsChallenge = () => {
  const [words, setWords] = useState<string[]>([]);
  useEffect(() => {
    setWords(getAllWords());
  }, []);
  return <WordReader words={words} />;
};

export default SightWordsChallenge;
