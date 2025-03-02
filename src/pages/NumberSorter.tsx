import { useState, useEffect } from "react";
import { KidoText } from "../components/KidoText";
import {
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  StyledInput,
  Tag,
} from "../theme/KidStyles";
import KidButton from "../components/KidButton";
import { readText } from "../util/util";

export default function NumberSorter() {
  const generateRandomNumbers = () => {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
  };

  const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers);
  const [userInput, setUserInput] = useState<string[]>(Array(5).fill(""));
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setNumbers(generateRandomNumbers());
    setUserInput(Array(5).fill(""));
    setMessage("");
  }, []);

  const handleChange = (index: number, value: string) => {
    const updatedInput = [...userInput];
    updatedInput[index] = value;
    setUserInput(updatedInput);
  };

  const checkSortedOrder = () => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const userSorted = userInput
      .map((num) => parseInt(num, 10))
      .filter((num) => !isNaN(num));

    if (JSON.stringify(sortedNumbers) === JSON.stringify(userSorted)) {
      setMessage("Correct!");
      readText("Correct");
    } else {
      setMessage("Oops! Try Again. 😅");
      readText("Oops! Try Again.");
    }
  };

  return (
    <CenteredContainerVertical>
      <br />
      <br />
      <KidoText fontSize="25px" color="black" mobileFontSize="20px">
        Sort these numbers in ascending order:
      </KidoText>
      <br />
      <CenteredContainerHorizontally>
        {numbers.map((num, index) => (
          <Tag key={index}>{num}</Tag>
        ))}
      </CenteredContainerHorizontally>
      <CenteredContainerHorizontally>
        {userInput.map((value, index) => (
          <StyledInput
            width="30px"
            key={index}
            type="number"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </CenteredContainerHorizontally>
      <KidButton title="Submit" isActive={true} onClick={checkSortedOrder} />

      {message && <h3>{message}</h3>}
    </CenteredContainerVertical>
  );
}
