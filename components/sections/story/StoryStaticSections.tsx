// ── Story: Static sections ─────────────────────────────────────────────────────
import AwardBanner from "@/components/features/AwardBanner";
import FlipCard from "@/components/features/FlipCard";

// ─── Section 1: Stacked photo hero ───────────────────────────────────────────
export function StoryHeroSection() {
  const STACKED_PHOTOS = [
    { cls: "absolute w-64 h-80 -rotate-[3deg] -translate-x-64 -translate-y-12 z-10 shadow-xl overflow-hidden rounded-lg" },
    { cls: "absolute w-72 h-96 rotate-[2deg] translate-x-48 -translate-y-32 z-20 shadow-2xl overflow-hidden rounded-lg border-2 border-white" },
    { cls: "absolute w-80 h-[450px] -rotate-[1deg] -translate-x-4 translate-y-16 z-30 shadow-2xl overflow-hidden rounded-lg border-2 border-white" },
    { cls: "absolute w-56 h-72 rotate-[4deg] translate-x-80 translate-y-20 z-10 shadow-xl overflow-hidden rounded-lg" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 mb-40 text-center">
      <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-label text-[10px] tracking-[0.2em] uppercase rounded-full mb-8">
        Est. 2014 · Da Nang
      </span>
      <h1 className="font-headline italic text-6xl md:text-8xl text-primary leading-tight mb-16 clip-reveal">
        Where every dish<br />tells a story
      </h1>
      <div className="relative h-[500px] md:h-[600px] mt-12 flex items-center justify-center">
        {STACKED_PHOTOS.map((p, i) => (
          <div key={i} className={p.cls}>
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Section 2: Award Banner (reused component) ───────────────────────────────
export function StoryAwardSection() {
  return <AwardBanner />;
}

// ─── Section 3: Chef story ────────────────────────────────────────────────────
export function ChefStorySection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
      <div className="md:sticky md:top-32">
        <div className="arch-geometry overflow-hidden bg-surface-container-high aspect-[4/5] shadow-2xl">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
            alt="Chef Hang Nguyen"
          />
        </div>
      </div>
      <div className="space-y-10 py-10">
        <span className="text-secondary font-label text-xs tracking-widest uppercase block">Meet Our Chef &amp; Founder</span>
        <h2 className="font-headline italic text-5xl md:text-7xl text-primary">Hang Nguyen</h2>
        <div className="space-y-6 text-on-surface/80 leading-relaxed text-lg">
          <p>Asian Market Cuisine began as a humble dream in the heart of Da Nang's bustling food district. Chef Hang Nguyen, inspired by the seasonal rhythms of local markets and the deep wisdom of ancestral recipes, envisioned a space where traditional flavors could meet contemporary soul.</p>
          <blockquote className="pl-8 border-l-[3px] border-secondary text-primary font-headline italic text-2xl py-2">
            "The market is where the soul of the city speaks. We simply listen and bring that conversation to your table."
          </blockquote>
          <p>With over two decades of culinary exploration, Hang has curated a menu that celebrates the provenance of every ingredient. From the morning's catch at the Han River to the hand-ground spices from the highland markets.</p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Philosophy ────────────────────────────────────────────────────
const PILLARS = [
  { icon: "eco", title: "Provenance First", desc: "We trace every leaf and every grain back to its source, ensuring only the most ethical and flavorful ingredients reach our kitchen." },
  { icon: "palette", title: "Artisan Craft", desc: "Our techniques are heritage-born, refined by years of patient practice and a deep respect for culinary traditions." },
  { icon: "volunteer_activism", title: "Radical Hospitality", desc: "To us, every guest is a part of our story. We curate experiences that feel as intimate as a home-cooked meal." },
];

export function PhilosophySection() {
  return (
    <section className="bg-surface-container-low py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-secondary font-label text-[10px] tracking-[0.4em] uppercase block mb-4">Values &amp; Ethos</span>
          <h2 className="font-headline italic text-5xl md:text-6xl text-primary">Our Philosophy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-primary/10" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-primary/10" />
          {PILLARS.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-start group">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-8 border border-secondary/20 group-hover:bg-primary transition-colors duration-500">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-500 text-3xl">{icon}</span>
              </div>
              <h3 className="font-headline italic text-3xl text-primary mb-6">{title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed mb-8">{desc}</p>
              <div className="h-0.5 w-12 bg-secondary/30 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Meet the Family (FlipCards) ───────────────────────────────────
export function MeetTheFamilySection() {
  const IMG = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop";

  return (
    <section className="py-32 px-4 md:px-20 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-secondary font-label text-xs tracking-widest uppercase block mb-4">The Collective</span>
            <h2 className="font-headline italic text-5xl md:text-6xl text-primary">Meet the family</h2>
          </div>
          <div className="bg-primary text-white px-8 py-3 rounded-full font-label text-[10px] tracking-widest uppercase">Since 2014</div>
        </div>

        <div className="flex flex-col gap-6 h-auto md:h-[900px]">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-1/2">
            <FlipCard
              className="md:col-span-2 h-[400px] md:h-full"
              direction="v"
              frontContent={
                <>
                  <img alt="The whole team" className="w-full h-full object-cover" src={IMG} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                    <span className="text-white font-headline italic text-4xl">The Whole Soul of Asian Market</span>
                  </div>
                </>
              }
              backContent={
                <div className="w-full h-full bg-primary flex flex-col items-center justify-center p-12 text-center text-white">
                  <h3 className="font-headline italic text-5xl mb-6">Unified with Passion</h3>
                  <p className="max-w-2xl font-body opacity-80 leading-relaxed text-lg">Our team brings together decades of heritage, united by the common goal of preserving and elevating the flavors of the streets.</p>
                </div>
              }
            />
            <FlipCard
              className="md:col-span-1 h-[400px] md:h-full"
              direction="v"
              frontContent={
                <div className="w-full h-full bg-secondary flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-4xl mb-4">restaurant_menu</span>
                  <h4 className="font-headline italic text-2xl">Executive Direction</h4>
                  <p className="text-[10px] uppercase tracking-widest mt-4 opacity-70">Curating Heritage</p>
                </div>
              }
              backContent={<img alt="Team member" className="w-full h-full object-cover" src={IMG} />}
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-auto md:h-1/2">
            <FlipCard
              className="md:col-span-2 h-[400px] md:h-full"
              direction="v"
              frontContent={
                <div className="w-full h-full bg-surface-container-high flex flex-col items-center justify-center p-8 text-center">
                  <h4 className="font-headline italic text-3xl text-primary mb-4">The Craftsmanship</h4>
                  <p className="font-body text-on-surface-variant">Every preparation is a ritual of respect for the ingredients.</p>
                </div>
              }
              backContent={<img alt="The craft" className="w-full h-full object-cover" src={IMG} />}
            />
            <FlipCard
              className="md:col-span-3 h-[400px] md:h-full"
              direction="h"
              frontContent={<img alt="Kitchen team" className="w-full h-full object-cover" src={IMG} />}
              backContent={
                <div className="w-full h-full bg-primary-container flex flex-col items-center justify-center p-12 text-center text-white">
                  <span className="material-symbols-outlined text-5xl mb-6 text-secondary">groups</span>
                  <h4 className="font-headline italic text-4xl mb-4">A Shared Vision</h4>
                  <p className="font-body opacity-80 leading-relaxed">Collaborating to bring the vibrant soul of Da Nang's markets to life in every guest's journey.</p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
