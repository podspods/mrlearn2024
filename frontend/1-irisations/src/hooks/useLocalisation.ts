'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function useLocalisation(localisationInput : string[]) {
  const { t } = useTranslation();
  const [localisation, setLocalisation]= useState<string[]>([])
  

  useEffect(() => {
    const newLocaleLocalisation =localisationInput.map((line) => t(line));
    setLocalisation(newLocaleLocalisation);
  },[t]);


  return { localisation };
}
