import { motion } from 'framer-motion';
import { stats } from '../data/stats';

export default function Slide07_Spelling({ isActive }) {
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
        style={{ textAlign: 'center', marginBottom: 36 }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          letterSpacing: 2.5,
          color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          Ortografia
        </p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 30,
          color: '#fff',
          margin: 0,
        }}>
          As <span style={{ color: '#BFFF00' }}>variações</span> 💀
        </h2>
      </motion.div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {stats.spellings.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -28 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.22, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '100%',
              padding: '16px 18px',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: s.correct ? 'rgba(191,255,0,0.08)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${s.correct ? 'rgba(191,255,0,0.25)' : 'rgba(255,255,255,0.07)'}`,
            }}
          >
            <div>
              <p style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 20,
                color: s.correct ? '#BFFF00' : 'rgba(255,255,255,0.55)',
                margin: 0,
              }}>
                {s.word} {s.correct ? '✓' : ''}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                color: 'rgba(255,255,255,0.25)',
                marginTop: 3,
              }}>
                {s.correct ? 'a versão oficial' : 'deu ruim no s'}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: 28,
                color: s.correct ? '#BFFF00' : 'rgba(255,255,255,0.3)',
                margin: 0,
                letterSpacing: -1,
              }}>
                {s.count}x
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                color: 'rgba(255,255,255,0.2)',
                marginTop: 2,
              }}>
                {s.percent}%
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.5 }}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 13,
          color: 'rgba(255,255,255,0.35)',
          marginTop: 28,
          textAlign: 'center',
        }}
      >
        Todo mundo entendeu que era hora de beber 🐀
      </motion.p>
    </div>
  );
}
