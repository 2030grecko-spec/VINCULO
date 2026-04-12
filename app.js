/* ARCHIVO: app.js 
   ESTADO: INICIO GLOBAL JGLM-ROOT-2026
*/
import { initFeed } from './feed/feedController.js';
import { DesignEngine } from './engine/CamilaDesignEngine.js';

const listaVideosInicial = [
    { id: 1, url: "video1.mp4", interes: 1, vinculo: 2, impulso: 3 },
    { id: 2, url: "video2.mp4", interes: 2, vinculo: 1, impulso: 1 },
    { id: 3, url: "video3.mp4", interes: 0, vinculo: 3, impulso: 2 }
];

window.addEventListener('DOMContentLoaded', () => {
    console.log("SISTEMA VÍNCULO AI: ACTIVADO.");
    
    // Iniciamos el motor visual de Camila
    DesignEngine.init();
    
    // Iniciamos el Feed Inteligente
    initFeed(listaVideosInicial);
});
