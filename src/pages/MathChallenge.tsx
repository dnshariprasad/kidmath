import { useState, useEffect } from "react";
import KidButton from "../components/KidButton";
import {
  CenteredContainerVertical,
  CenteredContainerHorizontally,
  StyledInput,
} from "../theme/KidStyles";
import { readText } from "../util/util";
import NextIcon from "../components/NextIcon";
import { KidoText } from "../components/KidoText";

const getRandomNumber = (max: number) => Math.floor(Math.random() * max) + 1; // Random number between 1 and 10
const getRandomOperation = () => (Math.random() > 0.5 ? "+" : "-"); // Randomly select + or -
const getMaxNumber = (digits: number): number => {
  return 10 ** digits - 1;
};
const MathChallenge = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState("");
  const [singleDigit, setSingleDigit] = useState(true);
  const [oneDoubleDigit, setOneDoubleDigit] = useState(false);
  const [multiDigit, setMultiDigit] = useState(false);
  const [maxDigits, setMaxDigits] = useState(1);
  const [negativeCounting, setNegativeCounting] = useState(true);

  const generateChallenge = () => {
    let newNum1 = 0;
    let newNum2 = 0;

    if (singleDigit) {
      newNum1 = getRandomNumber(9);
      newNum2 = getRandomNumber(9);
    } else if (oneDoubleDigit) {
      newNum1 = getRandomNumber(9);
      newNum2 = getRandomNumber(99);
    } else if (multiDigit) {
      newNum1 = getRandomNumber(getMaxNumber(maxDigits));
      newNum2 = getRandomNumber(getMaxNumber(maxDigits));
    }

    const newOperation = getRandomOperation();

    setNum1(newNum1);
    setNum2(newNum2);
    setOperation(newOperation);

    if ("-" === newOperation && !negativeCounting && newNum1 < newNum2) {
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
      setFeedback(`Try again!`);
      readText(`Try again!`);
    }
  };

  const handleReset = () => {
    generateChallenge();
  };

  return (
    <CenteredContainerVertical>
      <br />
      <br />
      <CenteredContainerHorizontally>
        <KidoText fontSize="50px" color="black" mobileFontSize="25px">
          {num1} {operation} {num2} =
        </KidoText>
        <StyledInput
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder=""
        />
        <br />
        <NextIcon onClick={handleReset} />
      </CenteredContainerHorizontally>
      <KidButton title="Submit" isActive={true} onClick={handleSubmit} />
      <br />
      {feedback && <h1>{feedback}</h1>}
      <br />
      <br />
      <div>
        <input
          type="checkbox"
          checked={singleDigit}
          onChange={() => setSingleDigit(!singleDigit)}
        />
        Single Digits
        <br />
        <input
          type="checkbox"
          checked={oneDoubleDigit}
          onChange={() => setOneDoubleDigit(!oneDoubleDigit)}
        />
        Single Double Digit
        <br />
        <input
          type="checkbox"
          checked={multiDigit}
          onChange={() => setMultiDigit(!multiDigit)}
        />
        Multi Digit
        <input
          type="number"
          value={maxDigits}
          onChange={(e) => setMaxDigits(parseInt(e.target.value))}
          min={2}
        />
        <br />
        <input
          type="checkbox"
          checked={negativeCounting}
          onChange={() => setNegativeCounting(!negativeCounting)}
        />
        Negative Counting
      </div>
    </CenteredContainerVertical>
  );
};

export default MathChallenge;
