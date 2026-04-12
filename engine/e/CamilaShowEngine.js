/* ARCHIVO: engine/CamilaShowEngine.js 
   LÓGICA: SHOW CON COMPORTAMIENTO INTELIGENTE JGLM
*/
import { DesignEngine } from './CamilaDesignEngine.js';

export const CamilaShow = {
    camilaActiva: false,

    // LÓGICA DE DETECCIÓN DE SENTIMIENTOS
    analizarMensaje(texto) {
        const t = texto.toLowerCase();
        
        if (t.includes("ayuda") || t.includes("problema") || t.includes("odio")) {
            return "ALERTA"; // Reacción seria
        }
        if (t.includes("camila") || t.includes("vincule") || t.includes("gracias")) {
            return "IMPORTANTE"; // Reacción profunda
        }
        return "NORMAL";
    },

    reaccionar(tipo) {
        if (this.camilaActiva) return;
        this.camilaActiva = true;

        if (tipo === "ALERTA") {
            // Se acerca mucho y se queda fija (Modo Serio)
            DesignEngine.camilaHabla(); 
            setTimeout(() => { DesignEngine.camilaNormal(); this.camilaActiva = false; }, 4000);
        } else if (tipo === "IMPORTANTE") {
            // Reacción cálida
            DesignEngine.camilaHabla();
            setTimeout(() => { DesignEngine.camilaNormal(); this.camilaActiva = false; }, 2500);
        } else {
            // Reacción rápida
            DesignEngine.camilaHabla();
            setTimeout(() => { DesignEngine.camilaNormal(); this.camilaActiva = false; }, 1000);
        }
    },

    mostrarMensaje(texto) {
        const chat = document.getElementById("live-chat");
        const msg = document.createElement("div");
        msg.className = "chat-msg";
        msg.innerText = texto;
        chat.appendChild(msg);
        
        const sentimiento = this.analizarMensaje(texto);
        this.reaccionar(sentimiento);

        setTimeout(() => msg.remove(), 6000);
    }
};
