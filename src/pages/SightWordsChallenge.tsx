import { useState, useEffect } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerVertical,
} from "../KidStyles";
import KidButton from "../components/KidButton";
const stringList = [
  "a",
  "and",
  "are",
  "can",
  "for",
  "I",
  "in",
  "is",
  "it",
  "my",
  "me",
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
  "this",
  "with",
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
      <h2>{randomString}</h2>

      <CenteredContainerHorizontally>
        <KidButton isActive={true} title="Read" onClick={handleReadText} />
        <KidButton isActive={true} title="Next" onClick={handleNext} />
      </CenteredContainerHorizontally>
    </CenteredContainerVertical>
  );
};

export default SightWordsChallenge;
