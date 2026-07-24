import { motion } from 'framer-motion';
import { stats } from '../data/stats';
import { photoUrl } from '../data/photos';

const FIRST_PHOTO = 'PHOTO-2026-04-23-17-03-20.jpg';

const COLORS = {
  maru:   { bubble: '#1e1e1e', text: '#f0f0f0', name: '#BFFF00' },
  michel: { bubble: '#1a3a23', text: '#f0f0f0' },
  first:  { bubble: '#BFFF00', text: '#000' },
};

function Bubble({ msg, delay, isActive }) {
  const isLeft = msg.who === 'maru';
  const colors = msg.first ? COLORS.first : isLeft ? COLORS.maru : COLORS.michel;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isLeft ? 'flex-start' : 'flex-end',
        width: '100%',
      }}
    >
      {isLeft && !msg.hideLabel && (
        <span style={{
          fontSize: 10, fontWeight: 600,
          color: COLORS.maru.name,
          marginBottom: 3, marginLeft: 2,
          fontFamily: 'Inter, sans-serif', letterSpacing: 0.3,
        }}>
          Maru
        </span>
      )}

      <div style={{ position: 'relative', maxWidth: '76%' }}>
        {msg.first && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: delay + 0.2, duration: 0.3 }}
            style={{
              position: 'absolute', top: -24, left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(191,255,0,0.12)',
              border: '1px solid rgba(191,255,0,0.35)',
              borderRadius: 20, padding: '2px 10px',
              fontSize: 9, fontWeight: 700,
              color: '#BFFF00', whiteSpace: 'nowrap',
              fontFamily: 'Inter, sans-serif', letterSpacing: 1,
            }}>
            ✦ PRIMEIRA VEZ
          </motion.div>
        )}
        <div style={{
          background: colors.bubble, color: colors.text,
          padding: '8px 13px',
          borderRadius: isLeft ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
          fontSize: msg.first ? 16 : 13,
          fontWeight: msg.first ? 700 : 400,
          fontFamily: msg.first ? 'Space Grotesk, sans-serif' : 'Inter, sans-serif',
          lineHeight: 1.4,
          boxShadow: msg.first ? '0 0 20px rgba(191,255,0,0.2)' : 'none',
        }}>
          {msg.text}
        </div>
      </div>
    </motion.div>
  );
}

export default function Slide01_Origin({ isActive }) {
  const messages = stats.origin.messages.map((msg, i, arr) => ({
    ...msg,
    hideLabel: i > 0 && arr[i - 1].who === msg.who && !arr[i - 1].first,
  }));

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0c0c0c',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ padding: '52px 20px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p style={{
          fontSize: 10, fontWeight: 600, letterSpacing: 2.5,
          color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif',
          textTransform: 'uppercase', marginBottom: 6,
        }}>Como tudo começou</p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800,
          fontSize: 26, color: '#fff', margin: 0, lineHeight: 1.15,
        }}>
          A <span style={{ color: '#BFFF00' }}>Origem</span> 🐀
        </h2>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 11,
          color: 'rgba(255,255,255,0.25)', marginTop: 4,
        }}>23 de Abril, 2026 — 17:49</p>
      </motion.div>

      {/* Body: chat + foto lado a lado */}
      <div style={{
        flex: 1, display: 'flex', overflow: 'hidden',
        padding: '16px 16px 0',
        gap: 12,
      }}>
        {/* Chat bubbles */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          gap: 7, justifyContent: 'center',
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ marginTop: msg.first ? 16 : 0 }}>
              <Bubble msg={msg} delay={0.25 + i * 0.2} isActive={isActive} />
            </div>
          ))}
        </div>

        {/* Primeira foto real */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
          animate={isActive ? { opacity: 1, scale: 1, rotate: 2 } : {}}
          transition={{ delay: 1.6, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: 110, flexShrink: 0,
            alignSelf: 'center',
          }}
        >
          {/* polaroid frame */}
          <div style={{
            background: '#1a1a1a',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            padding: '5px 5px 22px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
          }}>
            <img
              src={photoUrl(FIRST_PHOTO)}
              alt="Primeira drink rat"
              style={{
                width: '100%',
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: 4,
                display: 'block',
              }}
            />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 8, fontWeight: 600,
              color: '#BFFF00',
              textAlign: 'center',
              marginTop: 6, letterSpacing: 0.5,
            }}>
              a primeira 🐀
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 2.1, duration: 0.5 }}
        style={{
          padding: '10px 20px 22px', textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 12,
          color: 'rgba(255,255,255,0.35)',
        }}>
          Maru inventou. Michel bebado aprovou. 🍺
        </p>
      </motion.div>
    </div>
  );
}
