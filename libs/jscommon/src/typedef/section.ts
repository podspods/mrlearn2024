import { Status } from './typedef.common';


export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export enum Level {
  INFO = 300,
  WARNING,
  ERROR
  
  }
export enum SectionType {
  STANDARD = 600,
  CTA,
  NEWS,
  FOOTER,
  SCOOP,
  PROLOG,
  EPILOG
}

export enum PicPosition {
  Left = 200,
  Right,
  Center
}

export type ImageType = {
  src: string;
  alt: string[]; // multi lang alt
  width: number;
  height: number;
  position: PicPosition;
};

export type SectionIdent = {
  id: string;
  status: Status;
  title: string[]; // multi lang title
  titleLink: string[]; // multi lang link for title
  pageId: number;
  sectionOrder: number;
  dateRange: DateRange;
  type: SectionType;
  level: Level;
};

export type Option = {
  value: string;
  label: string;
};


export type Section = {
  ident: SectionIdent;
  image: ImageType;
  text: string[]; // multi lang text body
  textCTA: string[]; // multi lang text body
  date: {
    create: Date;
    update: Date;
  };
};
