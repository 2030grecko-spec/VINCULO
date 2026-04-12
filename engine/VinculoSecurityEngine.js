/* ARCHIVO: engine/VinculoSecurityEngine.js 
   ESTADO: CAJA DE SEGURIDAD JGLM-ROOT-2026
*/
export const VinculoSecurity = {
    accesoVB: false, // Cambiar a true para abrir Vínculo Business
    accesoVIP: false,
    
    verificar(seccion) {
        return seccion === 'VB' ? this.accesoVB : this.accesoVIP;
    }
};
