import { store } from "../store/store";

export function readText(text: string, lang: string = "en-US") {
  const isMuted = store.getState().alphabet.isMuted;
  if (isMuted) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const speak = () => {
    // Some browsers need a tiny delay after cancel() to start a new utterance
    setTimeout(() => {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = lang;
      speech.rate = 0.9;
      speech.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();

      // Better voice matching: exact lang match -> starts with lang -> any voice for that lang
      const targetLang = lang.toLowerCase().replace("_", "-");
      const shortLang = targetLang.split("-")[0];

      const voice =
        voices.find((v) => v.lang.toLowerCase().replace("_", "-") === targetLang) ||
        voices.find((v) => v.lang.toLowerCase().startsWith(shortLang)) ||
        voices.find((v) => v.name.toLowerCase().includes("telugu") && shortLang === "te") ||
        voices.find((v) => v.name.toLowerCase().includes("hindi") && shortLang === "hi") ||
        voices.find((v) => v.lang.includes(shortLang));

      if (voice) {
        speech.voice = voice;
      }

      window.speechSynthesis.speak(speech);
    }, 50);
  };

  // If voices are already loaded, speak immediately
  if (window.speechSynthesis.getVoices().length > 0) {
    speak();
  } else {
    // Wait for voices to load - use addEventListener to avoid overwriting other listeners
    const handleVoicesChanged = () => {
      speak();
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
    };
    window.speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);
  }
}

// Prime voices loading
if (typeof window !== "undefined" && window.speechSynthesis) {
  window.speechSynthesis.getVoices();
}

import { TRANSLATIONS } from "../constants/translations";

export const getEncouragement = (count: number) => {
  const t = TRANSLATIONS.en;
  if (count < 0) return t.enc_default;
  return t.enc_messages[count % t.enc_messages.length];
};
