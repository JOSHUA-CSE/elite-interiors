import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1600; // ms
    const increment = 1;
    const stepTime = Math.floor(duration / (end / increment));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setProgress(end);
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800); // match slideOut duration
        }, 400); // pause at 100
      } else {
        setProgress(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 bg-black z-[99999] flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Top Row: Brand Header */}
          <div className="flex justify-between items-center w-full">
            <span className="font-display tracking-[0.3em] text-xs font-semibold text-white/50">
              ELITE FABRICATORS
            </span>
            <span className="font-sans text-xs tracking-widest text-white/30">
              PORTFOLIO SHOWCASE
            </span>
          </div>

          {/* Center Row: Huge Title Reveal */}
          <div className="flex flex-col items-start overflow-hidden my-auto">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
              className="font-display text-5xl md:text-8xl font-light tracking-tight leading-none text-white"
            >
              CRAFTING <span className="text-gold italic font-normal">ART</span>
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.15, ease: "easeOut" } }}
              className="font-display text-5xl md:text-8xl font-light tracking-tight leading-none text-white mt-2"
            >
              OF LIVING.
            </motion.h1>
          </div>

          {/* Bottom Row: Counter & Progress */}
          <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <span className="font-display text-sm text-gold tracking-widest">
                PREMIUM MINIMALISM
              </span>
              <div className="font-display text-5xl md:text-7xl font-light leading-none text-white select-none tabular-nums">
                {progress.toString().padStart(3, "0")}
              </div>
            </div>
            {/* Progress line */}
            <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute h-full bg-gold left-0 top-0"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
