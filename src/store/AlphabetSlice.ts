import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { big, small } from "../data/Alphabet";

interface KiddooState {
  selectedAlphabet: string;
  bigAlphabets: string[];
  smallAlphabets: string[];
  alphabets: string[];
  loading: boolean;
}

const initialState: KiddooState = {
  selectedAlphabet: "",
  bigAlphabets: big,
  smallAlphabets: small,
  alphabets: [],
  loading: false,
};

const kiddooSlice = createSlice({
  name: "alphabet",
  initialState,
  reducers: {
    getAlphabets: (state) => {
      state.loading = true;
    },
    setAlphabets: (state, action: PayloadAction<string[]>) => {
      state.loading = true;
      state.alphabets = action.payload;
    },
    getSelectedAlphabet: (state) => {
      state.loading = true;
    },
    setSelectedAlphabet: (state, action: PayloadAction<string>) => {
      state.selectedAlphabet = action.payload;
      state.loading = false;
    },
  },
});

export const {
  getAlphabets,
  setAlphabets,
  getSelectedAlphabet,
  setSelectedAlphabet,
} = kiddooSlice.actions;

export default kiddooSlice.reducer;
