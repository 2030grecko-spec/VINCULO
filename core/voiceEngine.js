export async function hablar(texto) {

  // 👉 SI USAS ELEVENLABS, CAMBIA AQUÍ
  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "es-ES";
  voz.rate = 0.9;

  speechSynthesis.speak(voz);
}
