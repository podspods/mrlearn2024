'use client'
import { getPageId, PageContains, PageId, Project, Section, SectionType, Slide } from '@irachus/jscommon';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../common/api';

export default function usePageContain(pageId :PageId) {

  const [pageContains, setPageContains] = useState<PageContains>();
  const hostCarousel: string =
    process.env.NEXT_PUBLIC_CAROUSEL_URL || 'http://localhost:3998';
  const hostSection: string =
    process.env.NEXT_PUBLIC_SECTION_URL || 'http://localhost:3999';
  useEffect(() => {
    const getPageContains = async () => {
      try {
        let newPageContain : PageContains = {};
        const responseCarousel = await axios.get(
          api.carousel.readByPage(hostCarousel, pageId)
        );
        const slideList: Slide[] = responseCarousel.data.data.map(
          (value: any) => ({
            ...value
          })
        );
        
        if (slideList.length > 0)
          newPageContain = {...newPageContain, slideList: slideList  }

          // setPageContains({ ...pageContains, slideList: slideList });

        const responseSection = await axios.get(
          api.section.readByPage(hostSection, pageId)
        );

        const newSectionList: Section[] = responseSection.data.data.map(
          (value: any) => ({
            ...value
          })
        );
        // setSectionList([...newSectionList])

        const scoop = newSectionList.find(
          (section) => section.ident.type === SectionType.SCOOP
        );
        if (scoop)
          newPageContain = {...newPageContain,scoop: scoop  }
                    // setPageContains({ ...pageContains, scoop: scoop });

        const prolog = newSectionList.find(
          (section) => section.ident.type === SectionType.PROLOG
        );
        console.log(' prolog newSectionList==>', newSectionList);

        if (prolog){
          console.log(' prolog==>', prolog);
          newPageContain = {...newPageContain,prolog: prolog  }
          
        // setPageContains({ ...pageContains, prolog: prolog });
        console.log(' pageContains prolog==>', pageContains);

        }

        const epilog = newSectionList.find(
          (section) => section.ident.type === SectionType.EPILOG
        );
        if (epilog) 
          newPageContain = {...newPageContain,epilog: epilog  }

          // setPageContains({ ...pageContains, epilog: epilog });
        const CTA = newSectionList.find(
          (section) => section.ident.type === SectionType.CTA
        );
        if (CTA) 
          newPageContain = {...newPageContain,CTA: CTA  }
          
          // setPageContains({ ...pageContains, CTA: CTA });
        const SectionList = newSectionList.filter(
          (section) =>
            section.ident.type !== SectionType.SCOOP &&
            section.ident.type !== SectionType.PROLOG &&
            section.ident.type !== SectionType.EPILOG &&
            section.ident.type !== SectionType.CTA
        );
        if (SectionList.length > 0)
          // setPageContains({ ...pageContains, body: SectionList });
        newPageContain = {...newPageContain,body: SectionList  }
          setPageContains({...pageContains, ...newPageContain});

      } catch (error: any) {
        console.error('Errot fetch Post => error :', error);
      }
    };
    getPageContains();
  // }, [pageId,carousel,sectionList]);
}, [pageId]);

  console.log('return pageContains==>', pageContains);

  return { pageContains };
}
