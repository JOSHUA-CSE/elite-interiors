import { FiInstagram } from "react-icons/fi";
import ImageLoader from "./ImageLoader";

const instaImages = [
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80",
];

export default function InstagramShowcase() {
  // Combine list twice for seamless wrapping scrolling
  const combinedImages = [...instaImages, ...instaImages];

  return (
    <section className="relative w-full py-16 bg-black border-t border-white/[0.03] overflow-hidden">
      
      {/* Small Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8 flex justify-between items-end">
        <div className="flex flex-col">
          <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            09 // DESIGN DETAILS
          </span>
          <h2 className="font-display text-xl md:text-2xl font-light text-white">
            Curated Styling.
          </h2>
        </div>
      </div>

      {/* Infinite Horizontal Scroller */}
      <div className="relative w-full overflow-hidden flex select-none">
        {/* Soft edge blur overlays to give luxury cinema look */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex w-[200%] gap-4 animate-infinite-scroll hover:[animation-play-state:paused] py-4">
          {combinedImages.map((src, index) => (
            <div
              key={index}
              className="w-[200px] sm:w-[260px] md:w-[320px] shrink-0"
              data-hover="true"
            >
              <ImageLoader
                src={src}
                alt={`Instagram detail showcase ${index}`}
                aspectRatio="aspect-square"
                hoverZoom={true}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
