/**
 * @project VÍNCULO AI - Red Social de Valores
 * @author Jose Gregorio Luces Muñoz (Greco)
 * @license Private / Proprietary
 * @file stream/socketClient.js
 * @timestamp 2026-04-08
 * @description Sistema de comunicación en tiempo real. Prohibida su copia.
 */

// Canal de comunicación Vínculo
// Nota: localhost se cambiará por la URL de producción en Railway
export const socket = new WebSocket("ws://localhost:3000");

/**
 * @function enviar
 * @description Envía datos de usuario e impulsos al servidor central.
 */
export function enviar(data) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(data));
  } else {
    console.warn("Vínculo Offline: Intentando reconectar con el servidor...");
  }
}

/**
 * @function recibir
 * @description Captura las respuestas del algoritmo y las órdenes de Camila.
 */
export function recibir(callback) {
  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      callback(data);
    } catch (e) {
      console.error("Error en flujo de datos Vínculo:", e);
    }
  };
}

/** * PROPIEDAD INTELECTUAL DE JOSE GREGORIO LUCES MUÑOZ
 * Este código forma parte del núcleo de transmisión de Vínculo AI.
 */
