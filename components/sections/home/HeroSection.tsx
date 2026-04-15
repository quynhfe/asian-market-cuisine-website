// ── Home: Hero Section ────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <main className="h-screen flex flex-col pt-16 md:pt-20 overflow-hidden relative">
      {/* HERO */}
      <section className="flex-1 relative overflow-hidden grid grid-cols-1 lg:grid-cols-[48%_1fr]">
        {/* Mobile Background Slider */}
        <div className="lg:hidden absolute inset-0 z-0">
          <div className="mobile-slider-item bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3nn2lvUJ91zL6Ev-pD_MH0ZjigCBzAfoSJYazsVi9inNVpPUqb8T8bABoJZKGmrKLE7DPYHnGwhguQ849o9R0hrolL_cQo3-JBvN4gQoSCPm2mIOiVt1RyG3pRcbjvDj9b6CcSbT519KxJ6aINRvsdGz-kj7FQb8LrtEmN1Jw3DWHx_-WNPURdWZsrGVMsGMh1Qsvngd-f2RV7j48AU5QNpvep5Lew7GX-EHpOiyLD3E2uy9gmeHvuMfvjvDFSkMl1nFAtH2qoD4')" }}></div>
          <div className="mobile-slider-item bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByadHARcA4PNcTC0FTRn_wUKfYCqJ7Rgx6-1QbqvWEYZI1IILTyVR5W0PpRwp0gBBMDpBuvJi8n-UM_UNUKfbMZw9e50vhvsSHYgzRa39iw8K9D7KxqtQu4yHkDYJfGWDjcC_GEkI6b03L6w9Gpd4MlcGzz4RvX1swNq72lVSADWy_IaokT8DMbcDWpxmENQDqVpqbcp7_U3V5N9YKPyLLc0bIeZRnE5QCsApRujp0jhKibwwCVPscKzXfB0cPL4KTF0yb4eJZpiM')" }}></div>
          <div className="mobile-slider-item bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBarA0acBMxI6NinxBjIA1POD4q8pILge38KnIEKcGEGSOCimdeJqdWBau-ix8IcAgAVB3Psdvs3SS_dVBLeGP1ygfRabJjZcd4IBTQOqdEzuoKgBkoMTWretV2kyiAP4iJdLDg8Q7cseYmfU7OIHf0fZYrPK-9TTiAmJZufayj7Hvw_r0no1wTtwoY_DlxyHLRLgAYdPXk3Du1iyqPrGVB6BhIcUjjqptFLiFqDuK0oR3V6GDnPiiW2Ld_B7I76zjzIESlPntCVpI')" }}></div>
          <div className="absolute inset-0 bg-black/40 lg:hidden"></div>
        </div>

        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:pl-24 lg:pr-8 relative z-30 text-center lg:text-left h-full">
          <div className="max-w-2xl lg:max-w-[85%] mx-auto lg:mx-0 w-full">
            <div className="mask-reveal mb-2 lg:mb-6">
              <span className="mask-reveal-inner font-label uppercase tracking-[0.4em] text-[8px] md:text-[10px] text-white lg:text-primary/60">Since 2024</span>
            </div>
            <h1 className="font-headline italic text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] text-white lg:text-primary leading-[0.95] mb-8 lg:mb-12">
              <span className="mask-reveal block"><span className="mask-reveal-inner reveal-delay-1 tracking-wide">Asian</span></span>
              <span className="mask-reveal block lg:ml-[0.15em]"><span className="mask-reveal-inner reveal-delay-2 tracking-wide">Market</span></span>
              <span className="mask-reveal block lg:ml-[0.3em]"><span className="mask-reveal-inner reveal-delay-3 tracking-wide">Cuisine</span></span>
            </h1>
            <div className="mask-reveal mb-10 lg:mb-14">
              <p className="mask-reveal-inner reveal-delay-3 font-body text-white/90 lg:text-on-surface-variant text-sm md:text-base lg:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0 lg:max-w-xl">
                Dinner is a Safe Choice. A contemporary dialogue between tradition and the street markets of Southeast Asia.
              </p>
            </div>
            <div className="mask-reveal flex flex-col items-center lg:items-start gap-8">
              <div className="mask-reveal-inner reveal-delay-3">
                <button className="bg-white lg:bg-primary text-primary lg:text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl">
                  View Menu
                </button>
              </div>
              <div className="flex lg:hidden gap-3">
                {["dot-1", "dot-2", "dot-3"].map((cls) => (
                  <div key={cls} className={`w-1.5 h-1.5 rounded-full bg-white ${cls}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Gallery */}
        <div className="hidden lg:block relative h-full bg-surface-container-low/30 overflow-hidden z-10">
          <div className="scroll-mask w-full h-full">
            <div className="grid grid-cols-2 gap-4 lg:gap-8 h-full p-4 lg:p-8">
              <div className="flex flex-col gap-4 lg:gap-8 animate-scroll-up">
                <img alt="Food Gallery" className="w-full aspect-[3/4] object-cover rounded-2xl lg:rounded-3xl" src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/648973326_122183387210779385_2155513783579633886_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&oh=00_Af2fhKr8rfq1YWFE8LmFPv0cIKChMCSfWImd_FJ6I6nZoA&oe=69D9D7A8" />
                <img alt="Food Gallery" className="w-full aspect-[3/4] object-cover rounded-2xl lg:rounded-3xl" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/594093541_122170673672779385_6905287506443387834_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&oh=00_Af0Nmb3OzCfV7jgFytZjeCv1AInc3Bz6nCxnS2SqwvHLaQ&oe=69D9BE99" />
                <img alt="Food Gallery" className="w-full aspect-[3/4] object-cover rounded-2xl lg:rounded-3xl" src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/528170925_122152430996779385_5160444559585995045_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&oh=00_Af2DwYzMn507BeYqCJtm-XnZIIcmU07mqJjRuD4JxeW4uw&oe=69D9E93B" />
              </div>
              <div className="flex flex-col gap-4 lg:gap-8 animate-scroll-down">
                <img alt="Food Gallery" className="w-full aspect-[3/4] object-cover rounded-2xl lg:rounded-3xl" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/524661789_122151539126779385_7279994933948737816_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&oh=00_Af1vivBXrPhDljEOrB4iYgwbEX-CmkFHlVUTBfV6RcUj-w&oe=69DB0C30" />
                <img alt="Food Gallery" className="w-full aspect-[3/4] object-cover rounded-2xl lg:rounded-3xl" src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/619071973_122177530976779385_7428006373555607565_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&oh=00_Af2IGbsVnNYsOozftE5W9xOTVL5EZNEqTq2lt4K2JhzZwA&oe=69D9DDFB" />
                <img alt="Food Gallery" className="w-full aspect-[3/4] object-cover rounded-2xl lg:rounded-3xl" src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/619654512_122178451388779385_6869231628473838582_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&oh=00_Af1BnsHFBzydFo9e0U2_nUaxkZPMmVJ58D0pNgJKiawEqQ&oe=69DAFA68" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Award Marquee Banner */}
      <section className="gold-gradient-banner h-14 md:h-20 shrink-0 flex items-center overflow-hidden border-t border-black/5 relative z-20">
        <div className="marquee">
          {[0, 1].map((i) => (
            <div key={i} className="marquee-content items-center">
              <div className="flex items-center gap-4 px-8 whitespace-nowrap">
                <span className="material-symbols-outlined text-on-secondary-container animate-bounce">emoji_events</span>
                <span className="font-label uppercase tracking-[0.15em] text-[10px] md:text-xs text-on-secondary-container font-bold">Top User-Rated Restaurant in Da Nang</span>
              </div>
              <div className="flex items-center gap-2 px-8">
                <span className="font-label uppercase tracking-[0.1em] text-[10px] md:text-xs text-on-secondary-container">Star rating</span>
                <div className="flex text-[#755b00]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 px-8">
                <span className="material-symbols-outlined text-on-secondary-container text-lg">verified</span>
                <span className="font-label uppercase tracking-[0.1em] text-[10px] md:text-xs text-on-secondary-container opacity-80">Certified Quality</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
