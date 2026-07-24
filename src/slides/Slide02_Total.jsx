import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { photos, photoUrl } from '../data/photos';

// pick a spread of photos for the strip
const STRIP = [3,7,11,15,19,23,27,31,35,39,43,47,51,55,59,63].map(i => photos[i] || photos[i % photos.length]);

function Counter({ to, isActive }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let start = null;
    const duration = 1600;
    const raf = requestAnimationFrame(function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setDisplay(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) requestAnimationFrame(step); else setDisplay(to);
    });
    return () => cancelAnimationFrame(raf);
  }, [isActive, to]);
  return <>{display}</>;
}

export default function Slide02_Total({ isActive }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0c0c0c',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '0 24px',
    }}>

      {/* scrolling photo strip — top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          position: 'absolute', top: 40,
          left: 0, right: 0,
          display: 'flex', gap: 6,
          overflow: 'hidden',
          maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <motion.div
          animate={isActive ? { x: [0, -600] } : {}}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          style={{ display: 'flex', gap: 6, flexShrink: 0 }}
        >
          {[...STRIP, ...STRIP].map((p, i) => (
            <img key={i} src={photoUrl(p.file)} alt=""
              style={{
                width: 64, height: 64, objectFit: 'cover',
                borderRadius: 8, flexShrink: 0,
                opacity: 0.18, filter: 'saturate(0.6)',
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* scrolling photo strip — bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: 40,
          left: 0, right: 0,
          display: 'flex', gap: 6,
          overflow: 'hidden',
          maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <motion.div
          animate={isActive ? { x: [-600, 0] } : {}}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          style={{ display: 'flex', gap: 6, flexShrink: 0 }}
        >
          {[...STRIP.slice().reverse(), ...STRIP.slice().reverse()].map((p, i) => (
            <img key={i} src={photoUrl(p.file)} alt=""
              style={{
                width: 64, height: 64, objectFit: 'cover',
                borderRadius: 8, flexShrink: 0,
                opacity: 0.18, filter: 'saturate(0.6)',
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3, duration: 1.2 }}
        style={{
          position: 'absolute',
          width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(191,255,0,0.16) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* content */}
      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{
          fontFamily: 'Inter, sans-serif', fontSize: 11,
          letterSpacing: 2.5, color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase', marginBottom: 12, zIndex: 1,
        }}
      >De 23 Abr a 20 Jul</motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 180, damping: 14 }}
        style={{
          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800,
          fontSize: 130, lineHeight: 1, color: '#BFFF00',
          zIndex: 1, letterSpacing: -5,
        }}
      >
        <Counter to={77} isActive={isActive} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', zIndex: 1, marginTop: 8 }}
      >
        <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', margin: 0 }}>
          drink rats
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 5 }}>
          em 88 dias
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          marginTop: 28, padding: '10px 20px', borderRadius: 14,
          background: 'rgba(191,255,0,0.07)', border: '1px solid rgba(191,255,0,0.18)',
          zIndex: 1,
        }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
          Quase <span style={{ color: '#BFFF00', fontWeight: 700 }}>1 drink rat por dia</span> 🐀
        </p>
      </motion.div>
    </div>
  );
}
