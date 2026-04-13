/* ARCHIVO: engine/CamilaAnimationEngine.js 
   ESTADO: ANIMACIÓN HOLOGRÁFICA JGLM - NIVEL DIOS
*/

export const CamilaAnim = {
    estado: 'idle', // idle, hablando, celebrando, alerta

    // 1. CAMBIAR ESTADO VISUAL
    setEstado(nuevoEstado) {
        this.estado = nuevoEstado;
        const camilaEl = document.getElementById("camila-hologram");
        if (!camilaEl) return;

        // Limpiar clases previas
        camilaEl.className = `camila-base ${nuevoEstado}`;
        console.log(`Camila ahora está: ${nuevoEstado}`);
    },

    // 2. EVENTO DE PRIMERA GANANCIA (Lo que soñaste)
    celebrarGanancia(cantidad) {
        this.setEstado('celebrando');
        
        // Crear partículas/globos virtuales
        this.lanzarParticulas();

        // Habla Camila
        setTimeout(() => {
            this.hablar(`¡Bien hecho, Monarca! Ganaste ${cantidad} monedas. Esto ya es dinero real en potencia.`);
        }, 500);

        // Volver a normalidad tras 4 segundos
        setTimeout(() => this.setEstado('idle'), 5000);
    },

    hablar(mensaje) {
        this.setEstado('hablando');
        const bubble = document.getElementById("camila-bubble");
        if (bubble) {
            bubble.innerText = mensaje;
            bubble.style.display = "block";
            setTimeout(() => { bubble.style.display = "none"; this.setEstado('idle'); }, 6000);
        }
    },

    lanzarParticulas() {
        // Aquí simulamos la explosión visual suave
        const container = document.getElementById("canvas-container");
        const particula = document.createElement("div");
        particula.className = "celebration-particle";
        container.appendChild(particula);
        setTimeout(() => particula.remove(), 2000);
    }
};
