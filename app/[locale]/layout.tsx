import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Newsreader, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/config";
import { getDictionary, resolveLocale } from "@/lib/i18n/getDictionary";
import "../globals.css";

const hydrationCleanupScript = `
(() => {
  const attrs = ["cz-shortcut-listen", "data-new-gr-c-s-check-loaded", "data-gr-ext-installed"];
  const clean = (el) => {
    if (!el) return;
    for (const name of attrs) {
      if (el.hasAttribute(name)) {
        el.removeAttribute(name);
      }
    }
  };
  clean(document.documentElement);
  clean(document.body);
})();
`;

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Asian Market Cuisine",
  servesCuisine: ["Vietnamese", "Thai", "Southeast Asian"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "49 Tran Van Dan Street",
    addressLocality: "Da Nang",
    addressCountry: "VN",
  },
  telephone: "0899856547",
  openingHours: "Mo-Sa 11:00-21:00",
};

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-headline",
  style: ["italic", "normal"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-label",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function toOgLocale(locale: Locale) {
  return locale === "vi" ? "vi_VN" : "en_US";
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = getDictionary(locale);

  return {
    metadataBase: new URL("https://asianmarketcuisine.vn"),
    title: {
      default: `Asian Market Cuisine | ${locale === "vi" ? "Hương vị chợ Á đương đại" : "The Serene Alchemist"}`,
      template: "%s | Asian Market Cuisine",
    },
    description:
      locale === "vi"
        ? "Bữa tối an yên với hương vị chợ Á đương đại tại Asian Market Cuisine, Đà Nẵng."
        : "A calm dinner shaped by Southeast Asian market spirit at Asian Market Cuisine, Da Nang.",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        vi: "/vi",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: toOgLocale(locale),
      alternateLocale: [toOgLocale(locale === "vi" ? "en" : "vi")],
      url: `https://asianmarketcuisine.vn/${locale}`,
      siteName: dictionary.brand.name,
      title: `Asian Market Cuisine | ${locale === "vi" ? "Hương vị chợ Á đương đại" : "The Serene Alchemist"}`,
      description:
        locale === "vi"
          ? "Bữa tối an yên với hương vị chợ Á đương đại tại Asian Market Cuisine, Đà Nẵng."
          : "A calm dinner shaped by Southeast Asian market spirit at Asian Market Cuisine, Da Nang.",
    },
    twitter: {
      card: "summary_large_image",
      title: `Asian Market Cuisine | ${locale === "vi" ? "Hương vị chợ Á đương đại" : "The Serene Alchemist"}`,
      description:
        locale === "vi"
          ? "Bữa tối an yên với hương vị chợ Á đương đại tại Asian Market Cuisine, Đà Nẵng."
          : "A calm dinner shaped by Southeast Asian market spirit at Asian Market Cuisine, Da Nang.",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: rawLocale } = await params;

  if (!LOCALES.includes(rawLocale as Locale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} className="light scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="hydration-cleanup" strategy="beforeInteractive">{hydrationCleanupScript}</Script>
        <Script
          id="restaurant-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(restaurantJsonLd)}
        </Script>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${newsreader.variable} ${dmSans.variable} ${plusJakartaSans.variable} bg-background text-on-surface font-body selection:bg-primary-container selection:text-white overflow-x-hidden flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 z-100 grain-overlay font-body"></div>
        <Navbar locale={locale} dictionary={dictionary} />
        <div className="grow">{children}</div>
        <Footer locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
