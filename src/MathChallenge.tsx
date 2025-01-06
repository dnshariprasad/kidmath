import { useState, useEffect } from "react";

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
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          fontSize: "24px",
        }}
      >
        <h2>
          {num1} {operation} {num2} =
        </h2>
        <input
          style={{
            width: "60px",
            height: "35px", // Increased height
            textAlign: "center",
            fontSize: "20px",
          }}
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder=""
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          fontSize: "24px",
        }}
      >
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {feedback && <h1>{feedback}</h1>}
    </div>
  );
};

export default MathChallenge;
