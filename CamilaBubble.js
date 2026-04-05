export function controlarGala(dia, hora) {
    const tray = document.getElementById('voting-tray');
    
    // JUEVES 8 PM: ABRE VOTACIÓN
    if (dia === "Thursday" && hora >= 20) {
        tray.classList.add('active');
        console.log("Camila: Iniciando Gala de Nominados.");
    }

    // VIERNES 8 PM: CIERRE Y PREMIO
    if (dia === "Friday" && hora >= 20) {
        tray.classList.remove('active');
        anunciarGanador();
    }
}

function anunciarGanador() {
    alert("Camila: ¡Habemus Ganador! Multiplicador x4 activado para el Embajador de la semana.");
}
