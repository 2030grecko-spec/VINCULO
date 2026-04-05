// CONFIGURACIÓN DE FIREBASE (A completar con tus credenciales)
export const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "vinculo-ai.firebaseapp.com",
  projectId: "vinculo-ai",
  storageBucket: "vinculo-ai.appspot.com", // Aquí vivirán los links de streaming
};

// Colecciones clave:
// 1. /usuarios/{uid} -> { premium: true/false, vCoins: 500 }
// 2. /videos/{id} -> { url_nube: "...", puntosValor: 850, visible: true }
// 3. /gala/{semana} -> { nominados: [], votos: {} }
