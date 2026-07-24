import { motion } from 'framer-motion';

export default function StoryBar({ total, current, duration }) {
  return (
    <div style={{
      display: 'flex',
      gap: 4,
      padding: '14px 12px 8px',
      width: '100%',
    }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: 2.5,
            borderRadius: 99,
            background: 'rgba(255,255,255,0.2)',
            overflow: 'hidden',
          }}
        >
          {i < current ? (
            <div style={{ width: '100%', height: '100%', background: '#fff' }} />
          ) : i === current ? (
            <motion.div
              style={{
                height: '100%',
                background: '#fff',
                originX: 0,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
