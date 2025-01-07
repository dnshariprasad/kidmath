import { useState, useEffect } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerVertical,
} from "../KidStyles";
import KidButton from "../components/KidButton";
const stringList = [
  "a",
  "an",
  "and",
  "are",
  "am",
  "can",
  "for",
  "from",
  "in",
  "is",
  "it",
  "no",
  "on",
  "of",
  "bug",
  "look",
  "have",
  "little",
  "said",
  "come",
  "all",
  "at",
  "has",
  "have",
  "after",
  "away",
  "my",
  "me",
  "run",
  "see",
  "the",
  "to",
  "up",
  "we",
  "you",
  "that",
  "this",
  "with",
  "find",
  "come",
  "go",
  "far",
  "where",
  "when",
  "what",
  "how",
  "I",
  "he",
  "she",
  "there",
  "they",
  "these",
  "those",
];

const SightWordsChallenge = () => {
  const [randomString, setRandomString] = useState<string>("");

  const generateChallenge = () => {
    const randomIndex = Math.floor(Math.random() * stringList.length); // Get a random index
    setRandomString(stringList[randomIndex]); // Return the string at that index
  };

  useEffect(() => {
    generateChallenge();
  }, []);
  const handleReadText = () => {
    const speech = new SpeechSynthesisUtterance(randomString); // Create a SpeechSynthesisUtterance with the text
    window.speechSynthesis.speak(speech); // Use the SpeechSynthesis API to read the text
  };
  const handleNext = () => {
    generateChallenge();
  };

  return (
    <CenteredContainerVertical>
      <h1>{randomString}</h1>

      <CenteredContainerHorizontally>
        <KidButton isActive={true} title="Read" onClick={handleReadText} />
        <KidButton isActive={true} title="Next" onClick={handleNext} />
      </CenteredContainerHorizontally>
    </CenteredContainerVertical>
  );
};

export default SightWordsChallenge;
