"use client";

import { useState } from "react";
import Image from "next/image";
import BookingHeroSection from "@/components/sections/booking/BookingHeroSection";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

const ATMOSPHERE_IMG = "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/508394742_122144003684779385_2950924374343277100_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGHmhLLHcXNUrjVrfB3kKkm_KDEUM-ajpv8oMRQz5qOm6dPSdkfCU734eP22id9fVRjz3wO_UuZtvmMH8QyXxTW&_nc_ohc=Maz61jvYYQ0Q7kNvwHfY_GE&_nc_oc=AdrFfW0kdPremhmdUTHjSipULqGFFWyzToYawWw2P4akb3FbdIXwzxT-OxXHrR_JXVM&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&oh=00_Af23z9hHeZ1Wt1faO6FavTGpuoBGfuAF8qYiN7dRx5zQ6w&oe=69DB28E1";
const HERO_IMG = "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/508710972_122144003738779385_7224492914312021546_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&oh=00_Af2hycL0rc5Z0et_Spod2MG5f-wlu9_g2j_GB6J3-B3DWQ&oe=69DB11D4";

interface BookingContentProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function BookingContent({ dictionary }: BookingContentProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(dictionary.booking.dates[0]?.date ?? 24);
  const [selectedTime, setSelectedTime] = useState<string>(dictionary.booking.times[2] ?? "19:30");
  const [customTime, setCustomTime] = useState<string>("");
  const [guests, setGuests] = useState<number>(2);

  const booking = dictionary.booking;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timeToSubmit = selectedTime === "custom" ? customTime : selectedTime;
    if (!timeToSubmit) {
      alert(booking.alertTime);
      return;
    }
    alert(booking.alertSuccess);
  };

  return (
    <main className="pt-20 md:pt-28">
      <section className="w-full pb-12 md:pb-24">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <BookingHeroSection locale="en" dictionary={dictionary} />
          <div className="relative">
            <div className="arched-image w-full aspect-[4/5] bg-surface-container-high overflow-hidden" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}>
              <Image preload sizes="(max-width: 768px) 100vw, 50vw" fill className="object-cover" src={HERO_IMG} alt="Intimate candlelit dining table" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container p-6 md:p-8 rounded-lg max-w-[200px] md:max-w-[240px] hidden lg:block">
              <p className="font-headline italic text-lg md:text-xl text-primary">&ldquo;{booking.atmosphereQuote}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-16 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-headline italic text-primary mb-4 md:mb-6">{booking.title}</h2>
              <p className="text-on-surface/70 mb-8 md:mb-12 text-sm md:text-base">{booking.subtitle}</p>
              <div className="space-y-6 md:space-y-8">
                {booking.info.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 0' }}>{icon}</span>
                    <div>
                      <p className="text-xs font-label uppercase tracking-widest text-on-surface/50">{label}</p>
                      <p className="font-medium text-sm md:text-base">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 bg-surface-bright p-5 sm:p-8 md:p-12 rounded-lg shadow-sm">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10" onSubmit={handleSubmit} noValidate>
                <div className="md:col-span-2">
                  <span className="block text-xs font-label uppercase tracking-widest text-on-surface/60 mb-3 md:mb-4">{booking.selectDate}</span>
                  <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 scrollbar-hide" role="group" aria-label="Date selection">
                    {booking.dates.map((d) => (
                      <button key={d.date} type="button" onClick={() => setSelectedDate(d.date)}
                        aria-pressed={selectedDate === d.date}
                        className={`shrink-0 w-16 h-20 sm:w-20 sm:h-24 flex flex-col items-center justify-center rounded-2xl border-2 transition-colors min-w-[64px] sm:min-w-[80px] ${selectedDate === d.date ? "border-primary text-primary bg-primary/5" : "border-outline-variant text-on-surface/40 hover:border-secondary"}`}>
                        <span className="text-[10px] sm:text-xs uppercase font-label">{d.month}</span>
                        <span className="text-xl sm:text-2xl font-bold">{d.date}</span>
                        <span className="text-[10px] uppercase font-label opacity-60">{d.day}</span>
                      </button>
                    ))}
                    <div className="shrink-0 w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center rounded-2xl border-2 border-dashed border-outline-variant text-on-surface/30 min-w-[64px] sm:min-w-[80px]" aria-hidden="true">
                      <span className="material-symbols-outlined text-sm sm:text-base">more_horiz</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <span className="block text-xs font-label uppercase tracking-widest text-on-surface/60 mb-3 md:mb-4">{booking.selectTime}</span>
                  <div className="flex flex-wrap gap-2 md:gap-3" role="group" aria-label="Time slot selection">
                    {booking.times.map((t) => (
                      <button key={t} type="button" onClick={() => setSelectedTime(t)}
                        aria-pressed={selectedTime === t}
                        className={`px-4 md:px-6 py-2 rounded-full border text-xs md:text-sm transition-all ${selectedTime === t ? "bg-primary-container text-white border-transparent" : "border-outline-variant hover:bg-primary-container hover:text-white hover:border-transparent"}`}>
                        {t}
                      </button>
                    ))}
                    <button type="button" onClick={() => setSelectedTime("custom")}
                      aria-pressed={selectedTime === "custom"}
                      className={`px-4 md:px-6 py-2 rounded-full border text-xs md:text-sm transition-all ${selectedTime === "custom" ? "bg-primary-container text-white border-transparent" : "border-outline-variant hover:bg-primary-container hover:text-white hover:border-transparent"}`}>
                      {booking.customTime}
                    </button>
                    {selectedTime === "custom" && (
                      <input
                        id="custom-time"
                        type="time"
                        value={customTime}
                        onChange={(e) => setCustomTime(e.target.value)}
                        className="bg-transparent border border-outline rounded-lg px-3 py-2 text-on-surface outline-none focus:border-primary text-sm"
                        aria-label={booking.enterCustomTime}
                      />
                    )}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <span className="block text-xs font-label uppercase tracking-widest text-on-surface/60 mb-3 md:mb-4">{booking.guests}</span>
                  <div className="flex items-center gap-6 md:gap-8" role="group" aria-label="Guest count">
                    <button type="button" aria-label="Decrease guest count"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-11 h-11 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                      <span className="material-symbols-outlined" aria-hidden="true">remove</span>
                    </button>
                    <span className="text-xl md:text-2xl font-headline italic" aria-live="polite" aria-atomic="true">
                      {guests} {booking.guestLabel}
                    </span>
                    <button type="button" aria-label="Increase guest count"
                      onClick={() => setGuests(guests + 1)}
                      className="w-11 h-11 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                      <span className="material-symbols-outlined" aria-hidden="true">add</span>
                    </button>
                  </div>
                </div>

                <div className="md:col-span-1 group">
                  <label htmlFor="full-name" className="block text-xs font-label uppercase tracking-widest text-on-surface/50 mb-1">{booking.fullName}</label>
                  <input id="full-name" type="text" placeholder={booking.fullNamePlaceholder}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary placeholder-transparent transition-all outline-none text-sm md:text-base"
                    required autoComplete="name" />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="email" className="block text-xs font-label uppercase tracking-widest text-on-surface/50 mb-1">{booking.email}</label>
                  <input id="email" type="email" placeholder={booking.emailPlaceholder}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary placeholder-transparent transition-all outline-none text-sm md:text-base"
                    required autoComplete="email" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="special-request" className="block text-xs font-label uppercase tracking-widest text-on-surface/50 mb-1">{booking.request}</label>
                  <textarea id="special-request" rows={2} placeholder={booking.requestPlaceholder}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary placeholder-transparent transition-all outline-none resize-none text-sm md:text-base" />
                </div>
                <div className="md:col-span-2 mt-2 md:mt-4">
                  <button type="submit"
                    className="w-full bg-primary-container text-white py-4 md:py-5 rounded-full font-label uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-primary transition-colors flex items-center justify-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    {booking.submit}
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7">
            <div className="relative w-full aspect-video bg-surface-container overflow-hidden" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}>
              <Image sizes="(max-width: 768px) 100vw, 58vw" fill className="object-cover" src={ATMOSPHERE_IMG} alt="Interior of a luxury restaurant" />
            </div>
          </div>
          <div className="md:col-span-5 md:pl-8 lg:pl-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-headline italic text-primary mb-5 md:mb-8 leading-tight">{booking.atmosphereTitle}</h3>
            <p className="text-on-surface/70 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">{booking.atmosphereDesc}</p>
            <div className="flex gap-4">
              <div className="w-12 h-px bg-secondary mt-3" />
              <p className="text-xs font-label uppercase tracking-widest text-secondary font-bold">{booking.atmosphereTag}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-32 px-4 md:px-8 lg:px-12">
        <div className="max-w-[800px] mx-auto bg-surface-container-high/30 p-6 md:p-12 rounded-lg text-center">
          <h4 className="text-xs font-label uppercase tracking-widest text-on-surface/50 mb-4 md:mb-6">{booking.policyTitle}</h4>
          <div className="space-y-4 text-xs md:text-sm text-on-surface/60 leading-relaxed max-w-2xl mx-auto">
            {booking.policyLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
