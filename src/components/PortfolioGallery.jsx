import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import ImageLoader from "./ImageLoader";
import imageData from "../data/images.json";

const getImg = (id) => imageData.find(img => img.id === id);

const categories = [
  "All",
  "Living Room",
  "Kitchen",
  "Wardrobe",
  "Bedroom",
  "Office",
  "Commercial",
];

const galleryItems = [
  { id: 1, title: "Marble TV Unit", category: "Living Room", imageObj: getImg("img-06"), aspect: "aspect-[3/4]" },
  { id: 2, title: "Modern Storage", category: "Wardrobe", imageObj: getImg("img-10"), aspect: "aspect-square" },
  { id: 3, title: "Wood Minimal Kitchen", category: "Kitchen", imageObj: getImg("img-04"), aspect: "aspect-[4/3]" },
  { id: 4, title: "White Wardrobe", category: "Bedroom", imageObj: getImg("img-03"), aspect: "aspect-[3/4]" },
  { id: 5, title: "Sleek Media Wall", category: "Living Room", imageObj: getImg("img-09"), aspect: "aspect-square" },
  { id: 6, title: "Study Enclosure", category: "Office", imageObj: getImg("img-05"), aspect: "aspect-[4/5]" },
  { id: 7, title: "Luxury Sliding", category: "Wardrobe", imageObj: getImg("img-12"), aspect: "aspect-[4/3]" },
  { id: 8, title: "Open Plan Kitchen", category: "Kitchen", imageObj: getImg("img-07"), aspect: "aspect-[3/4]" },
  { id: 9, title: "Premium Slats", category: "Living Room", imageObj: getImg("img-02"), aspect: "aspect-square" },
  { id: 10, title: "Glass Panel Wardrobe", category: "Bedroom", imageObj: getImg("img-11"), aspect: "aspect-[4/5]" },
  { id: 11, title: "Custom Storage", category: "Wardrobe", imageObj: getImg("img-08"), aspect: "aspect-[4/3]" },
  { id: 12, title: "Reception Display", category: "Commercial", imageObj: getImg("img-01"), aspect: "aspect-[3/4]" },
];

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(
        galleryItems.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  // Lightbox Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="relative w-full py-24 md:py-32 bg-black border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            04 // GALLERY SHOWCASE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Interactive Fabrication <span className="italic text-gold">Archive.</span>
          </h2>
          <p className="font-sans text-white/50 text-sm font-light max-w-lg leading-relaxed">
            Browse through our complete catalog of precision engineered aluminium and UPVC installations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 font-display text-xs tracking-widest uppercase transition-all duration-300 border ${
                  isSelected
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/60 border-white/10 hover:text-white hover:border-white/30"
                }`}
                data-hover="true"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry Layout with Framer Motion Layout Animation */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="break-inside-avoid relative group rounded-lg overflow-hidden border border-white/[0.03] bg-zinc-950 block cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
                data-hover="true"
              >
                {/* Image */}
                <ImageLoader
                  imageObj={item.imageObj}
                  alt={item.title}
                  aspectRatio={item.aspect}
                  hoverZoom={true}
                />

                {/* Dark Hover Reveal */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="self-end w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <FiZoomIn />
                  </div>
                  <div>
                    <span className="font-display text-gold text-[10px] tracking-widest uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg text-white font-light leading-tight mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/98 flex flex-col justify-between p-6"
          >
            {/* Lightbox Header */}
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="font-display text-[10px] tracking-widest text-gold uppercase">
                  {filteredItems[lightboxIndex].category}
                </span>
                <span className="font-display text-white text-base font-light">
                  {filteredItems[lightboxIndex].title}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                data-hover="true"
                aria-label="Close lightbox"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Main Image Slider Area */}
            <div className="relative max-w-5xl w-full h-[70vh] mx-auto flex items-center justify-center my-auto">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 md:-left-16 z-20 w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                data-hover="true"
                aria-label="Previous image"
              >
                <FiChevronLeft className="text-2xl" />
              </button>

              {/* Main Image Display */}
              <motion.img
                key={filteredItems[lightboxIndex].imageObj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                src={filteredItems[lightboxIndex].imageObj.fallback}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-full object-contain rounded border border-white/10 shadow-2xl select-none"
              />

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 md:-right-16 z-20 w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                data-hover="true"
                aria-label="Next image"
              >
                <FiChevronRight className="text-2xl" />
              </button>
            </div>

            {/* Lightbox Footer */}
            <div className="flex justify-between items-center w-full max-w-5xl mx-auto border-t border-white/10 pt-4 text-xs font-display text-white/40 tracking-wider">
              <span>KEYBOARD NAV: LEFT / RIGHT / ESC</span>
              <span>
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
