import { useEffect, useState } from "react";
import {
  CardDetail,
  CenteredContainerVertical,
  MiddleItem,
  StyledInput,
} from "../theme/KidStyles";
import { wordsSentencesData } from "../data/Words";
import SpeakIcon from "../components/SpeakIcon";
import KidButton from "../components/KidButton";
import { readText } from "../util/util";

const stringList = wordsSentencesData.map((i) => i.word);

const SpellingChallenge = () => {
  const [randomString, setRandomString] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState("");

  const generateChallenge = () => {
    const randomIndex = Math.floor(Math.random() * stringList.length); // Get a random index
    setRandomString(stringList[randomIndex]); // Return the string at that index
    setInputValue("");
    setFeedback("");
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  const handleSubmit = () => {
    if (randomString.toLowerCase() === inputValue.toLowerCase()) {
      setFeedback("Correct! 🎉");
      readText("Correct");
      generateChallenge();
    } else {
      setFeedback(`Try again!`);
      readText(`Try again!`);
    }
  };
  return (
    <CenteredContainerVertical>
      <CardDetail>
        <MiddleItem>
          <CenteredContainerVertical>
            <SpeakIcon text={randomString} />

            <StyledInput
              type="string"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder=""
            />
            <KidButton title="Submit" isActive={true} onClick={handleSubmit} />
            {feedback && <h1>{feedback}</h1>}
          </CenteredContainerVertical>
        </MiddleItem>
      </CardDetail>
    </CenteredContainerVertical>
  );
};

export default SpellingChallenge;
