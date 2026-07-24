import { motion } from 'framer-motion';
import { stats } from '../data/stats';

function PlayerRow({ name, count, percent, delay, isActive, winner }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={isActive ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: '100%' }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: winner ? '#fff' : 'rgba(255,255,255,0.5)',
          }}>
            {name}
          </span>
          {winner && (
            <span style={{
              fontSize: 11, fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              color: '#BFFF00',
              background: 'rgba(191,255,0,0.12)',
              border: '1px solid rgba(191,255,0,0.25)',
              borderRadius: 20,
              padding: '1px 8px',
            }}>
              CAMPEÃO
            </span>
          )}
        </div>
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 28,
          color: winner ? '#BFFF00' : 'rgba(255,255,255,0.35)',
          letterSpacing: -1,
        }}>
          {count}
        </span>
      </div>

      {/* bar track */}
      <div style={{
        width: '100%', height: 10,
        borderRadius: 99,
        background: 'rgba(255,255,255,0.08)',
        overflow: 'hidden',
      }}>
        <motion.div
          style={{
            height: '100%',
            borderRadius: 99,
            background: winner
              ? 'linear-gradient(90deg, #BFFF00, #a3e600)'
              : 'rgba(255,255,255,0.2)',
          }}
          initial={{ width: 0 }}
          animate={isActive ? { width: `${percent}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 11,
        color: 'rgba(255,255,255,0.25)',
        marginTop: 5,
      }}>
        {percent}% do total
      </p>
    </motion.div>
  );
}

export default function Slide03_WhoWon({ isActive }) {
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
          Placar geral
        </p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 30,
          color: '#fff',
          margin: 0,
        }}>
          Quem foi mais <span style={{ color: '#BFFF00' }}>ratão?</span>
        </h2>
      </motion.div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <PlayerRow
          name="Michel"
          count={stats.participants.michel.count}
          percent={stats.participants.michel.percent}
          delay={0.35}
          isActive={isActive}
          winner={true}
        />
        <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)' }} />
        <PlayerRow
          name="Maru"
          count={stats.participants.maru.count}
          percent={stats.participants.maru.percent}
          delay={0.6}
          isActive={isActive}
          winner={false}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          marginTop: 40,
          padding: '12px 20px',
          borderRadius: 16,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
        }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 13,
          color: 'rgba(255,255,255,0.45)',
          margin: 0,
        }}>
          Michel ganhou, mas <span style={{ color: '#BFFF00', fontWeight: 600 }}>Maru inventou</span> 👑
        </p>
      </motion.div>
    </div>
  );
}
