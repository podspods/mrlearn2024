'use client';

import {
  ContactPlaceHolder,
  getPageId,
  lang2Id,
  Option,
  pageContainsInit,
  PageId,
  Project
} from '@irachus/jscommon';
import { AccessMap, Contact, DisplayPage, TrainAccessProps } from '@irachus/ui';
import { useTranslation } from 'react-i18next';
import {
  addressLine,
  contactPlaceHolder,
  irisationsDefaultGPSCenter,
  irisationsTrainAccess
} from '../../common/constant';
import usePageContain from '../../hooks/usePageContain';
import { useEffect, useState } from 'react';
import {
  CAPTCHA_SUBMIT_TEXT,
  MAP_ACCESS_TEXT
} from '../../common/constant.locale';

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const idLang = lang2Id(i18n.language);
  const pageId = getPageId(Project.IRISATIONS, PageId.CONTACT);
  const { pageContains } = usePageContain(pageId);
  const [placeHolder, setPlaceHolder] =
    useState<ContactPlaceHolder>(contactPlaceHolder);
  const [address, setAddress] = useState<string[]>(addressLine);
  const [submitText, setSubmitText] = useState<string>(CAPTCHA_SUBMIT_TEXT);
  const [trainAccess, setTrainAccess] = useState<TrainAccessProps>(
    irisationsTrainAccess
  );

  useEffect(() => {
    const localSubjectList: Option[] = contactPlaceHolder.subjectList.map(
      (oneOption) => ({ ...oneOption, label: t(oneOption.label) })
    );
    setSubmitText(t(CAPTCHA_SUBMIT_TEXT));
    const address: string[] = addressLine.map((line) => t(line));
    setAddress(address);

    const newTrainAccess: TrainAccessProps = {
      title: t(irisationsTrainAccess.title),
      text: irisationsTrainAccess.text.map((line) => t(line))
    };
    setTrainAccess (newTrainAccess)
    const localePlaceholder = {
      contactUs: t(contactPlaceHolder.contactUs),
      name: t(contactPlaceHolder.name),
      email: t(contactPlaceHolder.email),
      phone: t(contactPlaceHolder.phone),
      subjectList: [...localSubjectList],
      subject: t(contactPlaceHolder.subject),
      message: t(contactPlaceHolder.message),
      submit: t(contactPlaceHolder.submit)
    };
    setPlaceHolder(localePlaceholder);
  }, [t]);
  return (
    <div>
      <div className='flex flex-col lg:flex-row lg:justify-between  w-full'>
        <Contact
          placeHolder={placeHolder}
          address={address}
          siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          submitText={submitText}
        />
        <AccessMap
          accessText={t(MAP_ACCESS_TEXT)}
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!}
          defaultCenter={irisationsDefaultGPSCenter}
          trainAccess={trainAccess}
        />
      </div>
      <DisplayPage
        pageContains={pageContains || pageContainsInit}
        idLang={idLang}
      />
    </div>
  );
}
