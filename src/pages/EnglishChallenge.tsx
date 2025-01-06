import { useState, useEffect } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerVertical,
} from "../KidStyles";
import KidButton from "../components/KidButton";
const stringList = [
  "a",
  "and",
  "big",
  "can",
  "for",
  "go",
  "I",
  "in",
  "is",
  "it",
  "my",
  "run",
  "see",
  "the",
  "to",
  "two",
  "up",
  "we",
  "where",
  "when",
  "how",
  "you",
  "that",
  "with",
];

const EnglishChallenge = () => {
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
      <h2>{randomString}</h2>

      <CenteredContainerHorizontally>
        <KidButton isActive={true} title="Read" onClick={handleReadText} />
        <KidButton isActive={true} title="Next" onClick={handleNext} />
      </CenteredContainerHorizontally>
    </CenteredContainerVertical>
  );
};

export default EnglishChallenge;
