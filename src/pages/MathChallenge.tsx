import { useState, useEffect } from "react";
import KidButton from "../components/KidButton";
import {
  CenteredContainerVertical,
  CenteredContainerHorizontally,
  StyledInput,
  CardDetail,
  CardItem,
  MiddleItem,
} from "../theme/KidStyles";
import { readText } from "../util/util";
import NextIcon from "../components/NextIcon";
import { KidoText } from "../components/KidoText";

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
      setFeedback(`Try again!`);
      readText(`Try again!`);
    }
  };

  const handleReset = () => {
    generateChallenge();
  };

  return (
    <CenteredContainerVertical>
      <CardDetail>
        <MiddleItem>
          <CenteredContainerVertical>
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
            </CenteredContainerHorizontally>
            <KidButton title="Submit" isActive={true} onClick={handleSubmit} />
            <br />
            {feedback && <h1>{feedback}</h1>}
          </CenteredContainerVertical>
        </MiddleItem>
        <CardItem>
          <NextIcon onClick={handleReset} />
        </CardItem>
      </CardDetail>
    </CenteredContainerVertical>
  );
};

export default MathChallenge;
