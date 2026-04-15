// ── Find Us: Static Sections ──────────────────────────────────────────────────
import { digitalPortalLinks } from "@/constants/data";

export function FindUsHeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-12 mb-16 md:mb-24">
      <div className="w-full md:w-2/3">
        <p className="font-label uppercase tracking-[0.2em] text-[10px] md:text-xs text-secondary mb-4">
          Location &amp; Presence
        </p>
        <h1 className="font-headline italic text-5xl md:text-8xl leading-tight text-on-background max-w-3xl">
          Visit Us in <br className="hidden md:block" />Đà Nẵng
        </h1>
      </div>
      <div className="w-full md:w-1/3 pb-4">
        <p className="text-on-surface-variant leading-relaxed text-base md:text-lg italic">
          Nestled in the serene shadow of the Marble Mountains, our sanctuary offers a curated culinary pause amidst the ancient coastal limestone.
        </p>
      </div>
    </section>
  );
}

export function FindUsBentoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-6">
      {/* Map */}
      <div className="md:col-span-2 relative group overflow-hidden rounded-lg shadow-sm h-full min-h-[400px] md:min-h-0">
        <div className="absolute inset-0 p-3 md:p-4">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              alt="Location map of Asian Market Cuisine in Da Nang"
              className="w-full h-full object-cover"
              src="https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/11/04/1762220979471_anh_man_hinh_2025_11_04_luc_08-36-41.png"
            />
          </div>
        </div>
      </div>

      {/* Info stack */}
      <div className="flex flex-col gap-6 h-full">
        <div className="bg-surface-container-low p-8 md:p-10 rounded-lg flex flex-col justify-between flex-1">
          <div>
            <span className="material-symbols-outlined text-secondary mb-6 block" style={{ fontVariationSettings: '"FILL" 0' }}>explore</span>
            <h4 className="font-label uppercase tracking-[0.1em] text-xs mb-4 text-on-surface-variant">Arrival</h4>
            <p className="font-headline italic text-2xl md:text-3xl leading-snug">
              At the Foot of the <br />Spirit Mountains
            </p>
          </div>
          <p className="mt-8 md:mt-12 text-sm text-on-surface-variant">
            49 Tran Van Dan Street,<br />Ngu Hanh Son District,<br />Danang, Vietnam
          </p>
        </div>

        <div className="bg-surface-container-high p-8 md:p-10 rounded-lg flex-1">
          <span className="material-symbols-outlined text-tertiary-container mb-6 block" style={{ fontVariationSettings: '"FILL" 0' }}>schedule</span>
          <h4 className="font-label uppercase tracking-[0.1em] text-xs mb-4 text-on-surface-variant">Service Hours</h4>
          <ul className="space-y-4">
            <li className="flex justify-between items-start gap-4">
              <span className="font-label uppercase tracking-tighter text-[10px] opacity-60 mt-1">Schedule</span>
              <span className="font-headline italic text-xl text-right">Mon–Sat: 11:00 AM – 9:00 PM (Closed Sundays)</span>
            </li>
          </ul>
          <div className="mt-8 pt-6 border-t border-outline-variant/10">
            <h4 className="font-label uppercase tracking-[0.1em] text-xs mb-4 text-on-surface-variant">Dialogue</h4>
            <p className="font-headline italic text-xl">0899856547</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FindUsDigitalPortalSection() {
  return (
    <div className="w-full bg-[#efc36a] p-8 md:p-12 rounded-lg text-on-secondary-fixed-variant mt-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        <h4 className="font-label uppercase tracking-[0.2em] text-xs font-bold shrink-0">Digital Portal</h4>
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 lg:gap-20">
          {digitalPortalLinks.map((item) => (
            <a key={item.name} href={item.link} className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-full border border-on-secondary-fixed-variant/30 flex items-center justify-center group-hover:bg-on-secondary-fixed-variant group-hover:text-[#efc36a] transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 0' }}>{item.icon}</span>
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest font-bold">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FindUsAtmosphereSection() {
  return (
    <section className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="relative pt-12 md:pt-20 order-2 md:order-1">
        <div className="arch-geometry overflow-hidden aspect-[4/5] bg-surface-container">
          <img
            alt="architectural shot of a contemporary Asian restaurant interior"
            className="w-full h-full object-cover"
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/487750255_122125996838779385_1783113974681296458_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&oh=00_Af2OdbGANp9TbKIhJf1ULBG1wu04p8mTfrWeJaDOYRFkqQ&oe=69D81437"
          />
        </div>
        <div className="absolute -top-6 -right-4 md:-top-10 md:-right-10">
          <p className="font-headline italic text-3xl md:text-4xl text-secondary max-w-[150px] md:max-w-[200px] leading-tight">
            A Sanctuary of Senses.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-xl order-1 md:order-2">
        <h3 className="font-label uppercase tracking-[0.2em] text-[10px] md:text-xs text-on-surface-variant mb-6">The Atmosphere</h3>
        <div className="space-y-6">
          <p className="text-on-background text-lg md:text-xl leading-relaxed">
            Designed as a modern interpretation of a local market stall, our space blends high-end architectural lines with the raw materials of the earth—clay, linen, and teak.
          </p>
          <p className="text-on-surface-variant text-base leading-relaxed italic">
            Every little detail you see at Asian Market, from the chopstick holders, the gentle green of the plants, to the soft light at each table, is chosen with love. We truly believe that warmth lives in the small things.
          </p>
        </div>
        <div className="h-px w-20 bg-secondary opacity-30 mt-8" />
      </div>
    </section>
  );
}

export function FindUsCtaSection() {
  return (
    <section className="mt-16 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
      <button className="w-full sm:w-auto bg-primary-container text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-label uppercase tracking-[0.2em] text-[10px] md:text-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(48,70,167,0.2)] hover:-translate-y-1 active:scale-95">
        Get Directions
      </button>
      <button className="w-full sm:w-auto border border-outline-variant/30 text-on-background px-8 md:px-12 py-4 md:py-5 rounded-full font-label uppercase tracking-[0.2em] text-[10px] md:text-sm hover:bg-surface-container transition-all duration-500 active:scale-95">
        Order on GrabFood
      </button>
    </section>
  );
}
