import SpeakIcon from "../components/SpeakIcon";
import { ListContainer, ListItem } from "../theme/KidStyles";

interface SentenceReaderProps {
  sentence?: string[];
}

const SentenceReader = (props: SentenceReaderProps) => {
  const sentences = props.sentence || [];
  return (
    <>
      {sentences.length > 0 && (
        <ListContainer>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {sentences.map((sentence, index) => (
              <ListItem key={index} style={{ padding: "5px 0" }}>
                <SpeakIcon text={sentence} /> {sentence}
              </ListItem>
            ))}
          </ul>
        </ListContainer>
      )}
    </>
  );
};

export default SentenceReader;
