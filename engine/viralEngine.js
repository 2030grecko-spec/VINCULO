export function calcularViralidad(video, usuario) {

  let score =
    (video.valor || 0) +
    (video.likes * 0.2) +
    (video.shares * 0.5);

  if (video.watchTime > 0.8) score += 20;

  let boost = 1;

  if (score > 200) boost = 1.9;
  else if (score > 150) boost = 1.7;
  else if (score > 100) boost = 1.5;

  if (usuario.tipo === "Business") boost *= 2;

  return {
    score,
    prob: Math.min(Math.round(boost * 50), 95)
  };
}
