import { db } from './firebaseConfig';
import { ref, update } from 'firebase/database';
import { analyzeEmotion } from './CamilaBrain';

// 🗣️ MOTOR DE VOZ (Camila te habla)
export const camilaVoice = (mensaje) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(mensaje);
  
  // Configuración Greco: Mentora Profesional y Analítica
  utterance.pitch = 1.1; 
  utterance.rate = 0.9;  
  utterance.lang = 'es-ES'; 
  
  synth.speak(utterance);
};

// 👂 ESCUCHA ACTIVA (Camila te oye y actualiza Firebase)
export const listenToUser = (userId) => {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!Recognition) {
    return console.log("Sistema Vínculo: Navegador no compatible con voz");
  }

  const recognition = new Recognition();
  recognition.lang = 'es-ES';
  recognition.continuous = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log("Camila escuchó:", transcript);

    // 1. Analizamos la emoción con el cerebro de Camila
    const emocionDetectada = analyzeEmotion(transcript);

    // 2. Actualizamos la base de datos negra que creamos (Firebase)
    const userRef = ref(db, 'usuarios/' + userId);
    update(userRef, {
      ultimo_mensaje: transcript,
      lastEmotion: emocionDetectada.label.toLowerCase(),
      puntos_recientes: 5 // Le damos 5 puntos por participar
    });

    // 3. Camila responde según lo que escuchó
    camilaVoice(`Entendido. He registrado tu mensaje y he ajustado tu estado a ${emocionDetectada.label}`);
  };

  recognition.onerror = (err) => console.error("Error en Escucha:", err);
  
  recognition.start();
};
