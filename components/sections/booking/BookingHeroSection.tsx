// ── Booking: Static Hero Section ──────────────────────────────────────────────
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface BookingHeroSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function BookingHeroSection({ dictionary }: BookingHeroSectionProps) {
  return (
    <div className="max-w-xl">
      <span className="text-secondary font-label uppercase tracking-[0.1em] text-xs md:text-sm block mb-3 md:mb-4">{dictionary.booking.hero.status}</span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-headline italic leading-[1.1] text-primary mb-5 md:mb-8">
        {dictionary.booking.hero.title}
      </h1>
      <p className="text-base md:text-lg text-on-surface/80 leading-relaxed max-w-md">
        {dictionary.booking.hero.description}
      </p>
    </div>
  );
}
