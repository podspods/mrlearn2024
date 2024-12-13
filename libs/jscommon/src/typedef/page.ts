import { Section } from './section';
import { Slide } from './slide';

export type PageContains = {
  prolog?: Section;
  epilog?: Section;
  scoop?: Section;
  body?: Section[];
  CTA?: Section;
  slideList?: Slide[];
};


export type Page = {
  id: number;
  label: string;
};

