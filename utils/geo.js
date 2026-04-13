/* ARCHIVO: utils/geo.js 
   ESTADO: DETECTOR DE PAÍS MEJORADO
*/
export function detectarPais() {
    const lang = navigator.language.toLowerCase();
    
    if (lang.includes("pt")) return "BR"; // Brasil
    if (lang.includes("es")) return "VE"; // Venezuela / Latam
    
    return "GLOBAL";
}
