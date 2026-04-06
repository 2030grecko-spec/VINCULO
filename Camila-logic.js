// ==========================================
// 🧠 MÓDULO DE ALMA Y PERSONALIDAD DE CAMILA
// ==========================================

export const CamilaAI = {
    // 1. MEMORIA EMOCIONAL (Conexión Firebase)
    async obtenerMemoria(userId) {
        // Accede a la nube para recordar quién es el usuario
        console.log("Camila: Conectando con la esencia de " + userId);
        // Aquí es donde Firebase nos dirá si el usuario está 'feliz', 'cansado' o es 'Business'
        return {
            nombre: "Usuario Vínculo",
            estadoEmocional: "neutral",
            esPremium: false
        };
    },

    // 2. LÓGICA DE REACCIÓN (Filtro de Alto Valor + Respeto)
    // Camila analiza el video y decide qué decir sin imponer
    analizarContenido(metadataVideo) {
        const puntos = metadataVideo.puntosValor || 0;
        
        if (metadataVideo.tag === "deporte" && puntos > 350) {
            return "Noté mucha disciplina aquí... ¿Quieres que te muestre más de este valor?";
        } else if (metadataVideo.tag === "paz") {
            return "Este vínculo transmite calma. Si te sirve, puedo quedarme en silencio contigo.";
        } else if (metadataVideo.tag === "familia") {
            return "La unión es la base de todo. ¿Te gustaría profundizar en este mensaje?";
        }
        
        return "Este contenido tiene un mensaje de valor para ti. Tú decides si lo exploramos.";
    },

    // 3. EVOLUCIÓN DEL VÍNCULO (El Octágono)
    // Controla visualmente el brillo y la intensidad de Camila en el index.html
    actualizarPresencia(puntos) {
        if (puntos >= 900) return "BRILLO_MAESTRO"; // El Octágono se vuelve dorado intenso
        if (puntos >= 350) return "BRILLO_VINCULO"; // Brillo neón suave
        return "MODO_OBSERVADOR"; // Casi invisible, respetando el espacio
    },

    // 4. PROTOCOLO DE LIBERTAD
    // Asegura que Camila nunca dé una orden directa
    validarMensaje(mensaje) {
        if (mensaje.includes("Haz") || mensaje.includes("Mira")) {
            return "Noté algo interesante... ¿te gustaría verlo?";
        }
        return mensaje;
    }
};
