// VÍNCULO AI - MOTOR DE PENSAMIENTO (MINI-TWITTER)
// Arquitecto: Jose Gregorio Luces Muñoz (Greco)
// Huella: JGLM-VINCULO-2026-BRAZIL-ROOT

export const pensamientoModule = {
    constraints: {
        max_characters: 50,         // "Pensamiento" corto y directo
        max_video_duration: 50,     // Segundos (Coincidencia con caracteres)
        allowed_media: ["image", "video_short"]
    },

    ui_state: {
        container: "Floating_Window_Top", // Ventana flotante arriba
        behavior: "Always_On_Top",        // Por encima de Camila o videos
        transparency: "Glass_Blur"        // Efecto cristal para no tapar todo
    },

    // Lógica del flujo de las letras
    onPublish: (content) => {
        return {
            animationType: "Vertical_Ascension", // Sube en vertical
            trajectory: "Upwards_to_Cloud",      // Hacia el "cielo" del app
            particleEffect: "Matrix_Trace",      // Deja un rastro verde
            onFinish: {
                target: "Right_Opinion_Panel",   // Se une al historial derecho
                colorChange: "Green_to_Gold"     // Transmutación a Oro
            }
        };
    },

    mediaHandling: (file) => {
        if (file.type === "video" && file.duration > 50) {
            return "ERROR: El pensamiento visual no debe exceder los 50s";
        }
        return "MEDIA_READY_FOR_ASCENSION";
    }
};
