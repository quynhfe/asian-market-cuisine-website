import type { Metadata } from "next";
import BookingContent from "@/components/sections/booking/BookingContent";
import { getDictionary, resolveLocale } from "@/lib/i18n/getDictionary";

export async function generateMetadata({ params }: PageProps<"/[locale]/booking">): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return {
    title: dictionary.metadata.booking.title,
    description: dictionary.metadata.booking.description,
    alternates: {
      canonical: `/${resolvedLocale}/booking`,
      languages: {
        en: "/en/booking",
        vi: "/vi/booking",
      },
    },
    openGraph: {
      locale: resolvedLocale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: [resolvedLocale === "vi" ? "en_US" : "vi_VN"],
    },
  };
}

export default async function BookingPage({ params }: PageProps<"/[locale]/booking">) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);

  return <BookingContent locale={resolvedLocale} dictionary={dictionary} />;
}
