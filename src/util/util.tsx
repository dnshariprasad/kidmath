export function readText(text: string, lang: string = "en-US") {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = lang;
  window.speechSynthesis.speak(speech);
}
