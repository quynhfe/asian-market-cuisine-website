import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;
const LEGACY_PATHS = new Set(["/", "/menu", "/story", "/gallery", "/find-us", "/booking"]);

function getLangFromQuery(request: NextRequest): "en" | "vi" | null {
  const lang = request.nextUrl.searchParams.get("lang");
  if (!lang) return null;
  if (lang === "en" || lang === "vi") return lang;
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  const queryLocale = getLangFromQuery(request);
  if (queryLocale) {
    const localizedPath = isLocale(first ?? "")
      ? `/${queryLocale}/${segments.slice(1).join("/")}`
      : `/${queryLocale}${pathname === "/" ? "" : pathname}`;

    const target = new URL(localizedPath, request.url);
    return NextResponse.redirect(target);
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  if (first && isLocale(first)) {
    return NextResponse.next();
  }

  if (LEGACY_PATHS.has(pathname)) {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}${search}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
