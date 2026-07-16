import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import SEO from "../components/SEO";

const faqs = [
  {
    question: "What is the average cost of interior design in Tamil Nadu?",
    answer: "The cost of interior design in Tamil Nadu varies based on the scope of work, materials chosen, and space size. Typically, premium residential interiors start around ₹5 Lakhs for a 2BHK and can go up to ₹25+ Lakhs for luxury villas depending on finishes and custom fabrication."
  },
  {
    question: "How long does a turnkey interior project take?",
    answer: "A standard turnkey interior project for an apartment usually takes 45 to 60 days from finalization of design to handover. Larger spaces like villas and commercial offices may take 3 to 6 months depending on complexity and custom requirements."
  },
  {
    question: "What is a modular kitchen and why should I choose it?",
    answer: "A modular kitchen is a modern kitchen layout consisting of pre-made cabinet parts (modules) fitted together to optimize space and efficiency. They are easy to maintain, customizable, highly durable, and allow for better space management compared to traditional carpenter-made kitchens."
  },
  {
    question: "Do you provide office interior design services in Coimbatore?",
    answer: "Yes, Elite Interiors specializes in corporate and commercial office interiors across Coimbatore and Tamil Nadu. We provide comprehensive space planning, ergonomic workstations, acoustic glass partitions, and premium reception designs."
  },
  {
    question: "What materials do you use for wardrobes and cabinets?",
    answer: "We use high-grade, moisture-resistant HDHMR, premium plywood (BWR/BWP grade), and MDF for shutters. Finishes include high-gloss acrylic, PU paint, laminate, and luxury glass sliding doors with aluminium profiles."
  },
  {
    question: "Is there a warranty on your interior works?",
    answer: "Absolutely. We offer a comprehensive up to 10-year warranty on core materials (like plywood) and a standard 5-year warranty on hardware components, ensuring peace of mind for our turnkey clients."
  },
  {
    question: "What is the process of execution for turnkey projects?",
    answer: "Our process includes five phases: 1) Initial Consultation & Space Planning, 2) 3D Design & Material Selection, 3) Quotation & Agreement, 4) Factory Fabrication & Site Preparation, and 5) Installation, Quality Check, & Handover."
  },
  {
    question: "Do you offer free initial interior design consultations?",
    answer: "Yes, our first consultation is free. Our expert designers will visit your site or meet with you to understand your vision, discuss space planning, and provide a preliminary estimate."
  },
  {
    question: "Can I customize the furniture for my villa interior?",
    answer: "Yes, custom furniture fabrication is our specialty. We design and build bespoke TV units, luxury wardrobes, beds, and dining setups perfectly tailored to your villa's aesthetic and dimensions."
  },
  {
    question: "How do I maintain my modular kitchen and wardrobes?",
    answer: "Maintenance is easy. Wipe surfaces with a soft, damp cloth and mild detergent. Avoid abrasive cleaners and excess water on wooden edges. Hardware like hinges and channels should be kept dust-free to ensure smooth operation."
  },
  {
    question: "What are the benefits of a false ceiling?",
    answer: "False ceilings improve room aesthetics, conceal messy wiring and AC ducts, provide acoustic insulation, and allow for customized mood lighting (like cove lights and recessed spotlights), drastically enhancing the room's premium feel."
  },
  {
    question: "Do you handle civil changes during home interior renovations?",
    answer: "Yes, our turnkey interior solutions cover minor civil modifications, including wall breaking, false ceiling installation, flooring upgrades, plumbing, and electrical rewiring required for the new design."
  },
  {
    question: "What is the best material for a TV unit?",
    answer: "For a luxury aesthetic, we recommend a combination of fluted wooden panels (louvers), marble or stone-finish laminates, and toughened tinted glass with profile lighting. The base frame is typically high-quality plywood."
  },
  {
    question: "How do you handle interior lighting design?",
    answer: "We integrate functional and ambient lighting in the 3D design phase itself. This includes task lighting for kitchens, accent lighting for TV units, and layered false ceiling lights to create the perfect mood for your space."
  },
  {
    question: "Which color themes are popular for modern luxury interiors?",
    answer: "Modern luxury heavily features monochromatic palettes (blacks, greys, whites) accented with warm wood textures and metallic trims (gold or brass). Muted pastels with rich textures are also highly requested."
  },
  {
    question: "Do you do restaurant and cafe interiors?",
    answer: "Yes, we design and execute high-end cafe and restaurant interiors. We focus on durable commercial materials, thematic styling, acoustic treatments, and optimized seating layouts."
  },
  {
    question: "How is space planning handled for small apartments?",
    answer: "For compact apartments, we focus on multifunctional furniture, vertical storage solutions (like floor-to-ceiling wardrobes), light-reflective finishes, and minimalistic designs to make the space feel larger and breathable."
  },
  {
    question: "What is 3D Interior Design?",
    answer: "3D Interior Design involves creating a photorealistic digital model of your space before execution. It allows you to visualize materials, colors, lighting, and furniture placement, ensuring the final outcome matches your expectations."
  },
  {
    question: "Do you provide UPVC and Aluminium windows alongside interiors?",
    answer: "Yes, Elite Fabricators provides premium structural glazing, UPVC windows, and aluminium sliding doors integrated directly into our interior projects for a seamless architectural finish."
  },
  {
    question: "Why should I choose Elite Interiors over local carpenters?",
    answer: "Elite Interiors provides factory-finished precision, modern designs, dedicated project management, 3D visualization, and comprehensive warranties. Carpenters often lack access to modern machinery (like edge banders) and struggle with complex contemporary designs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  // Generate FAQ Schema
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-black">
      <SEO 
        title="Frequently Asked Questions | Interior Design Services" 
        description="Find answers to common questions about interior design costs, modular kitchens, turnkey projects, and timelines in Tamil Nadu."
        url="/faq"
        structuredData={[faqSchema]}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            KNOWLEDGE BASE
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Frequently Asked <span className="italic text-gold">Questions.</span>
          </h1>
          <p className="font-sans text-white/50 text-sm font-light leading-relaxed">
            Everything you need to know about our premium fabrication, turnkey interiors, and execution processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg bg-zinc-950 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-1 focus:ring-gold"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="font-display text-base md:text-lg font-medium text-white pr-4">
                  {faq.question}
                </h3>
                <FiChevronDown 
                  className={`text-gold text-xl transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-sm md:text-base font-sans font-light text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
