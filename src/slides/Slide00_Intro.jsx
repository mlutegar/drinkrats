import { motion } from 'framer-motion';

export default function Slide00_Intro({ isActive }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0c0c0c',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* glow blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 1.4, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          width: 460, height: 460,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(191,255,0,0.13) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* rat */}
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={isActive ? { scale: 1, rotate: 0 } : {}}
        transition={{ delay: 0.3, type: 'spring', stiffness: 220, damping: 16 }}
        style={{ fontSize: 96, lineHeight: 1, marginBottom: 24, zIndex: 1 }}
      >
        🐀
      </motion.div>

      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', zIndex: 1 }}
      >
        <div style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 48,
          color: '#fff',
          lineHeight: 1,
          letterSpacing: -1,
        }}>
          DRINK RATS
        </div>
        <div style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 48,
          color: '#BFFF00',
          lineHeight: 1.1,
          letterSpacing: -1,
        }}>
          REWIND
        </div>
      </motion.div>

      {/* divider + date */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isActive ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          width: 40, height: 1,
          background: 'rgba(255,255,255,0.2)',
          margin: '24px auto 0',
          zIndex: 1,
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 1.1, duration: 0.5 }}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          letterSpacing: 2.5,
          color: 'rgba(255,255,255,0.35)',
          textTransform: 'uppercase',
          marginTop: 14,
          zIndex: 1,
        }}
      >
        Abr — Jul 2026
      </motion.p>

      {/* bottom beer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 0.18, y: 0 } : {}}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: 32,
          fontSize: 64,
        }}
      >
        🍺
      </motion.div>
    </div>
  );
}
