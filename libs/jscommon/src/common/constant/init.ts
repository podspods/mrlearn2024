import {
  GpsPosition,
  ImageType,
  Level,
  MenuItem,
  Option,
  PageContains,
  PicPosition,
  Section,
  SectionIdent,
  SectionType,
  Slide,
  Status
} from '../../typedef';

export const langList: Option[] = [
  { value: 'fr', label: 'Français' },
  { value: 'en', label: 'English' }
];

export const menuItemListInit: MenuItem[] = [];
export const dateInit: Date = new Date('01/01/1900');
export const pageIdInit = 0;
export const idInit: string = 'init-1';
export const today = new Date();

export const dateRangeToday = {
  startDate: today,
  endDate: today
};

export const optionInit: Option = {
  value: '-1',
  label: 'Init value'
};

export const imageInit: ImageType = {
  src: '',
  alt: ['', ''],
  width: 1,
  height: 1,
  position: PicPosition.Center
};

export const sectionIdentInit: SectionIdent = {
  id: idInit,
  status: Status.INIT,
  title: ['', ''],
  titleLink: ['', ''],
  pageId: pageIdInit,
  sectionOrder: 10,
  dateRange: dateRangeToday,
  type: SectionType.STANDARD,
  level: Level.INFO
};

export const sectionInit: Section = {
  ident: sectionIdentInit,
  image: imageInit,
  text: ['', ''],
  textCTA: ['', ''],

  date: {
    create: new Date(),
    update: new Date()
  }
};

export const slideInit: Slide = {
  id: idInit,
  pageId: pageIdInit,
  title: '',
  src: '',
  label: [],
  slideOrder: 10,
  alt: [],
  status: Status.INIT,
  type: 0,
  date: {
    create: new Date(),
    update: new Date()
  }
};


export const pageContainsInit: PageContains ={


}
export const gpsPositionInit : GpsPosition = {

  lng : 36.73516152209808, lat :3.0860823353519633
}