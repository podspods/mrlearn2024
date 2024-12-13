// 'use client';
import Image from 'next/image';
import en from '../../locales/en/translation.json';
import fr from '../../locales/fr/translation.json';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
import { getDictionary } from './dictionaries';

export default async function Home() {
  // const router = useRouter();
  // const {} = router;
  const locale = 'en'; // Vous devrez peut-être remplacer ceci par une logique pour obtenir la locale
  // const [t, setT] = useState<any>(null);

  // useEffect(() => {
  //   const dico = getDictionary(locale);
  //   setT(dico);
  // }, [locale]);

  // if (!t) {
  //   return <p>Loading...</p>; // Optionnel : Afficher un état de chargement
  // }
  const t = await getDictionary(locale)
  return (
    <>
      <p>blog home page</p>
      <h1>{t.Home}</h1>
    </>
  );
}
