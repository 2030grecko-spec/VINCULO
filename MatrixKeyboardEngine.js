// VÍNCULO AI - MOTOR DE TECLADO Y TRANSICIÓN VISUAL
// Arquitecto: Jose Gregorio Luces Muñoz (Greco)
// Huella: JGLM-VINCULO-2026-BRAZIL-ROOT
// NOTA: Panel de Opinión alineado a la DERECHA para ergonomía del usuario.

export const matrixKeyboardLogic = {
    // 1. Escritura: Las letras flotan invadiendo el centro (Video y Chat)
    onCharInput: (char) => {
        return {
            text: char,
            style: "Matrix_Green_Glow",
            position: "Screen_Center_Overlay", // Superpuesto en el medio
            animation: "Float_Pulse"
        };
    },

    // 2. El "Vuelo" al presionar Enter (Hacia la Derecha)
    onSendOpinion: (fullText) => {
        return {
            action: "Vertical_Stream_Flight",
            target: "RIGHT_PANEL_DAWN", // Panel color Amanecer a la derecha
            pathing: {
                direction: "Center_to_Right", // Corregido: hacia la mano derecha
                effect: "Digital_Rain_Transition"
            },
            transformation: {
                startColor: "#00FF41", // Verde Matrix inicial
                endColor: "#B8860B",   // Oro Fundido (Mate) al impactar
                duration: "400ms"
            }
        };
    },

    // 3. Aterrizaje en el panel "Amanecer"
    onImpact: () => {
        return {
            container: "Opinion_Column_Right",
            fontStyle: "Gold_Solid_Lettering",
            readability: "High_Contrast_No_Glow" // Oro mate para no cansar la vista
        };
    }
};
