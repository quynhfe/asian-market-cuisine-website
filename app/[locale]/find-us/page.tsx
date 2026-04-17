import type { Metadata } from "next";
import {
  FindUsHeroSection,
  FindUsBentoSection,
  FindUsDigitalPortalSection,
  FindUsCtaSection,
  FindUsAtmosphereSection,
} from "@/components/sections/find-us/FindUsSections";
import { getDictionary, resolveLocale } from "@/lib/i18n/getDictionary";

export async function generateMetadata({ params }: PageProps<"/[locale]/find-us">): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return {
    title: dictionary.metadata.findUs.title,
    description: dictionary.metadata.findUs.description,
    alternates: {
      canonical: `/${resolvedLocale}/find-us`,
      languages: {
        en: "/en/find-us",
        vi: "/vi/find-us",
      },
    },
    openGraph: {
      locale: resolvedLocale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: [resolvedLocale === "vi" ? "en_US" : "vi_VN"],
    },
  };
}

export default async function FindUsPage({ params }: PageProps<"/[locale]/find-us">) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main className="pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-24 px-4 md:px-8 lg:px-12 w-full overflow-hidden">
      <FindUsHeroSection locale={resolvedLocale} dictionary={dictionary} />
      <FindUsBentoSection locale={resolvedLocale} dictionary={dictionary} />
      <FindUsDigitalPortalSection locale={resolvedLocale} dictionary={dictionary} />
      <FindUsCtaSection locale={resolvedLocale} dictionary={dictionary} />
      <FindUsAtmosphereSection locale={resolvedLocale} dictionary={dictionary} />
    </main>
  );
}
