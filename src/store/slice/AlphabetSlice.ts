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
  currentMode: "learn" | "practice" | "test" | null;
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
  gameStats: {
    math: { ...initialGameStats, ...persistedState?.gameStats?.math },
    spelling: { ...initialGameStats, ...persistedState?.gameStats?.spelling },
    missing_letters: { ...initialGameStats, ...persistedState?.gameStats?.missing_letters },
    comparison: { ...initialGameStats, ...persistedState?.gameStats?.comparison },
    sorting: { ...initialGameStats, ...persistedState?.gameStats?.sorting },
    alphabet: { ...initialGameStats, ...persistedState?.gameStats?.alphabet },
    sight_words: { ...initialGameStats, ...persistedState?.gameStats?.sight_words },
    sudoku: { ...initialGameStats, ...persistedState?.gameStats?.sudoku },
    alphabet_hindi: { ...initialGameStats, ...persistedState?.gameStats?.alphabet_hindi },
    alphabet_telugu: { ...initialGameStats, ...persistedState?.gameStats?.alphabet_telugu },
    weeks_english: { ...initialGameStats, ...persistedState?.gameStats?.weeks_english },
    weeks_telugu: { ...initialGameStats, ...persistedState?.gameStats?.weeks_telugu },
    months_english: { ...initialGameStats, ...persistedState?.gameStats?.months_english },
    shapes: { ...initialGameStats, ...persistedState?.gameStats?.shapes },
    body_parts: { ...initialGameStats, ...persistedState?.gameStats?.body_parts },
    sense_organs: { ...initialGameStats, ...persistedState?.gameStats?.sense_organs },
    weeks_hindi: { ...initialGameStats, ...persistedState?.gameStats?.weeks_hindi },
    numbers_english_spelling: {
      ...initialGameStats,
      ...persistedState?.gameStats?.numbers_english_spelling,
    },
    numbers_hindi: { ...initialGameStats, ...persistedState?.gameStats?.numbers_hindi },
    numbers_telugu: { ...initialGameStats, ...persistedState?.gameStats?.numbers_telugu },
    months_telugu: { ...initialGameStats, ...persistedState?.gameStats?.months_telugu },
    months_hindi: { ...initialGameStats, ...persistedState?.gameStats?.months_hindi },
    place_values: { ...initialGameStats, ...persistedState?.gameStats?.place_values },
    master_test: { ...initialGameStats, ...persistedState?.gameStats?.master_test },
  },
  isMobileMenuOpen: false,
  isMuted: persistedState?.isMuted ?? false,
  currentMode: persistedState?.currentMode ?? null,
  theme: persistedState?.theme || "light",
  fontSizeLevel: persistedState?.fontSizeLevel || "large",
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
      const gameId = action?.payload;

      // Update global score
      state.userStats.score += 10;
      state.userStats.streak += 1;
      state.userStats.lastPlayed = new Date().toISOString();

      // Update game specific score
      if (gameId && state.gameStats && state.gameStats[gameId]) {
        state.gameStats[gameId].score += 10;
        state.gameStats[gameId].streak += 1;
      }
      saveState(state);
    },
    resetStreak: (state, action: PayloadAction<string | undefined>) => {
      const gameId = action?.payload;
      state.userStats.streak = 0;

      if (gameId && state.gameStats && state.gameStats[gameId]) {
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
    setMode: (state, action: PayloadAction<"learn" | "practice" | "test" | null>) => {
      state.currentMode = action.payload;
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
        alphabet: { score: 0, streak: 0 },
        sight_words: { score: 0, streak: 0 },
        sudoku: { score: 0, streak: 0 },
        alphabet_hindi: { score: 0, streak: 0 },
        alphabet_telugu: { score: 0, streak: 0 },
        weeks_english: { score: 0, streak: 0 },
        weeks_telugu: { score: 0, streak: 0 },
        months_english: { score: 0, streak: 0 },
        shapes: { score: 0, streak: 0 },
        body_parts: { score: 0, streak: 0 },
        sense_organs: { score: 0, streak: 0 },
        weeks_hindi: { score: 0, streak: 0 },
        numbers_english_spelling: { score: 0, streak: 0 },
        numbers_hindi: { score: 0, streak: 0 },
        numbers_telugu: { score: 0, streak: 0 },
        months_telugu: { score: 0, streak: 0 },
        months_hindi: { score: 0, streak: 0 },
        place_values: { score: 0, streak: 0 },
        master_test: { score: 0, streak: 0 },
      };
      saveState(state);
    },
    setStreak: (state, action: PayloadAction<{ gameId: string; streak: number }>) => {
      const { gameId, streak } = action.payload;
      if (state.gameStats && state.gameStats[gameId]) {
        state.gameStats[gameId].streak = streak;
      }
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
  setMode,
  setUserName,
  resetAll,
  setStreak,
} = kiddooSlice.actions;

export default kiddooSlice.reducer;
