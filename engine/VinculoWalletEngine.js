/* ARCHIVO: engine/VinculoWalletEngine.js 
   ESTADO: ECONOMÍA JGLM CON COMISIÓN DEL 20% PARA EL DUEÑO
*/
import { CamilaShow } from './CamilaShowEngine.js';

export const VinculoWallet = {
    saldo: 0,
    monedaNombre: "V-Coin",
    comisionPlataforma: 0.20, // 🎯 Tu 20% de cada apoyo

    inicializarNuevoUsuario() {
        this.saldo = 10; 
        this.renderizarMonedero();
        setTimeout(() => {
            CamilaShow.mostrarMensaje("¡Bienvenido al Vínculo! Aquí tienes 10 monedas de regalo.");
        }, 2000);
    },

    recargar(cantidad) {
        this.saldo += cantidad;
        this.renderizarMonedero();
    },

    // LÓGICA DE APOYO CON COMISIÓN
    enviarPremio(cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad; // Se le quita el total al que envía

            // CÁLCULO DE REPARTO
            const gananciaGreco = cantidad * this.comisionPlataforma; // El 20% para ti
            const pagoCreador = cantidad - gananciaGreco; // El 80% para el creador

            console.log(`TRANSACCIÓN JGLM:`);
            console.log(`- Total enviado: ${cantidad}`);
            console.log(`- Comisión Greco (20%): ${gananciaGreco}`);
            console.log(`- Neto para Creador (80%): ${pagoCreador}`);

            this.renderizarMonedero();
            return true;
        } else {
            return false;
        }
    },

    renderizarMonedero() {
        let el = document.getElementById("wallet-display");
        if (!el) {
            el = document.createElement("div");
            el.id = "wallet-display";
            document.body.appendChild(el);
        }
        el.innerHTML = `<span id="coin-icon" style="color:#D4AF37;">₿</span> <span style="color:white; font-weight:bold; margin-left:8px;">${this.saldo}</span>`;
    }
};
