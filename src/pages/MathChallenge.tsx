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
import styled from "styled-components";
const ContainerH = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const ContainerV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
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
  const [maxDigits, setMaxDigits] = useState(1);
  const [negativeCounting, setNegativeCounting] = useState(true);
  const [selectedOption, setSelectedOption] = useState("singleDigit");
  const handleSelection = (option: string) => {
    setSelectedOption(option);
  };
  const generateChallenge = () => {
    let newNum1 = 0;
    let newNum2 = 0;

    if (selectedOption === "singleDigit") {
      newNum1 = getRandomNumber(9);
      newNum2 = getRandomNumber(9);
    } else if (selectedOption === "oneDoubleDigit") {
      if (Math.random() > 0.5) {
        newNum1 = getRandomNumber(9);
        newNum2 = getRandomNumber(99);
      } else {
        newNum1 = getRandomNumber(99);
        newNum2 = getRandomNumber(9);
      }
    } else if (selectedOption === "multiDigit") {
      newNum1 = getRandomNumber(getMaxNumber(maxDigits));
      newNum2 = getRandomNumber(getMaxNumber(maxDigits));
    } else {
      setSelectedOption("singleDigit");
      generateChallenge();
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
      <ContainerV>
        <label>
          <input
            type="checkbox"
            checked={selectedOption === "singleDigit"}
            onChange={() => handleSelection("singleDigit")}
          />
          Single Digits
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOption === "oneDoubleDigit"}
            onChange={() => handleSelection("oneDoubleDigit")}
          />
          Single Double Digit
        </label>
        <ContainerH>
          <label>
            <input
              type="checkbox"
              checked={selectedOption === "multiDigit"}
              onChange={() => handleSelection("multiDigit")}
            />
            Multi Digit
          </label>

          <input
            type="number"
            value={maxDigits}
            onChange={(e) => setMaxDigits(parseInt(e.target.value))}
            min={2}
          />
        </ContainerH>
        <br />
        <label>
          <input
            type="checkbox"
            checked={negativeCounting}
            onChange={() => setNegativeCounting(!negativeCounting)}
          />
          Negative Counting
        </label>
      </ContainerV>
    </CenteredContainerVertical>
  );
};

export default MathChallenge;
