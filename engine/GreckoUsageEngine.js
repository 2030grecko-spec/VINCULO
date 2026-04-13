/* ARCHIVO: engine/GreckoUsageEngine.js 
   ESTADO: CONTROL DE CORTESÍA JGLM
*/
import { PaymentUI } from '../ui/paymentUI.js';
import { CamilaShow } from './CamilaShowEngine.js';

export const GreckoUsage = {
    creditos: { videos: 5, fotos: 10 },

    verificarYUsar(tipo) {
        if (this.creditos[tipo] > 0) {
            this.creditos[tipo]--;
            if (this.creditos[tipo] === 1) CamilaShow.mostrarMensaje("¡Atención! Te queda 1 uso de cortesía.");
            return true;
        } else {
            CamilaShow.mostrarMensaje(`Has agotado tus ${tipo} gratis.`);
            PaymentUI.abrir();
            return false;
        }
    }
};
