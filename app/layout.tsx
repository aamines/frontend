import "./globals.css";
import type { Metadata } from "next";

// components
import Provider from "./provider";
import { Locale, i18n } from "@/common/i18";

export const metadata: Metadata = {
  title: "Projectia",
  description: "All in one communication and management platform",
};

export default function RootLayout({
  params,
  children,
}: {
  params: { lang: Locale };
  children: React.ReactNode;
}) {
  return (
    <html lang={params.lang ?? i18n.defaultLocale}>
      <Provider>{children}</Provider>
    </html>
  );
}
