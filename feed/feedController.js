/* ARCHIVO: feed/feedController.js 
   LÓGICA: CONTROL DE VIDEO Y SCROLL TACTIL
*/
import { VinculoFeedEngine } from '../engine/VinculoFeedEngine.js';
import { CamilaShow } from '../engine/CamilaShowEngine.js';

let currentVideo = null;
let startY = 0;

export function initFeed(videos) {
    VinculoFeedEngine.init(videos);
    cargarSiguiente();
    initScroll();
}

function cargarSiguiente() {
    const videoData = VinculoFeedEngine.obtenerSiguiente();
    currentVideo = videoData;
    renderVideo(videoData);
}

function renderVideo(data) {
    const feed = document.getElementById("canvas-container");
    feed.innerHTML = `<video id="main-v" src="${data.url}" autoplay muted playsinline style="width:100%; height:100vh; object-fit:cover;"></video>`;
    
    const v = document.getElementById("main-v");
    v.onended = () => {
        VinculoFeedEngine.registrarVistaCompleta(data);
        cargarSiguiente();
    };
    v.onclick = () => {
        CamilaShow.mostrarMensaje("Interacción detectada");
        VinculoFeedEngine.registrarComentario(data);
    };
}

function initScroll() {
    document.addEventListener("touchstart", e => startY = e.touches[0].clientY);
    document.addEventListener("touchend", e => {
        let endY = e.changedTouches[0].clientY;
        if (startY - endY > 50) { // Deslizar hacia arriba
            VinculoFeedEngine.registrarSkip(currentVideo);
            cargarSiguiente();
        }
    });
}
