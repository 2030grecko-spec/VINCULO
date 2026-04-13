/* ARCHIVO: engine/PaymentHub.js 
   ESTADO: MOTOR DE COBROS Y RECOMPENSAS JGLM
*/
import { VinculoWallet } from './VinculoWalletEngine.js';
import { CamilaShow } from './CamilaShowEngine.js';

export const PaymentHub = {
    metodo: null,
    estado: "IDLE",
    tasaCambio: 10, // $1 USD = 10 V-Coins

    config: {
        VE: { metodos: ["ZINLI", "ZELLE", "USDT"], precio: 5 },
        BR: { metodos: ["PIX", "CARD"], precio: 25 },
        GLOBAL: { metodos: ["PAYPAL", "CARD"], precio: 10 }
    },

    iniciarPago(tipo) {
        this.metodo = tipo;
        this.estado = "VERIFICANDO";
        CamilaShow.mostrarMensaje(`Iniciando pago vía ${tipo}...`);
    },

    aprobarPago(montoDolares) {
        this.estado = "APROBADO";
        const recompensa = montoDolares * this.tasaCambio;
        VinculoWallet.recargar(recompensa);
        CamilaShow.mostrarMensaje(`¡Pago verificado! Recibiste ${recompensa} V-Coins.`);
    }
};
