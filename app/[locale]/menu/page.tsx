import type { Metadata } from "next";
import MenuHeroSection from "@/components/sections/menu/MenuHeroSection";
import MenuTabsSection from "@/components/sections/menu/MenuTabsSection";
import { getDictionary, resolveLocale } from "@/lib/i18n/getDictionary";

export async function generateMetadata({ params }: PageProps<"/[locale]/menu">): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return {
    title: dictionary.metadata.menu.title,
    description: dictionary.metadata.menu.description,
    alternates: {
      canonical: `/${resolvedLocale}/menu`,
      languages: {
        en: "/en/menu",
        vi: "/vi/menu",
      },
    },
    openGraph: {
      locale: resolvedLocale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: [resolvedLocale === "vi" ? "en_US" : "vi_VN"],
    },
  };
}

export default async function MenuPage({ params }: PageProps<"/[locale]/menu">) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main className="w-full overflow-hidden">
      <MenuHeroSection locale={resolvedLocale} dictionary={dictionary} />
      <MenuTabsSection locale={resolvedLocale} dictionary={dictionary} />
    </main>
  );
}
