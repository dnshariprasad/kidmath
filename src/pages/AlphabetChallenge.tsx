import { useState, useEffect } from "react";
import {
  CardDetail,
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../KidStyles";
import KidButton from "../components/KidButton";
import { readText } from "../util";
import { big, small } from "../data/Alphabet";

const alphabet = [...big, ...small];

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
    <div>
      <CardDetail>
        <CenteredContainerVertical>
          <h2>{randomString}</h2>

          <CenteredContainerHorizontally>
            <KidButton isActive={true} title="Read" onClick={handleReadText} />
            <KidButton isActive={true} title="Next" onClick={handleNext} />
          </CenteredContainerHorizontally>
        </CenteredContainerVertical>
      </CardDetail>
      <CardDetail>
        {alphabet.length > 0 && (
          <TagList>
            {big.map((tag, index) => (
              <Tag key={index} onClick={() => readText(tag)}>
                {tag}
              </Tag>
            ))}
          </TagList>
        )}
      </CardDetail>
      <CardDetail>
        {alphabet.length > 0 && (
          <TagList>
            {small.map((tag, index) => (
              <Tag key={index} onClick={() => readText(tag)}>
                {tag}
              </Tag>
            ))}
          </TagList>
        )}
      </CardDetail>
    </div>
  );
};

export default AlphabetChallenge;
