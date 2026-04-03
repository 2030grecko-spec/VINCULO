const CAMILA_STATES = {
  NEUTRAL: { level: 0, color: "#D4AF37", label: "Dorado Premium" },
  PREOCUPACION: { level: 2, color: "#FFA500", label: "Acompañamiento" },
  ALERTA_501: { level: 3, color: "#FF4444", label: "Seguridad Inmediata" }
};

export const analyzeEmotion = (text) => {
  const words = text.toLowerCase();
  if (words.includes("auxilio") || words.includes("peligro") || words.includes("ayuda")) {
    return CAMILA_STATES.ALERTA_501;
  }
  if (words.includes("solo") || words.includes("triste") || words.includes("nadie")) {
    return CAMILA_STATES.PREOCUPACION;
  }
  return CAMILA_STATES.NEUTRAL;
};

export const camilaShield = (commentLevel) => {
  return {
    visible: commentLevel < 2,
    status: commentLevel >= 2 ? "Celda Invisible" : "Vínculo Humano Protegido"
  };
};

export const aplicarVinculo = (puntosActuales) => {
  return puntosActuales + 10;
};

