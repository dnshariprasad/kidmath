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

export const getEncouragement = (count: number) => {
  const messages = [
    "Let's go! You can do it! 🚀",
    "Nice one! Next up... 🌟",
    "Great start! Keep going! 🔥",
    "You're a star! Super! ⭐",
    "Halfway there! Amazing! ✨",
    "Fantastic! You got this! 🙌",
    "So smart! Keep it up! 🧠",
    "Almost finished! Be careful! 💪",
    "Nearly there! On fire! 🚒",
    "Last one! Go for gold! 🏆",
  ];

  if (count < 0) return "You're doing great! 🌟";
  return messages[count % messages.length];
};
