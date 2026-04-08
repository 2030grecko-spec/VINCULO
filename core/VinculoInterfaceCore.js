// VÍNCULO AI - NÚCLEO DE INTERFAZ Y TECLADO BUSINESS
// Arquitecto: Jose Gregorio Luces Muñoz (Greco)
// Huella: JGLM-VINCULO-2026-BRAZIL-ROOT

export const VinculoInterface = {
    // 1. LA V ANCLA (BASE DEL APP)
    vAnchor: {
        shape: "Short_Wide_V", // V corta y muy abierta
        position: "Bottom_Edge",
        aesthetic: {
            style: "Cinematic_Engraving", // Grabado cinemático
            internalIcons: ["Camila_Business_Logo"], // Solo este queda dentro
            externalIcons: ["Home", "Vault", "Search", "Alerts"] // Estos quedan fuera, en las esquinas
        }
    },

    // 2. SISTEMA DE ENTRADA DE VOZ (MICRO)
    micEngine: {
        icon: "Pulse_Mic_Gold",
        activation: "Hold_To_Talk_Camila",
        visualFeedback: "Waveform_Amanecer" // Ondas color amanecer al hablar
    },

    // 3. TECLADO CAMILA BUSINESS (EL TECLADO DE PODER)
    businessKeyboard: {
        background: "#0A0A0A", // Negro mate profundo
        keyStyle: {
            fontColor: "#D4AF37", // Oro Fundido (Mate)
            fontSize: "Bold_Matrix",
            border: "1px_Solid_Gold_Thin"
        },
        behavior: {
            transition: "Slide_Up_Smooth",
            sound: "Mechanical_Click_Soft" // Sonido de teclado profesional
        }
    }
};

/**
 * @nota_arquitecto
 * Con este bloque, el robot de Replit ya sabe que la V no es texto, 
 * es la estructura física de la pantalla. El teclado de Business 
 * se diferencia del de 'Pensamiento' por el color y la sobriedad.
 */
