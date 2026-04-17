"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface MenuTabsSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function MenuTabsSection({ dictionary }: MenuTabsSectionProps) {
  const menu = dictionary.menu;
  const [activeTab, setActiveTab] = useState<string>(menu.tabs[0]?.id ?? "starters");

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      const scrollOffset = window.innerWidth < 768 ? 140 : 250;
      setTimeout(() => {
        const el = document.getElementById("tab-content-area");
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - scrollOffset, behavior: "smooth" });
      }, 0);
    }
  };

  return (
    <>
      <div className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-sm py-4 md:py-6 border-b border-outline-variant/10 w-full">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-4 min-w-max pb-2">
            {menu.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`tab-btn px-4 md:px-6 py-2 rounded-full font-label uppercase tracking-widest text-[11px] md:text-[11px] transition-all ${activeTab === tab.id ? "bg-primary text-[#fef9f1]" : "text-on-background/50 hover:bg-surface-container"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-screen-2xl mx-auto px-4 md:px-6 pb-20 md:pb-32 mt-8 md:mt-12" id="tab-content-area">
        <div className="mb-8 md:mb-12 text-center">
          <p className="font-label uppercase tracking-[0.2em] text-[9px] md:text-[11px] text-on-background/40">{menu.priceNote}</p>
        </div>

        <div className={`tab-content ${activeTab === "starters" ? "grid" : "hidden"} grid-cols-1 md:grid-cols-12 gap-6`} id="tab-starters">
          <div className="bg-surface-container-low rounded-lg p-6 md:p-10 flex flex-col justify-between overflow-hidden relative group md:col-span-12 lg:col-span-7">
            <div className="flex justify-between items-start gap-4">
              <div className="max-w-md">
                <h3 className="font-headline italic text-3xl md:text-4xl mb-4">{menu.starters.featured.title}</h3>
                <p className="text-on-background/70 text-sm md:text-base leading-relaxed">{menu.starters.featured.desc}</p>
              </div>
              <div className="text-right shrink-0"><span className="font-label text-xl md:text-2xl border-b border-outline-variant/30 pb-1">{menu.starters.featured.price}</span></div>
            </div>
            <div className="mt-8 md:mt-12 -mb-10 -mr-6 md:-mr-10 self-end w-full md:w-2/3 transition-transform duration-700 group-hover:-translate-y-4 rounded-tl-[250px] overflow-hidden">
              <Image alt="vibrant papaya salad" className="w-full shadow-2xl" src={IMAGES.thaiGreenPapaya} />
            </div>
          </div>
          <div className="flex flex-col gap-6 md:col-span-12 lg:col-span-5 md:grid md:grid-cols-2 lg:flex lg:flex-col lg:gap-6">
            {menu.starters.cards.map((item, i) => (
              <div key={item.title} className={`${i === 1 ? "bg-primary text-white" : "bg-surface-container-low"} rounded-lg p-6 md:p-8 flex-1 flex flex-col justify-between`}>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1"><h4 className="font-headline italic text-xl md:text-2xl mb-2">{item.title}</h4><p className={`${i === 1 ? "text-white/80" : "text-on-background/60"} text-xs md:text-sm`}>{item.desc}</p></div>
                  <span className={`font-label text-base md:text-lg shrink-0 ${i === 1 ? "text-primary-fixed" : "text-secondary"}`}>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-full bg-surface-container-low rounded-lg p-6 md:p-10 mt-6">
            <h4 className="font-label uppercase tracking-widest text-[11px] md:text-xs mb-6 md:mb-8 text-secondary">{menu.starters.saladTitle}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {menu.starters.salads.map(({ name, desc, price }) => (
                <div key={name} className="border-l border-outline-variant/20 pl-4 md:pl-6 flex justify-between gap-4">
                  <div className="flex-1"><h5 className="font-headline italic text-lg md:text-xl mb-1">{name}</h5><p className="text-on-background/60 text-xs md:text-sm">{desc}</p></div>
                  <span className="font-label text-sm font-medium">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === "deep-fried" ? "grid" : "hidden"} grid-cols-1 md:grid-cols-12 gap-8 items-start md:items-center`} id="tab-deep-fried">
          <div className="md:col-span-4 lg:col-span-5 relative rounded-t-[80px] sm:rounded-t-[150px] md:rounded-t-[250px] overflow-hidden h-[280px] sm:h-[350px] md:h-[600px]">
            <Image fill sizes="(max-width: 768px) 100vw, 34vw" alt="crispy golden deep fried spring rolls" className="arch-image object-cover shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfGYCdLHkaLZBos3Afui3woAfVIAjUgJP5au-rpen5eFDvQ1nhJU7ZLOV-aO7BSUWvextcRmI7zuf746afIb55L6mZPR02jAgem2sQc2uiCVA0NhJfl_GTBX7vWO89x6GfbzHHJdVXo6eSgdfaPazqpL5kIm1_SbkQNauIv8rPPRSHT6APzy-tXfzMt8RvzF_8o9GHgp7QsOKKiJf-O4qEj-UZTzbSoBqj3UyIEq_soS7bb3UDPce8I5PlsxdUT6-vKxti3vUF6Vw" />
          </div>
          <div className="md:col-span-8 md:pl-12 lg:col-span-7">
            <p className="font-label uppercase tracking-[0.2em] text-secondary text-[11px] md:text-xs mb-6">{menu.deepFried.overline}</p>
            <div className="space-y-6 md:space-y-10">
              {menu.deepFried.items.map(({ name, desc, price }) => (
                <div key={name} className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                  <div><h3 className="font-headline italic text-2xl md:text-3xl mb-1">{name}</h3><p className="text-on-background/60 text-xs md:text-sm">{desc}</p></div>
                  <span className="font-label text-lg md:text-xl ml-4">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === "bao-buns" ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`} id="tab-bao-buns">
          <div className="md:col-span-2 bg-surface-container-low rounded-lg p-6 md:p-12 flex flex-col justify-between relative overflow-hidden h-full min-h-[350px] md:min-h-[500px]">
            <div className="z-10 w-full md:w-2/5">
              <span className="font-label uppercase text-[9px] md:text-[11px] text-primary px-3 py-1 bg-primary-fixed rounded-full inline-block mb-4 md:mb-6">{menu.baoBuns.badge}</span>
              <div className="flex justify-between items-start mb-4"><h3 className="font-headline italic text-3xl md:text-5xl">{menu.baoBuns.featured.name}</h3><span className="font-label text-2xl md:text-3xl text-secondary">{menu.baoBuns.featured.price}</span></div>
              <p className="text-on-background/70 text-sm md:text-base mb-8 leading-relaxed max-w-sm">{menu.baoBuns.featured.desc}</p>
            </div>
            <div className="absolute -right-8 -bottom-8 md:-right-12 md:-bottom-12 w-3/5 rotate-3 transform transition-transform hover:rotate-0 duration-700 pointer-events-none opacity-40 md:opacity-100">
              <Image alt="steamed bao bun with grilled chicken" className="arch-image shadow-2xl w-full" src={IMAGES.artisanBaoBunsHome} />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {menu.baoBuns.cards.map(({ name, price }, index) => (
              <div key={name} className="relative group rounded-lg overflow-hidden flex-1 min-h-[200px]">
                <Image fill sizes="(max-width: 768px) 100vw, 20vw" alt={name} className="object-cover transition-transform duration-500 group-hover:scale-110" src={index === 0 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuB2HoM8Cl0mHT6FTFjag4JdMaKODNX-d4Ph-mas9hOq4wg2UpWZox4rQHOay5h1NVZ0tE345UkKehlYtOg41-7VU2w_HGaLBI-jEnF_7hw2GG_yIlGDaytNN_HlWXVAquKWhWWgHGVd4GjEjTxOO75bCdWUelpTor7bX32WkkcvJ0F6ullIR8CkUX1lb3OGbL25dYS3N8DIUaS_o-kzNzxxxas9IrYQmdECBRdsudwMGSp2EmjW2UYe_w5SMlYLW1T3lmMj4toabGs" : "https://lh3.googleusercontent.com/aida-public/AB6AXuDFi6QOPl4g8IU6Apcaq_Cow-MrId9EwJ34byEoK3_ZRNUkZ4EUsxZHuGUsHHbOZDxx4Y5Ql0Hly3-0qU6bIp1oKRtnCLe-Zt8lrbIl2kvZhybyfOYIuBWANVx9bg9yECsICPYIaHyMmeB6MvZcV7diVAGFbhCjRKCQB4Vb14uPliJ9kavpon-JA3o84svCQ4KSQ9S6GUU1jlxxrVVeSNIGQHNMgIbj74IRYvm7BSssTdproj9jMRVRs4W1vgklgRs59uDZTHSy2Ys"} />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-end p-6">
                  <div className="flex justify-between items-end w-full">
                    <span className="text-white font-headline italic text-xl md:text-2xl">{name}</span>
                    <span className="text-white font-label text-sm">{price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 col-span-full">
            {menu.baoBuns.variants.map(({ name, price }, index) => {
              const isPrimary = index === 1;
              return (
                <div key={name} className={`${isPrimary ? "bg-primary" : "bg-surface-container-low border border-outline-variant/10"} p-6 md:p-8 rounded-lg text-center flex flex-col justify-center min-h-[120px]`}>
                  <h4 className={`font-headline italic text-xl md:text-2xl mb-1 ${isPrimary ? "text-white" : ""}`}>{name}</h4>
                  <span className={`font-label font-bold ${isPrimary ? "text-primary-fixed" : "text-secondary"}`}>{price}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`tab-content ${activeTab === "rice" ? "grid" : "hidden"} grid-cols-1 md:grid-cols-12 gap-6`} id="tab-rice">
          <div className="md:col-span-8 bg-surface-container-low rounded-lg p-6 md:p-12 overflow-hidden flex flex-col">
            <div className="flex justify-between items-start mb-6 gap-4">
              <div><h3 className="font-headline italic text-3xl md:text-5xl mb-2">{menu.rice.featured.name}</h3><p className="text-on-background/60 text-sm md:text-base max-w-md">{menu.rice.featured.desc}</p></div>
              <span className="font-label text-3xl md:text-4xl">{menu.rice.featured.price}</span>
            </div>
            <div className="mt-auto"><Image alt="nasi goreng platter" className="arch-image w-full h-48 md:h-80 object-cover mt-6 md:mt-12 shadow-inner" src={IMAGES.eggFriedRiceWithVegetable} /></div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-col">
            {menu.rice.cards.map((item, i) => (
              <div key={item.name} className={`${i === 0 ? "bg-primary text-white" : "bg-surface-dim"} rounded-lg p-8 md:p-10 flex-1 flex flex-col justify-center`}><h4 className="font-headline italic text-2xl md:text-3xl mb-2">{item.name}</h4><p className={`${i === 0 ? "text-white/70" : "text-on-background/60"} text-xs md:text-sm mb-4 md:mb-6`}>{item.desc}</p><span className="font-label text-xl md:text-2xl">{item.price}</span></div>
            ))}
          </div>
          <div className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
            {menu.rice.mini.map((item) => (
              <div key={item.name} className="bg-surface-container-low p-6 rounded-lg flex items-center justify-between">
                <div><h5 className="font-headline italic text-xl md:text-2xl">{item.name}</h5>{"sub" in item && item.sub && <p className="text-on-background/60 text-[11px] mt-1">{item.sub}</p>}</div>
                <span className="font-label text-lg md:text-xl">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`tab-content ${activeTab === "noodles" ? "block" : "hidden"} space-y-8 md:space-y-12`} id="tab-noodles">
          <div className="relative h-[280px] sm:h-[350px] md:h-[500px] rounded-lg overflow-hidden group">
            <Image alt="stir fried pho noodles" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src={IMAGES.stirFriedPho} />
            <div className="absolute inset-0 bg-linear-to-t from-on-background/90 via-on-background/40 to-transparent flex flex-col justify-end p-6 md:p-16">
              <p className="font-label uppercase tracking-[0.3em] text-secondary-fixed text-[11px] md:text-xs mb-2 md:mb-4">{menu.chefsSignature}</p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-12">
                <div className="flex-1"><h3 className="font-headline italic text-4xl md:text-6xl text-white mb-2 md:mb-4">{menu.noodles.featured.name}</h3><p className="text-white/70 text-sm md:text-base max-w-lg">{menu.noodles.featured.desc}</p></div>
                <div className="shrink-0 self-start md:self-auto"><span className="font-label text-2xl md:text-4xl text-white border border-white/40 bg-white/10 px-6 py-3 rounded-full">{menu.noodles.featured.price}</span></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menu.noodles.items.map((item, index) => {
              const imageSrc = [IMAGES.noodle1, IMAGES.sobaNoodlesWithTofu, IMAGES.udonNoodlesWithTofu, IMAGES.noodle2][index];
              return (
                <div key={item.name} className="bg-surface-container-low p-5 rounded-lg group flex flex-col">
                  <div className="aspect-square overflow-hidden rounded-lg mb-6"><Image alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" src={imageSrc} /></div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h5 className="font-headline italic text-xl md:text-2xl">{item.name}</h5>
                    {"price" in item && item.price && <span className="font-label text-on-background font-bold pt-1">{item.price}</span>}
                  </div>
                  {"desc" in item && item.desc && <p className="text-on-background/60 text-xs md:text-sm mt-auto">{item.desc}</p>}
                  {"variants" in item && item.variants && (
                    <div className="space-y-1 text-[11px] md:text-xs uppercase tracking-wider font-label text-on-background/60">
                      {item.variants.map(([label, val], i) => (
                        <div key={label} className={`flex justify-between ${i < item.variants.length - 1 ? "border-b border-outline-variant/10 pb-1" : ""}`}><span>{label}</span><span>{val}</span></div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className={`tab-content ${activeTab === "drinks" ? "grid" : "hidden"} grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16`} id="tab-drinks">
          <div className="space-y-10 md:space-y-12">
            <div className="flex items-center gap-4 border-l-2 border-primary pl-4 md:pl-6"><h3 className="font-headline italic text-3xl md:text-4xl text-on-background">{menu.theSides}</h3></div>
            <div className="space-y-6 md:space-y-8">
              {menu.drinks.sides.map(({ name, sub, price }) => (
                <div key={name} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 shadow-lg border border-outline-variant/30"><Image alt={name} className="w-full h-full object-cover" src={IMAGES.wokFriedSpinachWithGarlic} /></div>
                    <div className="flex flex-col"><h5 className="font-label text-lg md:text-xl font-medium">{name}</h5><p className="text-[11px] text-on-background/50 font-label tracking-wide uppercase">{sub}</p></div>
                  </div>
                  <span className="font-label text-base md:text-lg text-on-background/70">{price}</span>
                </div>
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {menu.drinks.sidePills.map(({ name, price }) => (
                  <div key={name} className="bg-surface-container-low px-5 md:px-6 py-3 md:py-4 rounded-full flex justify-between items-center border border-outline-variant/10">
                    <span className="font-label text-[11px] md:text-xs uppercase tracking-wider font-bold">{name}</span>
                    <span className="font-label text-sm">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-10 md:space-y-12">
            <div className="flex items-center gap-4 border-l-2 border-primary pl-4 md:pl-6"><h3 className="font-headline italic text-3xl md:text-4xl text-on-background">{menu.refreshments}</h3></div>
            <div className="space-y-5 md:space-y-6">
              {menu.drinks.beverages.map(({ name, sub, price }) => (
                <div key={name} className="flex justify-between items-end border-b border-outline-variant/10 pb-4 group">
                  <div className="flex flex-col pr-4"><h5 className="font-label text-base md:text-lg font-medium">{name}</h5><p className="text-[9px] md:text-[11px] text-on-background/40 uppercase tracking-widest mt-1">{sub}</p></div>
                  <span className="font-label text-base md:text-lg">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
