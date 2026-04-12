/**
 * @file app.js
 * @description Arrancador Maestro del Ecosistema Vínculo AI
 * @author Jose Gregorio Luces Muñoz (Greco)
 * @huella JGLM-VINCULO-2026-BRAZIL-ROOT
 */

import { CamilaCore } from './core/camilaCore.js';
import { GreckoVoiceMaster } from './core/voiceEngine.js';
import { VinculoSystem } from './core/VinculoSystem.js';

const AppVinculo = {
    async iniciar() {
        console.log("--- INICIANDO VÍNCULO AI (JGLM-ROOT) ---");

        // 1. Conectar con el Servidor Maestro
        this.conectarServidor();

        // 2. Encender Oído Absoluto (GreckoVoice)
        GreckoVoiceMaster.activarMicrofono();

        // 3. Cargar Estado de Camila (Standard por defecto)
        CamilaCore.getEstado('STANDARD');

        // 4. Verificar Bóveda de Tesorería
        this.verificarBoveda();

        console.log("SISTEMA OPERATIVO: Listo para recibir órdenes, Monarca.");
    },

    conectarServidor() {
        const socket = new WebSocket(`ws://${window.location.host}`);
        
        socket.onopen = () => {
            console.log("Vínculo establecido con la nube.");
            // Puerta abierta para la firma JGLM
            socket.send(JSON.stringify({ type: 'AUTH', root: 'JGLM-2026' }));
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if(data.type === 'GALA_START') {
                console.log("¡Iniciando Camila Show! Activando efectos Oro.");
            }
        };
    },

    verificarBoveda() {
        const saldo = VinculoSystem.wallet.balance;
        console.log(`Bóveda de Tesorería verificada. Saldo: ${saldo} V-Coins.`);
    }
};

// Encender el sistema al cargar la página
window.addEventListener('DOMContentLoaded', () => AppVinculo.iniciar());
