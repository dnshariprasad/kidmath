import { store } from "../store/store";

export function readText(text: string, lang: string = "en-US") {
  const isMuted = store.getState().alphabet.isMuted;
  if (isMuted) return;

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = lang;
  window.speechSynthesis.speak(speech);
}
