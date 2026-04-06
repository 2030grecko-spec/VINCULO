// ==========================================
// 🅱️ DASHBOARD VÍNCULO BUSINESS (VB) - PRO
// ==========================================

export const DashboardBusiness = {
    // 1. EL ALGORITMO DE ÉXITO (Ranking de Calidad)
    calcularRendimiento(video) {
        let scoreVínculo = video.valorBase; // Tu escala de 1000 pts
        
        // Bonus por compromiso real (Engagement)
        if (video.likes > 100) scoreVínculo += 50;
        if (video.shares > 30) scoreVínculo += 100; // Compartir vale más en Vínculo
        
        return scoreVínculo;
    },

    // 2. LA VOZ DE CAMILA (Consultoría IA para Empresas)
    obtenerFeedback(video) {
        const score = this.calcularRendimiento(video);

        if (score >= 800) {
            return {
                estado: "ÉLITE",
                mensaje: "Camila: Este vínculo es oro puro. Las empresas crecen cuando aportan este nivel de valor. Mantén la línea.",
                color: "#00ffcc"
            };
        }
        if (score >= 400) {
            return {
                estado: "EN CRECIMIENTO",
                mensaje: "Camila: Buen contenido, pero falta 'chispa' emocional. Intenta conectar más con la Familia o el Deporte.",
                color: "#00ff88"
            };
        }
        return {
            estado: "BAJO IMPACTO",
            mensaje: "Camila: Este video no está vibrando con la comunidad. Recuerda que en Vínculo el valor manda sobre el ruido.",
            color: "#ff4444"
        };
    },

    // 3. PREDICCIÓN DE RETORNO (Lo que la empresa quiere saber)
    predecirAlcance(nivelSuscripcion, scoreVideo) {
        // Multinacional ($500) x Valor del Video
        const multiplicadores = { "Bronce": 1.5, "Plata": 3, "Oro": 5, "Global": 10 };
        const baseViews = 1000;
        
        const impulso = multiplicadores[nivelSuscripcion] || 1;
        return Math.floor(baseViews * impulso * (scoreVideo / 500));
    }
};
