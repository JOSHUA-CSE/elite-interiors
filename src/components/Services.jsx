import { motion } from "framer-motion";
import {
  FiHome,
  FiBriefcase,
  FiCompass,
  FiKey,
  FiLayers,
} from "react-icons/fi";
import { 
  LuBedDouble, 
  LuSofa, 
  LuChefHat, 
  LuArmchair, 
  LuBuilding2, 
  LuUtensilsCrossed,
  LuLightbulb
} from "react-icons/lu";

const servicesList = [
  {
    num: "01",
    title: "Aluminium Windows",
    description: "Premium grade aluminium window frames offering maximum durability, slim sightlines, and modern aesthetics.",
    icon: FiHome,
  },
  {
    num: "02",
    title: "UPVC Doors & Windows",
    description: "Energy-efficient UPVC profiles with excellent thermal insulation, soundproofing, and low maintenance.",
    icon: LuBuilding2,
  },
  {
    num: "03",
    title: "Sliding Systems",
    description: "Smooth-gliding heavy-duty sliding doors and windows for seamless indoor-outdoor transitions.",
    icon: FiLayers,
  },
  {
    num: "04",
    title: "Structural Glazing",
    description: "Frameless glass facades and curtain walls engineered for commercial buildings and modern homes.",
    icon: FiBriefcase,
  },
  {
    num: "05",
    title: "Casement Windows",
    description: "Traditional and modern casement windows with multi-point locking systems for enhanced security.",
    icon: FiCompass,
  },
  {
    num: "06",
    title: "Aluminium Partitions",
    description: "Sleek glass and aluminium partitioning systems for office layouts and commercial spaces.",
    icon: FiLayers,
  },
  {
    num: "07",
    title: "Skylights & Canopies",
    description: "Custom-designed glass roofs, skylights, and entrance canopies using durable aluminium framing.",
    icon: LuLightbulb,
  },
  {
    num: "08",
    title: "Bifold Doors",
    description: "Space-saving folding doors that open up entire walls, perfect for patios and large living spaces.",
    icon: FiKey,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="relative w-full py-24 md:py-32 bg-black border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="flex flex-col">
            <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              02 // OUR EXPERTISE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Precision Engineering, <br />
              <span className="italic text-gold">Built to Last.</span>
            </h2>
          </div>
          <p className="font-sans text-white/50 text-sm font-light max-w-sm leading-relaxed">
            Our specialized aluminium and UPVC fabrication services deliver superior quality, thermal efficiency, and modern design for any architectural project.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative p-6 bg-zinc-950 border border-white/[0.03] hover:border-gold/30 transition-all duration-500 rounded-lg overflow-hidden flex flex-col justify-between min-h-[220px]"
                data-hover="true"
              >
                {/* Background glow hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Top Row: Icon and Number */}
                <div className="flex justify-between items-center z-10">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 group-hover:text-gold group-hover:border-gold/30 transition-all duration-300">
                    <Icon className="text-lg" />
                  </div>
                  <span className="font-display text-xs text-white/20 group-hover:text-gold/45 transition-colors duration-300 font-bold">
                    {service.num}
                  </span>
                </div>

                {/* Middle/Bottom: Text info */}
                <div className="mt-8 z-10">
                  <h3 className="font-display text-lg font-medium text-white group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
