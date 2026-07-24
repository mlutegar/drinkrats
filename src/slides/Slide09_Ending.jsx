import { motion } from 'framer-motion';
import { photos, photoUrl } from '../data/photos';

// pick 9 spread-out photos for the background collage
const BG_PHOTOS = [4, 9, 14, 19, 24, 29, 34, 39, 44].map(i => photos[i % photos.length]);

// floating particles
const FLOATERS = ['🐀','🍺','🐀','🍺','🐀','🍺','🐀','🍺'];

// Grid positions for the background collage (3x3)
const GRID = [
  { top:'5%',  left:'2%',   rot: -8  },
  { top:'2%',  left:'37%',  rot:  3  },
  { top:'4%',  left:'68%',  rot: -5  },
  { top:'33%', left:'-2%',  rot:  6  },
  { top:'30%', left:'35%',  rot: -3  },
  { top:'32%', left:'70%',  rot:  7  },
  { top:'62%', left:'0%',   rot: -6  },
  { top:'60%', left:'36%',  rot:  4  },
  { top:'61%', left:'68%',  rot: -4  },
];

export default function Slide09_Ending({ isActive }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0c0c0c',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* background photo collage */}
      {BG_PHOTOS.map((photo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            top: GRID[i].top,
            left: GRID[i].left,
            width: '28%',
            transform: `rotate(${GRID[i].rot}deg)`,
            borderRadius: 8,
            overflow: 'hidden',
            opacity: 0,
          }}
        >
          <img
            src={photoUrl(photo.file)}
            alt=""
            style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>
      ))}

      {/* dark overlay on top of photos */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(12,12,12,0.78)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
      }} />

      {/* glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5, duration: 1.4 }}
        style={{
          position: 'absolute',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(191,255,0,0.14) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 1,
        }}
      />

      {/* floating particles */}
      {isActive && FLOATERS.map((emoji, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute', left: `${6 + i * 12}%`,
            fontSize: 26, pointerEvents: 'none', zIndex: 2,
          }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{ y: '-15vh', opacity: [0, 0.8, 0.8, 0] }}
          transition={{ delay: 0.6 + i * 0.22, duration: 3, ease: 'easeOut' }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* rat */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={isActive ? { scale: 1, rotate: 0 } : {}}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 14 }}
        style={{ fontSize: 84, lineHeight: 1, marginBottom: 22, zIndex: 3 }}
      >
        🐀
      </motion.div>

      {/* main text */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.75, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', zIndex: 3, padding: '0 28px' }}
      >
        <p style={{
          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800,
          fontSize: 40, color: '#fff', lineHeight: 1.1, letterSpacing: -1, margin: 0,
        }}>Que venham</p>
        <p style={{
          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800,
          fontSize: 40, color: '#BFFF00', lineHeight: 1.1, letterSpacing: -1, margin: 0,
        }}>mais 77 🐀</p>
      </motion.div>

      {/* names */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12, zIndex: 3 }}
      >
        <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.15)' }} />
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
          Maru & Michel
        </p>
        <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.15)' }} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 0.5 }}
        style={{
          fontFamily: 'Inter, sans-serif', fontSize: 11,
          color: 'rgba(255,255,255,0.15)', marginTop: 8, zIndex: 3, letterSpacing: 1,
        }}
      >2026</motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 1.9, duration: 0.5 }}
        style={{
          position: 'absolute', bottom: 28,
          fontFamily: 'Inter, sans-serif', fontSize: 10,
          color: 'rgba(255,255,255,0.15)',
          letterSpacing: 2, textTransform: 'uppercase', zIndex: 3,
        }}
      >🍺 Drink Rats Rewind</motion.p>
    </div>
  );
}
