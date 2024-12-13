import {
  DateRange,
  EnhanceLink,
  ImageType,
  Level,
  MenuItem,
  Option,
  PicPosition,
  Section,
  SectionType,
  Status
} from '../typedef';

export const defaultItemList: MenuItem[] = [
  {
    id: 1,
    name: 'menu 1',
    href: '/menu_1'
  },
  {
    id: 2,
    name: 'menu 2',
    href: '/menu_2'
  },
  {
    id: 3,
    name: 'menu 3',
    href: '/menu_3'
  },
  {
    id: 4,
    name: 'menu 4',
    href: '/menu_4'
  }
];

export const menuIrisations: MenuItem[] = [
  {
    id: 1,
    name: 'Home',
    href: '/'
  },
  {
    id: 2,
    name: 'Design',
    href: '/design'
  },
  {
    id: 3,
    name: 'restoration',
    href: '/restoration'
  },
  {
    id: 4,
    name: 'workshop',
    href: '/workshop'
  },
  {
    id: 5,
    name: 'service',
    href: '/service'
  },
  {
    id: 6,
    name: 'News',
    href: '/news'
  },
  {
    id: 7,
    name: 'Contact',
    href: '/contact'
  }
];

export const defaultLocalisation: string[] = [
  'Brand corpo.',
  '123 street town city',
  '12345 zipCode',
  'cell: 09090909090'
];

export const irisationsLocalisation: string[] = [
  "Création & Restauration de vitraux d'art",
  'Paris - Versailles',
  'Tel : 07 82 72 24 88'
];

export const dateRangeInit: DateRange = {
  startDate: new Date('01/01/2000'),
  endDate: new Date()
};

export const irisationsSection: Section = {
  ident: {
    id: 'id-1',
    status: Status.VALIDE,
    pageId: 1,
    sectionOrder: 10,
    title: ['titre FR', 'titre EN'],
    titleLink: ['titre Link FR', 'titre Link EN'],
    dateRange: { ...dateRangeInit },
    type: SectionType.STANDARD,
    level: Level.INFO
  },
  image: {
    src: 'http://irisations.com/img/eleve/vitrail_nadine_stage_debutant_decouverte_LD_Iri.jpg',
    alt: ['Alt  image fr', 'alt image EN'],
    width: 200,
    height: 0,
    position: PicPosition.Left
  },
  text: [
    "<br/>1. Session Novembre 2024<br/>1. Formation Pro CAP Arts & Techniques du Verre, <br/>Vitrailliste pour adultes. Inscriptions ouvertes en Juin 2024 jusqu'au 13 Octobre 2024 sous réserve de places disponibles.",
    "[EN] Session Novembre 2024 - Formation Pro CAP Arts & Techniques du Verre, Vitrailliste pour adultes. Inscriptions ouvertes en Juin 2024 jusqu'au 13 Octobre 2024 sous réserve de places disponibles."
  ],
  textCTA: ['text CTA FR', 'textCTA EN'],
  date: { create: new Date(), update: new Date() }
};

export const sectionNews: Section = {
  ident: {
    id: 'id-1',
    status: Status.VALIDE,
    pageId: 1,
    sectionOrder: 10,
    title: ['titre FR', 'titre EN'],
    titleLink: ['titre Link FR', 'titre Link EN'],
    dateRange: { startDate: new Date('01/01/2000'), endDate: new Date() },
    type: SectionType.NEWS,
    level: Level.INFO
  },
  image: {
    src: 'http://irisations.com/img/eleve/vitrail_nadine_stage_debutant_decouverte_LD_Iri.jpg',
    alt: ['Alt  image fr', 'alt image EN'],
    width: 200,
    height: 0,
    position: PicPosition.Left
  },
  text: [
    "<br/>1. Session Novembre 2024<br/>1. Formation Pro CAP Arts & Techniques du Verre, <br/>Vitrailliste pour adultes. Inscriptions ouvertes en Juin 2024 jusqu'au 13 Octobre 2024 sous réserve de places disponibles.",
    "[EN] Session Novembre 2024 - Formation Pro CAP Arts & Techniques du Verre, Vitrailliste pour adultes. Inscriptions ouvertes en Juin 2024 jusqu'au 13 Octobre 2024 sous réserve de places disponibles."
  ],
  textCTA: ['text CTA FR', 'textCTA EN'],
  date: {
    create: new Date(),
    update: new Date()
  }
};

export const footerSection: Section = {
  ...irisationsSection,
  ident: { ...irisationsSection.ident, type: SectionType.FOOTER }
};

export const footerSectionList: Section[] = [
  footerSection,
  footerSection,
  footerSection
];

export const scoopTest: Section = {
  ...irisationsSection,
  ident: {
    ...irisationsSection.ident,
    type: SectionType.SCOOP,
    dateRange: { startDate: new Date('01/01/2000'), endDate: new Date() }
  }
};

export const optionlistTest: Option[] = [
  { value: '1', label: 'option 1' },
  { value: '2', label: 'option 2' },
  { value: '3', label: 'option 3' },
  { value: '4', label: 'option 4' },
  { value: '5', label: 'option 5' }
];

export const imageTest: ImageType = {
  src: 'https://loremicon.com/poly/128/128/805634452264/jpg',
  alt: ['Lorem icon  test', '[EN]Lorem pic image test'],
  width: 50,
  height: 0,
  position: PicPosition.Center
};

export const internallinkListTest: EnhanceLink[] = [
  {
    name: 'internal link 1',
    href: '/internal-link-1',
    textHover: undefined,
    image: undefined
  },
  {
    name: 'internal link 2',
    href: '/internal-link-2',
    textHover: undefined,
    image: undefined
  },
  {
    name: 'internal link 3',
    href: '/internal-link-3',
    textHover: undefined,
    image: undefined
  },
];


export const facebookIcon: ImageType = {
  src: 'https://icon-library.com/images/facebook-image-icon/facebook-image-icon-1.jpg',
  alt: ["facebook j'aime", 'facebook like'],
  width: 47,
  height: 33,
  position: PicPosition.Center
};

export const instagramIcon: ImageType = {
  src: 'https://icon-library.com/images/instagram-small-icon/instagram-small-icon-24.jpg',
  alt: ['instagram logo', 'instagram logo'],
  width: 33,
  height: 33,
  position: PicPosition.Center
};

export const pinterestIcon: ImageType = {
  src: 'https://www.pngrepo.com/png/299487/180/pinterest.png',
  alt: ['pinterest logo', 'pinterest logo'],
  width: 33,
  height: 33,
  position: PicPosition.Center
};



export const socialNetworkTest :  EnhanceLink[] = [

  {
    name: '',
    href: '#',
    textHover: 'text hover facebookIcon',
    image: facebookIcon,
  },
  {
    name: '',
    href: '#',
    textHover: 'text hover instagramIcon',
    image: instagramIcon,
  },
  {
    name: '',
    href: '#',
    textHover: 'text hover pinterestIcon',
    image: pinterestIcon,
  }
]

