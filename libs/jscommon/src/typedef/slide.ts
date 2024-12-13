import { Status } from './typedef.common';

export type Slide = {
  id: string;
  pageId: number;
  title: string;
  src: string;
  label: string[];
  slideOrder: number;
  alt: string[];
  status: Status;
  type: number;
  date: {
    create: Date;
    update: Date;
  };
};