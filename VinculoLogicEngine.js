// VÍNCULO AI - MOTOR DE LÓGICA CENTRAL
// Arquitecto: Jose Gregorio Luces Muñoz (Greco)
// Huella: JGLM-VINCULO-2026-BRAZIL-ROOT

export const calculateViralBoost = (performancePercentage) => {
    let boost = 0;

    if (performancePercentage >= 93) return "X4_MULTIPLIER"; // El Premio Mayor
    if (performancePercentage >= 80) return 0.50; // 50% boost
    if (performancePercentage >= 68) return 0.20; // 20% boost
    if (performancePercentage >= 50) return 0.15; // 15% boost
    if (performancePercentage >= 35) return 0.10; // 10% boost

    return boost;
};

export const cloudCleanupProtocol = (videoData) => {
    const { uploadTime, currentViews, targetViews } = videoData;
    const hoursElapsed = (Date.now() - uploadTime) / (1000 * 60 * 60);

    // Regla de las 72 horas
    if (hoursElapsed >= 72 && currentViews < (targetViews * 0.35)) {
        return "DELETE_FROM_CLOUD"; // Sale de la nube por bajo valor
    }

    // Regla de los 6 meses (No viral)
    const monthsElapsed = hoursElapsed / (24 * 30);
    if (monthsElapsed >= 6 && !videoData.isViral) {
        return "ARCHIVE_OR_DELETE";
    }

    return "KEEP_ALIVE";
};
