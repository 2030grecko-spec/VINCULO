export function hablar(mensaje) {
    const voz = new SpeechSynthesisUtterance(mensaje);
    voz.lang = 'es-ES';
    voz.rate = 0.9; // Tono calmado de amiga
    window.speechSynthesis.speak(voz);
}
// Ejemplo: hablar("Hola Greco, el video de deporte tiene alto valor. Iniciando impulso.");
