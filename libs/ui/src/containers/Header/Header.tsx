'use client';
import { cn, MenuItem } from '@irachus/jscommon';
import { Logo, Localisation, Button } from '../../atoms';
import { MenuNav } from '../../components';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export type HeaderProps = {
  banner: string;
  homeUrl: string;
  localisation: string[];
  menuList: MenuItem[];
  changeLang?: (lang: string) => void;
  currentLang?: string;
};
/**
 *
 * @param banner : string,
 * @param homeUrl :string,
 * @param localisation : string[],
 * @param menuList: ItemNav[],
 * @returns
 */
export default function Header({ ...props }: HeaderProps) {
  const { t, i18n } = useTranslation();

  const myClassName = cn(
    'header flex  flex-col justify-center items-center w-full w-screen-xl relative'
  );

  return (
    <div className={myClassName}>
      <div className='z-upperHeader w-full h-18 flex items-center flex-col justify-between  sm:flex-row '>
        <Logo banner={props.banner} url={props.homeUrl} />
        <Localisation text={props.localisation} />
      </div>
      <div className='lowerHeader  w-full flex flex-row justify-start  text-2xl absolute top-0 left-0 lg:relative'>
        <div className='hidden lg:block'>
          <MenuNav itemList={props.menuList} />
        </div>

        {/* {props.currentLang !== 'en' && ( */}
        {i18n.language !== 'en' && (
          <Button
            className={'p-1 border-none'}
            onClick={() => (props.changeLang ? props.changeLang('en') : '')}>
            🇬🇧
          </Button>
        )}
        {/* {props.currentLang !== 'fr' && ( */}
        {i18n.language !== 'fr' && (
          <Button
            className={'p-1 border-none'}
            onClick={() => (props.changeLang ? props.changeLang('fr') : '')}>
            🇫🇷
          </Button>
        )}
      </div>
    </div>
  );
}
