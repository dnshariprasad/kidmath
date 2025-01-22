import { useEffect, useState } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  StyledInput,
} from "../theme/KidStyles";
import SpeakIcon from "../components/SpeakIcon";
import KidButton from "../components/KidButton";
import { readText } from "../util/util";
import {
  createMissingLetterWord,
  getAllWords,
  getRandomWord,
  randomNumber,
} from "../data/WordUtil";
import { KidoText } from "../components/KidoText";

const stringList = getAllWords();

const MissingLettersChallenge = () => {
  const [randomString, setRandomString] = useState<string>("");
  const [randomStringWithMissingLetter, setRandomStringWithMissingLetter] =
    useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState("");

  const generateChallenge = () => {
    let rs = getRandomWord(stringList);
    setRandomString(rs);
    setRandomStringWithMissingLetter(
      createMissingLetterWord(rs, randomNumber(rs.length))
    );
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
      <br />
      <br />
      <CenteredContainerHorizontally>
        <KidoText fontSize="50px" color="black" mobileFontSize="30px">
          {randomStringWithMissingLetter}
        </KidoText>
        <SpeakIcon text={randomString} />
      </CenteredContainerHorizontally>
      <StyledInput
        type="string"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder=""
      />
      <KidButton title="Submit" isActive={true} onClick={handleSubmit} />
      {feedback && <h1>{feedback}</h1>}
    </CenteredContainerVertical>
  );
};

export default MissingLettersChallenge;
