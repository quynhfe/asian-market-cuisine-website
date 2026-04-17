import type { Metadata } from "next";
import { GalleryHeroSection, GalleryCTASection, GalleryVideoSection } from "@/components/sections/gallery/GalleryStaticSections";
import GalleryGridSection from "@/components/sections/gallery/GalleryGridSection";
import { getDictionary, resolveLocale } from "@/lib/i18n/getDictionary";

export async function generateMetadata({ params }: PageProps<"/[locale]/gallery">): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return {
    title: dictionary.metadata.gallery.title,
    description: dictionary.metadata.gallery.description,
    alternates: {
      canonical: `/${resolvedLocale}/gallery`,
      languages: {
        en: "/en/gallery",
        vi: "/vi/gallery",
      },
    },
    openGraph: {
      locale: resolvedLocale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: [resolvedLocale === "vi" ? "en_US" : "vi_VN"],
    },
  };
}

export default async function GalleryPage({ params }: PageProps<"/[locale]/gallery">) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main className="w-full overflow-hidden">
      <GalleryHeroSection locale={resolvedLocale} dictionary={dictionary} />
      <GalleryGridSection locale={resolvedLocale} dictionary={dictionary} />
      <GalleryCTASection locale={resolvedLocale} dictionary={dictionary} />
      <GalleryVideoSection locale={resolvedLocale} dictionary={dictionary} />
    </main>
  );
}
