import { useState, useEffect } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../theme/KidStyles";
import { big, small } from "../data/Alphabet";
import SpeakIcon from "../components/SpeakIcon";
import NextIcon from "../components/NextIcon";
import { KidoText } from "../components/KidoText";

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

  const handleNext = () => {
    generateChallenge();
  };

  return (
    <CenteredContainerVertical>
      <br />
      <br />
      <CenteredContainerHorizontally>
        <KidoText fontSize="50px" color="black" mobileFontSize="30px">
          {randomString}
        </KidoText>
        <SpeakIcon text={randomString} />
        <NextIcon onClick={handleNext} />
      </CenteredContainerHorizontally>
      <br />
      <br />
      {alphabet.length > 0 && (
        <TagList>
          {big.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {alphabet.length > 0 && (
        <TagList>
          {small.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
    </CenteredContainerVertical>
  );
};

export default AlphabetChallenge;
