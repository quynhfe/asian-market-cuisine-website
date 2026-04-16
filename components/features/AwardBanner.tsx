import React from "react";

interface StatProps {
  value: React.ReactNode;
  label: string;
  icon?: string;
}

interface AwardBannerProps {
  marqueeItems?: string[];
  stats?: StatProps[];
}

export default function AwardBanner({
  marqueeItems = ["Top User-Rated Restaurant in Da Nang"],
  stats = []
}: AwardBannerProps) {
  // If no stats provided, use defaults matching the original homepage
  const defaultStats = stats.length > 0 ? stats : [
    { value: "5.0", label: "Average Rating", icon: undefined },
    { value: <span className="material-symbols-outlined text-white text-3xl mb-2">delivery_dining</span>, label: "GrabFood Partner" },
    { value: <span className="material-symbols-outlined text-white text-3xl mb-2">verified</span>, label: "Danang Certified" }
  ];

  const defaultMarquee = [
    { text: marqueeItems[0] || "Top User-Rated Restaurant in Da Nang", icon: "emoji_events" },
    { text: "Star rating", isRating: true },
    { text: "Certified Quality", icon: "verified" }
  ];

  return (
    <section className="bg-on-surface py-12 md:py-20 overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      ></div>
      
      <div className="relative z-10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-16">
          <div className="flex overflow-hidden border-y border-white/10 py-4">
            <div className="marquee flex gap-12 items-center text-white/40 font-label text-xs uppercase tracking-[0.3em]">
              {[1, 2, 3, 4].map((i) => (
                <span key={i} className="flex items-center gap-4 whitespace-nowrap">
                  <span className="material-symbols-outlined text-secondary">workspace_premium</span> 
                  Top User-Rated Restaurant in Da Nang 2023
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="font-headline italic text-4xl md:text-5xl text-white mb-12">You voted, we made it!</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {defaultStats.map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-6 rounded-2xl flex flex-col items-center">
                {typeof stat.value === "string" ? (
                  <span className="text-secondary font-bold text-2xl mb-1">{stat.value}</span>
                ) : (
                  stat.value
                )}
                <span className="text-white/60 font-label text-[10px] tracking-widest uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
