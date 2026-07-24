import { motion } from 'framer-motion';

const hours = [
  { label: '00h', val: 3 },
  { label: '06h', val: 1 },
  { label: '12h', val: 6 },
  { label: '14h', val: 10 },
  { label: '17h', val: 18 },
  { label: '19h', val: 30 },
  { label: '21h', val: 28 },
  { label: '22h', val: 12 },
  { label: '01h', val: 5 },
];

export default function Slide06_BestTime({ isActive }) {
  const max = Math.max(...hours.map(h => h.val));

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
          Horário das ratas
        </p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 30,
          color: '#fff',
          margin: 0,
        }}>
          A ratada é <span style={{ color: '#BFFF00' }}>noturna</span> 🌙
        </h2>
      </motion.div>

      {/* waveform bars */}
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        gap: 6,
        height: 160,
      }}>
        {hours.map((h, i) => {
          const isPeak = h.val >= 25;
          const heightPct = (h.val / max) * 100;
          return (
            <div key={i} style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              height: '100%',
              justifyContent: 'flex-end',
            }}>
              <div style={{ width: '100%', height: 136, display: 'flex', alignItems: 'flex-end' }}>
                <motion.div
                  style={{
                    width: '100%',
                    borderRadius: '6px 6px 3px 3px',
                    background: isPeak
                      ? 'linear-gradient(180deg, #BFFF00, #a3e600)'
                      : 'rgba(255,255,255,0.1)',
                    boxShadow: isPeak ? '0 0 16px rgba(191,255,0,0.25)' : 'none',
                  }}
                  initial={{ height: 0 }}
                  animate={isActive ? { height: `${heightPct}%` } : { height: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 9,
                fontWeight: 500,
                color: isPeak ? '#BFFF00' : 'rgba(255,255,255,0.25)',
              }}>
                {h.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* peak badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          marginTop: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '14px 22px',
          borderRadius: 18,
          background: 'rgba(191,255,0,0.08)',
          border: '1px solid rgba(191,255,0,0.2)',
        }}
      >
        <span style={{ fontSize: 32 }}>🌙</span>
        <div>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 24,
            color: '#BFFF00',
            margin: 0,
            letterSpacing: -0.5,
          }}>
            19h – 21h
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            color: 'rgba(255,255,255,0.35)',
            marginTop: 2,
          }}>
            horário de pico
          </p>
        </div>
      </motion.div>
    </div>
  );
}
