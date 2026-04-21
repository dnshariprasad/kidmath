import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { big, small } from "../../constants/alphabet";

export type FontSizeLevel = "small" | "medium" | "large";

interface GameStats {
  score: number;
  streak: number;
}

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
  gameStats: Record<string, GameStats>;
  isMobileMenuOpen: boolean;
  isMuted: boolean;
  theme: "light" | "dark";
  fontSizeLevel: FontSizeLevel;
  userName: string;
}

const STORAGE_KEY = "kiddoo_app_state";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const saveState = (state: Partial<KiddooState>) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch {
    // Ignore write errors
  }
};

const initialGameStats: GameStats = { score: 0, streak: 0 };

const persistedState = loadState();

const initialState: KiddooState = {
  selectedAlphabet: "",
  bigAlphabets: big,
  smallAlphabets: small,
  alphabets: [],
  loading: false,
  userStats: persistedState?.userStats || {
    score: 0,
    streak: 0,
    lastPlayed: null,
  },
  gameStats: persistedState?.gameStats || {
    math: { ...initialGameStats },
    spelling: { ...initialGameStats },
    missing_letters: { ...initialGameStats },
    comparison: { ...initialGameStats },
    sorting: { ...initialGameStats },
  },
  isMobileMenuOpen: false,
  isMuted: persistedState?.isMuted ?? false,
  theme: persistedState?.theme || "light",
  fontSizeLevel: persistedState?.fontSizeLevel || "medium",
  userName: persistedState?.userName || "",
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
    incrementScore: (state, action: PayloadAction<string | undefined>) => {
      const gameId = action.payload;

      // Update global score
      state.userStats.score += 10;
      state.userStats.streak += 1;
      state.userStats.lastPlayed = new Date().toISOString();

      // Update game specific score
      if (gameId && state.gameStats[gameId]) {
        state.gameStats[gameId].score += 10;
        state.gameStats[gameId].streak += 1;
      }
      saveState(state);
    },
    resetStreak: (state, action: PayloadAction<string | undefined>) => {
      const gameId = action.payload;
      state.userStats.streak = 0;

      if (gameId && state.gameStats[gameId]) {
        state.gameStats[gameId].streak = 0;
      }
      saveState(state);
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    toggleMute: (state) => {
      state.isMuted = !state.isMuted;
      saveState(state);
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      saveState(state);
    },
    setFontSizeLevel: (state, action: PayloadAction<FontSizeLevel>) => {
      state.fontSizeLevel = action.payload;
      saveState(state);
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      saveState(state);
    },
    resetAll: (state) => {
      state.userStats = { score: 0, streak: 0, lastPlayed: null };
      state.gameStats = {
        math: { score: 0, streak: 0 },
        spelling: { score: 0, streak: 0 },
        missing_letters: { score: 0, streak: 0 },
        comparison: { score: 0, streak: 0 },
        sorting: { score: 0, streak: 0 },
      };
      saveState(state);
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
  toggleMute,
  toggleTheme,
  setFontSizeLevel,
  setUserName,
  resetAll,
} = kiddooSlice.actions;

export default kiddooSlice.reducer;
