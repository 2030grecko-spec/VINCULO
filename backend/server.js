import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const server = app.listen(3000);

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {

  ws.on("message", (msg) => {

    const data = JSON.parse(msg);

    let respuesta = "";

    if (data.type === "analizar") {

      if (data.valor > 800) {
        respuesta = "Este contenido puede explotar.";
      } else if (data.retencion < 40) {
        respuesta = "Debes mejorar el inicio.";
      } else {
        respuesta = "Vas bien, sigue ajustando.";
      }

      ws.send(JSON.stringify({
        type: "camila",
        text: respuesta
      }));
    }

  });

});
