import { put, takeEvery, select } from "redux-saga/effects";

import {
  getAlphabets,
  getSelectedAlphabet,
  setAlphabets,
  setSelectedAlphabet,
} from "../slice/AlphabetSlice";
import { RootState } from "../store";

function* handleAlphabetsAsync() {
  const alphabets: string[] = yield select((state: RootState) =>
    state.alphabet.bigAlphabets.concat(state.alphabet.smallAlphabets)
  );
  yield put(setAlphabets(alphabets));
}

function* handleSelectedAlphabetAsync() {
  const alphabets: string[] = yield select((state: RootState) =>
    state.alphabet.bigAlphabets.concat(state.alphabet.smallAlphabets)
  );
  const index = Math.floor(Math.random() * alphabets.length);
  const randomLetter = alphabets[index];
  yield put(setSelectedAlphabet(randomLetter));
}

export default function* kiddooSaga() {
  yield takeEvery(getAlphabets.type, handleAlphabetsAsync);
  yield takeEvery(getSelectedAlphabet.type, handleSelectedAlphabetAsync);
}
