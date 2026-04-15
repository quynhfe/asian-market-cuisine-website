// ─── StarRating ───────────────────────────────────────────────────────────────
// Renders N filled stars using Material Symbols
interface StarRatingProps {
  count?: number;
  className?: string;
}

export default function StarRating({ count = 5, className = "text-secondary" }: StarRatingProps) {
  return (
    <div className={`flex ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-sm"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          star
        </span>
      ))}
    </div>
  );
}
