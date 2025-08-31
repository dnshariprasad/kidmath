import { useState } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerHorizontallyDynamic,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../theme/KidStyles";
import SpeakIcon from "../components/SpeakIcon";
import NextIcon from "../components/NextIcon";
import PreviousIcon from "../components/PreviousIcon";
import { KidoText } from "../components/KidoText";
import SentenceReader from "./SentenceReader";
import { getSentencesOfWord } from "../store/data/WordUtil";

interface IWord {
  mame?: string;
  words?: string[];
  enabled?: boolean;
}

const WordReader = (props: IWord) => {
  const words = props.words || [];
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
      <CenteredContainerHorizontallyDynamic>
        <CenteredContainerHorizontally>
          <PreviousIcon onClick={handlePrevious} />
          <br />
          <br />
          <KidoText fontSize="50px" color="black" mobileFontSize="30px">
            {words[count]}
          </KidoText>
          <SpeakIcon text={words[count]} />
          <br />
          <br />
          <NextIcon onClick={handleNext} />
        </CenteredContainerHorizontally>
        {words.length > 0 && (
          <SentenceReader sentence={getSentencesOfWord(words[count])} />
        )}
      </CenteredContainerHorizontallyDynamic>
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

export default WordReader;
