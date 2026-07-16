import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles are imported in index.css or here
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Working with Elite Fabricators was an absolute masterclass in architectural engineering. From the structural glazing discussions to the final aluminium installation, they exceeded every expectation. Our modern villa feels completely open.",
    author: "Sarah Jenkins",
    role: "Private Villa Owner",
    location: "Bel Air, Los Angeles",
  },
  {
    quote:
      "The team redesigned our corporate office headquarters in Berlin. The architectural layouts, concealed profile lightings, and bespoke workstations have completely energized our workplace. Outstanding execution.",
    author: "Marcus Thorne",
    role: "Managing Director, Monolith Group",
    location: "Berlin, Germany",
  },
  {
    quote:
      "Elite Fabricators brought our dream modern apartment to life. Their dedication to premium UPVC profiles, acoustic glass, and custom sliding doors is unmatched. A team that truly understands international quality standards.",
    author: "Elena Rostova",
    role: "Penthouse Resident",
    location: "SoHo, New York",
  },
];

import imageData from "../data/images.json";
import ImageLoader from "./ImageLoader";

const bgImage = imageData.find(img => img.id === "img-14"); // Soft premium wardrobe image

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-black border-t border-white/[0.03] overflow-hidden">
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <ImageLoader 
            imageObj={bgImage} 
            priority={false} 
            hoverZoom={false}
            className="w-full h-full object-cover rounded-none"
            aspectRatio=""
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            08 // CLIENT REVIEWS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Client Testimonials.
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative" data-hover="true">
          {/* Huge quotation mark overlay */}
          <div className="absolute -top-16 left-0 font-display text-[150px] leading-none text-gold/15 select-none pointer-events-none font-serif">
            “
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full pb-16"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="flex flex-col items-start pt-6">
                <p className="font-sans text-lg md:text-2xl font-light text-white/90 leading-relaxed italic mb-8">
                  {t.quote}
                </p>
                <div className="flex flex-col">
                  <span className="font-display text-base font-semibold text-gold tracking-wide">
                    {t.author}
                  </span>
                  <span className="font-sans text-xs text-white/40 mt-1">
                    {t.role} — {t.location}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
