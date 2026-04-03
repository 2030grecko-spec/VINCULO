import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from './firebaseConfig'; // Conectado a tu config
import { doc, onSnapshot } from 'firebase/firestore';

export default function CamilaBubble({ userId }) {
  const [emotion, setEmotion] = useState('neutral');
  const [expanded, setExpanded] = useState(false);

  // Paleta de colores emocional de Vínculo
  const emotionColors = {
    neutral: "#D4AF37", // Dorado
    preocupacion: "#FFA500", // Naranja
    alerta: "#FF4444" // Rojo
  };

  useEffect(() => {
    return onSnapshot(doc(db, 'users', userId), (docSnap) => {
      if (docSnap.exists()) setEmotion(docSnap.data().lastEmotion || 'neutral');
    });
  }, [userId]);

  const color = emotionColors[emotion] || "#D4AF37";

  return (
    <motion.div
      style={{
        position: 'fixed', bottom: 20, right: 20,
        width: expanded ? '300px' : '70px', height: expanded ? '150px' : '70px',
        backgroundColor: color, borderRadius: '20px', boxShadow: `0 0 20px ${color}`,
        zIndex: 1000, color: '#000', padding: expanded ? '15px' : '0', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
      }}
      animate={{ scale: emotion === 'alerta' ? [1, 1.1, 1] : 1 }}
      transition={{ repeat: Infinity, duration: 0.5 }}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? "Camila: Estoy vigilando tus valores." : "💜"}
    </motion.div>
  );
}

