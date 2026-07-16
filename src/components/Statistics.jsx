import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";

function CountUp({ end, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    description: "Premium villas, apartments, and commercial designs executed globally.",
  },
  {
    value: 12,
    suffix: "+",
    label: "Years Experience",
    description: "Delivering luxury architecture and interior engineering since 2014.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Uncompromised commitment to high finishes and client relations.",
  },
  {
    value: 40,
    suffix: "+",
    label: "Commercial Designs",
    description: "State-of-the-art office setups, retail stores, and luxury hotels.",
  },
];

export default function Statistics() {
  return (
    <section className="relative w-full py-20 bg-zinc-950 border-t border-white/[0.03] overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              key={idx}
              className="flex flex-col items-center text-center p-6 border-r border-white/[0.05] last:border-0 max-sm:border-r-0 max-sm:border-b last:border-b-0 max-sm:pb-8 last:pb-0"
              data-hover="true"
            >
              <div className="font-display text-5xl md:text-6xl font-light text-white tracking-tight flex items-baseline">
                <CountUp end={stat.value} />
                <span className="text-gold font-normal ml-0.5">{stat.suffix}</span>
              </div>
              <h3 className="font-display text-sm font-semibold tracking-[0.2em] text-white/90 uppercase mt-4">
                {stat.label}
              </h3>
              <p className="font-sans text-xs text-white/40 max-w-[200px] mt-2 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
