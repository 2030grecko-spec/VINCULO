/**
 * @file vinculoEngine.js
 * @description Motor de Viralidad (60%) y Economía JGLM
 * @author Jose Gregorio Luces Muñoz (Greco)
 * @huella JGLM-VINCULO-2026-BRAZIL-ROOT
 */

export const VinculoEngine = {
    reglas: {
        maxAlcancePagado: 0.60,
        bonoVinculo: 10,
        bonoImpulso: 3
    },

    procesarViralidad(vistasActuales, tipo) {
        let nuevasVistas = vistasActuales;
        if (tipo === 'VINCULO') nuevasVistas += this.reglas.bonoVinculo;
        if (tipo === 'IMPULSO') nuevasVistas += this.reglas.bonoImpulso;
        return nuevasVistas;
    }
};
