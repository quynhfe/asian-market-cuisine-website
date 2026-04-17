// ── Home: Featured Dishes Section ─────────────────────────────────────────────
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface FeaturedDishesSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function FeaturedDishesSection({ locale, dictionary }: FeaturedDishesSectionProps) {
  const featured = dictionary.home.featured;

  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-xl">
            <span className="font-label uppercase tracking-widest text-[10px] text-secondary mb-4 block">{featured.overline}</span>
            <h2 className="font-headline italic text-3xl sm:text-4xl md:text-7xl leading-tight">{featured.title}</h2>
          </div>
          <p className="text-on-surface-variant max-w-xs font-body leading-relaxed text-sm md:text-base">{featured.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16">
          <div className="md:col-span-1 lg:col-span-7 group">
            <div className="relative overflow-hidden arched-image aspect-4/5 md:aspect-16/10 bg-surface-container-low mb-6">
              <Image alt={featured.dishes.artisanBao.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={IMAGES.artisanBaoBunsHome} />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline italic text-2xl md:text-3xl mb-2">{featured.dishes.artisanBao.title}</h3>
                <p className="text-on-surface-variant text-sm max-w-sm">{featured.dishes.artisanBao.desc}</p>
              </div>
              <span className="font-label text-xs tracking-widest text-secondary mt-2">{featured.dishes.artisanBao.tag}</span>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-5 group lg:mt-24">
            <div className="relative mb-6">
              <div className="overflow-hidden arched-image aspect-4/5 bg-surface-container-low"><Image alt={featured.dishes.stirFriedPho.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={IMAGES.stirFriedPho} /></div>
              <div className="absolute top-6 md:bottom-6 left-8 md:top-auto bg-primary text-white px-4 py-2 rounded-full font-label text-[10px] uppercase tracking-widest z-10">{featured.dishes.stirFriedPho.badge}</div>
            </div>
            <h3 className="font-headline italic text-2xl md:text-3xl mb-2">{featured.dishes.stirFriedPho.title}</h3>
            <p className="text-on-surface-variant text-sm">{featured.dishes.stirFriedPho.desc}</p>
          </div>

          <div className="md:col-span-1 lg:col-span-5 group">
            <div className="mb-6">
              <span className="font-label uppercase tracking-[0.2em] text-[10px] text-tertiary mb-4 block">{featured.dishes.thaiPapaya.category}</span>
              <h3 className="font-headline italic text-3xl md:text-5xl mb-6">{featured.dishes.thaiPapaya.title}</h3>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8 max-md:max-w-xs max-w-md">{featured.dishes.thaiPapaya.desc}</p>
              <a className="inline-flex items-center gap-4 font-label uppercase tracking-[0.2em] text-xs text-on-surface group" href="#">
                {featured.dishes.thaiPapaya.discover}
                <span className="w-8 h-px bg-on-surface group-hover:w-12 transition-all duration-300"></span>
              </a>
            </div>
            <div className="relative overflow-hidden arched-image aspect-4/5 md:aspect-16/10 bg-surface-container-low">
              <Image alt={featured.dishes.thaiPapaya.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={IMAGES.thaiGreenPapaya} />
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-7 group lg:mt-12">
            <div className="relative overflow-hidden arched-image aspect-4/5 md:aspect-16/10 bg-surface-container-low mb-6">
              <Image alt={featured.dishes.padKraPao.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={IMAGES.padKraPao} />
            </div>
            <div className="flex flex-col">
              <span className="font-label uppercase tracking-[0.2em] text-[10px] text-tertiary mb-2 block">{featured.dishes.padKraPao.category}</span>
              <h3 className="font-headline italic text-2xl md:text-3xl mb-2">{featured.dishes.padKraPao.title}</h3>
              <p className="text-on-surface-variant text-sm max-w-md">{featured.dishes.padKraPao.desc}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <Link href={localizeHref("/menu", locale)} className="w-full md:w-auto inline-block bg-on-surface text-background px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-label uppercase tracking-[0.2em] text-[11px] sm:text-xs hover:bg-primary transition-colors shadow-lg hover:shadow-xl group">
            {featured.cta} <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
