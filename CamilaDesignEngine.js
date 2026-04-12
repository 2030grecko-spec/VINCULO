/* ARCHIVO: engine/CamilaDesignEngine.js */
export const DesignEngine = { 
    tema: "GOLD_MATRIX",
    camila: null,

    init() {
        this.camila = document.getElementById("camila-img");
    },

    // TUS FUNCIONES INTEGRADAS
    camilaHabla() {
        if(this.camila) {
            this.camila.style.opacity = "0.35";
            this.camila.style.transform = "scale(1.1)";
        }
    },

    camilaNormal() {
        if(this.camila) {
            this.camila.style.opacity = "0.15";
            this.camila.style.transform = "scale(1)";
        }
    }
};
