/* ARCHIVO: engine/VinculoWalletEngine.js 
   ESTADO: ECONOMÍA CIRCULAR Y BIENVENIDA JGLM
*/
import { CamilaShow } from './CamilaShowEngine.js';

export const VinculoWallet = {
    saldo: 0,
    monedaNombre: "V-Coin",

    inicializarNuevoUsuario() {
        this.saldo = 10; // Regalo de bienvenida (Tus 10 "Bitcoins")
        this.renderizarMonedero();
        setTimeout(() => {
            CamilaShow.mostrarMensaje("¡Bienvenido al Vínculo! Te he obsequiado 10 monedas.");
        }, 2000);
    },

    recargar(cantidad) {
        this.saldo += cantidad;
        this.renderizarMonedero();
    },

    renderizarMonedero() {
        let el = document.getElementById("wallet-display");
        if (!el) {
            el = document.createElement("div");
            el.id = "wallet-display";
            document.body.appendChild(el);
        }
        el.innerHTML = `<span id="coin-icon" style="color:#D4AF37;">₿</span> <span style="color:white; font-weight:bold; margin-left:8px;">${this.saldo}</span>`;
    },

    enviarPremio(cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad;
            this.renderizarMonedero();
            return true;
        }
        return false;
    }
};
