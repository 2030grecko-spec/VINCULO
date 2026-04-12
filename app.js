/**
 * @file app.js
 * @description Arrancador con Rutas Actualizadas (Carpeta Engine)
 * @author Jose Gregorio Luces Muñoz (Greco)
 */

import { CamilaCore } from './core/camilaCore.js';
import { VoiceEngine } from './core/voiceEngine.js';
// IMPORTANTE: Ahora los buscamos dentro de /engine/
import { GreckoEngine } from './engine/GreckoEngine.js';
import { VinculoEngine } from './engine/vinculoEngine.js';

const AppVinculo = {
    async iniciar() {
        console.log("SISTEMA JGLM-ROOT: Iniciando desde nuevas rutas...");
        
        // Encender motores desde la nueva ubicación
        VoiceEngine.escuchar();
        CamilaCore.validar('JGLM-ROOT-2026');
        
        console.log("Verificando GreckoEngine en /engine/...");
    }
};

window.addEventListener('DOMContentLoaded', () => AppVinculo.iniciar());
