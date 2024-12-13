'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { DisplaySection, DisplayProlog, DisplayEpilog } from '../../components/DisplayProlog';
import DisplayProlog from '../../components/DisplayProlog/DisplayProlog';
import DisplaySection from '../../components/DisplaySection/DisplaySection';
import DisplayEpilog from '../../components/DisplayEpilog/DisplayEpilog';
import { lang2Id, PageContains,  Status } from '@irachus/jscommon';

export type FooterProps = {
  pageContains: PageContains;
  idLang?: number;
};
/**
 * 
 * @param   pageContains: PageContains;
 * @param  idLang: number; 
 * @returns 
 */

export default function Footer({ ...props }: FooterProps) {
  const { i18n } = useTranslation();
  const idLang= lang2Id(i18n.language)
  const [pageContains, setPageContains] = useState<PageContains>();

  useEffect(() => {
    setPageContains(props.pageContains);
  }, [props.pageContains]);
 


  return (
    <div className='z-footer border-t-2 border-neutral-400'>
    {pageContains?.prolog?.ident.status === Status.VALIDE && (
        <DisplayProlog key={pageContains.prolog.ident.id} section={pageContains?.prolog} idLang={idLang} />
      )}
      <div className='z-lowerFooter flex m-3 flex-wrap justify-between'>
   {pageContains?.body &&
        pageContains.body.map((Section) => (
          <DisplaySection
            section={Section}
            key={Section.ident.id}
            idLang={idLang}
          />
        ))}
      </div>
      {pageContains?.epilog?.ident.status === Status.VALIDE &&
        pageContains.epilog && (
          <DisplayEpilog   key={pageContains.epilog.ident.id} section={pageContains.epilog}  idLang={idLang} />
        )}
    </div>
  );
}
