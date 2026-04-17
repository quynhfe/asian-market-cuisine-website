import Link from "next/link";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

const FOOTER_ICONS = ["restaurant", "local_mall", "eco"] as const;

const footerLinkClass =
  "text-[#fef9f1]/70 hover:text-secondary transition-all font-label uppercase tracking-[0.1em] text-[10px]";

interface FooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function Footer({ locale, dictionary }: FooterProps) {
  return (
    <footer className="w-full bg-primary">
      <div className="absolute inset-0 z-0 grain-overlay opacity-5 pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto flex flex-col px-6 md:px-12 py-12 md:py-20 relative z-10">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="w-full md:w-auto">
            <div className="font-headline italic text-3xl text-[#fef9f1]/80 mb-6">{dictionary.brand.name}</div>
            <p className="text-[#fef9f1]/80 max-w-xs font-body text-sm leading-loose">
              {dictionary.footer.blurb}
            </p>
          </div>

          <div className="w-full md:w-auto grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">
            {dictionary.footer.columns.map(({ title, links }, index) => (
              <div key={title} className={`flex flex-col gap-4 ${index === 2 ? "hidden lg:flex" : ""}`}>
                <span className="text-[#fef9f1]/50 font-label uppercase tracking-[0.2em] text-[10px]">
                  {title}
                </span>
                {links.map(({ label, href }) => (
                  <Link key={label} href={localizeHref(href, locale)} className={footerLinkClass}>
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full mt-12 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[#fef9f1]/80 font-label uppercase tracking-widest text-[10px] text-center sm:text-left">
            {dictionary.footer.copyright}
          </div>
          <div className="flex gap-8">
            {FOOTER_ICONS.map((icon) => (
              <span key={icon} className="material-symbols-outlined text-[#fef9f1]/60 text-xl">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
