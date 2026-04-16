"use client";

// ── Story: Testimonial Carousel (needs client state) ──────────────────────────
import { useState, useEffect } from "react";
import Image from "next/image";
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
    <section className="h-[500px] md:h-[780px] lg:h-[900px] xl:h-[1000px] 2xl:h-[1080px] bg-primary relative overflow-hidden group">

      {/* ── Slides track ── */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {testimonials.map((t) => (
          <div key={t.id} className="flex-none w-full h-full relative overflow-hidden">

            {/* Background Layer - Hidden on mobile, Split on md+ */}
            <div className="absolute inset-0 hidden md:flex z-0">
              <div className="w-[55%] h-full bg-surface-container" />
              <div className={`w-[45%] h-full ${t.bgClass}`} />
            </div>

            {/* Mobile background image - Only below md */}
            <div className="absolute inset-0 md:hidden z-0">
              <Image
                className="w-full h-full object-cover"
                src={t.imageUrl}
                alt=""
                fill
              />
              {/* Dark overlay for mobile legibility */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />
            </div>

            {/* Content grid */}
            <div className="max-w-screen-2xl mx-auto h-full grid grid-cols-1 md:grid-cols-[55%_1fr] relative z-20 w-full">

              {/* Desktop/Tablet Image - Hidden on mobile */}
              <div className="hidden md:block w-full h-full">
                <Image
                  className="w-full h-full object-cover"
                  src={t.imageUrl}
                  alt={`${t.author} – guest testimonial`}
                />
              </div>

              {/* Text panel - Overlay on mobile, Side-by-side on md+ */}
              <div className={`
                w-full h-full
                md:bg-transparent
                p-6 sm:p-8 md:p-8 lg:p-12 xl:p-16 2xl:p-20
                flex flex-col justify-end md:justify-center
                pb-20 md:pb-24 lg:pb-32
                text-white md:text-on-surface
              `}>
                <span className="text-secondary font-label text-[11px] sm:text-xs xl:text-sm tracking-widest uppercase mb-3 sm:mb-4 md:mb-5 xl:mb-8 block">
                  {t.origin}
                </span>

                <blockquote className="font-headline italic text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight mb-4 sm:mb-5 md:mb-8 xl:mb-10 text-white/80 md:text-primary">
                  <p>{t.quote}</p>
                  {t.subQuote && (
                    <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-lg md:text-base lg:text-lg xl:text-xl opacity-70">
                      {t.subQuote}
                    </p>
                  )}
                </blockquote>

                <div className="font-label text-xs sm:text-xs md:text-sm xl:text-base tracking-widest uppercase opacity-80 md:opacity-100">
                  — {t.author}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Prev button ──
          Mobile: always visible, bottom left
          md+:    hidden, revealed on group-hover, centered vertically
      ── */}
      <button
        className="
          absolute
          left-4 md:left-6 lg:left-8 xl:left-10
          bottom-6 md:top-1/2 -translate-y-0 md:-translate-y-1/2
          w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
          rounded-full border border-white/20 md:border-primary/20
          flex items-center justify-center
          bg-black/20 md:bg-white/25 backdrop-blur-md
          opacity-100 md:opacity-0 md:group-hover:opacity-100
          transition-all duration-300 cursor-pointer
          hover:bg-white text-white md:text-primary
          z-30
        "
        aria-label="Previous testimonial"
        onClick={prev}
      >
        <span className="material-symbols-outlined text-sm md:text-xl lg:text-2xl" aria-hidden="true">west</span>
      </button>

      <button
        className="
          absolute
          right-4 md:right-6 lg:left-[55.5%] xl:left-[56%]
          lg:right-auto
          bottom-6 md:top-1/2 -translate-y-0 md:-translate-y-1/2
          w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
          rounded-full border border-white/20 md:border-primary/20
          flex items-center justify-center
          bg-black/20 md:bg-white/25 backdrop-blur-md
          opacity-100 md:opacity-0 md:group-hover:opacity-100
          transition-all duration-300 cursor-pointer
          hover:bg-white text-white md:text-primary
          z-30
        "
        aria-label="Next testimonial"
        onClick={next}
      >
        <span className="material-symbols-outlined text-sm md:text-xl lg:text-2xl" aria-hidden="true">east</span>
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 left-1/2 -translate-x-1/2 flex gap-1 z-30">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === currentSlide ? "true" : undefined}
            onClick={() => setCurrentSlide(i)}
            className="p-1 cursor-pointer"
          >
            <div
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === currentSlide ? "white" : "rgba(255,255,255,0.3)",
                width: i === currentSlide ? "20px" : "6px",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
