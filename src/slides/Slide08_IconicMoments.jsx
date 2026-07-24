import { motion } from 'framer-motion';
import { stats } from '../data/stats';
import { useState, useEffect } from 'react';

export default function Slide08_IconicMoments({ isActive }) {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (!isActive) { setActiveCard(0); return; }
    const t = setInterval(() => {
      setActiveCard(prev => (prev + 1) % stats.iconicMoments.length);
    }, 1500);
    return () => clearInterval(t);
  }, [isActive]);

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0c0c0c',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      overflow: 'hidden',
    }}>
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.45 }}
        style={{ textAlign: 'center', marginBottom: 32 }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          letterSpacing: 2.5,
          color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          Hall da fama
        </p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 30,
          color: '#fff',
          margin: 0,
        }}>
          Momentos <span style={{ color: '#BFFF00' }}>icônicos</span> 🏆
        </h2>
      </motion.div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {stats.iconicMoments.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 + i * 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: activeCard === i
                ? 'rgba(191,255,0,0.09)'
                : 'rgba(255,255,255,0.04)',
              border: `1px solid ${activeCard === i
                ? 'rgba(191,255,0,0.28)'
                : 'rgba(255,255,255,0.07)'}`,
              transition: 'background 0.4s ease, border-color 0.4s ease',
            }}
          >
            <span style={{ fontSize: 28, flexShrink: 0 }}>{m.emoji}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                lineHeight: 1.4,
                color: activeCard === i ? '#BFFF00' : 'rgba(255,255,255,0.75)',
                margin: 0,
                transition: 'color 0.4s ease',
              }}>
                {m.text}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                color: 'rgba(255,255,255,0.25)',
                marginTop: 3,
              }}>
                — {m.who}, {m.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* progress dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        style={{ display: 'flex', gap: 6, marginTop: 20 }}
      >
        {stats.iconicMoments.map((_, i) => (
          <div
            key={i}
            style={{
              height: 5,
              borderRadius: 99,
              background: activeCard === i ? '#BFFF00' : 'rgba(255,255,255,0.15)',
              width: activeCard === i ? 20 : 5,
              transition: 'width 0.35s ease, background 0.35s ease',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
