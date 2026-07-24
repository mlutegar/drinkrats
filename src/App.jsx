import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StoryBar from './components/StoryBar';
import Slide00_Intro from './slides/Slide00_Intro';
import Slide01_Origin from './slides/Slide01_Origin';
import Slide02_Total from './slides/Slide02_Total';
import Slide03_WhoWon from './slides/Slide03_WhoWon';
import Slide04_BestMonth from './slides/Slide04_BestMonth';
import Slide05_Streak from './slides/Slide05_Streak';
import Slide06_BestTime from './slides/Slide06_BestTime';
import Slide07_Spelling from './slides/Slide07_Spelling';
import Slide08_IconicMoments from './slides/Slide08_IconicMoments';
import Slide09_Ending from './slides/Slide09_Ending';
import SlideGallery from './slides/SlideGallery';
import './index.css';

const DEFAULT_DURATION = 8000;

const slides = [
  { component: Slide00_Intro },
  { component: Slide01_Origin },
  { component: Slide02_Total },
  { component: Slide03_WhoWon },
  { component: Slide04_BestMonth },
  { component: Slide05_Streak },
  { component: Slide06_BestTime },
  { component: Slide07_Spelling },
  { component: Slide08_IconicMoments },
  { component: SlideGallery, duration: 18000 },
  { component: Slide09_Ending },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);
  const holdRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const elapsedRef = useRef(0);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent(prev => (prev > 0 ? prev - 1 : 0));
  }, []);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearTimeout(timerRef.current);
      elapsedRef.current += Date.now() - startTimeRef.current;
      return;
    }
    const remaining = (slides[current].duration ?? DEFAULT_DURATION) - elapsedRef.current;
    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      elapsedRef.current = 0;
      goNext();
    }, Math.max(remaining, 0));
    return () => clearTimeout(timerRef.current);
  }, [paused, current, goNext]);

  useEffect(() => {
    elapsedRef.current = 0;
    startTimeRef.current = Date.now();
  }, [current]);

  const handlePointerDown = () => {
    holdRef.current = setTimeout(() => setPaused(true), 150);
  };

  const handlePointerUp = (e) => {
    const wasHolding = paused;
    if (holdRef.current) clearTimeout(holdRef.current);
    setPaused(false);
    if (wasHolding) return;

    const clientX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
    const w = window.innerWidth;
    elapsedRef.current = 0;
    if (clientX < w * 0.38) {
      goPrev();
    } else {
      goNext();
    }
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0.5 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-60%' : '60%', opacity: 0, scale: 0.95 }),
  };

  const { component: CurrentSlide, duration: currentDuration = DEFAULT_DURATION } = slides[current];

  return (
    <div
      style={{
        width: '100%',
        height: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 430,
          height: '100%',
          overflow: 'hidden',
          touchAction: 'none',
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          if (holdRef.current) clearTimeout(holdRef.current);
          setPaused(false);
        }}
      >
        {/* Story bars */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50 }}>
          <StoryBar
            key={current}
            total={slides.length}
            current={current}
            duration={currentDuration}
          />
        </div>

        {/* Slide */}
        <AnimatePresence custom={direction} mode="sync">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <CurrentSlide isActive={true} />
          </motion.div>
        </AnimatePresence>

        {/* Pause icon */}
        {paused && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(0,0,0,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            }}>
              <div style={{ width: 5, height: 24, borderRadius: 3, background: '#fff' }} />
              <div style={{ width: 5, height: 24, borderRadius: 3, background: '#fff' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
