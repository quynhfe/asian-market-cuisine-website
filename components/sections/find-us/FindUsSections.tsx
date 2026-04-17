import { digitalPortalLinks } from "@/constants/data";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface FindUsSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function FindUsHeroSection({ dictionary }: FindUsSectionProps) {
  const findUs = dictionary.findUs;

  return (
    <section className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-12 mb-12 md:mb-24">
      <div className="w-full md:w-2/3">
        <p className="font-label uppercase tracking-[0.2em] text-[10px] md:text-xs text-secondary mb-4">{findUs.heroOverline}</p>
        <h1 className="font-headline italic text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight text-on-background max-w-3xl">
          {findUs.heroTitle} <br className="hidden md:block" />{findUs.heroCity}
        </h1>
      </div>
      <div className="w-full md:w-1/3 pb-4">
        <p className="text-on-surface-variant leading-relaxed text-sm md:text-base lg:text-lg italic">{findUs.heroDesc}</p>
      </div>
    </section>
  );
}

export function FindUsBentoSection({ dictionary }: FindUsSectionProps) {
  const findUs = dictionary.findUs;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-6">
      <div className="md:col-span-2 relative group overflow-hidden rounded-lg shadow-sm h-[260px] sm:h-[320px] md:h-auto md:min-h-[380px]">
        <div className="absolute inset-0 p-3 md:p-4">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              alt="Location map of Asian Market Cuisine in Da Nang"
              className="object-cover"
              src="https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/11/04/1762220979471_anh_man_hinh_2025_11_04_luc_08-36-41.png"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 h-full">
        <div className="bg-surface-container-low p-6 md:p-8 lg:p-10 rounded-lg flex flex-col justify-between flex-1">
          <div>
            <span className="material-symbols-outlined text-secondary mb-4 md:mb-6 block" style={{ fontVariationSettings: '"FILL" 0' }}>explore</span>
            <h4 className="font-label uppercase tracking-widest text-xs mb-3 md:mb-4 text-on-surface-variant">{findUs.arrivalTitle}</h4>
            <p className="font-headline italic text-xl md:text-2xl lg:text-3xl leading-snug">{findUs.arrivalText}</p>
          </div>
          <p className="mt-6 md:mt-8 lg:mt-12 text-sm text-on-surface-variant">
            {findUs.address[0]},<br />{findUs.address[1]},<br />{findUs.address[2]}
          </p>
        </div>

        <div className="bg-surface-container-high p-6 md:p-8 lg:p-10 rounded-lg flex-1">
          <span className="material-symbols-outlined text-tertiary-container mb-4 md:mb-6 block" style={{ fontVariationSettings: '"FILL" 0' }}>schedule</span>
          <h4 className="font-label uppercase tracking-widest text-xs mb-3 md:mb-4 text-on-surface-variant">{findUs.serviceTitle}</h4>
          <ul className="space-y-4">
            <li className="flex justify-between items-start gap-4">
              <span className="font-label uppercase tracking-tighter text-[10px] opacity-60 mt-1">Lịch</span>
              <span className="font-headline italic text-base md:text-lg lg:text-xl text-right">{findUs.serviceValue}</span>
            </li>
          </ul>
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-outline-variant/10">
            <h4 className="font-label uppercase tracking-widest text-xs mb-3 md:mb-4 text-on-surface-variant">{findUs.contactTitle}</h4>
            <p className="font-headline italic text-lg md:text-xl">{findUs.contactValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FindUsDigitalPortalSection({ dictionary }: FindUsSectionProps) {
  const findUs = dictionary.findUs;

  return (
    <div className="w-full bg-[#efc36a] p-6 md:p-8 lg:p-12 rounded-lg text-on-secondary-fixed-variant mt-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
        <h4 className="font-label uppercase tracking-[0.2em] text-xs font-bold shrink-0">{findUs.digitalPortal}</h4>
        <div className="flex flex-wrap justify-center gap-6 md:gap-14 lg:gap-20">
          {digitalPortalLinks.map((item) => (
            <a key={item.name} href={item.link} className="flex flex-col items-center gap-3 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-secondary-fixed-variant rounded-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-on-secondary-fixed-variant/30 flex items-center justify-center group-hover:bg-on-secondary-fixed-variant group-hover:text-[#efc36a] transition-colors duration-300">
                <span className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: '"FILL" 0' }}>{item.icon}</span>
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest font-bold">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FindUsAtmosphereSection({ dictionary }: FindUsSectionProps) {
  const findUs = dictionary.findUs;

  return (
    <section className="mt-16 md:mt-24 lg:mt-40 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
      <div className="relative pt-10 md:pt-12 lg:pt-20 order-2 md:order-1">
        <div className="overflow-hidden aspect-[4/5] bg-surface-container rounded-t-[50%]">
          <Image alt="architectural shot of a contemporary Asian restaurant interior" className="w-full h-full object-cover" src={IMAGES.restaurantViewFindUs} />
        </div>
        <div className="absolute -top-4 -right-2 md:-top-6 md:-right-4 lg:-top-10 lg:-right-10">
          <p className="font-headline italic text-2xl md:text-3xl lg:text-4xl text-secondary max-w-[130px] md:max-w-[150px] lg:max-w-[200px] leading-tight">
            {findUs.atmosphereTitle}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-xl order-1 md:order-2">
        <h3 className="font-label uppercase tracking-[0.2em] text-[10px] md:text-xs text-on-surface-variant mb-4 md:mb-6">{findUs.atmosphereTag}</h3>
        <div className="space-y-5 md:space-y-6">
          <p className="text-on-background text-base md:text-lg lg:text-xl leading-relaxed">{findUs.atmosphereDesc1}</p>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed italic">{findUs.atmosphereDesc2}</p>
        </div>
        <div className="h-px w-20 bg-secondary opacity-30 mt-8" />
      </div>
    </section>
  );
}

export function FindUsCtaSection({ dictionary }: FindUsSectionProps) {
  const findUs = dictionary.findUs;

  return (
    <section className="mt-12 md:mt-16 lg:mt-24 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
      <button className="w-full sm:w-auto bg-primary-container text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-label uppercase tracking-[0.2em] text-[10px] md:text-sm transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container">
        {findUs.directions}
      </button>
      <button className="w-full sm:w-auto border border-outline-variant/30 text-on-background px-8 md:px-12 py-4 md:py-5 rounded-full font-label uppercase tracking-[0.2em] text-[10px] md:text-sm hover:bg-surface-container transition-all duration-300 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-outline-variant">
        {findUs.grabFood}
      </button>
    </section>
  );
}
