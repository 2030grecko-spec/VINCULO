/* ARCHIVO: utils/geo.js 
   ESTADO: DETECTOR DE PAÍS JGLM
*/
export function detectarPais() {
    const lang = navigator.language.toLowerCase();
    if (lang.includes("es-ve")) return "VE";
    if (lang.includes("pt-br")) return "BR";
    return "GLOBAL";
}
