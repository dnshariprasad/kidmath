import { useState, useEffect } from "react";
import KidButton from "../../components/KidButton";
import { KidoText } from "../../components/KidoText";
import NextIcon from "../../components/NextIcon";
import {
  CenteredContainerVertical,
  CenteredContainerHorizontally,
  Tag,
  StyledInput,
  ContainerV,
  ContainerH,
} from "../../theme/KidStyles";
import { getRandomNumber, getMaxNumber } from "../../util/MathUtil";
import { readText } from "../../util/util";

export default function NumberSorter() {
  const [maxDigits, setMaxDigits] = useState(1);
  const [numberSetSize, setNumberSetSize] = useState(5);
  const [order, setOrder] = useState<string>("ascending");

  const generateRandomNumbers = () => {
    return Array.from({ length: numberSetSize }, () =>
      getRandomNumber(getMaxNumber(maxDigits))
    );
  };

  const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers);
  const [userInput, setUserInput] = useState<string[]>(Array(5).fill(""));
  const [message, setMessage] = useState<string>("");
  const handleSelection = (option: string) => {
    setOrder(option);
  };
  const showNewChallenge = () => {
    setNumbers(generateRandomNumbers());
    setUserInput(Array(numberSetSize).fill(""));
    setMessage("");
  };
  useEffect(() => {
    showNewChallenge();
  }, []);

  const handleChange = (index: number, value: string) => {
    const updatedInput = [...userInput];
    updatedInput[index] = value;
    setUserInput(updatedInput);
  };

  const checkSortedOrder = () => {
    const sortedNumbers =
      order === "ascending"
        ? [...numbers].sort((a, b) => a - b)
        : [...numbers].sort((a, b) => b - a);

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
        Sort in {order} order
      </KidoText>
      <br />
      <CenteredContainerHorizontally>
        {numbers.map((num, index) => (
          <Tag key={index}>{num}</Tag>
        ))}
        <NextIcon onClick={showNewChallenge} />
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

      <ContainerV>
        <label>Order:</label>
        <label>
          <input
            type="checkbox"
            checked={order === "ascending"}
            onChange={() => handleSelection("ascending")}
          />
          Ascending Order
        </label>
        <label>
          <input
            type="checkbox"
            checked={order === "descending"}
            onChange={() => handleSelection("descending")}
          />
          Descending Order
        </label>
        <ContainerH>
          <label>Range:</label>
          <StyledInput
            type="number"
            onChange={(e) => setMaxDigits(parseInt(e.target.value))}
            value={maxDigits}
          />
        </ContainerH>
        <ContainerH>
          <label>Numbers:</label>
          <StyledInput
            type="number"
            onChange={(e) => setNumberSetSize(parseInt(e.target.value))}
            value={numberSetSize}
          />
        </ContainerH>
      </ContainerV>
    </CenteredContainerVertical>
  );
}
