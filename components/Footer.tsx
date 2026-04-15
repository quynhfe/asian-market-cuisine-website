import Link from "next/link";

// ─── Static data ──────────────────────────────────────────────────────────────
const FOOTER_COLUMNS = [
  {
    title: "Navigate",
    className: "",
    links: [
      { label: "Menu", href: "/menu" },
      { label: "Our Story", href: "/story" },
      { label: "Find Us", href: "/find-us" },
    ],
  },
  {
    title: "Social",
    className: "",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    title: "Utility",
    className: "hidden lg:flex",
    links: [
      { label: "Maps", href: "#" },
      { label: "Grab", href: "#" },
    ],
  },
] as const;

const FOOTER_ICONS = ["restaurant", "local_mall", "eco"] as const;

const footerLinkClass =
  "text-[#fef9f1]/70 hover:text-secondary transition-all font-label uppercase tracking-[0.1em] text-[10px]";

// ─── Component ────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="flex flex-col px-6 md:px-12 py-12 md:py-20 w-full relative bg-primary">
      <div className="absolute inset-0 z-0 grain-overlay opacity-5 pointer-events-none" />

      {/* Top row */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand blurb */}
        <div className="w-full md:w-auto">
          <div className="font-headline italic text-3xl text-[#fef9f1]/80 mb-6">Asian Market Cuisine</div>
          <p className="text-[#fef9f1]/80 max-w-xs font-body text-sm leading-loose">
            An intentional dining journey inspired by the heritage of Southeast Asia's vibrant markets.
          </p>
        </div>

        {/* Link columns */}
        <div className="w-full md:w-auto grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">
          {FOOTER_COLUMNS.map(({ title, className, links }) => (
            <div key={title} className={`flex flex-col gap-4 ${className}`}>
              <span className="text-[#fef9f1]/50 font-label uppercase tracking-[0.2em] text-[10px]">
                {title}
              </span>
              {links.map(({ label, href }) => (
                <Link key={label} href={href} className={footerLinkClass}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 w-full mt-12 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-[#fef9f1]/80 font-label uppercase tracking-[0.1em] text-[10px] text-center sm:text-left">
          © {new Date().getFullYear()} Asian Market Cuisine. Curated with Intention.
        </div>
        <div className="flex gap-8">
          {FOOTER_ICONS.map((icon) => (
            <span key={icon} className="material-symbols-outlined text-[#fef9f1]/60 text-xl">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
