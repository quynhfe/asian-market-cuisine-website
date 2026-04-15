"use client";

// ── Gallery: Filter Bar + Grid + Lightbox (needs client for state) ─────────────
import { useState } from "react";
import { galleryItems, GALLERY_CATEGORIES } from "@/constants/data";

export default function GalleryGridSection() {
  const [filter, setFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredItems =
    filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <>
      {/* Sticky Filter Bar */}
      <section className="sticky top-20 z-40 bg-background/60 backdrop-blur-sm py-8 px-6">
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat
                  ? "bg-primary text-white shadow-sm"
                  : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 md:px-12 py-12 max-w-screen-2xl mx-auto">
        <div className="masonry-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`masonry-item group relative overflow-hidden cursor-pointer shadow-lg aspect-square ${
                item.arch ? "arch-geometry" : "rounded-lg"
              }`}
              onClick={() => setLightboxImg(item.src)}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={item.src}
                alt={item.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-secondary-fixed text-[10px] uppercase tracking-widest mb-1">{item.category}</span>
                <h3 className="font-headline text-2xl text-white italic">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] bg-on-surface/95 flex items-center justify-center p-8"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform"
            onClick={() => setLightboxImg(null)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <div
            className="max-w-5xl w-full max-h-[819px] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img alt="Lightbox Preview" className="max-w-full max-h-full object-contain rounded-lg" src={lightboxImg} />
          </div>
        </div>
      )}
    </>
  );
}
