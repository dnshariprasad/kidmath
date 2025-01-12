import { useState } from "react";
import {
  CardDetail,
  CardItem,
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  MiddleItem,
  Tag,
  TagList,
} from "../theme/KidStyles";
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
        <CardItem>
          <PreviousIcon onClick={handlePrevious} />
        </CardItem>
        <MiddleItem>
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
        </MiddleItem>
        <CardItem>
          <NextIcon onClick={handleNext} />
        </CardItem>
      </CardDetail>
      <CenteredContainerVertical padding="20px">
        {stringList.length > 0 && (
          <TagList>
            {stringList.map((tag, index) => (
              <Tag key={index} onClick={() => setCount(index)}>
                {tag.word}
              </Tag>
            ))}
          </TagList>
        )}
      </CenteredContainerVertical>
    </CenteredContainerVertical>
  );
};

export default SightWordsChallenge;
