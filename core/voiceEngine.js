/**
 * @project VÍNCULO AI - Red Social de Valores
 * @author Jose Gregorio Luces Muñoz (Greco)
 * @license Private / Proprietary
 * @file core/voiceEngine.js
 */

export const VoiceEngine = {
    // Camila detecta el idioma y responde
    hablar(texto, idioma = 'es-ES') {
        const mensaje = new SpeechSynthesisUtterance(texto);
        
        // Configuración Políglota
        // es-ES (Español), pt-BR (Português), en-US (English)
        mensaje.lang = idioma; 
        mensaje.rate = 0.9; // Velocidad tranquila y analítica
        mensaje.pitch = 1.1; // Tono femenino de Camila

        window.speechSynthesis.speak(mensaje);
        console.log(`Camila hablando en ${idioma}: ${texto}`);
    }
};
