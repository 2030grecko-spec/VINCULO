// ==========================================
// 🧠 CEREBRO DE VÍNCULO: ALGORITMO DE VALOR PRO
// ==========================================

export function calcularViralidad(video, usuario) {
    // 1. PUNTUACIÓN DE VALORES (Tu idea original)
    let score = (video.paz || 0) + (video.familia || 0) + (video.deporte || 0) + (video.academia || 0);

    // 2. BONO DE CAMILA (La Jueza)
    if (camilaDetectaValor(video)) score += 30;

    // 3. RETENCIÓN Y ENGAGEMENT (Lo que sumó el otro chat)
    if (video.watchTime > 0.8) score += 20; // Si ven más del 80%
    if (video.likes > 5) score += 10;
    if (video.shares > 2) score += 20;

    // 4. CALCULAR EL IMPULSO (EL BOOST)
    let boost = 1;
    if (score >= 90) boost = 1.95;
    else if (score >= 70) boost = 1.75;
    else if (score >= 50) boost = 1.5;
    else if (score >= 35) boost = 1.4;

    // 5. VÍNCULO BUSINESS 🅱️ (Multiplicador de Empresa)
    if (usuario.tipo === "Business") {
        boost *= (usuario.tarifa === 500 ? 2 : 1.5); // Las multinacionales duplican el boost
    }

    // 6. PROTECCIÓN DE GASTO (TECHO)
    const totalViews = Math.min(video.baseViews * boost, 100000); // Cap de seguridad

    return {
        finalScore: score,
        boost: boost,
        views: totalViews,
        showImpulseButton: score >= 35 // Solo muestra el botón si hay valor
    };
}

function camilaDetectaValor(video) {
    // Aquí irá la IA real, por ahora es el ojo clínico de Camila
    return video.esConstructivo === true;
}
