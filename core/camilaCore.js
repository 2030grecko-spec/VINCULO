import { hablar } from "./voiceEngine.js";

export const CamilaCore = {

  procesar(data) {

    const mensaje = this.generarMensaje(data);
    hablar(mensaje);

    return mensaje;
  },

  generarMensaje(data) {

    if (data.valor > 800) {
      return "Este contenido tiene un valor extraordinario.";
    }

    if (data.retencion < 40) {
      return "El inicio necesita más impacto emocional.";
    }

    return "Veo potencial. Podemos mejorarlo juntos.";
  }
};
