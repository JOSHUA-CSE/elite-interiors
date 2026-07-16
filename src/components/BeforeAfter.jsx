import { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const beforeImg = "https://images.unsplash.com/photo-1504307651254-35680f356f67?auto=format&fit=crop&w=1800&q=80"; // Unfinished/construction interior
const afterImg = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80"; // Finished modern interior

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="relative w-full py-24 md:py-32 bg-black border-t border-white/[0.03]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            05 // TRANSFORMATIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Before / After Showcase.
          </h2>
          <p className="font-sans text-white/50 text-sm font-light max-w-md mx-auto leading-relaxed">
            Drag the handle to view the incredible transformation of spaces with our premium aluminium and UPVC facade installations.
          </p>
        </div>

        {/* Slider Container */}
        <div
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden select-none shadow-2xl border border-white/10 cursor-ew-resize"
        >
          {/* AFTER IMAGE (Background) */}
          <img
            src={afterImg}
            alt="After Elite transformation"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute bottom-6 right-6 bg-black/60 px-4 py-1.5 text-xs font-display tracking-widest text-white border border-white/10 rounded backdrop-blur">
            AFTER ELITE
          </div>

          {/* BEFORE IMAGE (Foreground, Clipped) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            }}
          >
            <img
              src={beforeImg}
              alt="Before Elite transformation"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute bottom-6 left-6 bg-black/60 px-4 py-1.5 text-xs font-display tracking-widest text-white border border-white/10 rounded backdrop-blur">
              BEFORE
            </div>
          </div>

          {/* DRAG HANDLE BAR */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-gold/80 z-10 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Circular Handle */}
            <div
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full glassmorphism border border-gold/40 flex items-center justify-between px-1 text-white shadow-xl cursor-grab active:cursor-grabbing transition-transform duration-300 ${
                isDragging ? "scale-110 border-gold" : ""
              }`}
              data-hover="true"
            >
              <FiChevronLeft className="text-gold text-lg" />
              <FiChevronRight className="text-gold text-lg" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
