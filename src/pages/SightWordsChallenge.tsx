import { useState } from "react";
import {
  CardDetail,
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../KidStyles";
import { wordsSentencesData } from "../data/Words";
import SpeakIcon from "../components/SpeakIcon";
import NextIcon from "../components/NextIcon";
import PreviousIcon from "../components/PreviousIcon";
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
    <CenteredContainerVertical>
      <CardDetail>
        <CenteredContainerHorizontally>
          <PreviousIcon onClick={handlePrevious} />
          <CenteredContainerVertical>
            <CenteredContainerHorizontally>
              <h1>{stringList[count].word}</h1>
              <SpeakIcon text={stringList[count].word} />
            </CenteredContainerHorizontally>

            {stringList.length > 0 && (
              <div>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  {stringList[count].sentences.map((sentence, index) => (
                    <li key={index} style={{ padding: "5px 0" }}>
                      <SpeakIcon text={sentence} /> {sentence}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CenteredContainerVertical>
          <NextIcon onClick={handleNext} />
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
    </CenteredContainerVertical>
  );
};

export default SightWordsChallenge;
