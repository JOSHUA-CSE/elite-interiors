import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation & Visioning",
    description:
      "We begin with a deep exploration session. We listen to your lifestyle needs, aesthetic preferences, and budget goals to outline a clear design brief.",
  },
  {
    num: "02",
    title: "Spatial Planning",
    description:
      "Our architects draft spatial layouts and traffic flow schematics, ensuring every square foot is optimized for visual balance and utility.",
  },
  {
    num: "03",
    title: "Concept Design",
    description:
      "We compile mood boards, material swatches, colors, and initial sketches to establish the aesthetic direction and look-and-feel.",
  },
  {
    num: "04",
    title: "3D Visualization",
    description:
      "We create high-fidelity photorealistic 3D renders of your spaces, letting you experience lighting, textures, and details before construction starts.",
  },
  {
    num: "05",
    title: "Precision Execution",
    description:
      "Our site managers and master craftsmen build out the design. We handle all civil, electrical, plumbing, ceiling, and customized carpentry works.",
  },
  {
    num: "06",
    title: "Final Handover",
    description:
      "A meticulous styling session completes the process. We inspect every detail, arrange the furniture, clean the site, and handover the keys.",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);

  // Track scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-black border-t border-white/[0.03]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            07 // THE METHODOLOGY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Our Design Journey.
          </h2>
          <p className="font-sans text-white/50 text-sm font-light max-w-md mx-auto leading-relaxed">
            From initial sketch line discussions to luxury physical handovers, discover how we build spaces with precision.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line (Desktop Center, Mobile Left) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gold origin-top"
              style={{ height: "100%", scaleY }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start relative w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Dot */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gold bg-black z-10" />

                  {/* Empty space for spacing on desktop */}
                  <div className="hidden md:block w-1/2 px-12" />

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex flex-col items-start"
                    data-hover="true"
                  >
                    <div className="p-6 bg-zinc-950/40 border border-white/[0.03] hover:border-gold/20 transition-colors duration-500 rounded-lg w-full">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-display text-xs text-gold font-bold bg-gold/10 px-2.5 py-1 rounded">
                          STEP {step.num}
                        </span>
                        <h3 className="font-display text-lg md:text-xl font-medium text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-sans text-xs md:text-sm text-white/40 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
