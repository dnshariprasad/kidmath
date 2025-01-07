import { useState, useEffect } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerVertical,
} from "../KidStyles";
import KidButton from "../components/KidButton";
const alphabet = [
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)), // A-Z
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)), // a-z
];

const AlphabetChallenge = () => {
  const [randomString, setRandomString] = useState<string>("");

  const generateChallenge = () => {
    const randomIndex = Math.floor(Math.random() * alphabet.length); // Get a random index
    setRandomString(alphabet[randomIndex]); // Return the string at that index
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

export default AlphabetChallenge;
