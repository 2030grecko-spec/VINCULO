/**
 * @project VÍNCULO AI - MOTOR DE PENSAMIENTO
 * @author Jose Gregorio Luces Muñoz (Greco)
 */

export const PensamientoModule = {
    constraints: {
        max_characters: 50,
        max_duration_media: 50, // Segundos para video y voz de Camila
        behavior: "Always_On_Top_Glass_Blur"
    },

    onPublish: (content) => {
        return {
            trajectory: "Upwards_to_Cloud",
            transformation: "Green_to_Gold_Mate", // Oro mate para la vista
            targetPanel: "Right_Opinion_Panel"
        };
    }
};
