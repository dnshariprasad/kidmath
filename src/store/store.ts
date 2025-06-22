import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import AlphabetSlice from "./slice/AlphabetSlice";
import AlphabetSaga from "./saga/AlphabetSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    alphabet: AlphabetSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(AlphabetSaga);

// Types for use in app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
