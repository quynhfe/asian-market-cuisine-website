// Eyebrow label + large headline combo — used on every page hero/section
interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  as?: "h1" | "h2";
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = "",
  as: Tag = "h1",
}: PageHeroProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <span className="font-label uppercase tracking-[0.2em] text-xs text-secondary mb-4 block">
        {eyebrow}
      </span>
      <Tag className="font-headline italic text-5xl md:text-7xl text-primary leading-tight mb-6">
        {title}
      </Tag>
      {subtitle && (
        <p className="text-on-surface-variant leading-relaxed text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
