// ==========================================
// 🅱️ SERVER.JS: EL PUENTE HACIA LA NUBE
// ==========================================
import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const server = app.listen(3000, () => console.log("Camila escuchando en puerto 3000"));
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    const data = JSON.parse(msg);
    
    if (data.type === "hablar") {
      // Aquí Camila decide qué decir basado en el valor del video
      const respuesta = "He detectado un vínculo de alto valor. ¿Quieres profundizar?";
      
      ws.send(JSON.stringify({
        type: "texto_camila",
        text: respuesta,
        audioUrl: "https://tu-servidor.com/voz_camila.mp3" // Link al audio en la nube
      }));
    }
  });
});
