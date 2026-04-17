"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { IMAGES } from "@/lib/images";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface GalleryGridSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

const gallerySources = [
  IMAGES.gallery1,
  IMAGES.gallery2,
  IMAGES.gallery3,
  IMAGES.gallery4,
  IMAGES.gallery5,
  IMAGES.gallery6,
  IMAGES.gallery7,
  IMAGES.gallery8,
  IMAGES.gallery9,
  IMAGES.hero1,
  IMAGES.hero2,
  IMAGES.hero3,
] as const;

export default function GalleryGridSection({ locale, dictionary }: GalleryGridSectionProps) {
  const gallery = dictionary.gallery;
  const [filter, setFilter] = useState<string>(gallery.filters[0] ?? "All");
  const [lightboxImg, setLightboxImg] = useState<StaticImageData | string | null>(null);

  const items = gallery.items.map((item, index) => ({
    ...item,
    src: gallerySources[index],
    arch: index % 2 === 0,
  }));

  const filteredItems =
    filter === gallery.filters[0]
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <>
      <section className="sticky top-16 md:top-20 z-40 bg-background/60 backdrop-blur-sm py-4 md:py-8 px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-5xl mx-auto">
          {gallery.filters.map((cat) => (
            <button
              key={cat}
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-5 md:px-8 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${filter === cat
                ? "bg-primary text-white shadow-sm"
                : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 w-full">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="masonry-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`masonry-item group relative overflow-hidden cursor-pointer shadow-lg aspect-square ${item.arch ? "arch-geometry" : "rounded-lg"}`}
                onClick={() => setLightboxImg(item.src)}
              >
                <Image
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.src}
                  alt={item.alt}
                />
                <div className="absolute inset-0 bg-linear-to-t from-on-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-secondary-fixed text-[10px] uppercase tracking-widest mb-1">{item.category}</span>
                  <h3 className="font-headline text-2xl text-white italic">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImg && (
        <div
          className="fixed inset-0 z-100 bg-on-surface/95 flex items-center justify-center p-8"
          onClick={() => setLightboxImg(null)}
        >
          <button
            aria-label={locale === "vi" ? "Đóng xem trước ảnh" : "Close image preview"}
            className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform"
            onClick={() => setLightboxImg(null)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <div
            className="max-w-5xl w-full max-h-[819px] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image alt="Lightbox Preview" className="max-w-full max-h-full object-contain rounded-lg" src={lightboxImg} />
          </div>
        </div>
      )}
    </>
  );
}
