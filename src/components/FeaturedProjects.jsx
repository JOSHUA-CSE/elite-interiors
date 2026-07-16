import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";
import ImageLoader from "./ImageLoader";
import imageData from "../data/images.json";

const getImg = (id) => imageData.find(img => img.id === id);

const projectsList = [
  {
    title: "The Skyline Residence",
    category: "Living Room",
    location: "Beverly Hills, CA",
    imageObj: getImg("img-02"), // TV Unit (Portrait)
    aspect: "aspect-[4/5]",
  },
  {
    title: "Aether Penthouse",
    category: "Modular Kitchen",
    location: "New York, NY",
    imageObj: getImg("img-04"), // Kitchen
    aspect: "aspect-square",
  },
  {
    title: "Monolith Headquarters",
    category: "Bedroom",
    location: "Berlin, Germany",
    imageObj: getImg("img-11"), // Sliding Wardrobe
    aspect: "aspect-[4/3]",
  },
  {
    title: "Luminal Cafe",
    category: "Office Interior",
    location: "London, UK",
    imageObj: getImg("img-05"), // Wardrobe/Study
    aspect: "aspect-[4/5]",
  },
  {
    title: "Serene Villa",
    category: "Luxury Villa",
    location: "Milan, Italy",
    imageObj: getImg("img-07"), // Kitchen
    aspect: "aspect-square",
  },
  {
    title: "Arcadia Exhibition Hub",
    category: "Apartment",
    location: "Paris, France",
    imageObj: getImg("img-01"), // Wardrobe
    aspect: "aspect-[4/3]",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative w-full py-24 md:py-32 bg-black border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="flex flex-col">
            <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              03 // FEATURED WORK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Selected Fabrication <br />
              <span className="italic text-gold">Projects.</span>
            </h2>
          </div>
          <p className="font-sans text-white/50 text-sm font-light max-w-sm leading-relaxed">
            A curated collection of our finest aluminium and UPVC installations across residential and commercial properties.
          </p>
        </div>

        {/* Masonry Columns Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projectsList.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              key={index}
              className="break-inside-avoid relative group rounded-lg overflow-hidden border border-white/[0.03] bg-zinc-950 block"
              data-hover="true"
            >
              {/* Image using custom ImageLoader */}
              <ImageLoader
                imageObj={project.imageObj}
                alt={project.title}
                aspectRatio={project.aspect}
                hoverZoom={true}
              />

              {/* Hover Details Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                {/* View Icon Top Right */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75 shadow-lg">
                  <FiEye className="text-lg" />
                </div>

                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="font-display text-gold text-xs font-semibold tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-light text-white mt-1 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-white/50 mt-2 tracking-wide">
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
