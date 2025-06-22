import { useEffect, useState } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerHorizontallyDynamic,
  CenteredContainerVertical,
  ListContainer,
  ListItem,
  Tag,
  TagList,
} from "../../theme/KidStyles";
import SpeakIcon from "../../components/SpeakIcon";
import NextIcon from "../../components/NextIcon";
import PreviousIcon from "../../components/PreviousIcon";
import { KidoText } from "../../components/KidoText";
import { sentences } from "../../data/WordsData";
import { getAllWords } from "../../data/WordUtil";

const SightWordsChallenge = () => {
  const [words, setWords] = useState<string[]>([]);
  useEffect(() => {
    setWords(getAllWords());
  }, []);
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
          <ListContainer>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {sentences
                .filter((s: string) => {
                  const wordsInSentence = s.toLowerCase().split(/[\s.,!?]+/);
                  return wordsInSentence.includes(words[count].toLowerCase());
                })
                .map((sentence, index) => (
                  <ListItem key={index} style={{ padding: "5px 0" }}>
                    <SpeakIcon text={sentence} /> {sentence}
                  </ListItem>
                ))}
            </ul>
          </ListContainer>
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

export default SightWordsChallenge;
