// ── Home: Chef Teaser Section ─────────────────────────────────────────────────
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

export default function ChefTeaserSection() {
  return (
    <section className="bg-surface-container-low py-16 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Chef photo */}
        <div className="w-full lg:w-1/2">
          <div className="relative max-w-md mx-auto">
            <div className="arched-image overflow-hidden aspect-3/4 bg-surface-container-high editorial-shadow">
              <Image
                alt="Chef Hang Nguyen"
                className="w-full h-full object-cover"
                src={IMAGES.chefHang1}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10">
              <div className="bg-[#fef9f1] p-8 md:p-12 arched-image border border-surface-variant/20 editorial-shadow">
                <span className="font-headline italic text-2xl md:text-4xl text-secondary">H.N.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chef bio */}
        <div className="w-full lg:w-1/2">
          <span className="font-label uppercase tracking-[0.2em] text-[10px] text-on-surface-variant mb-6 block">Meet Our Chef &amp; Founder</span>
          <h2 className="font-headline italic text-3xl sm:text-4xl md:text-6xl mb-8">Hang Nguyen</h2>
          <blockquote className="font-headline italic text-xl md:text-2xl text-on-surface-variant mb-10 leading-relaxed border-l-2 border-secondary pl-8">
            "Cooking is not just about feeding the body; it is a way to preserve the soul of the market I grew up in."
          </blockquote>
          <p className="text-on-surface-variant leading-loose mb-10 font-body text-sm md:text-base">
            Hang's journey began in the bustling alleyways of Da Nang's local markets. After years of refinement, she founded Asian Market Cuisine to bring the alchemy of street flavors into a serene, meditative dining experience.
          </p>
          <Link href="/story" className="inline-flex items-center gap-4 font-label uppercase tracking-[0.2em] text-xs text-secondary group">
            Read her full story
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
