import AwardBanner from "@/components/features/AwardBanner";
import Image from "next/image";
import FlipCard from "@/components/features/FlipCard";
import { IMAGES } from "@/lib/images";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface StorySectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function StoryHeroSection({ dictionary }: StorySectionProps) {
  const story = dictionary.story;

  return (
    <section className="w-full mb-12 md:mb-20 lg:mb-32 pt-6 md:pt-10">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-label text-[10px] tracking-[0.2em] uppercase rounded-full mb-6 md:mb-8">
          {story.heroTag}
        </span>
        <h1 className="font-headline italic text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-primary leading-tight mb-8 md:mb-16">
          {story.heroTitle}
        </h1>

        <div className="hidden lg:flex relative h-[600px] items-center justify-center mt-12">
          <div className="absolute w-64 h-80 -rotate-3 -translate-x-64 -translate-y-12 z-10 shadow-xl overflow-hidden rounded-lg">
            <Image className="w-full h-full object-cover" src={IMAGES.gallery4} alt="" />
          </div>
          <div className="absolute w-72 h-96 rotate-2 translate-x-48 -translate-y-32 z-20 shadow-2xl overflow-hidden rounded-lg border-2 border-white">
            <Image className="w-full h-full object-cover" src={IMAGES.gallery3} alt="" />
          </div>
          <div className="absolute w-80 h-[450px] -rotate-1 -translate-x-4 translate-y-16 z-30 shadow-2xl overflow-hidden rounded-lg border-2 border-white">
            <Image preload className="w-full h-full object-cover" src={IMAGES.ourStoryHero} alt="" />
          </div>
          <div className="absolute w-56 h-72 rotate-4 translate-x-80 translate-y-20 z-10 shadow-xl overflow-hidden rounded-lg">
            <Image className="w-full h-full object-cover" src={IMAGES.stirFriedPho} alt="" />
          </div>
        </div>

        <div className="lg:hidden mt-12 grid grid-cols-2 gap-4 sm:gap-6 px-2">
          <div className="col-span-2 relative aspect-[16/10] overflow-hidden rounded-t-[40%] rounded-b-2xl shadow-xl border-2 border-white">
            <Image className="w-full h-full object-cover" src={IMAGES.ourStoryHero} alt="" />
          </div>

          <div className="col-span-1 aspect-square relative overflow-hidden rounded-2xl shadow-lg -rotate-2 border border-white/40">
            <Image className="w-full h-full object-cover" src={IMAGES.gallery4} alt="" />
          </div>

          <div className="col-span-1 aspect-[4/5] relative overflow-hidden rounded-2xl shadow-lg rotate-2 -mt-12 sm:-mt-16 border-2 border-white z-10">
            <Image className="w-full h-full object-cover" src={IMAGES.gallery3} alt="" />
          </div>

          <div className="col-span-1 -mt-8 sm:-mt-12 relative h-32 sm:h-48 overflow-hidden rounded-2xl shadow-lg border border-white/40">
            <Image className="w-full h-full object-cover" src={IMAGES.stirFriedPho} alt="" />
          </div>

          <div className="col-span-1 flex items-center justify-center p-4">
            <div className="text-secondary/40 font-headline italic text-xl">{story.since}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StoryAwardSection({ dictionary }: StorySectionProps) {
  return (
    <AwardBanner
      marqueeItems={[dictionary.home.hero.awardTitle]}
      headline={dictionary.story.familyBackTitle}
      stats={[
        { value: "5.0", label: dictionary.home.hero.starRating },
        {
          value: <span className="material-symbols-outlined text-white text-3xl mb-2">delivery_dining</span>,
          label: "GrabFood Partner",
        },
        {
          value: <span className="material-symbols-outlined text-white text-3xl mb-2">verified</span>,
          label: dictionary.home.hero.certified,
        },
      ]}
    />
  );
}

export function ChefStorySection({ dictionary }: StorySectionProps) {
  const story = dictionary.story;

  return (
    <section className="w-full py-16 md:py-32 bg-background">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <div className="md:sticky md:top-32">
          <div className="overflow-hidden bg-surface-container-high aspect-4/5 shadow-2xl rounded-t-[50%]">
            <Image
              className="w-full h-full object-cover"
              src={IMAGES.chefHang2}
              alt={story.chefName}
            />
          </div>
        </div>
        <div className="space-y-6 md:space-y-10 py-4 md:py-10">
          <span className="text-secondary font-label text-xs tracking-widest uppercase block">{story.chefOverline}</span>
          <h2 className="font-headline italic text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary">{story.chefName}</h2>
          <div className="space-y-5 md:space-y-6 text-on-surface/80 leading-relaxed text-base md:text-lg">
            {story.chefParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <blockquote className="pl-6 md:pl-8 border-l-[3px] border-secondary text-primary font-headline italic text-xl md:text-2xl py-2">
              &ldquo;{story.chefQuote}&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PhilosophySection({ dictionary }: StorySectionProps) {
  const story = dictionary.story;

  return (
    <section className="bg-surface-container-low py-16 md:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-20">
          <span className="text-secondary font-label text-[10px] tracking-[0.4em] uppercase block mb-4">{story.philosophyOverline}</span>
          <h2 className="font-headline italic text-4xl md:text-5xl lg:text-6xl text-primary">{story.philosophyTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative">
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-primary/10" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-primary/10" />
          {story.pillars.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-start group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 md:mb-8 border border-secondary/20 group-hover:bg-primary transition-colors duration-500">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-500 text-2xl md:text-3xl">{icon}</span>
              </div>
              <h3 className="font-headline italic text-2xl md:text-3xl text-primary mb-4 md:mb-6">{title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed mb-6 md:mb-8 text-sm md:text-base">{desc}</p>
              <div className="h-0.5 w-12 bg-secondary/30 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MeetTheFamilySection({ dictionary }: StorySectionProps) {
  const story = dictionary.story;

  return (
    <section className="py-16 md:py-32 px-4 md:px-8 lg:px-20 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6 md:gap-8">
          <div>
            <span className="text-secondary font-label text-xs tracking-widest uppercase block mb-4">{story.familyOverline}</span>
            <h2 className="font-headline italic text-4xl md:text-5xl lg:text-6xl text-primary">{story.familyTitle}</h2>
          </div>
          <div className="bg-primary text-white px-8 py-3 rounded-full font-label text-[10px] tracking-widest uppercase">{story.familySince}</div>
        </div>

        <div className="flex flex-col gap-6 h-auto md:h-[700px] lg:h-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-1/2">
            <FlipCard
              className="md:col-span-2 h-[300px] sm:h-[380px] md:h-full"
              direction="v"
              frontContent={
                <>
                  <Image alt="The whole team" className="w-full h-full object-cover" src={IMAGES.meetOurFamily} />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent flex items-end p-6 md:p-8">
                    <span className="text-white font-headline italic text-2xl md:text-4xl">{story.familyFrontTitle}</span>
                  </div>
                </>
              }
              backContent={
                <div className="w-full h-full bg-primary flex flex-col items-center justify-center p-6 md:p-12 text-center text-white">
                  <h3 className="font-headline italic text-3xl md:text-5xl mb-4 md:mb-6">{story.familyBackTitle}</h3>
                  <p className="max-w-2xl font-body opacity-80 leading-relaxed text-base md:text-lg">{story.familyBackText}</p>
                </div>
              }
            />
            <FlipCard
              className="md:col-span-1 h-[300px] sm:h-[380px] md:h-full"
              direction="v"
              frontContent={
                <div className="w-full h-full bg-secondary flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-4xl mb-4">restaurant_menu</span>
                  <h4 className="font-headline italic text-2xl">{story.familyCard2Title}</h4>
                  <p className="text-[10px] uppercase tracking-widest mt-4 opacity-70">{story.familyCard2Tag}</p>
                </div>
              }
              backContent={<Image alt="Team member" className="w-full h-full object-cover" src={IMAGES.meetTheFamily1} />}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-auto md:h-1/2">
            <FlipCard
              className="md:col-span-2 h-[300px] sm:h-[380px] md:h-full"
              direction="v"
              frontContent={
                <div className="w-full h-full bg-surface-container-high flex flex-col items-center justify-center p-6 md:p-8 text-center">
                  <h4 className="font-headline italic text-2xl md:text-3xl text-primary mb-3 md:mb-4">{story.familyCard3Title}</h4>
                  <p className="font-body text-on-surface-variant text-sm md:text-base">{story.familyCard3Text}</p>
                </div>
              }
              backContent={<Image alt="The craft" className="w-full h-full object-cover" src={IMAGES.meetTheFamily2} />}
            />
            <FlipCard
              className="md:col-span-3 h-[300px] sm:h-[380px] md:h-full"
              direction="h"
              frontContent={<Image alt="Kitchen team" className="w-full h-full object-cover" src={IMAGES.meetTheFamily4} />}
              backContent={
                <div className="w-full h-full bg-primary-container flex flex-col items-center justify-center p-6 md:p-12 text-center text-white">
                  <span className="material-symbols-outlined text-4xl md:text-5xl mb-4 md:mb-6 text-secondary">groups</span>
                  <h4 className="font-headline italic text-3xl md:text-4xl mb-3 md:mb-4">{story.familyCard4Title}</h4>
                  <p className="font-body opacity-80 leading-relaxed text-sm md:text-base">{story.familyCard4Text}</p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
