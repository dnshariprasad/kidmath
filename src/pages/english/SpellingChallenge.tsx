import { useEffect, useState } from "react";
import { CenteredContainerVertical, StyledInput } from "../../theme/KidStyles";
import SpeakIcon from "../../components/SpeakIcon";
import KidButton from "../../components/KidButton";
import { readText } from "../../util/util";
import { getAllWords, getRandomWord } from "../../store/data/WordUtil";

const SpellingChallenge = () => {
  const [randomString, setRandomString] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState("");

  const generateChallenge = () => {
    const randomWord = getRandomWord(getAllWords());
    setRandomString(randomWord); // Return the string at that index
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
  );
};

export default SpellingChallenge;
