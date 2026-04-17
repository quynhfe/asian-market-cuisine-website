"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IMAGES } from "@/lib/images";
import { withLocale, type Locale, localizeHref } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

const desktopLinkClass = (active: boolean) =>
  `font-label font-semibold text-sm tracking-widest uppercase transition-colors duration-300 ${active
    ? "text-primary border-b-2 border-primary pb-1"
    : "text-on-background hover:text-secondary"
  }`;

const mobileLinkClass = (active: boolean) =>
  `font-label text-sm tracking-widest uppercase ${active
    ? "text-primary border-b-2 border-primary w-fit pb-2"
    : "text-on-surface border-b border-primary/10 pb-4"
  }`;

interface NavbarProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function Navbar({ locale, dictionary }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const nextLocale: Locale = locale === "vi" ? "en" : "vi";

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const bookingHref = localizeHref("/booking", locale);
  const homeHref = localizeHref("/", locale);
  const localeSwitchHref = withLocale(pathname, nextLocale);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-110 lg:hidden mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-background z-120 lg:hidden flex flex-col p-8 shadow-2xl mobile-menu-drawer ${isMobileMenuOpen ? "open" : ""}`}
      >
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Image alt="Logo" className="h-8 w-auto" src={IMAGES.logo} />
            <span className="font-headline italic text-lg text-primary">{dictionary.brand.shortName}</span>
          </div>
          <button className="text-on-surface" onClick={() => setIsMobileMenuOpen(false)} aria-label={dictionary.nav.closeMenu}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-8">
          {dictionary.nav.links.map(({ href, label }) => {
            const localized = localizeHref(href, locale);
            return (
              <Link key={href} href={localized} className={mobileLinkClass(pathname === localized)} onClick={() => setIsMobileMenuOpen(false)}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-12">
          <Link
            href={bookingHref}
            className="block text-center w-full bg-primary text-white py-5 rounded-full font-label uppercase tracking-[0.2em] text-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {dictionary.nav.bookTable}
          </Link>
          <div className="flex justify-center gap-6 mt-8 text-on-surface-variant">
            {["restaurant", "local_mall", "eco"].map((icon) => (
              <span key={icon} className="material-symbols-outlined">{icon}</span>
            ))}
          </div>
        </div>
      </aside>

      <nav className="fixed top-0 w-full z-50 bg-[#fef9f1]/80 backdrop-blur-md h-16 md:h-20" id="header">
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-6 xl:px-12 py-4 md:py-5 w-full max-w-screen-2xl mx-auto h-full">
          <Link href={homeHref} className="flex items-center gap-2 md:gap-3 group">
            <Image
              alt="Asian Market Cuisine Logo"
              className="h-8 md:h-10 lg:h-11 xl:h-12 w-auto object-contain rounded-md"
              src={IMAGES.logo}
            />
            <span className="font-headline italic text-lg sm:text-xl md:text-sm lg:text-xl xl:text-3xl text-primary ml-1 sm:ml-2 md:ml-3 hidden  sm:inline-block">
              {dictionary.brand.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-3 xl:gap-8">
            {dictionary.nav.links.map(({ href, label }) => {
              const localized = localizeHref(href, locale);
              return (
                <Link key={href} href={localized} className={desktopLinkClass(pathname === localized)}>
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 md:gap-4 lg:gap-3 xl:gap-6">
            <Link href={localeSwitchHref} className="hidden sm:flex bg-surface-container-high rounded-full p-1 text-[10px] font-bold font-label">
              <span className={`px-3 py-1 ${locale === "en" ? "bg-white rounded-full shadow-sm text-primary" : "text-outline"}`}>EN</span>
              <span className={`px-3 py-1 ${locale === "vi" ? "bg-white rounded-full shadow-sm text-primary" : "text-outline"}`}>VN</span>
            </Link>
            <Link
              href={bookingHref}
              className="bg-primary text-white px-3 md:px-6 lg:px-4 xl:px-8 py-2 md:py-2.5 lg:py-3 rounded-full font-label text-[10px] md:text-xs lg:text-[10px] xl:text-xs tracking-widest uppercase hover:scale-105 transition-transform whitespace-nowrap"
            >
              {dictionary.nav.bookTable}
            </Link>
            <button
              aria-label={dictionary.nav.openMenu}
              className="lg:hidden flex items-center justify-center p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
