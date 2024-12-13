import 'server-only';

type Locale = 'en' | 'fr';

const dictionaries: Record<Locale, () => Promise<Record<string, string>>> = {
  en: () => import('../../locales/en/translation.json').then((module) => module.default),
  fr: () => import('../../locales/fr/translation.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Record<string, string>> => {
  return dictionaries[locale]();
};
