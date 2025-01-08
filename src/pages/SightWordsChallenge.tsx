import { useState } from "react";
import {
  CardDetail,
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../KidStyles";
import KidButton from "../components/KidButton";
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
  return (
    <div>
      <CardDetail>
        <CenteredContainerHorizontally>
          <CenteredContainerVertical>
            <CenteredContainerHorizontally>
              <h1>{stringList[count].word}</h1>
              <SpeakIcon text={stringList[count].word} />
            </CenteredContainerHorizontally>
            <CenteredContainerHorizontally>
              <KidButton isActive={true} title=" < " onClick={handleNext} />
              <KidButton isActive={true} title=" > " onClick={handleNext} />
            </CenteredContainerHorizontally>
          </CenteredContainerVertical>
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
