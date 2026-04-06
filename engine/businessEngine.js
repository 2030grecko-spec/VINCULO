export function feedbackBusiness(video) {

  let score = video.valor;

  if (video.likes > 100) score += 50;
  if (video.shares > 30) score += 100;

  if (score > 800) {
    return "Contenido élite. Sigue este patrón.";
  }

  if (score > 400) {
    return "Buen contenido. Añade más emoción.";
  }

  return "Contenido débil. Mejora el mensaje.";
}
