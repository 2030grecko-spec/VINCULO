/**
 * PROYECTO: VÍNCULO AI - CONSOLA DEL MONARCA
 * ARCHIVO: app.js (CEREBRO UNIFICADO)
 * ARQUITECTO: JOSE GREGORIO LUCES MUÑOZ (GRECO)
 * ESTADO: MEMORIA ETERNA + 5 PUERTAS + AUDITORÍA
 */

// 1. EL DEPÓSITO DE CAPITAL (LAS 5 PUERTAS)
let data = {
  cuentas: [
    { nombre: "Brasil", saldo: 0, status: "READY" },
    { nombre: "Venezuela", saldo: 0, status: "READY" },
    { nombre: "Cripto", saldo: 0, status: "READY" },
    { nombre: "USD", saldo: 0, status: "READY" },
    { nombre: "Viajes", saldo: 0, status: "READY" }
  ]
};

// 2. SISTEMA DE MEMORIA (PARA QUE NO SE LE OLVIDE NADA)
function persistirMemoria() {
    localStorage.setItem('JGLM_BUNKER_DATA', JSON.stringify(data));
}

function cargarMemoria() {
    const guardado = localStorage.getItem('JGLM_BUNKER_DATA');
    if (guardado) {
        data = JSON.parse(guardado);
        mostrar("Camila: Memoria recuperada. Estamos al día, Monarca.");
    }
}

// 3. INTERFAZ Y COMUNICACIÓN
function mostrar(mensaje) {
  let chat = document.getElementById("chat");
  let div = document.createElement("div");
  div.className = "mensaje";
  div.style.fontSize = "1.2em"; // Letra grande para tu vista
  div.innerText = mensaje;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function enviarMensaje(textoManual) {
  let input = document.getElementById("input");
  let texto = textoManual || input.value;
  if (!texto) return;

  mostrar("Tú: " + texto);
  let respuesta = procesarComando(texto);

  setTimeout(() => {
    mostrar("Camila: " + respuesta);
    persistirMemoria(); // Guarda después de cada acción
  }, 300);
  input.value = "";
}

// 4. PROCESAMIENTO DE COMANDOS (EL FILTRO INTELIGENTE)
function procesarComando(texto) {
  texto = texto.toLowerCase();

  // COMANDO: AUDITORÍA
  if (texto.includes("auditoría") || texto.includes("cuánto tengo")) {
    let total = data.cuentas.reduce((sum, c) => sum + c.saldo, 0);
    let detalle = data.cuentas.map(c => `${c.nombre}: $${c.saldo}`).join("\n");
    return `\nESTADO:\nTotal: $${total}\n\nPUERTAS:\n${detalle}\n\nANÁLISIS:\nSistema listo para el flujo.\n\nACCIÓN:\n¿Deseas mover capital?`;
  }

  // COMANDO: ORGANIZACIÓN
  if (texto.includes("organiza") || texto.includes("divide")) {
    let total = data.cuentas.reduce((sum, c) => sum + c.saldo, 0);
    let nuevo = total / data.cuentas.length;
    data.cuentas.forEach(c => c.saldo = Math.round(nuevo));
    return "He repartido el capital equitativamente entre las 5 puertas. Todo ordenado.";
  }

  // COMANDO: VIAJES / PAGOS (PREPARACIÓN)
  if (texto.includes("viaje") || texto.includes("boleto") || texto.includes("comprar")) {
    return "Entendido, Monarca. Estoy rastreando opciones. ¿Uso los fondos de la Puerta de Viajes?";
  }

  return "No entendí la orden, Monarca. Intente con 'Auditoría' u 'Organiza'.";
}

// 5. CONTROL DE VOZ
function iniciarVoz() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "es-ES";
  recognition.onresult = function(event) {
    let texto = event.results[0][0].transcript;
    enviarMensaje(texto);
  };
  recognition.start();
}

// INICIO AUTOMÁTICO
window.onload = cargarMemoria;
