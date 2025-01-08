import { useState } from "react";
import {
  CardDetail,
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../KidStyles";
import KidButton from "../components/KidButton";
import { readText } from "../util";
import { wordsSentencesData } from "../data/Words";
const stringList = wordsSentencesData;

const SightWordsChallenge = () => {
  const [count, setCount] = useState<number>(0);

  const handleReadText = () => {
    readText(stringList[count].word);
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
    <div>
      <CardDetail>
        <CenteredContainerHorizontally>
          <CenteredContainerVertical>
            <h1>{stringList[count].word}</h1>
            <CenteredContainerHorizontally>
              <KidButton isActive={true} title=" < " onClick={handleNext} />
              <KidButton
                isActive={true}
                title="Read"
                onClick={handleReadText}
              />
              <KidButton isActive={true} title=" > " onClick={handleNext} />
            </CenteredContainerHorizontally>
          </CenteredContainerVertical>
          {stringList.length > 0 && (
            <div>
              <ul>
                <li>
                  {stringList[count].sentences.map((sentence, index) => (
                    <li key={index}>{sentence}</li>
                  ))}
                </li>
              </ul>
            </div>
          )}
        </CenteredContainerHorizontally>
      </CardDetail>

      {stringList.length > 0 && (
        <CardDetail>
          <TagList>
            {stringList.map((tag, index) => (
              <Tag key={index} onClick={() => setCount(index)}>
                {tag.word}
              </Tag>
            ))}
          </TagList>
        </CardDetail>
      )}
    </div>
  );
};

export default SightWordsChallenge;
