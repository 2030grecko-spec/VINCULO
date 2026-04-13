/* ARCHIVO: ui/paymentUI.js 
   ESTADO: PAYWALL VISUAL JGLM
*/
import { detectarPais } from '../utils/geo.js';
import { PaymentHub } from '../engine/PaymentHub.js';

export const PaymentUI = {
    abrir() {
        const pais = detectarPais();
        const opciones = PaymentHub.config[pais].metodos;
        const ui = document.getElementById("canvas-container");
        
        const box = document.createElement("div");
        box.id = "paywall-box";
        box.style = "position:absolute; top:20%; left:10%; width:80%; background:rgba(0,0,0,0.95); border:1px solid #D4AF37; padding:20px; z-index:100; color:#D4AF37; text-align:center; border-radius:15px;";
        
        box.innerHTML = `
            <h3>ACTIVA TU PLAN PRO</h3>
            <p>Selecciona tu método de pago para ${pais}:</p>
            ${opciones.map(m => `<button onclick="window.pagar('${m}')" style="display:block; width:100%; margin:10px 0; background:#111; color:#D4AF37; border:1px solid #D4AF37; padding:10px;">${m}</button>`).join('')}
            <button onclick="this.parentElement.remove()" style="background:none; border:none; color:gray;">Cerrar</button>
        `;
        ui.appendChild(box);
    }
};
window.pagar = (m) => PaymentHub.iniciarPago(m);
