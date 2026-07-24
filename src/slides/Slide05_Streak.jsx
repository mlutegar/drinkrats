import { motion } from 'framer-motion';
import { stats } from '../data/stats';

export default function Slide05_Streak({ isActive }) {
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
      position: 'relative',
    }}>
      {/* warm glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 1.2 }}
        style={{
          position: 'absolute',
          width: 340, height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,120,0,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.45 }}
        style={{ textAlign: 'center', marginBottom: 32, zIndex: 1 }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          letterSpacing: 2.5,
          color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          Sequência recorde
        </p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 30,
          color: '#fff',
          margin: 0,
        }}>
          Dias <span style={{ color: '#BFFF00' }}>seguidos</span> 🔥
        </h2>
      </motion.div>

      {/* Big number + dots */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.55, type: 'spring', stiffness: 200, damping: 14 }}
        style={{ textAlign: 'center', zIndex: 1 }}
      >
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 110,
          lineHeight: 1,
          color: '#BFFF00',
          letterSpacing: -4,
        }}>
          3
        </span>
        <p style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 600,
          fontSize: 18,
          color: 'rgba(255,255,255,0.6)',
          marginTop: 4,
        }}>
          dias consecutivos
        </p>
      </motion.div>

      {/* dot trio */}
      <div style={{ display: 'flex', gap: 12, margin: '24px 0', zIndex: 1 }}>
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -20 }}
            animate={isActive ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.9 + i * 0.18, type: 'spring', stiffness: 280, damping: 14 }}
            style={{
              width: 52, height: 52,
              borderRadius: '50%',
              background: '#BFFF00',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24,
              boxShadow: '0 0 20px rgba(191,255,0,0.3)',
            }}
          >
            🐀
          </motion.div>
        ))}
      </div>

      {/* streak dates grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%', zIndex: 1 }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 10,
          letterSpacing: 2,
          color: 'rgba(255,255,255,0.25)',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: 12,
        }}>
          Aconteceu {stats.streaks.length}x
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {stats.streaks.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.75 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                textAlign: 'center',
                padding: '9px 12px',
                borderRadius: 12,
                background: 'rgba(191,255,0,0.07)',
                border: '1px solid rgba(191,255,0,0.18)',
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                color: '#BFFF00',
              }}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
