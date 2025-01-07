import { useState } from "react";
import {
  CardDetail,
  CenteredContainerHorizontally,
  CenteredContainerVertical,
} from "../KidStyles";
import KidButton from "../components/KidButton";
const stringList = [
  "a",
  "an",
  "am",
  "and",
  "are",
  "away",
  "run",
  "see",
  "look",
  "to",
  "with",
  "find",
  "no",
  "yes",
  "come",
  "go",
  "up",
  "down",
  "far",
  "where",
  "when",
  "what",
  "how",
  "me",
  "my",
  "we",
  "you",
  "I",
  "he",
  "she",
  "the",
  "there",
  "they",
  "these",
  "those",
  "that",
  "this",
  "has",
  "have",
  "on",
  "of",
  "it",
  "is",
  "at",
  "for",
  "from",
  "in",
  "can",
  "bug",
  "little",
  "said",
  "all",
  "after",
];

const SightWordsChallenge = () => {
  const [count, setCount] = useState<number>(0);

  const handleReadText = () => {
    const speech = new SpeechSynthesisUtterance(stringList[count]);
    window.speechSynthesis.speak(speech);
  };
  const handleNext = () => {
    let tempCount = count + 1;
    if (tempCount >= stringList.length) {
      setCount(0);
    } else {
      setCount(tempCount);
    }
  };

  return (
    <CardDetail>
      <CenteredContainerVertical>
        <h1>{stringList[count]}</h1>
        <CenteredContainerHorizontally>
          <KidButton isActive={true} title="<" onClick={handleNext} />
          <KidButton isActive={true} title="Read" onClick={handleReadText} />
          <KidButton isActive={true} title=">" onClick={handleNext} />
        </CenteredContainerHorizontally>
      </CenteredContainerVertical>
    </CardDetail>
  );
};

export default SightWordsChallenge;
