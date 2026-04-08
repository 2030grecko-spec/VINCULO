/**
 * @project VÍNCULO AI - Red Social de Valores
 * @author Jose Gregorio Luces Muñoz (Greco)
 * @license Private / Proprietary
 * @file engine/viralEngine.js
 */

export function calcularImpacto(data) {
    // Tu lógica de los 1000 puntos
    let pts = data.valor || 0;
    const umbral = 350;

    // Si el video tiene valores de familia o academia, sube el score
    if (data.categoria === 'Familia' || data.categoria === 'Academia') {
        pts += 150;
    }

    return {
        score total: Math.min(pts, 1000),
        esViralizable: pts >= umbral,
        impulsoHabilitado: pts > 800
    };
}
