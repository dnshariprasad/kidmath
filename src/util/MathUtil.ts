export const operations = ["+", "-", "x", "/"];
export const getMaxNumber = (digits: number): number => {
  return 10 ** digits - 1;
};
export const getRandomNumber = (max: number) =>
  Math.floor(Math.random() * max) + 1; // Random number between 1 and 10

export const getRandomOperation = (selectedOperations: string[]) =>
  selectedOperations[Math.floor(Math.random() * selectedOperations.length)];

export const generateChallenge = (
  maxDigits: number,
  cplxty: string,
  selectedOperations: string[],
  negativeCounting: boolean
) => {
  let newNum1 = 0;
  let newNum2 = 0;
  let newOperation;
  //Default max digits
  if (isNaN(maxDigits) || maxDigits < 1) {
    maxDigits = 2;
  }
  //Default Complexity Level
  if (cplxty === undefined || cplxty === null || cplxty === "") {
    cplxty = "singleDigit";
  }

  //generate operation
  newOperation = getRandomOperation(selectedOperations);

  //generate numbers
  ({ newNum1, newNum2 } = getNumbers(
    cplxty,
    maxDigits,
    newOperation,
    negativeCounting
  ));

  return {
    num1: newNum1,
    num2: newNum2,
    operation: newOperation,
  };
};

function getNumbers(
  selectedOption: string,
  maxDigits: number,
  newOperation: string,
  negativeCounting: boolean
) {
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
  }

  if (
    ("-" === newOperation || "/" === newOperation) &&
    !negativeCounting &&
    newNum1 < newNum2
  ) {
    getNumbers(selectedOption, maxDigits, newOperation, negativeCounting);
    newNum1 = newNum1 + newNum2;
    newNum2 = newNum1 - newNum2;
    newNum1 = newNum1 - newNum2;
  }

  return { newNum1, newNum2 };
}

export const calculateResult = (
  num1: number,
  num2: number,
  operation: string
) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? (num1 / num2).toFixed(2) : "∞";
    default:
      return 0;
  }
};
