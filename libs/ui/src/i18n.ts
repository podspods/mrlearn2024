import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// Importez les fichiers de traduction
import translationEN from '../public/locales/en/translation.json';
import translationFR from '../public/locales/fr/translation.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // Pas besoin d'échapper HTML dans les traductions
    },
  });

export default i18n;
