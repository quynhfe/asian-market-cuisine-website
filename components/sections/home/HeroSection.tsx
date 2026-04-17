import Link from "next/link";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface HeroSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function HeroSection({ locale, dictionary }: HeroSectionProps) {
  return (
    <main className="h-screen flex flex-col pt-16 md:pt-20 overflow-hidden relative">
      {/* HERO */}
      <section className="flex-1 relative overflow-hidden">
        {/* Split Background Layer */}
        <div className="absolute inset-0 hidden lg:flex z-0 pointer-events-none">
          <div className="w-[48%] h-full bg-background" />
          <div className="w-[52%] h-full bg-surface-container-low/30" />
        </div>

        <div className="h-full max-w-screen-2xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[48%_1fr]">
          {/* Mobile Background Slider */}
          <div className="lg:hidden absolute inset-0 z-0">
            <div className="mobile-slider-item bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero1.src})` }}></div>
            <div className="mobile-slider-item bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero2.src})` }}></div>
            <div className="mobile-slider-item bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero3.src})` }}></div>
            <div className="absolute inset-0 bg-black/40 lg:hidden"></div>
          </div>

          {/* Left Content */}
          <div className="flex flex-col justify-center px-8 md:px-12 lg:pr-8 relative z-30 text-center lg:text-left h-full">
            <div className="max-w-2xl lg:max-w-[85%] mx-auto lg:mx-0 w-full">
              <div className="mask-reveal mb-2 lg:mb-6">
                <span className="mask-reveal-inner font-label uppercase tracking-[0.4em] text-[8px] md:text-[10px] text-white lg:text-primary/60">{dictionary.home.hero.since}</span>
              </div>
              <h1 className="font-headline italic text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] text-white lg:text-primary leading-[0.95] mb-8 lg:mb-12">
                <span className="mask-reveal block"><span className="mask-reveal-inner reveal-delay-1 tracking-wide">Asian</span></span>
                <span className="mask-reveal block lg:ml-[0.15em]"><span className="mask-reveal-inner reveal-delay-2 tracking-wide">Market</span></span>
                <span className="mask-reveal block lg:ml-[0.3em]"><span className="mask-reveal-inner reveal-delay-3 tracking-wide">Cuisine</span></span>
              </h1>
              <div className="mask-reveal mb-10 lg:mb-14">
                <p className="mask-reveal-inner reveal-delay-3 font-body text-white/90 lg:text-on-surface-variant text-sm md:text-base lg:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0 lg:max-w-xl">
                  {dictionary.home.hero.description}
                </p>
              </div>
              <div className=" flex flex-col items-center lg:items-start gap-8">
                <div className="mask-reveal-inner reveal-delay-3">
                  <Link href={localizeHref("/menu", locale)} className="bg-white lg:bg-primary text-primary lg:text-white px-8 sm:px-12 py-4 rounded-full font-label uppercase tracking-widest text-[10px] sm:text-xs hover:scale-105 transition-all shadow-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:focus-visible:outline-primary">
                    {dictionary.home.hero.cta}
                  </Link>
                </div>
                <div className="flex lg:hidden gap-4">
                  {["dot-1", "dot-2", "dot-3"].map((cls) => (
                    <div key={cls} className={`w-2 h-2 rounded-full bg-white ${cls}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Gallery */}
          <div className="hidden lg:block relative h-full overflow-hidden z-10">
            <div className="scroll-mask w-full h-full p-4 lg:p-8">
              <div className="grid grid-cols-2 gap-4 lg:gap-8 h-full">
                <div className="flex flex-col gap-4 lg:gap-8 animate-scroll-up">
                  <Image preload alt="Food Gallery" className="w-full aspect-3/4 object-cover rounded-2xl lg:rounded-3xl" src={IMAGES.gallery1} />
                  <Image alt="Food Gallery" className="w-full aspect-3/4 object-cover rounded-2xl lg:rounded-3xl" src={IMAGES.gallery2} />
                  <Image alt="Food Gallery" className="w-full aspect-3/4 object-cover rounded-2xl lg:rounded-3xl" src={IMAGES.gallery3} />
                </div>
                <div className="flex flex-col gap-4 lg:gap-8 animate-scroll-down">
                  <Image alt="Food Gallery" className="w-full aspect-3/4 object-cover rounded-2xl lg:rounded-3xl" src={IMAGES.gallery4} />
                  <Image alt="Food Gallery" className="w-full aspect-3/4 object-cover rounded-2xl lg:rounded-3xl" src={IMAGES.gallery5} />
                  <Image alt="Food Gallery" className="w-full aspect-3/4 object-cover rounded-2xl lg:rounded-3xl" src={IMAGES.gallery6} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Award Marquee Banner */}
      <section className="gold-gradient-banner h-14 md:h-20 shrink-0 flex items-center overflow-hidden border-t border-black/5 relative z-20">
        <div className="max-w-screen-2xl mx-auto w-full">
          <div className="marquee">
            {[0, 1].map((i) => (
              <div key={i} className="marquee-content items-center">
                <div className="flex items-center gap-4 px-8 whitespace-nowrap">
                  <span className="material-symbols-outlined text-on-secondary-container animate-bounce">emoji_events</span>
                  <span className="font-label uppercase tracking-[0.15em] text-[10px] md:text-xs text-on-secondary-container font-bold">{dictionary.home.hero.awardTitle}</span>
                </div>
                <div className="flex items-center gap-2 px-8">
                  <span className="font-label uppercase tracking-widest text-[10px] md:text-xs text-on-secondary-container">{dictionary.home.hero.starRating}</span>
                  <div className="flex text-secondary">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 px-8">
                  <span className="material-symbols-outlined text-on-secondary-container text-lg">verified</span>
                  <span className="font-label uppercase tracking-widest text-[10px] md:text-xs text-on-secondary-container opacity-80">{dictionary.home.hero.certified}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
