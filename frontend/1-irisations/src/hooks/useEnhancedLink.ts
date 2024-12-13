'use client';
import { EnhanceLink } from '@irachus/jscommon';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function useEnhancedLink(enhancedLink: EnhanceLink[]) {
  console.log('enhancedLink ==>',enhancedLink );
  
  const { t } = useTranslation();
  const [enhancedLinkList, setEnhancedLinkList] = useState<EnhanceLink[]>(enhancedLink);
  useEffect(() => {
    const newEnhancedLink = enhancedLink.map((oneLink) => ({
      ...oneLink,
      name: oneLink.name ? t(oneLink.name) : '',
      textHover: oneLink.textHover ? t(oneLink.textHover) : ''
    }));
    setEnhancedLinkList(newEnhancedLink);
  }, [t, enhancedLink]);
  console.log('enhancedLink enhancedLinkList ==>',enhancedLinkList );

  return { localeEnhancedLink : enhancedLinkList };
}
