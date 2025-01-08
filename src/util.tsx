export function readText(text: string) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}
