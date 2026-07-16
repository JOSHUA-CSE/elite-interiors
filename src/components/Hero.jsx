import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import imageData from "../data/images.json";
import ImageLoader from "./ImageLoader";

// Select the most premium, high-quality landscape images for Hero
const heroImageObjs = [
  imageData.find((img) => img.id === "img-06"), // Premium TV Unit with marble/orange
  imageData.find((img) => img.id === "img-09"), // Premium TV Unit with grey slats
  imageData.find((img) => img.id === "img-10"), // Premium Wardrobe with black marble
].filter(Boolean);

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    if (heroImageObjs.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImageObjs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black flex items-center px-6 md:px-16 lg:px-24"
    >
      {/* Background Image Slideshow with Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.55, scale: 1, transition: { duration: 2.5, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            className="absolute inset-0 w-full h-full animate-ken-burns"
          >
            {heroImageObjs[currentBg] && (
               <ImageLoader 
                 imageObj={heroImageObjs[currentBg]} 
                 priority={true} 
                 hoverZoom={false}
                 className="w-full h-full object-cover rounded-none"
                 aspectRatio=""
               />
            )}
          </motion.div>
        </AnimatePresence>
        {/* Dark radial overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-0 pointer-events-none" />
      </div>

      {/* Decorative Floating Lines / Elements */}
      <div className="absolute bottom-12 left-6 md:left-16 lg:left-24 z-10 hidden sm:flex items-center gap-4 text-white/30 text-xs tracking-widest font-display">
        <span>01</span>
        <span className="w-8 h-[1px] bg-white/20" />
        <span>ALUMINIUM & UPVC SPECIALISTS</span>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-start mt-12 md:mt-20">
        <div className="overflow-hidden text-reveal-mask">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
            className="text-gold font-display text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          >
            Elite Fabricators — Premium Aluminium & UPVC
          </motion.p>
        </div>

        <div className="overflow-hidden text-reveal-mask mb-4 md:mb-6">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
            className="font-display text-4xl sm:text-6xl md:text-8xl font-light tracking-tight leading-none text-white max-w-5xl"
          >
            Crafting Windows & Doors <br />
            That <span className="italic text-gold font-normal">Last.</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden text-reveal-mask mb-8 md:mb-12">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
            className="text-white/60 font-sans text-base md:text-xl font-light max-w-2xl leading-relaxed"
          >
            Premium residential and commercial aluminium and UPVC installations crafted with precision engineering, modern aesthetics, and exceptional durability.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8, ease: "easeOut" } }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="px-8 py-4 bg-white hover:bg-gold text-black hover:text-white font-display text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group"
            data-hover="true"
          >
            View Projects
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-4 border border-white/20 hover:border-gold bg-transparent hover:bg-white/5 text-white hover:text-gold font-display text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center"
            data-hover="true"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div
        className="absolute bottom-8 right-6 md:right-16 lg:right-24 z-10 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() => scrollToSection("#about")}
        data-hover="true"
      >
        <span className="font-display text-[9px] tracking-[0.3em] text-white/40 group-hover:text-white transition-colors duration-300 uppercase vertical-text">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
