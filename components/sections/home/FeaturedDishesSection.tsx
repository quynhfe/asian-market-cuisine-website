// ── Home: Featured Dishes Section ─────────────────────────────────────────────
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

const DISHES = [
  {
    colSpan: "md:col-span-1 lg:col-span-7",
    marginTop: "",
    image: { src: IMAGES.artisanBaoBunsHome, alt: "Artisan Bao Buns", aspect: "aspect-[4/5] md:aspect-[16/10]" },
    badge: null,
    tag: "NEW",
    category: null,
    title: "Artisan Bao Buns",
    desc: "Steamed Bao buns with choice of grilled chicken, crispy prawn, Mexican chicken, pulled pork or marinated beef",
    layout: "row",
  },
  {
    colSpan: "md:col-span-1 lg:col-span-5",
    marginTop: "lg:mt-24",
    image: { src: IMAGES.stirFriedPho, alt: "Stir-fried Phở", aspect: "aspect-[4/5]" },
    badge: "Signature",
    tag: null,
    category: null,
    title: "Stir-fried Phở",
    desc: "Our stir-fried version takes everything you love about Phở and turns up the heat",
    layout: "simple",
  },
  {
    colSpan: "md:col-span-1 lg:col-span-5",
    marginTop: "",
    image: { src: IMAGES.thaiGreenPapaya, alt: "Thai Green Papaya", aspect: "aspect-[16/10]" },
    badge: null,
    tag: null,
    category: "Regional Heritage",
    title: "Thai green papaya",
    desc: "Thai green papaya with or without shrimp, a refreshing kick of balanced flavors.",
    layout: "text-first",
  },
  {
    colSpan: "md:col-span-1 lg:col-span-7",
    marginTop: "lg:mt-12",
    image: { src: IMAGES.padKraPao, alt: "Pad Kra Pao", aspect: "aspect-[4/5] md:aspect-[16/10]" },
    badge: null,
    tag: null,
    category: "Bangkok Classic",
    title: "Pad Kra Pao",
    desc: "Authentic Thai basil stir-fry, perfectly seasoned with garlic, chilies, and soy sauce, served over fragrant jasmine rice.",
    layout: "category-below",
  },
];

export default function FeaturedDishesSection() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-xl">
            <span className="font-label uppercase tracking-widest text-[10px] text-secondary mb-4 block">Curated Selection</span>
            <h2 className="font-headline italic text-3xl sm:text-4xl md:text-7xl leading-tight">Taste the Market</h2>
          </div>
          <p className="text-on-surface-variant max-w-xs font-body leading-relaxed text-sm md:text-base">
            Each plate is a dialogue between tradition and the contemporary spirit of Southeast Asian street markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16">
          {/* Dish 1 — wide, NEW badge */}
          <div className="md:col-span-1 lg:col-span-7 group">
            <div className="relative overflow-hidden arched-image aspect-4/5 md:aspect-16/10 bg-surface-container-low mb-6">
              <Image alt="Artisan Bao Buns" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={DISHES[0].image.src} />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline italic text-2xl md:text-3xl mb-2">Artisan Bao Buns</h3>
                <p className="text-on-surface-variant text-sm max-w-sm">{DISHES[0].desc}</p>
              </div>
              <span className="font-label text-xs tracking-widest text-secondary mt-2">NEW</span>
            </div>
          </div>

          {/* Dish 2 — Signature */}
          <div className="md:col-span-1 lg:col-span-5 group lg:mt-24">
            <div className="relative   mb-6">
              <div className="overflow-hidden arched-image aspect-4/5 bg-surface-container-low"><Image alt="Stir-fried Phở" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={DISHES[1].image.src} /></div>
              <div className="absolute top-6 md:bottom-6 left-8 md:top-auto bg-primary text-white px-4 py-2 rounded-full font-label text-[10px] uppercase tracking-widest z-10">Signature</div>
            </div>
            <h3 className="font-headline italic text-2xl md:text-3xl mb-2">Stir-fried Phở</h3>
            <p className="text-on-surface-variant text-sm">{DISHES[1].desc}</p>
          </div>

          {/* Dish 3 — text first then image */}
          <div className="md:col-span-1 lg:col-span-5 group">
            <div className="mb-6">
              <span className="font-label uppercase tracking-[0.2em] text-[10px] text-tertiary mb-4 block">Regional Heritage</span>
              <h3 className="font-headline italic text-3xl md:text-5xl mb-6">Thai green papaya</h3>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8 max-md:max-w-xs max-w-md">{DISHES[2].desc}</p>
              <a className="inline-flex items-center gap-4 font-label uppercase tracking-[0.2em] text-xs text-on-surface group" href="#">
                Discover ingredients
                <span className="w-8 h-px bg-on-surface group-hover:w-12 transition-all duration-300"></span>
              </a>
            </div>
            <div className="relative overflow-hidden arched-image aspect-4/5 md:aspect-16/10 bg-surface-container-low">
              <Image alt="Thai Green Papaya" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={DISHES[2].image.src} />
            </div>
          </div>

          {/* Dish 4 — category below title */}
          <div className="md:col-span-1 lg:col-span-7 group lg:mt-12">
            <div className="relative overflow-hidden arched-image aspect-4/5 md:aspect-16/10 bg-surface-container-low mb-6">
              <Image alt="Pad Kra Pao" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={DISHES[3].image.src} />
            </div>
            <div className="flex flex-col">
              <span className="font-label uppercase tracking-[0.2em] text-[10px] text-tertiary mb-2 block">Bangkok Classic</span>
              <h3 className="font-headline italic text-2xl md:text-3xl mb-2">Pad Kra Pao</h3>
              <p className="text-on-surface-variant text-sm max-w-md">{DISHES[3].desc}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <Link href="/menu" className="w-full md:w-auto inline-block bg-on-surface text-background px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-label uppercase tracking-[0.2em] text-[11px] sm:text-xs hover:bg-primary transition-colors shadow-lg hover:shadow-xl group">
            View Full Menu <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
