// ── Menu: Static Hero Section ─────────────────────────────────────────────────
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface MenuHeroSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function MenuHeroSection({ dictionary }: MenuHeroSectionProps) {
  return (
    <section className="pt-32 md:pt-44 pb-12 md:pb-16 w-full">
      <div className="max-w-screen-2xl mx-auto px-6 text-center">
        <h1 className="font-headline italic text-5xl md:text-7xl lg:text-8xl text-on-background leading-tight mb-4">
          {dictionary.menu.hero.title}
        </h1>
        <p className="font-headline italic text-base md:text-lg text-secondary mx-auto leading-relaxed px-4 max-w-3xl">
          &ldquo;{dictionary.menu.hero.quote}&rdquo;
        </p>
      </div>
    </section>
  );
}
