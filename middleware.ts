// import { i18n } from "./common/i18";

// import { NextRequest, NextResponse } from "next/server";
// import { match as machLocale } from "@formatjs/intl-localematcher";

// function parseCookie(cookie: string): Record<string, string> {
//   return cookie
//     .split(";")
//     .reduce((acc: Record<string, string>, curr: string) => {
//       const [name, value]: string[] = curr.trim().split("=");
//       acc[name] = decodeURIComponent(value);
//       return acc;
//     }, {});
// }

// function getLocale(request: Request): string {
//   const headers = new Headers(request.headers);
//   // const acceptLanguage = headers.get('accept-language');
//   const cookie = headers.get("cookie");
//   const parsedCookie: Record<string, string> = cookie
//     ? parseCookie(cookie)
//     : {};
//   const activeLang = parsedCookie?.lang || i18n.defaultLocale;

//   // if (acceptLanguage) {
//   //   headers.set('accept-language', acceptLanguage.replaceAll('_', '-'));
//   // }

//   // const headersObject = Object.fromEntries(headers.entries());
//   // const languages = new Negotiator({ headers: headersObject }).languages();

//   return machLocale(
//     [activeLang],
//     i18n.locales as unknown as string[],
//     i18n.defaultLocale
//   );
// }

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   const homePaths = i18n.locales.map((locale) => `/${locale}`);

//   // Redirect to '/user/signin' when requesting '/'
//   if (pathname === `/` || homePaths.includes(pathname)) {
//     return NextResponse.redirect(new URL(`${pathname}login`, request.url));
//   }

//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);

//     return NextResponse.redirect(
//       new URL(`/${locale}/${pathname}`, request.url)
//     );
//   }
// }

export const middleware = () => {};
