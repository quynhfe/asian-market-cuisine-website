"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IMAGES } from "@/lib/images";

// ─── Static data ──────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Our Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/story", label: "Our Story" },
  { href: "/find-us", label: "Find Us" },
] as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────
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

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ── Mobile Overlay ── */}
      <div
        className={`fixed inset-0 bg-black/40 z-110 lg:hidden mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* ── Mobile Drawer ── */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-background z-120 lg:hidden flex flex-col p-8 shadow-2xl mobile-menu-drawer ${isMobileMenuOpen ? "open" : ""}`}
      >
        {/* Drawer header */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Image alt="Logo" className="h-8 w-auto" src={IMAGES.logo} />
            <span className="font-headline italic text-lg text-primary">Asian Market Cuisine</span>
          </div>
          <button className="text-on-surface" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close navigation menu">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={mobileLinkClass(pathname === href)}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="mt-auto pt-12">
          <Link
            href="/booking"
            className="block text-center w-full bg-primary text-white py-5 rounded-full font-label uppercase tracking-[0.2em] text-xs"
          >
            Book a Table
          </Link>
          <div className="flex justify-center gap-6 mt-8 text-on-surface-variant">
            {["restaurant", "local_mall", "eco"].map((icon) => (
              <span key={icon} className="material-symbols-outlined">{icon}</span>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Desktop Navbar ── */}
      <nav className="fixed top-0 w-full z-50 bg-[#fef9f1]/80 backdrop-blur-md h-16 md:h-20" id="header">
        <div className="flex justify-between items-center px-4 md:px-12 py-4 md:py-5 w-full max-w-screen-2xl mx-auto h-full">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              alt="Asian Market Cuisine Logo"
              className="h-8 md:h-12 w-auto object-contain rounded-md"
              src={IMAGES.logo}
            />
            <span className="font-headline italic text-xl md:text-2xl text-primary ml-1 md:ml-3 hidden sm:inline-block">
              Asian Market Cuisine
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={desktopLinkClass(pathname === href)}>
                {label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden sm:flex bg-surface-container-high rounded-full p-1 text-[10px] font-bold font-label">
              <span className="px-3 py-1 bg-white rounded-full shadow-sm text-primary">EN</span>
              <span className="px-3 py-1 text-outline">VN</span>
            </div>
            <Link
              href="/booking"
              className="bg-primary text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-label text-[10px] md:text-xs tracking-widest uppercase hover:scale-105 transition-transform whitespace-nowrap"
            >
              Book A Table
            </Link>
            <button
              aria-label="Open navigation menu"
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
