// VÍNCULO AI - CONECTOR DE MODULACIÓN Y LABIOS
// Arquitecto: Jose Gregorio Luces Muñoz (Greco)
// Huella: JGLM-VINCULO-2026-BRAZIL-ROOT

import { VoiceEngine } from './voiceEngine.js';

export const CamilaLipSync = {
    // Diccionario de formas de boca según fonemas
    bocaShapes: {
        'A': 'Shape_Open_Wide',
        'E': 'Shape_Open_Mid',
        'O': 'Shape_Circle',
        'U': 'Shape_Tight_Circle',
        'Rest': 'Shape_Closed_Neutral'
    },

    // Conecta la voz con el movimiento
    vincularVozConBoca(texto) {
        // 1. Camila empieza a procesar el texto
        VoiceEngine.hablar(texto);

        // 2. Analizamos el texto para enviar órdenes a la capa de la boca
        const palabras = texto.toUpperCase().split('');
        
        palabras.forEach((letra, index) => {
            setTimeout(() => {
                const shape = this.bocaShapes[letra] || this.bocaShapes['Rest'];
                this.renderizarCapaBoca(shape);
            }, index * 120); // Sincronía de milisegundos
        });
    },

    // Orden directa a la nube para cambiar la imagen de la capa "Boca"
    renderizarCapaBoca(shapeName) {
        // Aquí el código busca el archivo en la nube (Boca_Shapes_JGLM)
        console.log(`[CAPA BOCA] Aplicando: ${shapeName}`);
        // Este evento lo escucha la interfaz gráfica para cambiar el PNG/SVG
        document.dispatchEvent(new CustomEvent('CamilaMoverBoca', { detail: shapeName }));
    }
};

/**
 * @nota_arquitecto
 * Este conector asegura que Camila no sea un dibujo estático.
 * Al llamar a vincularVozConBoca(), la voz y el movimiento nacen juntos.
 */
