import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.href.replace("#", ""));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Lenis smooth scroll will capture window.scrollTo
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 lg:px-20 py-5 ${
          scrolled
            ? "glassmorphism py-4 shadow-lg border-b border-white/[0.05]"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex flex-col items-start group"
            data-hover="true"
          >
            <span className="font-display text-xl md:text-2xl font-semibold tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-gold">
              ELITE
            </span>
            <span className="font-sans text-[9px] tracking-[0.45em] text-white/50 -mt-1 group-hover:text-gold/70 transition-colors duration-300">
              FABRICATORS
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-display text-sm font-light tracking-widest relative py-1 text-white/70 hover:text-white transition-colors duration-300"
                  data-hover="true"
                >
                  {item.name}
                  {/* Underline effect */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-2xl text-white focus:outline-none p-1"
            onClick={() => setMobileMenuOpen(true)}
            data-hover="true"
            aria-label="Open menu"
          >
            <HiMenu />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
            exit={{ opacity: 0, y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 bg-black z-[999] flex flex-col justify-between p-8 md:p-16"
          >
            {/* Header */}
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold tracking-[0.25em] text-white">
                  ELITE
                </span>
                <span className="font-sans text-[9px] tracking-[0.45em] text-white/50 -mt-1">
                  FABRICATORS
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl text-white focus:outline-none p-1"
                data-hover="true"
                aria-label="Close menu"
              >
                <HiX />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 my-auto items-start">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    initial={{ x: -50, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
                    }}
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-display text-4xl font-light tracking-widest text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-4"
                    data-hover="true"
                  >
                    <span className="text-gold text-sm font-semibold">0{index + 1}</span>
                    <span className={`${isActive ? "text-gold font-normal" : ""}`}>{item.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] tracking-widest text-white/30 font-display">GET IN TOUCH</p>
                <a href="mailto:elitefabricators@gmail.com" className="text-sm text-gold hover:underline">
                  elitefabricators@gmail.com
                </a>
                <a href="tel:8807555436" className="text-sm text-white/70">
                  +91 8807555436
                </a>
              </div>
              <p className="text-xs text-white/30 font-sans">
                © {new Date().getFullYear()} Elite Fabricators. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
