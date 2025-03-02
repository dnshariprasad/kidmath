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
import {
  calculateResult,
  generateChallenge,
  operations,
} from "../util/MathUtil";
const ContainerH = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const ContainerV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`;

const MathChallenge = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [selectedOperations, setSelectedOperations] = useState(["+"]);
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState("");
  const [maxDigits, setMaxDigits] = useState(2);
  const [negativeCounting, setNegativeCounting] = useState(false);
  const [selectedOption, setSelectedOption] = useState("singleDigit");
  const handleSelection = (option: string) => {
    setSelectedOption(option);
  };
  const toggleOperation = (operation: string) => {
    setSelectedOperations(
      (prev) =>
        prev.includes(operation)
          ? prev.filter((op) => op !== operation) // Remove if already selected
          : [...prev, operation] // Add if not selected
    );
    showNewChallenge();
  };
  const showNewChallenge = () => {
    const operation = generateChallenge(
      maxDigits,
      selectedOption,
      selectedOperations,
      negativeCounting
    );
    setNum1(operation.num1);
    setNum2(operation.num2);
    setOperation(operation.operation);
    setFeedback("");
    setInputValue("");
  };
  useEffect(() => {
    showNewChallenge();
  }, []);

  const handleSubmit = () => {
    const result = calculateResult(num1, num2, operation);
    console.log("Result=", result);
    const userAnswer = Number(inputValue);
    if (userAnswer === result) {
      setFeedback("Correct! 🎉");
      readText("Correct");
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
        <NextIcon onClick={showNewChallenge} />
      </CenteredContainerHorizontally>
      <KidButton title="Submit" isActive={true} onClick={handleSubmit} />
      <br />
      {feedback && <h1>{feedback}</h1>}
      <br />
      <br />
      <ContainerV>
        <strong>Operations:</strong>
        <ContainerH>
          {operations.map((op) => (
            <label key={op}>
              <input
                type="checkbox"
                checked={selectedOperations.includes(op)}
                onChange={() => toggleOperation(op)}
              />
              {op}
            </label>
          ))}
        </ContainerH>
        <br />
        <strong>Complexity:</strong>
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
          Negative Counting (Ex: 5-7 pr 5/7)
        </label>
      </ContainerV>
    </CenteredContainerVertical>
  );
};

export default MathChallenge;
