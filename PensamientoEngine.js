/**
 * @project VÍNCULO AI - MOTOR DE PENSAMIENTO
 * @author Jose Gregorio Luces Muñoz (Greco)
 * @license Private / Proprietary
 * @huella JGLM-VINCULO-2026-BRAZIL-ROOT
 */

export const PensamientoEngine = {
    constraints: {
        max_characters: 50,         // Texto corto y directo
        max_video_duration: 30,     // TU ORDEN: 30 segundos (Ni uno más)
        allowed_media: ["image", "video_short"],
        ui_behavior: "Always_On_Top_Glass_Blur"
    },

    // Lógica del flujo visual (Ergonomía para tu vista)
    onPublish: (content) => {
        return {
            animation: "Vertical_Ascension",
            transformation: {
                start: "Matrix_Green",
                end: "Gold_Mate_JGLM", // Oro mate para no cansar la vista
                target: "Right_Panel_Amanecer" // Panel a la derecha
            }
        };
    }
};
