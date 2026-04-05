// ESCALA DE VALORES VÍNCULO (Cerebro de Camila)
const ESCALA_VALORES = {
    FAMILIA: 250,        // Máximo puntaje por unión familiar
    EDUCACION: 200,      // Conocimiento y academia
    DEPORTE: 150,        // Salud y disciplina
    RELIGION: 150,       // Fe y valores espirituales
    CULTURA: 150,        // Identidad y arte
    COMUNIDAD: 100       // Ayuda y civismo
};

// FUNCIÓN PARA CALCULAR EL VALOR TOTAL
function analizarVideo(v_familia, v_educacion, v_deporte, v_religion, v_cultura, v_comunidad) {
    let totalPuntos = v_familia + v_educacion + v_deporte + v_religion + v_cultura + v_comunidad;
    
    // Si el video supera los 350 puntos, Camila activa el impulso
    if (totalPuntos >= 350) {
        console.log("Camila: Contenido de Alto Valor detectado. Activando Válvula.");
        return { viralidad: true, puntos: totalPuntos };
    } else {
        return { viralidad: false, puntos: totalPuntos };
    }
}
