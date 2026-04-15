"use client";

// ── Booking: Form Section + Atmosphere + Policy ───────────────────────────────
import { useState } from "react";
import { BOOKING_DATES, BOOKING_TIMES, BOOKING_INFO } from "@/constants/data";
import BookingHeroSection from "@/components/sections/booking/BookingHeroSection";

const ATMOSPHERE_IMG = "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/508394742_122144003684779385_2950924374343277100_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGHmhLLHcXNUrjVrfB3kKkm_KDEUM-ajpv8oMRQz5qOm6dPSdkfCU734eP22id9fVRjz3wO_UuZtvmMH8QyXxTW&_nc_ohc=Maz61jvYYQ0Q7kNvwHfY_GE&_nc_oc=AdrFfW0kdPremhmdUTHjSipULqGFFWyzToYawWw2P4akb3FbdIXwzxT-OxXHrR_JXVM&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&oh=00_Af23z9hHeZ1Wt1faO6FavTGpuoBGfuAF8qYiN7dRx5zQ6w&oe=69DB28E1";
const HERO_IMG = "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/508710972_122144003738779385_7224492914312021546_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&oh=00_Af2hycL0rc5Z0et_Spod2MG5f-wlu9_g2j_GB6J3-B3DWQ&oe=69DB11D4";

export default function BookingContent() {
  const [selectedDate, setSelectedDate] = useState<number | null>(24);
  const [selectedTime, setSelectedTime] = useState<string>("19:30");
  const [customTime, setCustomTime] = useState<string>("");
  const [guests, setGuests] = useState<number>(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timeToSubmit = selectedTime === "custom" ? customTime : selectedTime;
    if (!timeToSubmit) { alert("Please select or enter a time."); return; }
    alert("Reservation confirmed!");
  };

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-12 pb-24 grid md:grid-cols-2 gap-16 items-center">
        <BookingHeroSection />
        <div className="relative">
          <div className="arched-image w-full aspect-[4/5] bg-surface-container-high overflow-hidden" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}>
            <img className="w-full h-full object-cover" src={HERO_IMG} alt="Intimate candlelit dining table" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-surface-container p-8 rounded-lg max-w-[240px] hidden lg:block">
            <p className="font-headline italic text-xl text-primary">"A quiet ritual of taste and time."</p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="bg-surface-container-low py-32 px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar info */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-headline italic text-primary mb-6">The Ritual</h2>
              <p className="text-on-surface/70 mb-12">Select your preferred date and time. For parties larger than 6, please contact our concierge directly.</p>
              <div className="space-y-8">
                {BOOKING_INFO.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 0' }}>{icon}</span>
                    <div><p className="text-xs font-label uppercase tracking-widest text-on-surface/50">{label}</p><p className="font-medium">{value}</p></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 bg-surface-bright p-12 rounded-lg shadow-sm">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={handleSubmit}>
                {/* Date */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface/60 mb-4">Select Date</label>
                  <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {BOOKING_DATES.map((d) => (
                      <button key={d.date} type="button" onClick={() => setSelectedDate(d.date)}
                        className={`flex-shrink-0 w-20 h-24 flex flex-col items-center justify-center rounded-2xl border-2 transition-colors ${selectedDate === d.date ? "border-primary text-primary bg-primary/5" : "border-outline-variant text-on-surface/40 hover:border-secondary"}`}>
                        <span className="text-xs uppercase font-label">{d.month}</span>
                        <span className="text-2xl font-bold">{d.date}</span>
                        <span className="text-[10px] uppercase font-label opacity-60">{d.day}</span>
                      </button>
                    ))}
                    <div className="flex-shrink-0 w-20 h-24 flex items-center justify-center rounded-2xl border-2 border-dashed border-outline-variant text-on-surface/30">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </div>
                  </div>
                </div>

                {/* Time */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface/60 mb-4">Time Slot</label>
                  <div className="flex flex-wrap gap-3">
                    {BOOKING_TIMES.map((t) => (
                      <button key={t} type="button" onClick={() => setSelectedTime(t)}
                        className={`px-6 py-2 rounded-full border text-sm transition-all ${selectedTime === t ? "bg-primary-container text-white border-transparent" : "border-outline-variant hover:bg-primary-container hover:text-white hover:border-transparent"}`}>
                        {t}
                      </button>
                    ))}
                    <button type="button" onClick={() => setSelectedTime("custom")}
                      className={`px-6 py-2 rounded-full border text-sm transition-all ${selectedTime === "custom" ? "bg-primary-container text-white border-transparent" : "border-outline-variant hover:bg-primary-container hover:text-white hover:border-transparent"}`}>
                      Custom time
                    </button>
                    {selectedTime === "custom" && (
                      <input type="time" value={customTime} onChange={(e) => setCustomTime(e.target.value)}
                        className="bg-transparent border border-outline rounded-lg px-3 py-2 text-on-surface outline-none focus:border-primary" />
                    )}
                  </div>
                </div>

                {/* Guests */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface/60 mb-4">Number of Guests</label>
                  <div className="flex items-center gap-8">
                    <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:border-primary">
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                    <span className="text-2xl font-headline italic">{guests} Guest{guests !== 1 ? "s" : ""}</span>
                    <button type="button" onClick={() => setGuests(guests + 1)} className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:border-primary">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>

                {/* Contact fields */}
                <div className="md:col-span-1 group">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface/50 mb-1">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary placeholder-transparent transition-all outline-none" required />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface/50 mb-1">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary placeholder-transparent transition-all outline-none" required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface/50 mb-1">Special Occasion or Request</label>
                  <textarea rows={2} placeholder="Anniversary, dietary requirements, or preferred seating..." className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary placeholder-transparent transition-all outline-none resize-none" />
                </div>
                <div className="md:col-span-2 mt-4">
                  <button type="submit" className="w-full bg-primary-container text-white py-5 rounded-full font-label uppercase tracking-[0.2em] text-sm hover:bg-primary transition-colors flex items-center justify-center gap-3">
                    Confirm Reservation
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Teaser */}
      <section className="py-32 px-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="arched-image w-full aspect-video bg-surface-container overflow-hidden" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}>
              <img className="w-full h-full object-cover" src={ATMOSPHERE_IMG} alt="Interior of a luxury Japanese restaurant" />
            </div>
          </div>
          <div className="md:col-span-5 md:pl-12">
            <h3 className="text-5xl font-headline italic text-primary mb-8 leading-tight">A sanctuary of flavor and light.</h3>
            <p className="text-on-surface/70 leading-relaxed mb-8">Our space is designed to soothe the senses. From the warmth of reclaimed cedar to the gentle glow of washi paper lamps, every detail prepares you for the journey ahead.</p>
            <div className="flex gap-4">
              <div className="w-12 h-[1px] bg-secondary mt-3" />
              <p className="text-xs font-label uppercase tracking-widest text-secondary font-bold">Experience the ambiance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy */}
      <section className="pb-32 px-12">
        <div className="max-w-[800px] mx-auto bg-surface-container-high/30 p-12 rounded-lg text-center">
          <h4 className="text-xs font-label uppercase tracking-widest text-on-surface/50 mb-6">Reservation Policy</h4>
          <div className="space-y-4 text-sm text-on-surface/60 leading-relaxed max-w-2xl mx-auto">
            <p>Cancellations or changes must be made at least 24 hours prior to your scheduled time. Late arrivals exceeding 15 minutes may result in the forfeiture of your reservation based on seating availability.</p>
            <p>A credit card is required to secure bookings for groups of 4 or more. A nominal fee of $50 per guest may be applied for no-shows or late cancellations.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
