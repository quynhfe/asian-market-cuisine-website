import StarRating from "@/components/ui/StarRating";

// ─── ReviewCard ───────────────────────────────────────────────────────────────
interface ReviewCardProps {
  quote: string;
  author: string;
  stars?: number;
  className?: string;
}

export default function ReviewCard({ quote, author, stars = 5, className = "" }: ReviewCardProps) {
  return (
    <div className={`bg-surface-container-low p-6 sm:p-8 md:p-10 rounded-xl min-w-[260px] sm:min-w-[300px] max-w-[400px] editorial-shadow ${className}`}>
      <StarRating count={stars} className="text-secondary mb-4" />
      <p className="font-body text-sm leading-relaxed mb-6 italic opacity-80">"{quote}"</p>
      <div className="font-label uppercase tracking-widest text-[10px] text-on-surface">— {author}</div>
    </div>
  );
}
