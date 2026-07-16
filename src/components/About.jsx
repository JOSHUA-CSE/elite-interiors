import { motion } from "framer-motion";
import ImageLoader from "./ImageLoader";
import imageData from "../data/images.json";

const imgMain = imageData.find((img) => img.id === "img-11");
const imgSub = imageData.find((img) => img.id === "img-05");

export default function About() {
  const marqueeText = "PREMIUM FABRICATION • CRAFTSMANSHIP • ALUMINIUM WINDOWS • UPVC DOORS • ARCHITECTURAL GLASS • ";

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-black overflow-hidden">
      {/* Infinite Text Marquee Overlay */}
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap bg-zinc-950/60 border-y border-white/[0.03] py-4 select-none z-10">
        <div className="inline-block animate-infinite-scroll">
          <span className="font-display text-lg md:text-2xl font-light tracking-[0.4em] text-white/20 uppercase">
            {marqueeText}
            {marqueeText}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Editorial Story */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              01 // EXPERT FABRICATORS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
              Crafting Facades that Define <span className="italic text-gold">Modern Living.</span>
            </h2>
            <p className="font-sans text-white/60 font-light leading-relaxed mb-6">
              We specialize in manufacturing and installing premium aluminium and UPVC windows, doors, and facades. With exceptional craftsmanship and modern engineering, we bring durability and elegant aesthetics to every architectural project.
            </p>
            <p className="font-sans text-white/40 font-light leading-relaxed mb-8">
              Every installation, from custom aluminium sliding doors to energy-efficient UPVC windows, is meticulously fabricated by our experts to ensure superior thermal performance and sleek design for our clients.
            </p>

            {/* Micro Story Highlights */}
            <div className="grid grid-cols-2 gap-8 w-full border-t border-white/10 pt-8">
              <div>
                <p className="font-display text-white text-lg font-medium">Precision Engineering</p>
                <p className="font-sans text-xs text-white/50 mt-1">Custom-built frames to exact specifications.</p>
              </div>
              <div>
                <p className="font-display text-white text-lg font-medium">Premium Materials</p>
                <p className="font-sans text-xs text-white/50 mt-1">High-grade aluminium and UPVC profiles.</p>
              </div>
            </div>
          </div>

          {/* Right: Double Image Collage with Staggered Framer Motion Reveal */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="col-span-8 z-10"
            >
              <ImageLoader
                imageObj={imgMain}
                alt="Modern Sliding Installation"
                aspectRatio="aspect-[3/4]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="col-span-6 absolute -bottom-10 right-0 z-20"
            >
              <ImageLoader
                imageObj={imgSub}
                alt="Premium Interior Unit"
                aspectRatio="aspect-square"
                className="border-4 border-black"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
