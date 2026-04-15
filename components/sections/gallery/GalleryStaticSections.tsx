// ── Gallery: Static sections (no client state needed) ─────────────────────────

export function GalleryHeroSection() {
  return (
    <section className="pt-48 pb-16 px-6 max-w-4xl mx-auto text-center">
      <span className="text-secondary font-label uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
        Visual Journey
      </span>
      <h1 className="font-headline text-5xl md:text-7xl italic leading-tight text-primary-container mb-6">
        Through the Lens
      </h1>
      <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
        Explore the textures, tones, and traditions that define our kitchen. From the steam of a fresh
        bao to the quiet glow of our hand-woven lanterns, every image tells a story of craft.
      </p>
    </section>
  );
}

export function GalleryCTASection() {
  return (
    <section className="py-24 px-6 text-center bg-surface-container-low">
      <h2 className="font-headline text-4xl italic text-primary-container mb-8">
        Ready to experience it yourself?
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold tracking-widest hover:scale-105 transition-transform">
          Reserve a Table
        </button>
        <button className="border border-primary text-primary px-10 py-4 rounded-full font-bold tracking-widest hover:bg-primary hover:text-white transition-all">
          View Menu
        </button>
      </div>
    </section>
  );
}

export function GalleryVideoSection() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          alt="The Art of the Wok"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-white/20 rounded-full pulse-animation" />
          <button className="relative bg-white/10 backdrop-blur-md border border-white/30 text-white w-20 h-20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
            <span className="material-symbols-outlined text-4xl ml-1" style={{ fontVariationSettings: '"FILL" 1' }}>
              play_arrow
            </span>
          </button>
        </div>
        <h2 className="font-headline italic text-4xl md:text-6xl text-white mb-4">The Art of the Wok</h2>
        <p className="text-white/80 font-body text-lg md:text-xl leading-relaxed">
          A cinematic look at the heat, the heart, and the heritage behind every plate.
        </p>
      </div>
    </section>
  );
}
