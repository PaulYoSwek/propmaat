import { NextResponse, type NextRequest } from "next/server";
import { localeCookie, resolveRequestPath, type Locale } from "./i18n/config";

function withLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(localeCookie, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export function proxy(request: NextRequest) {
  const decision = resolveRequestPath(request.nextUrl.pathname);
  const url = request.nextUrl.clone();

  if (decision.action === "redirect") {
    url.pathname = decision.pathname;
    return withLocaleCookie(NextResponse.redirect(url), decision.locale);
  }

  if (decision.action === "rewrite") {
    url.pathname = decision.pathname;
    return withLocaleCookie(NextResponse.rewrite(url), decision.locale);
  }

  return withLocaleCookie(NextResponse.next(), decision.locale);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/data|favicon.ico|icon.svg|.*\\..*).*)",
  ],
};
