// ── Home: Reviews Marquee Section ─────────────────────────────────────────────
import ReviewCard from "@/components/features/ReviewCard";
import { reviews, socialMentions } from "@/constants/data";

export default function ReviewsSection() {
  return (
    <>
      {/* Guest Reviews */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="text-center mb-12 md:mb-16 px-6">
          <span className="font-label uppercase tracking-[0.2em] text-[10px] text-on-surface-variant mb-4 block">The Guest Journal</span>
          <h2 className="font-headline italic text-3xl md:text-5xl">Whispers from the Table</h2>
        </div>
        <div className="marquee">
          <div className="marquee-content py-8">
            {reviews.map((r) => (
              <ReviewCard key={r.author} quote={r.quote} author={r.author} />
            ))}
          </div>
        </div>
      </section>

      {/* As Seen By */}
      <section className="py-12 md:py-16 border-y border-surface-variant/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 grayscale opacity-50">
          <span className="font-label uppercase tracking-[0.2em] text-[10px] text-on-surface-variant whitespace-nowrap">As seen by our guests</span>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
            {socialMentions.map((handle) => (
              <span key={handle} className="font-headline italic text-xl md:text-2xl text-on-surface">{handle}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
