'use client'
import { MenuItem } from '@irachus/jscommon';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function useMenuList(menuListInput: MenuItem[]) {
  const { t } = useTranslation();
  const [menuList, setMenuList] = useState< MenuItem[]>();
  useEffect (()=> {
    const newMenuList = menuListInput.map((itemMenu) => ({...itemMenu, name : itemMenu.name ? t(itemMenu.name): ''}))
    setMenuList(newMenuList)
  },[t,menuListInput])
  return {menuList}
}