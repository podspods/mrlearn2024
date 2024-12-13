// global.d.ts
import en from './locales/en/translation.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
