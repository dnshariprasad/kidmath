import { useState, useEffect } from "react";
import {
  CardDetail,
  CardItem,
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  MiddleItem,
  Tag,
  TagList,
} from "../theme/KidStyles";
import { readText } from "../util/util";
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
      <CardDetail>
        <MiddleItem>
          <CenteredContainerHorizontally>
            <KidoText fontSize="50px" color="black" mobileFontSize="30px">
              {randomString}
            </KidoText>
            <SpeakIcon text={randomString} />
          </CenteredContainerHorizontally>
        </MiddleItem>
        <CardItem>
          <NextIcon onClick={handleNext} />
        </CardItem>
      </CardDetail>

      {alphabet.length > 0 && (
        <TagList>
          {big.map((tag, index) => (
            <Tag key={index} onClick={() => readText(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {alphabet.length > 0 && (
        <TagList>
          {small.map((tag, index) => (
            <Tag key={index} onClick={() => readText(tag)}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
    </CenteredContainerVertical>
  );
};

export default AlphabetChallenge;
