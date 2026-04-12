/* ARCHIVO: engine/CamilaShowEngine.js 
   LÓGICA: SISTEMA NERVIOSO CERRADO JGLM-ROOT-2026
*/
import { DesignEngine } from './CamilaDesignEngine.js';

export const CamilaShow = {
    camilaActiva: false,
    usuarioActivo: 0, // Capa 5: Memoria simple

    // CAPA 1: DETECCIÓN MEJORADA
    analizarMensaje(texto) {
        const t = texto.toLowerCase();
        if (t.length < 3) return "SILENCIO"; // Capa 1: Filtro de ruido
        if (t.includes("ayuda") || t.includes("problema") || t.includes("odio")) return "ALERTA";
        if (t.includes("camila") || t.includes("gracias") || t.includes("vincule")) return "IMPORTANTE";
        return "NORMAL";
    },

    // CAPA 2: DECISIÓN
    puedeReaccionar(tipo) {
        if (this.camilaActiva) {
            return tipo === "ALERTA"; // Solo interrumpe si es urgente
        }
        return tipo !== "SILENCIO";
    },

    // CAPA 3: COMPORTAMIENTO (ACTUAR)
    reaccionar(tipo) {
        this.camilaActiva = true;
        this.usuarioActivo++; // Sumamos a la memoria

        let duracion = 1000;
        DesignEngine.camilaHabla(); // Ella se acerca

        if (tipo === "ALERTA") duracion = 4000;
        else if (tipo === "IMPORTANTE") duracion = 2500;
        else duracion = 800;

        setTimeout(() => {
            DesignEngine.camilaNormal();
            this.camilaActiva = false;
        }, duracion);
    },

    // CAPA 4: RESPUESTA
    responder(tipo) {
        if (this.usuarioActivo > 10) return "Noto que estás muy activo hoy. Te escucho.";
        if (tipo === "ALERTA") return "Estoy contigo. ¿Qué sucede?";
        if (tipo === "IMPORTANTE") return "Te presto atención.";
        return null;
    },

    mostrarMensaje(texto) {
        const chat = document.getElementById("live-chat");
        const tipo = this.analizarMensaje(texto);

        // Si la decisión es no reaccionar, solo mostramos el texto y salimos
        if (!this.puedeReaccionar(tipo)) {
            this.inyectarTexto(chat, texto);
            return;
        }

        // Si pasa el filtro, ella actúa y responde
        this.inyectarTexto(chat, texto);
        this.reaccionar(tipo);

        const respuesta = this.responder(tipo);
        if (respuesta) {
            setTimeout(() => this.inyectarTexto(chat, "Camila: " + respuesta, true), 1000);
        }
    },

    inyectarTexto(contenedor, texto, esCamila = false) {
        const msg = document.createElement("div");
        msg.className = "chat-msg";
        if (esCamila) msg.style.borderLeft = "2px solid #fff"; // Diferenciar respuesta de Camila
        msg.innerText = texto;
        contenedor.appendChild(msg);
        setTimeout(() => msg.remove(), 6000);
    }
};
