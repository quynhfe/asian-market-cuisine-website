// ── Home: Featured Dishes Section ─────────────────────────────────────────────
import Link from "next/link";

const DISHES = [
  {
    colSpan: "md:col-span-1 lg:col-span-7",
    marginTop: "",
    image: { src: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/488141790_122126595344779385_3648164573231354063_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=Uhsr7RNCWGkQ7kNvwEzIlzg&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&oh=00_Af0Na3xmBDhkz-Hxt3yraML_xDBr5VTKur4CwHZYnVAVuA&oe=69D80B8E", alt: "Artisan Bao Buns", aspect: "aspect-[4/5] md:aspect-[16/10]" },
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
    image: { src: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/563050409_122163159524779385_4518824400655913099_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&oh=00_Af3NcPvs0PxFg-USTGdgQH7RC-aCfbDVam-dMMbSTml-rQ&oe=69D805EB", alt: "Stir-fried Phở", aspect: "aspect-[4/5]" },
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
    image: { src: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/489619983_122127953900779385_3587974036517195481_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&oh=00_Af2QmLI2DhXVA5ewLgUx5k3Jv5fN-ds8qTXoRISVg4SuFQ&oe=69D813AB", alt: "Thai Green Papaya", aspect: "aspect-[16/10]" },
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
    image: { src: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/555511814_122161259516779385_6310618814682695532_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&oh=00_Af3BgVnx7QdGY_7OsTYYEnwfjOlMQDJBhtoixJjvpkVpqA&oe=69D80C66", alt: "Pad Kra Pao", aspect: "aspect-[4/5] md:aspect-[16/10]" },
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
    <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8">
        <div className="max-w-xl">
          <span className="font-label uppercase tracking-[0.2em] text-[10px] text-secondary mb-4 block">Curated Selection</span>
          <h2 className="font-headline italic text-4xl md:text-7xl leading-tight">Taste the Market</h2>
        </div>
        <p className="text-on-surface-variant max-w-xs font-body leading-relaxed text-sm md:text-base">
          Each plate is a dialogue between tradition and the contemporary spirit of Southeast Asian street markets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16">
        {/* Dish 1 — wide, NEW badge */}
        <div className="md:col-span-1 lg:col-span-7 group">
          <div className="relative overflow-hidden arched-image aspect-[4/5] md:aspect-[16/10] bg-surface-container-low mb-6">
            <img alt="Artisan Bao Buns" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={DISHES[0].image.src} />
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
          <div className="relative overflow-hidden arched-image aspect-[4/5] bg-surface-container-low mb-6">
            <img alt="Stir-fried Phở" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={DISHES[1].image.src} />
            <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full font-label text-[10px] uppercase tracking-widest">Signature</div>
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
          <div className="relative overflow-hidden arched-image aspect-[16/10] bg-surface-container-low">
            <img alt="Thai Green Papaya" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={DISHES[2].image.src} />
          </div>
        </div>

        {/* Dish 4 — category below title */}
        <div className="md:col-span-1 lg:col-span-7 group lg:mt-12">
          <div className="relative overflow-hidden arched-image aspect-[4/5] md:aspect-[16/10] bg-surface-container-low mb-6">
            <img alt="Pad Kra Pao" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={DISHES[3].image.src} />
          </div>
          <div className="flex flex-col">
            <span className="font-label uppercase tracking-[0.2em] text-[10px] text-tertiary mb-2 block">Bangkok Classic</span>
            <h3 className="font-headline italic text-2xl md:text-3xl mb-2">Pad Kra Pao</h3>
            <p className="text-on-surface-variant text-sm max-w-md">{DISHES[3].desc}</p>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 text-center">
        <Link href="/menu" className="w-full md:w-auto inline-block bg-on-surface text-background px-12 py-5 rounded-full font-label uppercase tracking-[0.2em] text-xs hover:bg-primary transition-colors shadow-lg hover:shadow-xl group">
          View Full Menu <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
        </Link>
      </div>
    </section>
  );
}
