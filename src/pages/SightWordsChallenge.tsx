import { useState } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../theme/KidStyles";
import SpeakIcon from "../components/SpeakIcon";
import NextIcon from "../components/NextIcon";
import PreviousIcon from "../components/PreviousIcon";
import { KidoText } from "../components/KidoText";
import { sentences, words } from "../data/Words";

const SightWordsChallenge = () => {
  const [count, setCount] = useState<number>(0);

  const handleNext = () => {
    let tempCount = count + 1;
    if (tempCount >= words.length) {
      setCount(0);
    } else {
      setCount(tempCount);
    }
  };
  const handlePrevious = () => {
    let tempCount = count - 1;
    if (tempCount <= 0) {
      setCount(words.length - 1);
    } else {
      setCount(tempCount);
    }
  };
  return (
    <CenteredContainerVertical>
      <br />
      <CenteredContainerHorizontally>
        <PreviousIcon onClick={handlePrevious} />
        <CenteredContainerVertical>
          <CenteredContainerHorizontally>
            <KidoText fontSize="50px" color="black" mobileFontSize="30px">
              {words[count]}
            </KidoText>
            <SpeakIcon text={words[count]} />
          </CenteredContainerHorizontally>

          {words.length > 0 && (
            <div>
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                {sentences
                  .filter((s: string) => s.includes(words[count]))
                  .slice(0, 5)
                  .map((sentence, index) => (
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
      <CenteredContainerVertical padding="20px">
        {words.length > 0 && (
          <TagList>
            {words.map((tag, index) => (
              <Tag key={index} onClick={() => setCount(index)}>
                {tag}
              </Tag>
            ))}
          </TagList>
        )}
      </CenteredContainerVertical>
    </CenteredContainerVertical>
  );
};

export default SightWordsChallenge;
