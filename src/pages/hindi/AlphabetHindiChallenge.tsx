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
  cha,
  hindiCombinedCharacters,
  hindiVowels,
  kha,
  ta,
  tha,
  pa,
  ya,
  se,
} from "../../store/data/HindiAlphabet";

const alphabet = [
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
        <SpeakIcon text={randomString} lang="hi-IN" />
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
      {kha.length > 0 && (
        <TagList>
          {kha.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {cha.length > 0 && (
        <TagList>
          {cha.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {ta.length > 0 && (
        <TagList>
          {ta.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {tha.length > 0 && (
        <TagList>
          {tha.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {pa.length > 0 && (
        <TagList>
          {pa.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {ya.length > 0 && (
        <TagList>
          {ya.map((tag, index) => (
            <Tag key={index} onClick={() => setRandomString(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {se.length > 0 && (
        <TagList>
          {se.map((tag, index) => (
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
