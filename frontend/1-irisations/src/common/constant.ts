import { ContactPlaceHolder, EnhanceLink, GpsPosition, ImageType, MenuItem, Option, PicPosition } from '@irachus/jscommon';
import { route } from './api';
import { ADDRESS_CITY, ADDRESS_COUNTRY, ADDRESS_PHONE, ADDRESS_STREET, MAP_ACCESS_BY_FOOT, MAP_ACCESS_FROM_PARIS, MAP_ACCESS_TRAIN, MENU_CONDITION_USE, MENU_CONTACT, MENU_DESIGN, MENU_GENRAL_TERM, MENU_HOME, MENU_NEWS, MENU_RESTORATION, MENU_SERVICES, MENU_WORKSHOP, PH_CONTACT_US, PH_EMAIL, PH_MESSAGE, PH_NAME, PH_PHONE, PH_SUBJECT, PH_SUBJECT_CLASSES, PH_SUBJECT_DESIGN, PH_SUBJECT_EDUCATION, PH_SUBJECT_OTHER, PH_SUBJECT_RESTORATION, PH_SUMMIT } from './constant.locale';
import { ContactSubject } from './typedef';
import { TrainAccessProps } from '@irachus/ui/src/atoms/TrainAccess/TrainAccess';

export const BANNER: string = 'Irisations';

export const LOCALISATION: string[] = [
  "Art stained glass design and conservation",
  'Paris - Versailles',
  'Cell: +33 7 82 72 24 88'
];
export const MENU_LIST: MenuItem[] = [
  {
    id: 1,
    name: MENU_HOME,
    href: route.home
  },
  {
    id: 2,
    name: MENU_DESIGN,
    href: route.design
  },
  {
    id: 3,
    name: MENU_RESTORATION,
    href: route.restoration
  },
  {
    id: 4,
    name: MENU_WORKSHOP,
    href: route.workshop
  },
  {
    id: 5,
    name: MENU_SERVICES,
    href: route.services
  },
  {
    id: 6,
    name: MENU_NEWS,
    href: route.news
  },
  {
    id: 7,
    name: MENU_CONTACT,
    href: route.contact
  }
];

export const contactSubjectOptionList: Option[] = [
  { value: ContactSubject.DESIGN.toString(), label: PH_SUBJECT_DESIGN},
  {
    value: ContactSubject.RESTORATION.toString(),
    label: PH_SUBJECT_RESTORATION
  },
  { value: ContactSubject.EDUCATION.toString(), label: PH_SUBJECT_EDUCATION },
  { value: ContactSubject.CLASSES.toString(), label: PH_SUBJECT_CLASSES },
  { value: ContactSubject.OTHER.toString(), label:PH_SUBJECT_OTHER }
];




export const contactPlaceHolder : ContactPlaceHolder = {

 contactUs: PH_CONTACT_US,
    name: PH_NAME,
    email: PH_EMAIL,
    phone: PH_PHONE,
    subjectList: contactSubjectOptionList,
    subject: PH_SUBJECT,
    message: PH_MESSAGE,
    submit: PH_SUMMIT,

}


export const  addressLine:string[] =
[
  ADDRESS_PHONE,
  ADDRESS_STREET,
  ADDRESS_CITY,
  ADDRESS_COUNTRY

]

export const irisationsDefaultGPSCenter : GpsPosition ={
  lat :48.71050310172956,
  lng : 2.0652567551600836
}

export const irisationsTrainAccess: TrainAccessProps ={
  title : MAP_ACCESS_TRAIN,
  text : [MAP_ACCESS_BY_FOOT,MAP_ACCESS_FROM_PARIS]
}



export const internalLinkList: EnhanceLink[] = [
  {
    name: MENU_CONDITION_USE,
    href: route.conditionOfUse,
  },
  {
    name: MENU_GENRAL_TERM,
    href: route.generalTerms,
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



export const socialNetowrk :  EnhanceLink[] = [

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


