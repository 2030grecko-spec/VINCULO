import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from './firebaseConfig'; 
import { ref, onValue } from 'firebase/database'; // Conexión Realtime

export default function CamilaBubble({ userId }) {
  const [emotion, setEmotion] = useState('neutral');
  const [expanded, setExpanded] = useState(false);

  // Colores del Octágono de Fuego de Vínculo
  const emotionColors = {
    neutral: "#D4AF37",    // Dorado (Normal)
    preocupacion: "#FFA500", // Naranja (Acompañamiento)
    alerta: "#FF4444"      // Rojo (Alerta 501)
  };

  useEffect(() => {
    // Escuchamos la carpeta exacta que creamos en Firebase
    const userRef = ref(db, 'usuarios/' + userId); 
    
    return onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Camila lee el estado emocional desde la base de datos
        setEmotion(data.lastEmotion || 'neutral');
      }
    });
  }, [userId]);

  const color = emotionColors[emotion] || "#D4AF37";

  return (
    <motion.div
      style={{
        position: 'fixed', bottom: 20, right: 20,
        width: expanded ? '300px' : '70px', height: expanded ? '150px' : '70px',
        backgroundColor: color, borderRadius: '20px', 
        boxShadow: `0 0 25px ${color}`, // Brillo de fuego
        zIndex: 1000, color: '#000', padding: expanded ? '20px' : '0', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        cursor: 'pointer', border: `2px solid #D4AF37`
      }}
      animate={{ 
        scale: emotion === 'alerta' ? [1, 1.15, 1] : 1,
        opacity: [0.9, 1, 0.9] 
      }}
      transition={{ repeat: Infinity, duration: 0.8 }}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? (
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          CAMILA AI: <br/> Sistema Vínculo Activo
        </div>
      ) : (
        <span style={{ fontSize: '2rem' }}>AI</span>
      )}
    </motion.div>
  );
}
