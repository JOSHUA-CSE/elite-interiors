import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Premium Materials",
    description: "We source our woods, marbles, metals, and textiles from the finest European quarries and international design houses.",
  },
  {
    num: "02",
    title: "Experienced Designers",
    description: "Our award-winning team has over a decade of international experience crafting luxury residential and commercial structures.",
  },
  {
    num: "03",
    title: "Customized Concepts",
    description: "No two projects are ever alike. We design bespoke visual narratives tailored exclusively to our clients' personal stories.",
  },
  {
    num: "04",
    title: "Affordable Luxury",
    description: "Through deep manufacturer partnerships, we supply premium-grade finishes and designs without the retail markup.",
  },
  {
    num: "05",
    title: "Timely Delivery",
    description: "We respect schedules. Our project managers ensure construction phases stay fully aligned to milestones and handovers.",
  },
  {
    num: "06",
    title: "Attention to Detail",
    description: "From micro-reveal trims to concealed lighting tracks, we believe perfection lies in executing details with precision.",
  },
  {
    num: "07",
    title: "100% Client Satisfaction",
    description: "Our legacy is built on client relationships. We walk with you from initial sketch lines to final furniture arrangement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-black border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          <div className="lg:col-span-5">
            <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
              06 // WHY ELITE FABRICATORS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              An Unwavering Commitment <br />
              <span className="italic text-gold">To Perfection.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans text-white/50 text-sm font-light leading-relaxed max-w-xl">
              We manufacture and install premium aluminium and UPVC facades with an emphasis on high-grade materials and precision engineering. Discover why the world's most discerning clients entrust their projects to Elite Fabricators.
            </p>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
              key={index}
              className={`p-8 bg-zinc-950 border border-white/[0.03] hover:border-gold/30 rounded-lg transition-all duration-500 flex flex-col justify-between min-h-[200px] group ${
                index === 6 ? "md:col-span-2 lg:col-span-3 flex-row items-center gap-6" : ""
              }`}
              data-hover="true"
            >
              <div className={index === 6 ? "flex flex-col max-w-2xl" : ""}>
                <span className="font-display text-xs text-gold font-semibold tracking-wider block mb-4">
                  {item.num} // VALUE
                </span>
                <h3 className="font-display text-lg font-medium text-white group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {index === 6 && (
                <div className="hidden lg:block bg-gold/10 border border-gold/20 text-gold font-display text-xs font-semibold tracking-[0.2em] px-6 py-3 rounded">
                  GUARANTEED QUALITY
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
