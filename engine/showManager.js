/**
 * @project VÍNCULO AI
 * @author Jose Gregorio Luces Muñoz (Greco)
 * @description GESTIÓN ESCALABLE: CAMILA SHOW Y VÍNCULO BUSINESS
 */

export const ShowManager = {
    // Configuración con espacios listos para crecimiento
    config: {
        maxNominados: 5, // Valor inicial (Gratuito)
        maxNominadosPremium: 10, // Valor al activar cobros
        monetizacionActiva: false, // Switch para activar los $3
        horarios: {
            nominados: "20:00", // Jueves
            cierre: "16:00", // Viernes
            gala: "20:00" // Viernes
        }
    },

    // 1. ESCALABILIDAD DE NOMINADOS
    // El sistema ya sabe que si cobramos, subimos a 10
    obtenerCupos() {
        return this.config.monetizacionActiva ? 
               this.config.maxNominadosPremium : 
               this.config.maxNominados;
    },

    // 2. ESTRUCTURA DE NEGOCIO (Vínculo Business)
    // Espacios listos para la integración de pagos
    planesBusiness: {
        basico: { precio: 15, boost: "X2" },
        profesional: { precio: 50, boost: "X3" },
        corporativo: { precio: 500, boost: "X4 + GALA" }
    },

    // 3. SELECCIÓN DINÁMICA
    seleccionarNominados(listaVideos) {
        const cuposDisponibles = this.obtenerCupos();
        return listaVideos
            .sort((a, b) => b.porcentajeValor - a.porcentajeValor)
            .slice(0, cuposDisponibles);
    },

    // 4. LÓGICA DE PREMIACIÓN (Cuadruplicar)
    ejecutarGala(ganador) {
        // Premio mayor: Cuadruplicar vistas por alto valor
        ganador.vistasTotal *= 4;
        ganador.esViral = true;
        return {
            anuncio: `Camila presenta al ganador: ${ganador.autor}`,
            efectoVisual: "ORO_MATRIX_FULL_SCREEN"
        };
    }
};

/**
 * @nota_arquitecto
 * El switch 'monetizacionActiva' cambiará a true cuando el sistema 
 * de cobro de $3 esté operativo, desbloqueando los 10 cupos.
 */
