// INTERFAZ VISUAL DE CAMILA - JGLM-ROOT
// Arquitecto: Jose Gregorio Luces Muñoz (Greco)

export const CamilaUI = {
    config: {
        baseDNA: CAMILA_DNA_CORE, // Conexión directa al ADN seguro.
        age: 27, // Edad de adulta establecida.
        expression: "mentora_acogedora"
    },

    // LAS 3 CAPAS DE LA APPS (Lo que pediste)
    layers: {
        camila: {
            // Capa 1: El avatar (Lo que se ve)
            avatar: {
                getPhoto: () => "reensamblar_dna(CAMILA_DNA_CORE)",
                getPeinado: () => "negocio_elegante",
                getLentes: () => "montura_fina_moderna"
            },
            // Capa 2: El fondo (Fondo Matrix Dorado sutil)
            background: {
                style: "matrix_dorado_business"
            },
            // Capa 3: La interfaz de usuario (UI)
            ui: {
                show_balance: true,
                show_termometro: true
            }
        }
    },

    // FUNCIÓN DE AJUSTE DE LABIOS (`UserInterface.js`) - ¡Arreglado!
    // Ahora usa fonemas, no solo index.
    moveLips(phoneme, tone) {
        if (tone === "silence") return "boca_cerrada";
        
        switch (phoneme) {
            case "a": return "boca_abierta_ancha";
            case "o": return "boca_abierta_redonda";
            // ... más fonemas aquí ...
            default: return "boca_posicion_neutra";
        }
    }
};

// SELLO DE PROPIEDAD: JGLM-ROOT-2026
