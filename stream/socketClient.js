export const socket = new WebSocket("ws://localhost:3000");

export function enviar(data) {
  socket.send(JSON.stringify(data));
}

export function recibir(callback) {
  socket.onmessage = (event) => {
    callback(JSON.parse(event.data));
  };
}
