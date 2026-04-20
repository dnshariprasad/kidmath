import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { big, small } from "../data/Alphabet";

interface KiddooState {
  selectedAlphabet: string;
  bigAlphabets: string[];
  smallAlphabets: string[];
  alphabets: string[];
  loading: boolean;
  userStats: {
    score: number;
    streak: number;
    lastPlayed: string | null;
  };
  isMobileMenuOpen: boolean;
}

const initialState: KiddooState = {
  selectedAlphabet: "",
  bigAlphabets: big,
  smallAlphabets: small,
  alphabets: [],
  loading: false,
  userStats: {
    score: 0,
    streak: 0,
    lastPlayed: null,
  },
  isMobileMenuOpen: false,
};

const kiddooSlice = createSlice({
  name: "alphabet",
  initialState,
  reducers: {
    getAlphabets: (state) => {
      state.loading = true;
    },
    setAlphabets: (state, action: PayloadAction<string[]>) => {
      state.loading = false;
      state.alphabets = action.payload;
    },
    getSelectedAlphabet: (state) => {
      state.loading = true;
    },
    setSelectedAlphabet: (state, action: PayloadAction<string>) => {
      state.selectedAlphabet = action.payload;
      state.loading = false;
    },
    incrementScore: (state) => {
      state.userStats.score += 10;
      state.userStats.streak += 1;
      state.userStats.lastPlayed = new Date().toISOString();
    },
    resetStreak: (state) => {
      state.userStats.streak = 0;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
  },
});

export const {
  getAlphabets,
  setAlphabets,
  getSelectedAlphabet,
  setSelectedAlphabet,
  incrementScore,
  resetStreak,
  toggleMobileMenu,
  closeMobileMenu,
} = kiddooSlice.actions;

export default kiddooSlice.reducer;
