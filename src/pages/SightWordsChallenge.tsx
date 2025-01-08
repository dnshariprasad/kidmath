import { useState } from "react";
import {
  CardDetail,
  CenteredContainerHorizontally,
  Tag,
  TagList,
} from "../KidStyles";
import { wordsSentencesData } from "../data/Words";
import SpeakIcon from "../components/SpeakIcon";
const stringList = wordsSentencesData;

const SightWordsChallenge = () => {
  const [count, setCount] = useState<number>(0);

  const handleNext = () => {
    let tempCount = count + 1;
    if (tempCount >= stringList.length) {
      setCount(0);
    } else {
      setCount(tempCount);
    }
  };
  const handlePrevious = () => {
    let tempCount = count - 1;
    if (tempCount <= 0) {
      setCount(stringList.length - 1);
    } else {
      setCount(tempCount);
    }
  };
  return (
    <div>
      <CenteredContainerHorizontally>
        <CardDetail>
          <CenteredContainerHorizontally>
            <h1 onClick={handlePrevious}>{" < "}</h1>
            <br />
            <br />
            <h1>{stringList[count].word}</h1>
            <SpeakIcon text={stringList[count].word} />
            {stringList.length > 0 && (
              <div>
                <ul>
                  <li>
                    {stringList[count].sentences.map((sentence, index) => (
                      <li key={index}>
                        {sentence} <SpeakIcon text={sentence} />
                      </li>
                    ))}
                  </li>
                </ul>
              </div>
            )}
            <br />
            <br />
            <h1 onClick={handleNext}>{" > "}</h1>
          </CenteredContainerHorizontally>
        </CardDetail>
      </CenteredContainerHorizontally>

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
