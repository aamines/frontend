const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const i18n = {
  defaultLocale: locales[0],
  locales: locales,
};
