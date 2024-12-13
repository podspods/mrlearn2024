'use client'

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '../../atoms';

export type CaptchaProps = {
  siteKey: string;
  summitText : string;
  onSubmit: (capcha: string) => void;
};
export default function Captcha({ ...props }: CaptchaProps) {
  const [captchaToken, setCaptchaToken] = useState<string>('');
  // -----------------------------------------------------------------------------------------------
  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token || '');
  };

  // -----------------------------------------------------------------------------------------------
  const handleClick = () => {
    props.onSubmit(captchaToken);
  };
  // -----------------------------------------------------------------------------------------------
  return (
    <div className='p-4'>
      <ReCAPTCHA sitekey={props.siteKey} onChange={handleCaptchaChange} />
      <Button className='w-fit px-4'  onClick={handleClick}>  {props.summitText}</Button>
    </div>
  );
}
