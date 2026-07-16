import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      document.body.classList.remove("custom-cursor-active");
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (hidden) setHidden(false);
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Track hovered elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-hover='true']") ||
        target.classList.contains("swiper-pagination-bullet") ||
        target.classList.contains("swiper-button-next") ||
        target.classList.contains("swiper-button-prev");

      if (isInteractive) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    // Lerp animation loop
    const updateCursor = () => {
      // Direct update for the dot (fast tracking)
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Lerp update for the ring (smooth delay)
      const lerpFactor = 0.15; // smooth lag
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${
          hovered ? 1.5 : isClicking ? 0.8 : 1
        })`;
      }

      rafId.current = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId.current);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [hidden, hovered, isClicking]);

  // If mobile or touchscreen, don't render
  const isTouchDevice = typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches;
  if (isTouchDevice) return null;

  return (
    <>
      {/* Tiny dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 mix-blend-screen ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Outer ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 mix-blend-screen ${
          hidden ? "opacity-0" : "opacity-100"
        } ${
          hovered 
            ? "border border-gold bg-gold/15" 
            : "border border-white/40"
        }`}
      />
    </>
  );
}
