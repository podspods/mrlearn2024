// types/i18next.d.ts
import 'react-i18next';

// Déclaration des namespaces pour les traductions
declare module 'react-i18next' {
  interface Resources {
    common: typeof import('../public/locales/en/common.json');
    // Ajoutez d'autres namespaces ici si nécessaire
  }
}
