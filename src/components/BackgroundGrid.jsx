export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Structural Vertical Grid Lines */}
      <div className="absolute inset-0 flex justify-between px-4 md:px-16 lg:px-24">
        <div className="w-[1px] h-full bg-white/[0.02]" />
        <div className="w-[1px] h-full bg-white/[0.02]" />
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block" />
        <div className="w-[1px] h-full bg-white/[0.02] hidden lg:block" />
        <div className="w-[1px] h-full bg-white/[0.02]" />
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Elegant grid background pattern overlay (subtle) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.3]" />
    </div>
  );
}
