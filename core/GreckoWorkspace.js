// VÍNCULO AI - ESCRITORIO DE TRABAJO DEL GRECKO ENGINE
// Arquitecto: Jose Gregorio Luces Muñoz (Greco)

export const GreckoWorkspace = {
    // 1. ESPACIO DE TRABAJO TEMPORAL
    sessionControl: {
        storageType: "Ephemeral_Cache", // No ocupa espacio permanente en la nube
        autoDeleteOnExit: true,        // Se limpia al terminar
        maxPreviewTime: "30_minutes"   // Límite de vida del archivo temporal
    },

    // 2. INTERFAZ DE COMANDOS (EL MINI-CHAT)
    commandPanel: {
        inputSource: "Camila_Translator",
        style: "Matrix_Minimalist",
        placeholder: "Dictando órdenes al Grecko Engine..."
    },

    // 3. ACCIONES FINALES (SALIDA DE DATOS)
    outputActions: {
        download: {
            label: "Descargar en 8K",
            action: "Export_To_Local_Device"
        },
        share: {
            label: "Publicar en Vínculo",
            action: "Push_To_Feed_And_Wipe_Temp" // Publica y borra el temporal
        }
    },

    // 4. MUESTRAS DE EXHIBICIÓN
    galleryShowcase: [
        { id: "Sample_01", title: "Estilo Marvel Pro", url: "cloud://samples/marvel.mp4" },
        { id: "Sample_02", title: "Estilo Matrix Gold", url: "cloud://samples/matrix.mp4" }
    ]
};
