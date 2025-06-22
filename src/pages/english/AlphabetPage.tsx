import { useEffect } from "react";
import {
  CenteredContainerHorizontally,
  CenteredContainerVertical,
  Tag,
  TagList,
} from "../../theme/KidStyles";
import SpeakIcon from "../../components/SpeakIcon";
import NextIcon from "../../components/NextIcon";
import { KidoText } from "../../components/KidoText";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  getSelectedAlphabet,
  setSelectedAlphabet,
} from "../../store/slice/AlphabetSlice";

const AlphabetChallenge = () => {
  const dispatch = useDispatch<AppDispatch>();
  const big = useSelector((state: RootState) => state.alphabet.bigAlphabets);
  const small = useSelector(
    (state: RootState) => state.alphabet.smallAlphabets
  );
  const selected = useSelector(
    (state: RootState) => state.alphabet.selectedAlphabet
  );
  useEffect(() => {
    dispatch(getSelectedAlphabet());
  }, []);

  const handleNext = () => {
    dispatch(getSelectedAlphabet());
  };

  return (
    <CenteredContainerVertical>
      <br />
      <br />
      <CenteredContainerHorizontally>
        <KidoText fontSize="50px" color="black" mobileFontSize="30px">
          {selected}
        </KidoText>
        <SpeakIcon text={selected} />
        <NextIcon onClick={handleNext} />
      </CenteredContainerHorizontally>
      <br />
      <br />
      {big.length > 0 && (
        <TagList>
          {big.map((tag, index) => (
            <Tag key={index} onClick={() => dispatch(setSelectedAlphabet(tag))}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
      {small.length > 0 && (
        <TagList>
          {small.map((tag, index) => (
            <Tag key={index} onClick={() => dispatch(setSelectedAlphabet(tag))}>
              {tag}
            </Tag>
          ))}
        </TagList>
      )}
    </CenteredContainerVertical>
  );
};

export default AlphabetChallenge;
