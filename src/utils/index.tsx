import { store } from "../store/store";

export function readText(text: string, lang: string = "en-US") {
  const isMuted = store.getState().alphabet.isMuted;
  if (isMuted) return;

  // Cancel any ongoing speech to prevent overlap
  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = lang;
  speech.rate = 0.95; // Slightly slower for clearer kid comprehension
  speech.pitch = 1.1; // Slightly higher pitch for a friendlier tone

  window.speechSynthesis.speak(speech);
}
