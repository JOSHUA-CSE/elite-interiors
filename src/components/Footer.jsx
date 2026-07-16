import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
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
    <footer className="relative w-full bg-black border-t border-white/[0.05] pt-20 pb-10 overflow-hidden">
      {/* Background Subtle Logo Accent */}
      <div className="absolute bottom-[-50px] right-[-50px] font-display text-[200px] font-semibold text-white/[0.01] select-none pointer-events-none leading-none tracking-widest">
        ELITE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 items-start">
          
          {/* Col 1: Brand details */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex flex-col mb-6">
              <span className="font-display text-2xl md:text-3xl font-semibold tracking-[0.25em] text-white">
                ELITE
              </span>
              <span className="font-sans text-[10px] tracking-[0.45em] text-white/50 -mt-1">
                FABRICATORS
              </span>
            </div>
            <p className="font-sans text-xs text-white/40 max-w-sm leading-relaxed mb-6">
              A premier architectural fabrication company crafting premium aluminium and UPVC solutions for modern residential and commercial buildings.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="font-display text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-6">
              QUICK NAVIGATION
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
                className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-200"
                data-hover="true"
              >
                Return Home
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection("#about"); }}
                className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-200"
                data-hover="true"
              >
                Company Story
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); scrollToSection("#services"); }}
                className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-200"
                data-hover="true"
              >
                Our Services
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollToSection("#projects"); }}
                className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-200"
                data-hover="true"
              >
                Featured Work
              </a>
              <a
                href="#gallery"
                onClick={(e) => { e.preventDefault(); scrollToSection("#gallery"); }}
                className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-200"
                data-hover="true"
              >
                Interactive Archive
              </a>
            </div>
          </div>

          {/* Col 3: Services shortcuts */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-display text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-6">
              LUXURY PROJECTS
            </h4>
            <div className="flex flex-col space-y-3">
              <span className="font-sans text-xs text-white/40">The Skyline Residence, Chennai</span>
              <span className="font-sans text-xs text-white/40">Aether Penthouse, Coimbatore</span>
              <span className="font-sans text-xs text-white/40">Monolith Headquarters, Madurai</span>
              <span className="font-sans text-xs text-white/40">Luminal Cafe, Salem</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Divider & copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] text-white/30 tracking-wider">
            © {new Date().getFullYear()} Elite Fabricators. All rights reserved. Made for modern architectural designs.
          </p>

          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 text-xs font-display tracking-widest text-white/40 hover:text-gold transition-colors duration-300 group"
            data-hover="true"
          >
            BACK TO TOP
            <FiArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
