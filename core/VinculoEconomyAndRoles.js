// VÍNCULO AI - SISTEMA DE ECONOMÍA (BANK) Y ROLES DINÁMICOS
// Arquitecto: Jose Gregorio Luces Muñoz (Greco)

export const VinculoSystem = {
    // 1. LA BÓVEDA (VÍNCULO BANK)
    wallet: {
        currency: "V-Coins",
        balance: 0,
        logic: {
            conversionRate: 1.0, // 1 USD = 1 V-Coin (Ajustable)
            addFunds(amount) {
                this.balance += amount;
                console.log(`BÓVEDA: Se han cargado ${amount} V-Coins.`);
            },
            spendFunds(cost) {
                if (this.balance >= cost) {
                    this.balance -= cost;
                    return true;
                }
                return false; // Saldo insuficiente
            }
        },
        aesthetic: "Matrix_Gold_Wallet"
    },

    // 2. CAMILA MULTI-ROL (CAMBIO DE ACTITUD)
    camilaRoles: {
        currentMode: "Standard",
        modes: {
            "Standard": { skin: "Camila_Normal", knowledge: "General" },
            "Intelectual": { 
                skin: "Camila_Con_Lentes", 
                knowledge: "Python_Tutor_Specialist",
                visual: "Minimalist_Office"
            },
            "Business": { 
                skin: "Camila_Bata_Profesor", 
                knowledge: "Engine_Master_Translator",
                visual: "Grecko_Engine_Studio"
            }
        },
        // Función para cambiar de ropa y actitud sin abrir otra ventana
        setRole(newMode) {
            this.currentMode = newMode;
            const config = this.modes[newMode];
            console.log(`CAMILA: Cambiando a modo ${newMode}. Cargando ${config.skin}...`);
            return config;
        }
    },

    // 3. INTEGRACIÓN CON EL ENGINE
    payForRender(projectType) {
        const prices = { "Basic": 15, "Pro": 45, "Cinema": 250 };
        if (this.wallet.logic.spendFunds(prices[projectType])) {
            return "PAGO_ACEPTADO_INICIANDO_GRECKO_ENGINE";
        } else {
            return "SALDO_INSUFICIENTE_VAYA_A_BODEGA";
        }
    }
};

/**
 * @nota_arquitecto
 * Este archivo centraliza el dinero y la personalidad de Camila. 
 * El robot de Replit debe usar 'setRole' para cambiar la imagen 
 * de Camila y 'spendFunds' para activar el motor de diseño.
 */
