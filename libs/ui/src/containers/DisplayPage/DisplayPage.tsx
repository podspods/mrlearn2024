'use client';

import { PageContains, Section, Status } from '@irachus/jscommon';
import { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { DisplayCTA, DisplayEpilog, DisplayProlog, DisplayScoop, DisplaySection } from '../../components';

export type DisplayPageProps = {
  pageContains: PageContains;
  idLang: number;
};
/**
 * 
 * @param   pageContains: PageContains;
 * @param  idLang: number; 
 * @returns 
 */
export default function DisplayPage({ ...props }: DisplayPageProps) {
  const [pageContains, setPageContains] = useState<PageContains>();

  useEffect(() => {
    setPageContains(props.pageContains);
  }, [props.pageContains]);
  
  return (

    <div className='DisplayPage flex flex-col'>
      {pageContains?.scoop && <DisplayScoop  scoop={pageContains?.scoop} idlang={props.idLang}/>}
      {pageContains?.slideList && (
        <Carousel slideList={pageContains?.slideList} idlang={props.idLang} />
      )}
      {pageContains?.prolog?.ident.status === Status.VALIDE && (
        <DisplayProlog section={pageContains?.prolog} idLang={props.idLang} />
      )}
      { pageContains?.CTA?.ident.status === Status.VALIDE && pageContains?.CTA &&  <DisplayCTA section={pageContains?.CTA} idLang={props.idLang}/>}

      {pageContains?.body &&
        pageContains.body.map((Section) => (
          <DisplaySection
            section={Section}
            key={Section.ident.id}
            idLang={props.idLang}
          />
        ))}
      {pageContains?.epilog?.ident.status === Status.VALIDE &&
        pageContains.epilog && (
          <DisplayEpilog section={pageContains.epilog}  idLang={props.idLang} />
        )}
    </div>
  );
}
