import { IMAGES } from "@/lib/images";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface GallerySectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function GalleryHeroSection({ dictionary }: GallerySectionProps) {
  const gallery = dictionary.gallery;

  return (
    <section className="pt-28 md:pt-40 lg:pt-48 pb-10 md:pb-16 w-full">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 text-center">
        <span className="text-secondary font-label uppercase tracking-[0.2em] text-xs font-bold mb-4 block">{gallery.heroOverline}</span>
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl italic leading-tight text-primary-container mb-4 md:mb-6">{gallery.heroTitle}</h1>
        <p className="text-base md:text-lg text-on-surface-variant max-w-4xl mx-auto leading-relaxed px-2">{gallery.heroDesc}</p>
      </div>
    </section>
  );
}

export function GalleryCTASection({ dictionary }: GallerySectionProps) {
  const gallery = dictionary.gallery;

  return (
    <section className="py-12 md:py-24 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl italic text-primary-container mb-6 md:mb-8">{gallery.ctaTitle}</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold tracking-widest hover:scale-105 transition-transform cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{gallery.ctaBook}</button>
          <button className="border border-primary text-primary px-10 py-4 rounded-full font-bold tracking-widest hover:bg-primary hover:text-white transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{gallery.ctaMenu}</button>
        </div>
      </div>
    </section>
  );
}

export function GalleryVideoSection({ dictionary }: GallerySectionProps) {
  const gallery = dictionary.gallery;

  return (
    <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image alt={gallery.videoTitle} className="w-full h-full object-cover" src={IMAGES.previewVideo} />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 w-full flex justify-center">
        <div className="text-center max-w-3xl">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-white/20 rounded-full pulse-animation" />
            <button aria-label="Play video" className="relative bg-white/10 backdrop-blur-md border border-white/30 text-white w-20 h-20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <span className="material-symbols-outlined text-4xl ml-1" aria-hidden="true" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
            </button>
          </div>
          <h2 className="font-headline italic text-4xl md:text-6xl text-white mb-4">{gallery.videoTitle}</h2>
          <p className="text-white/80 font-body text-lg md:text-xl leading-relaxed">{gallery.videoDesc}</p>
        </div>
      </div>
    </section>
  );
}
