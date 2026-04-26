import { store } from "../store/store";

export function readText(text: string, lang: string = "en-US") {
  const isMuted = store.getState().alphabet.isMuted;
  if (isMuted) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const speak = () => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;
    speech.rate = 0.9;
    speech.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    // Prefer a voice that matches the language exactly, then one that starts with it
    const voice =
      voices.find((v) => v.lang === lang) ||
      voices.find((v) => v.lang.startsWith(lang.split("-")[0]));

    if (voice) {
      speech.voice = voice;
    }

    window.speechSynthesis.speak(speech);
  };

  // If voices are already loaded, speak immediately
  if (window.speechSynthesis.getVoices().length > 0) {
    speak();
  } else {
    // Wait for voices to load
    window.speechSynthesis.onvoiceschanged = speak;
  }
}

import { TRANSLATIONS } from "../constants/translations";

export const getEncouragement = (count: number) => {
  const t = TRANSLATIONS.en;
  if (count < 0) return t.enc_default;
  return t.enc_messages[count % t.enc_messages.length];
};
