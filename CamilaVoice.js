// MOTOR DE VOZ Y EVENTLAND - VÍNCULO AI
export const camilaVoice = (mensaje) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(mensaje);
  
  // Configuración de la voz (Mentora Profesional)
  utterance.pitch = 1.1; // Un poco más aguda para claridad
  utterance.rate = 0.9;  // Velocidad pausada, analítica
  utterance.lang = 'es-ES'; // Español real
  
  synth.speak(utterance);
};

// ESCUCHA ACTIVA (Eventland)
export const listenToUser = () => {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) return console.log("Tu navegador no soporta voz");

  const recognition = new Recognition();
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log("Usuario dijo:", transcript);
    // Aquí el texto va directo al CamilaBrain para analizar la emoción
  };
  recognition.start();
};

