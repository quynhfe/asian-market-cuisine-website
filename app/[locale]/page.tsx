import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import FeaturedDishesSection from "@/components/sections/home/FeaturedDishesSection";
import ChefTeaserSection from "@/components/sections/home/ChefTeaserSection";
import ReviewsSection from "@/components/sections/home/ReviewsSection";
import VisitUsSection from "@/components/sections/home/VisitUsSection";
import { resolveLocale, getDictionary } from "@/lib/i18n/getDictionary";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return {
    title: dictionary.metadata.home.title,
    description: dictionary.metadata.home.description,
    alternates: {
      canonical: `/${resolvedLocale}`,
      languages: {
        en: "/en",
        vi: "/vi",
      },
    },
    openGraph: {
      locale: resolvedLocale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: [resolvedLocale === "vi" ? "en_US" : "vi_VN"],
    },
  };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main className="w-full overflow-hidden">
      <HeroSection locale={resolvedLocale} dictionary={dictionary} />
      <FeaturedDishesSection locale={resolvedLocale} dictionary={dictionary} />
      <ChefTeaserSection locale={resolvedLocale} dictionary={dictionary} />
      <ReviewsSection locale={resolvedLocale} dictionary={dictionary} />
      <VisitUsSection locale={resolvedLocale} dictionary={dictionary} />
    </main>
  );
}
