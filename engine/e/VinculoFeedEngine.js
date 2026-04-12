/* ARCHIVO: engine/VinculoFeedEngine.js 
   SISTEMA: ALGORITMO DE PREFERENCIAS JGLM-ROOT
*/
export const VinculoFeedEngine = {
    videos: [],
    usuario: { intereses: {}, nivelVinculo: 0 },

    init(listaVideos) { this.videos = listaVideos; },

    calcularScore(v) {
        // Lógica: 40% Interés, 30% Vínculo, 30% Impulso
        return (v.interes * 0.4) + (v.vinculo * 0.3) + (v.impulso * 0.3);
    },

    obtenerSiguiente() {
        return this.videos.sort((a, b) => this.calcularScore(b) - this.calcularScore(a))[0];
    },

    registrarVistaCompleta(v) { v.interes += 2; },
    registrarSkip(v) { v.interes -= 1; },
    registrarComentario(v) { 
        v.vinculo += 3; 
        this.usuario.nivelVinculo += 1; 
    }
};
