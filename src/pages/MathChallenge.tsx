import { useState, useEffect } from "react";
import KidButton from "../components/KidButton";
import {
  CenteredContainerVertical,
  CenteredContainerHorizontally,
  StyledInput,
} from "../KidStyles";

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
    } else {
      setFeedback(`Wrong! The correct answer is ${result}.`);
    }
  };

  const handleReset = () => {
    generateChallenge();
  };

  return (
    <CenteredContainerVertical>
      <CenteredContainerHorizontally>
        <h2>
          {num1} {operation} {num2} =
        </h2>
        <StyledInput
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder=""
        />
      </CenteredContainerHorizontally>
      <CenteredContainerHorizontally>
        <KidButton title="Reset" isActive={false} onClick={handleReset} />
        <KidButton title="Submit" isActive={true} onClick={handleSubmit} />
      </CenteredContainerHorizontally>
      {feedback && <h1>{feedback}</h1>}
    </CenteredContainerVertical>
  );
};

export default MathChallenge;
