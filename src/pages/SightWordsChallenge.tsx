import { useState } from "react";
import {
  CardDetail,
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../KidStyles";
import KidButton from "../components/KidButton";
const stringList = [
  "a",
  "an",

  "I",
  "am",
  "we",
  "me",
  "my",
  "you",
  "your",

  "he",
  "she",

  "the",
  "there",
  "they",

  "this",
  "that",

  "when",
  "what",
  "where",
  "how",

  "these",
  "those",

  "has",
  "have",

  "is",
  "are",

  "at",
  "in",
  "on",
  "of",
  "it",

  "from",
  "to",

  "can",
  "bug",

  "all",
  "some",

  "after",
  "before",

  "and",
  "or",
  "also",

  "big",
  "small",
  "little",

  "said",

  "far",
  "near",

  "up",
  "down",

  "come",
  "go",

  "for",
  "with",

  "find",
  "run",

  "away",
  "near",

  "see",
  "look",

  "yes",
  "no",
];
function readText(text: string) {
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}
const SightWordsChallenge = () => {
  const [count, setCount] = useState<number>(0);

  const handleReadText = () => {
    readText(stringList[count]);
  };
  const handleNext = () => {
    let tempCount = count + 1;
    if (tempCount >= stringList.length) {
      setCount(0);
    } else {
      setCount(tempCount);
    }
  };
  const handleTagClick = (tag: string) => {
    readText(tag);
  };
  return (
    <div>
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

      <CardDetail>
        {stringList.length > 0 && (
          <TagList>
            {stringList.map((tag, index) => (
              <Tag key={index} onClick={() => handleTagClick(tag)}>
                {tag}
              </Tag>
            ))}
          </TagList>
        )}
      </CardDetail>
    </div>
  );
};

export default SightWordsChallenge;
