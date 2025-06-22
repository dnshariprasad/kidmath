import { useState, useEffect } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../../theme/KidStyles";
import SpeakIcon from "../../components/SpeakIcon";
import NextIcon from "../../components/NextIcon";
import { KidoText } from "../../components/KidoText";
import {
  hindiCombinedCharacters,
  hindiConsonants,
  hindiVowels,
} from "../../data/HindiAlphabet";

const alphabet = [
  ...hindiVowels,
  ...hindiConsonants,
  ...hindiCombinedCharacters,
];

const AlphabetHindiChallenge = () => {
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
      {hindiVowels.length > 0 && (
        <TagList>
          {hindiVowels.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {hindiConsonants.length > 0 && (
        <TagList>
          {hindiConsonants.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {hindiCombinedCharacters.length > 0 && (
        <TagList>
          {hindiCombinedCharacters.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
    </CenteredContainerVertical>
  );
};

export default AlphabetHindiChallenge;
