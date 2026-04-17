import type { Metadata } from "next";
import {
  StoryHeroSection,
  StoryAwardSection,
  ChefStorySection,
  PhilosophySection,
  MeetTheFamilySection,
} from "@/components/sections/story/StoryStaticSections";
import TestimonialCarouselSection from "@/components/sections/story/TestimonialCarouselSection";
import { getDictionary, resolveLocale } from "@/lib/i18n/getDictionary";

export async function generateMetadata({ params }: PageProps<"/[locale]/story">): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return {
    title: dictionary.metadata.story.title,
    description: dictionary.metadata.story.description,
    alternates: {
      canonical: `/${resolvedLocale}/story`,
      languages: {
        en: "/en/story",
        vi: "/vi/story",
      },
    },
    openGraph: {
      locale: resolvedLocale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: [resolvedLocale === "vi" ? "en_US" : "vi_VN"],
    },
  };
}

export default async function StoryPage({ params }: PageProps<"/[locale]/story">) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main className="w-full overflow-hidden pt-16 md:pt-20 lg:pt-24">
      <StoryHeroSection locale={resolvedLocale} dictionary={dictionary} />
      <StoryAwardSection locale={resolvedLocale} dictionary={dictionary} />
      <ChefStorySection locale={resolvedLocale} dictionary={dictionary} />
      <PhilosophySection locale={resolvedLocale} dictionary={dictionary} />
      <MeetTheFamilySection locale={resolvedLocale} dictionary={dictionary} />
      <TestimonialCarouselSection locale={resolvedLocale} dictionary={dictionary} />
    </main>
  );
}
