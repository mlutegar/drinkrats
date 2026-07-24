import { motion } from 'framer-motion';
import { photos, photoUrl } from '../data/photos';

// rotations per column to give a natural feel
const ROTATIONS = [-2, 1, -1, 2, -1.5, 0.5, -2, 1.5, -0.5, 2, -1, 1, -2, 0, 1.5];

// split into 3 columns
const COL_COUNT = 3;
const columns = Array.from({ length: COL_COUNT }, (_, ci) =>
  photos.filter((_, i) => i % COL_COUNT === ci)
);

export default function SlideGallery({ isActive }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0c0c0c',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          padding: '52px 20px 14px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          zIndex: 10, background: '#0c0c0c',
          flexShrink: 0,
        }}
      >
        <p style={{
          fontSize: 10, fontWeight: 600, letterSpacing: 2.5,
          color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif',
          textTransform: 'uppercase', marginBottom: 6,
        }}>o álbum completo</p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800,
          fontSize: 26, color: '#fff', margin: 0,
        }}>
          <span style={{ color: '#BFFF00' }}>64</span> fotos. <span style={{ color: '#BFFF00' }}>77</span> drinks. 📸
        </h2>
      </motion.div>

      {/* scrolling photo grid */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {/* top fade */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 40, zIndex: 5,
          background: 'linear-gradient(180deg, #0c0c0c, transparent)',
          pointerEvents: 'none',
        }} />
        {/* bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, zIndex: 5,
          background: 'linear-gradient(0deg, #0c0c0c, transparent)',
          pointerEvents: 'none',
        }} />

        <div style={{ display: 'flex', gap: 5, padding: '8px 10px', height: '100%' }}>
          {columns.map((col, ci) => {
            // alternate: odd columns scroll up, even scroll down
            const scrollUp = ci % 2 === 0;
            const distance = col.length * 105; // approx total height of column
            return (
              <div key={ci} style={{ flex: 1, overflow: 'hidden' }}>
                <motion.div
                  animate={isActive
                    ? { y: scrollUp ? [0, -distance / 2] : [-distance / 2, 0] }
                    : {}}
                  transition={{ duration: 20 + ci * 4, ease: 'linear', repeat: Infinity }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 5 }}
                >
                  {/* duplicate for seamless loop */}
                  {[...col, ...col].map((photo, i) => {
                    const rot = ROTATIONS[(i + ci * 3) % ROTATIONS.length];
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={isActive ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + (i % col.length) * 0.04 + ci * 0.1, duration: 0.4 }}
                        style={{
                          borderRadius: 8,
                          overflow: 'hidden',
                          transform: `rotate(${rot}deg)`,
                          flexShrink: 0,
                          border: photo.first
                            ? '2px solid #BFFF00'
                            : '1px solid rgba(255,255,255,0.07)',
                          boxShadow: photo.first
                            ? '0 0 12px rgba(191,255,0,0.4)'
                            : '0 2px 8px rgba(0,0,0,0.5)',
                          position: 'relative',
                        }}
                      >
                        <img
                          src={photoUrl(photo.file)}
                          alt={photo.date}
                          loading="lazy"
                          style={{
                            width: '100%',
                            aspectRatio: '1',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                        {photo.first && (
                          <div style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0,
                            background: 'rgba(191,255,0,0.9)',
                            padding: '2px 4px', textAlign: 'center',
                            fontSize: 7, fontWeight: 700, color: '#000',
                            fontFamily: 'Inter, sans-serif', letterSpacing: 0.5,
                          }}>
                            PRIMEIRA 🐀
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* bottom caption */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          padding: '12px 20px 24px',
          textAlign: 'center', zIndex: 10,
          background: '#0c0c0c',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          flexShrink: 0,
        }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 12,
          color: 'rgba(255,255,255,0.35)',
        }}>
          Cada foto, uma <span style={{ color: '#BFFF00' }}>memória</span> 🍺
        </p>
      </motion.div>
    </div>
  );
}
