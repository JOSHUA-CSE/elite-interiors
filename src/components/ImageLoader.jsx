import { useState, useEffect, useRef } from "react";

export default function ImageLoader({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-square",
  hoverZoom = true,
  priority = false,
  imageObj = null,
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // If priority is true or image is already in cache
    if (priority && imgRef.current?.complete) {
      setLoaded(true);
      return;
    }

    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [priority, src, imageObj]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const imgClass = `w-full h-full object-cover transition-all duration-1000 ease-out ${
    loaded ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-105 blur-md"
  } ${hoverZoom ? "hover:scale-105 duration-[1200ms]" : ""}`;

  return (
    <div
      className={`relative overflow-hidden w-full ${aspectRatio} rounded-lg shadow-2xl bg-neutral-900 border border-white/[0.05] ${className}`}
    >
      {/* Premium Skeleton/Placeholder Loader */}
      <div
        className={`absolute inset-0 bg-neutral-950 flex items-center justify-center transition-opacity duration-700 ease-out z-10 ${
          loaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-8 h-8 rounded-full border border-white/20 border-t-gold animate-spin" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-pulse" />
      </div>

      {/* Main Image */}
      {imageObj ? (
        <picture>
          <source
            type="image/webp"
            srcSet={imageObj.versions.map(v => `${v.url} ${v.width}w`).join(', ')}
            sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1920px"
          />
          <img
            ref={imgRef}
            src={imageObj.fallback}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            onLoad={handleLoad}
            className={imgClass}
          />
        </picture>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          className={imgClass}
        />
      )}
    </div>
  );
}
