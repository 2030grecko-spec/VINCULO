/**
 * @PROYECTO: VÍNCULO AI - CONSOLA DEL MONARCA
 * @ARCHIVO: app.js (CEREBRO UNIFICADO + GRECKO ENGINE)
 * @ARQUITECTO: JOSE GREGORIO LUCES MUÑOZ (JGLM)
 * @LICENCIA: PROPIETARIO / SELLO DIGITAL JGLM-2026
 */

const PROPIETARIO_SISTEMA = "JOSE GREGORIO LUCES MUÑOZ";

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

// 2. SISTEMA DE MEMORIA ETERNA JGLM
function persistirMemoria() {
    localStorage.setItem('JGLM_BUNKER_DATA', JSON.stringify(data));
}

function cargarMemoria() {
    const guardado = localStorage.getItem('JGLM_BUNKER_DATA');
    if (guardado) {
        data = JSON.parse(guardado);
        mostrar("Camila: Memoria recuperada. Sistema bajo el mando de JGLM.");
    }
}

// 3. MOTOR DE JEROGLÍFICOS ORO (LABORATORIO DE CREACIÓN)
const GlifosPro = {
    simbolos: "JGLM ᚁᚂᚃᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ᚛᚜",
    
    iniciarLluvia() {
        const contenedor = document.getElementById('canvas-jeroglificos');
        if(!contenedor) return;
        
        setInterval(() => {
            const span = document.createElement('span');
            span.className = 'glifo-oro';
            
            // Firma invisible: Iniciales JGLM integradas
            let char = (Math.random() > 0.95) 
                ? "JGLM"[Math.floor(Math.random() * 4)]
                : this.simbolos.charAt(Math.floor(Math.random() * this.simbolos.length));

            span.innerText = char;
            span.style.left = Math.random() * 100 + "%";
            span.style.fontSize = (Math.random() * 10 + 18) + "px"; 
            span.style.animationDuration = (Math.random() * 2 + 1) + "s";

            contenedor.appendChild(span);
            setTimeout(() => { span.remove(); }, 3000);
        }, 100);
    }
};

// 4. INTERFAZ Y COMUNICACIÓN (MODO VÍNCULO)
function mostrar(mensaje) {
  let chat = document.getElementById("chat");
  if(!chat) return;
  let div = document.createElement("div");
  div.className = "mensaje";
  div.style.fontSize = "1.2em"; 
  div.style.color = "#FFD700"; // Siempre en Oro
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
    persistirMemoria();
  }, 300);
  input.value = "";
}

// 5. PROCESAMIENTO DE COMANDOS (LÓGICA DE NEGOCIO JGLM)
function procesarComando(texto) {
  texto = texto.toLowerCase();

  // AUDITORÍA MAESTRA
  if (texto.includes("auditoría") || texto.includes("cuánto tengo")) {
    let total = data.cuentas.reduce((sum, c) => sum + c.saldo, 0);
    let detalle = data.cuentas.map(c => `${c.nombre}: $${c.saldo}`).join("\n");
    return `\nESTADO JGLM:\nTotal: $${total}\n\nPUERTAS:\n${detalle}\n\nACCION: ¿Monarca, desea mover fondos?`;
  }

  // MODO CREACIÓN (Jeroglíficos)
  if (texto.includes("crear") || texto.includes("video") || texto.includes("hazme")) {
    GlifosPro.iniciarLluvia();
    return "Activando Laboratorio Grecko. Procesando orden en jeroglíficos oro...";
  }

  // ORGANIZACIÓN
  if (texto.includes("organiza") || texto.includes("divide")) {
    let total = data.cuentas.reduce((sum, c) => sum + c.saldo, 0);
    let nuevo = total / data.cuentas.length;
    data.cuentas.forEach(c => c.saldo = Math.round(nuevo));
    return "Distribución completada en las 5 puertas. Todo bajo control.";
  }

  return "Esperando sus órdenes, Monarca.";
}

// 6. CONTROL DE VOZ Y ORIENTACIÓN
function iniciarVoz() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "es-ES";
  recognition.onresult = function(event) {
    let texto = event.results[0][0].transcript;
    enviarMensaje(texto);
  };
  recognition.start();
}

// 7. ARRANQUE DEL SISTEMA
window.onload = () => {
    console.log("Sistema Vínculo: Operando bajo firma de " + PROPIETARIO_SISTEMA);
    cargarMemoria();
};
