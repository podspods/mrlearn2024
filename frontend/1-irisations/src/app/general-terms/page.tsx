'use client';
import {
  getPageId,
  lang2Id,
  pageContainsInit,
  PageId,
  Project
} from '@irachus/jscommon';
import { DisplayPage } from '@irachus/ui';
import { useTranslation } from 'react-i18next';
import usePageContain from '../../hooks/usePageContain';

export default function Home() {
  const { i18n } = useTranslation();
  const idLang = lang2Id(i18n.language);
  const pageId = getPageId(Project.IRISATIONS, PageId.GENERAL_TERMS);
  const { pageContains } = usePageContain(pageId);

  return (
    <>
      <DisplayPage
        pageContains={pageContains || pageContainsInit}
        idLang={idLang}
      />
    </>
  );
}
