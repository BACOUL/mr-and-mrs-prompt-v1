import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["fr", "en"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some(l => pathname.startsWith(`/${l}`));
  if (!hasLocale && !pathname.startsWith("/_next") && !pathname.startsWith("/api") && pathname !== "/robots.txt" && pathname !== "/sitemap.xml") {
    const url = req.nextUrl.clone();
    url.pathname = `/fr${pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|static|.*\\..*).*)"],
};
