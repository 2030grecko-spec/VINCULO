/**
 * @project VÍNCULO AI
 * @author Jose Gregorio Luces Muñoz (Greco)
 * @description GESTIÓN DE EVENTOS: NOMINADOS JUEVES / GALA VIERNES
 */

export const ShowManager = {
    config: {
        maxNominados: 5, // Empezamos con 5 como dijiste
        horaNominados: "20:00", // Jueves
        horaCierreVotacion: "16:00", // Viernes
        horaGala: "20:00" // Viernes
    },

    // 1. SELECCIÓN DE NOMINADOS (Jueves)
    obtenerNominados(listaVideos) {
        // Filtramos por los valores más altos, sin importar las vistas
        return listaVideos
            .sort((a, b) => b.porcentajeValor - a.porcentajeValor)
            .slice(0, this.config.maxNominados);
    },

    // 2. PREMIO AL GANADOR (Viernes Noche)
    // El ganador recibe el "Impulso de Oro" (Cuadruplicar vistas)
    premiarGanador(videoGanador) {
        console.log(`Camila anuncia ganador: ${videoGanador.autor}`);
        videoGanador.vistasTotal *= 4; // SE CUADRUPLICAN LAS VISTAS
        videoGanador.esViral = true;
        videoGanador.insignia = "GANADOR CAMILA SHOW";
        return videoGanador;
    },

    // 3. NOTIFICACIÓN GLOBAL
    // Camila "aparece" en todos los celulares
    notificacionGlobal(ganador) {
        return {
            titulo: "🏆 GANADOR DEL CAMILA SHOW",
            mensaje: `¡Felicidades a ${ganador.autor}! Su video de alto valor ha sido impulsado por Camila.`,
            accion: "POP_UP_PANTALLA_COMPLETA"
        };
    }
};
