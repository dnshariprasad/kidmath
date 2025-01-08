import { useState, useEffect } from "react";
import {
  CardDetail,
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../KidStyles";
import { readText } from "../util";
import { big, small } from "../data/Alphabet";
import SpeakIcon from "../components/SpeakIcon";

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
    <div>
      <CenteredContainerVertical>
        <CardDetail>
          <CenteredContainerVertical>
            <CenteredContainerHorizontally>
              <h2>{randomString}</h2>
              <SpeakIcon text={randomString} />
              <br />
              <br />
              <br />
              <h1 onClick={handleNext}>{" > "}</h1>
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
      </CenteredContainerVertical>
    </div>
  );
};

export default AlphabetChallenge;
