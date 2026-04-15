"use client";

// ── Story: Testimonial Carousel (needs client state) ──────────────────────────
import { useState, useEffect } from "react";
import { testimonials } from "@/constants/data";

export default function TestimonialCarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((p) => (p + 1) % total), 5000);
    return () => clearInterval(interval);
  }, [total]);

  const next = () => setCurrentSlide((p) => (p + 1) % total);
  const prev = () => setCurrentSlide((p) => (p - 1 + total) % total);

  return (
    <section className="h-[1024px] min-h-[600px] bg-primary relative overflow-hidden group">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {testimonials.map((t) => (
          <div key={t.id} className="flex-none w-full h-full flex flex-col md:flex-row">
            <div className="w-full md:w-[55%] h-1/2 md:h-full">
              <img className="w-full h-full object-cover" src={t.imageUrl} alt="" />
            </div>
            <div className={`w-full md:w-[45%] h-1/2 md:h-full ${t.bgClass} p-12 md:p-24 flex flex-col justify-center`}>
              <span className="text-secondary font-label text-xs tracking-widest uppercase mb-8">{t.origin}</span>
              <blockquote className="font-headline italic text-2xl md:text-4xl text-primary leading-tight mb-12">
                <p>{t.quote}</p>
                {t.subQuote && <p className="mt-4 text-xl opacity-90">{t.subQuote}</p>}
              </blockquote>
              <div className="font-label text-sm tracking-widest uppercase text-on-surface">— {t.author}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-white text-primary"
        onClick={prev}
      >
        <span className="material-symbols-outlined">west</span>
      </button>
      <button
        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-white text-primary"
        onClick={next}
      >
        <span className="material-symbols-outlined">east</span>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className="dot h-2 rounded-full cursor-pointer transition-all duration-300"
            onClick={() => setCurrentSlide(i)}
            style={{
              backgroundColor: i === currentSlide ? "rgb(48,70,167)" : "rgba(48,70,167,0.2)",
              width: i === currentSlide ? "24px" : "8px",
            }}
          />
        ))}
      </div>
    </section>
  );
}
