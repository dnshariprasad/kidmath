import React, { useState } from "react";
import { KidoText } from "../components/KidoText";
import KidButton from "../components/KidButton";
import { readText } from "../util/util";
import { Container } from "../theme/KidStyles";

export const GreaterLessEqualGame: React.FC = () => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 100));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 100));
  const [message, setMessage] = useState("");

  const handleChoice = (choice: "greater" | "less" | "equal") => {
    if (choice === "greater" && num1 > num2) {
      setMessage("Correct!");
      readText("Correct");
      resetGame();
    } else if (choice === "less" && num1 < num2) {
      setMessage("Correct!");
      readText("Correct");
      resetGame();
    } else if (choice === "equal" && num1 === num2) {
      setMessage("Correct!");
      readText("Correct");
      resetGame();
    } else {
      setMessage("Oops! Try Again. 😅");
    }
  };

  const resetGame = () => {
    setNum1(Math.floor(Math.random() * 100));
    setNum2(Math.floor(Math.random() * 100));
    setMessage("");
  };

  return (
    <Container>
      <h1>Greater Than, Less Than, or Equal?</h1>
      <KidoText fontSize="50px" color="black" mobileFontSize="30px">
        {num1} _ {num2}
      </KidoText>
      <div>
        <KidButton
          title=">"
          onClick={() => handleChoice("greater")}
          isActive={false}
        />
        <KidButton
          title="<"
          onClick={() => handleChoice("less")}
          isActive={false}
        />
        <KidButton
          title="="
          onClick={() => handleChoice("equal")}
          isActive={false}
        />
      </div>
      {message && <h1>{message}</h1>}
    </Container>
  );
};

export default GreaterLessEqualGame;
