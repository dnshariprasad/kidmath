import { useState, useEffect } from "react";
import KidButton from "../components/KidButton";
import {
  CenteredContainerVertical,
  CenteredContainerHorizontally,
  StyledInput,
  CardDetail,
} from "../KidStyles";
import { readText } from "../util";

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
const getRandomOperation = () => (Math.random() > 0.5 ? "+" : "-"); // Randomly select + or -

const MathChallenge = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState("");

  const generateChallenge = () => {
    const newNum1 = getRandomNumber();
    const newNum2 = getRandomNumber();
    const newOperation = getRandomOperation();

    setNum1(newNum1);
    setNum2(newNum2);
    setOperation(newOperation);
    if ("-" === newOperation && newNum1 < newNum2) {
      generateChallenge();
    }
    setInputValue("");
    setFeedback("");
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  const calculateResult = () => {
    return operation === "+" ? num1 + num2 : num1 - num2;
  };

  const handleSubmit = () => {
    const result = calculateResult();
    const userAnswer = Number(inputValue);

    if (userAnswer === result) {
      setFeedback("Correct! 🎉");
      readText("Correct");
    } else {
      setFeedback(`Wrong! Try gain!`);
      readText(`Wrong! Try gain!`);
    }
  };

  const handleReset = () => {
    generateChallenge();
  };

  return (
    <CardDetail>
      <CenteredContainerVertical>
        <CenteredContainerHorizontally>
          <h1>
            {num1} {operation} {num2} =
          </h1>
          <StyledInput
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder=""
          />
          <KidButton title=" > " isActive={true} onClick={handleReset} />
        </CenteredContainerHorizontally>
        <CenteredContainerHorizontally>
          <KidButton title="Submit" isActive={true} onClick={handleSubmit} />
        </CenteredContainerHorizontally>
        <br />
        {feedback && <h1>{feedback}</h1>}
      </CenteredContainerVertical>
    </CardDetail>
  );
};

export default MathChallenge;
