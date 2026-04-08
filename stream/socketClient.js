/**
 * @project VÍNCULO AI - Red Social de Valores
 * @author Jose Gregorio Luces Muñoz (Greco)
 * @license Private / Proprietary
 * @file stream/socketClient.js
 * @description Sistema de comunicación en tiempo real (Vínculo Stream).
 */

// Conexión al servidor de Vínculo
// NOTA: Cambiar 'localhost' por la URL de Railway al desplegar.
export const socket = new WebSocket("ws://localhost:3000");

/**
 * Envía datos cifrados al servidor (Puntos, Impulsos, Business)
 */
export function enviar(data) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(data));
  } else {
    console.error("Error: El canal de Vínculo no está abierto.");
  }
}

/**
 * Escucha las órdenes de Camila que vienen de la nube
 */
export function recibir(callback) {
  socket.onmessage = (event) => {
    try {
      const mensaje = JSON.parse(event.data);
      callback(mensaje);
    } catch (error) {
      console.error("Error al procesar respuesta del servidor:", error);
    }
  };
}

/** * PROTECCIÓN LEGAL GRECO 2026 
 * El monitoreo de este canal es exclusivo del administrador.
 */
