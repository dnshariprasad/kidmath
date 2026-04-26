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

export const getEncouragement = (count: number) => {
  const messages = [
    "Good Start",
    "Keep Going",
    "Well Done",
    "So Smart",
    "Half Way",
    "Great Job",
    "Amazing",
    "Brilliant",
    "Nearly There",
    "Almost Done",
  ];

  if (count < 0) return "Keep going";
  return messages[count % messages.length];
};
