import { motion } from 'framer-motion';
import { stats } from '../data/stats';

export default function Slide04_BestMonth({ isActive }) {
  const maxCount = Math.max(...stats.months.map(m => m.count));

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0c0c0c',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 28px',
      overflow: 'hidden',
    }}>
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.45 }}
        style={{ textAlign: 'center', marginBottom: 40 }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          letterSpacing: 2.5,
          color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          Calendário da rata
        </p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 30,
          color: '#fff',
          margin: 0,
        }}>
          Mês mais <span style={{ color: '#BFFF00' }}>ratoneiro</span> 🔥
        </h2>
      </motion.div>

      {/* Bar chart */}
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        gap: 10,
        height: 180,
      }}>
        {stats.months.map((m, i) => {
          const isWinner = m.name === stats.peakMonth.name;
          const heightPct = (m.count / maxCount) * 100;
          return (
            <div key={m.name} style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              height: '100%',
              justifyContent: 'flex-end',
            }}>
              {/* count label */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.3 }}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 800,
                  fontSize: 14,
                  color: isWinner ? '#BFFF00' : 'rgba(255,255,255,0.4)',
                }}
              >
                {m.count}
              </motion.span>

              {/* bar */}
              <div style={{ width: '100%', height: 148, display: 'flex', alignItems: 'flex-end' }}>
                <motion.div
                  style={{
                    width: '100%',
                    borderRadius: '8px 8px 4px 4px',
                    background: isWinner
                      ? 'linear-gradient(180deg, #BFFF00 0%, #a3e600 100%)'
                      : 'rgba(255,255,255,0.1)',
                    boxShadow: isWinner ? '0 0 20px rgba(191,255,0,0.3)' : 'none',
                  }}
                  initial={{ height: 0 }}
                  animate={isActive ? { height: `${heightPct}%` } : { height: 0 }}
                  transition={{ delay: 0.55 + i * 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* label */}
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 12,
                fontWeight: 600,
                color: isWinner ? '#BFFF00' : 'rgba(255,255,255,0.35)',
              }}>
                {m.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.5, type: 'spring' }}
        style={{ marginTop: 36, textAlign: 'center' }}
      >
        <p style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 26,
          color: '#fff',
          margin: 0,
        }}>
          Junho <span style={{ color: '#BFFF00' }}>reinou</span>
        </p>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 13,
          color: 'rgba(255,255,255,0.35)',
          marginTop: 5,
        }}>
          {stats.peakMonth.count} drink rats em 1 mês 🐀
        </p>
      </motion.div>
    </div>
  );
}
