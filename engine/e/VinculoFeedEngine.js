/* ARCHIVO: engine/VinculoFeedEngine.js 
   ESTADO: ALGORITMO AUTO-REGULADO JGLM-ROOT-2026
*/
export const VinculoFeedEngine = {
    videos: [],
    historial: [],
    maxHistorial: 5,
    usuario: { intereses: {}, nivelVinculo: 0 },

    init(listaVideos) { this.videos = listaVideos; },

    // MEJORA 2: ANTI-LOCURA (Normalización)
    normalizar(valor, max = 20) {
        return Math.min(valor, max);
    },

    // MEJORA 4: VOTO DE CAMILA (IA Afectando distribución)
    decisionCamila(v) {
        if (v.vinculo > 5) return 2;
        if (v.interes > 10) return 1;
        return 0;
    },

    calcularScore(v) {
        const decision = this.decisionCamila(v);
        // Detector de aburrimiento (Extra)
        if (v.interes < -2) v.impulso -= 1;

        return (
            this.normalizar(v.interes) * 0.4 +
            this.normalizar(v.vinculo) * 0.3 +
            this.normalizar(v.impulso) * 0.2 +
            (decision * 0.1) // El toque de Camila
        );
    },

    // MEJORA 1: ANTI-BUCLE (No repetición)
    obtenerSiguiente() {
        const disponibles = this.videos.filter(v => !this.historial.includes(v.id));

        // Si ya vimos todos, reseteamos historial para volver a empezar
        if (disponibles.length === 0) {
            this.historial = [];
            return this.obtenerSiguiente();
        }

        const siguiente = disponibles.sort((a, b) => this.calcularScore(b) - this.calcularScore(a))[0];

        this.historial.push(siguiente.id);
        if (this.historial.length > this.maxHistorial) this.historial.shift();

        return siguiente;
    },

    registrarVistaCompleta(v) { v.interes += 2; },
    registrarSkip(v) { v.interes -= 1; },
    registrarComentario(v) { 
        v.vinculo += 3; 
        this.usuario.nivelVinculo += 1; 
    }
};
