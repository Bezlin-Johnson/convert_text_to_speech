function convert() {
  const msg = document.getElementById("text-to-speech").value;
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en";
  speech.text = msg;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
