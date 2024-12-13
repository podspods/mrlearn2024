import { ImageType } from './section';

export enum Status {
  VALIDE = 400,
  HIDDEN,
  DELETE,
  INIT
}


export enum Lang {
  fr = 0,
  en
}

export type GpsPosition ={
  lat: number, 
  lng: number 
}


export type BaseLink ={
  name: string, 
  href : string,
}

export type EnhanceLink = BaseLink &{

  textHover?: string;
  image? : ImageType

}