import { langList } from '../common';
import { Lang, Option, Page } from '../typedef';


export function page2Option(pageList: Page[]): Option[] {
  if (!pageList?.length) return [];
  const result: Option[] = pageList.map((page) => ({
    value: page.id.toString(),
    label: page.label
  }));
  return result;
}
// ------------encodeStringToNumber  -------------------------------------------------------------------------------------


export function getLangId(language: keyof typeof Lang): number {
  return Lang[language];
}

export function lang2Id(lang: string): number {
  return langList.findIndex((option) => option.value === lang);
}

