// ── Home: Reviews Marquee Section ─────────────────────────────────────────────
import ReviewCard from "@/components/features/ReviewCard";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface ReviewsSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function ReviewsSection({ dictionary }: ReviewsSectionProps) {
  const reviews = dictionary.home.reviews;

  return (
    <>
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-label uppercase tracking-[0.2em] text-[10px] text-on-surface-variant mb-4 block">{reviews.overline}</span>
            <h2 className="font-headline italic text-3xl md:text-5xl">{reviews.title}</h2>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="marquee">
            <div className="marquee-content py-8">
              {reviews.items.map((r) => (
                <ReviewCard key={r.author} quote={r.quote} author={r.author} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-y border-surface-variant/10">
        <div className="max-w-screen-2xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 grayscale opacity-50">
          <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant whitespace-nowrap">{reviews.seenBy}</span>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
            {reviews.mentions.map((handle) => (
              <span key={handle} className="font-headline italic text-xl md:text-2xl text-on-surface">{handle}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
