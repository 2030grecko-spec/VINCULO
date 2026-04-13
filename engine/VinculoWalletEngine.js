/* ARCHIVO: engine/VinculoWalletEngine.js 
   ESTADO: SISTEMA ECONÓMICO UNIFICADO JGLM - NIVEL 10
*/
import { CamilaShow } from './CamilaShowEngine.js';

export const VinculoWallet = {
    saldo: 0,
    monedaNombre: "V-Coin",
    comisionPlataforma: 0.20, // 🎯 Tu 20% sagrado

    // 1. BIENVENIDA Y REGALO
    inicializarNuevoUsuario() {
        this.saldo = 10; 
        this.renderizarMonedero();
        setTimeout(() => {
            CamilaShow.mostrarMensaje("¡Bienvenido! Tienes 10 V-Coins de regalo para apoyar talento.");
        }, 2000);
    },

    // 2. RECARGA POR PAGO REAL ($1 = 10 Monedas)
    recargarPorPago(montoDolares) {
        const monedas = montoDolares * 10;
        this.saldo += monedas;
        this.renderizarMonedero();
        CamilaShow.mostrarMensaje(`¡Recarga exitosa! +${monedas} ${this.monedaNombre} en tu cuenta.`);
    },

    // 3. ENVÍO DE APOYO CON COMISIÓN AUTOMÁTICA
    enviarPremio(cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad;

            // Lógica de Negocio: 20% para Greco, 80% para Creador
            const gananciaPlataforma = cantidad * this.comisionPlataforma;
            const pagoNetoCreador = cantidad - gananciaPlataforma;

            // Simulación de recepción (Para el futuro Backend)
            window.saldoTotalPlataforma = (window.saldoTotalPlataforma || 0) + gananciaPlataforma;
            console.log(`LOG JGLM: Comisión retenida: ${gananciaPlataforma}. Enviado al creador: ${pagoNetoCreador}`);

            this.renderizarMonedero();
            CamilaShow.mostrarMensaje(`Has apoyado con ${cantidad} ${this.monedaNombre} 🔥`);
            return true;
        } else {
            CamilaShow.mostrarMensaje("Saldo insuficiente para apoyar.");
            return false;
        }
    },

    // 4. INTERFAZ VISUAL
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
