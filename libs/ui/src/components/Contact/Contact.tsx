'use client'

import Input from '../../atoms/Input/Input';
import { ContactPlaceHolder } from '@irachus/jscommon';
import SelectBox from '../SelectBox/SelectBox';
import { Button } from '../../atoms';
import Address from '../Address/Address';
import Captcha from '../Captcha/Captcha';

export type ContactProps = {
  placeHolder: ContactPlaceHolder;
  address: string[];
  submitText:string ; 
  siteKey:string ; 
};
/**
 * 
 * @param  address: string[]; 
 * @param placeHolder : ContactPlaceHolder ;
}; 
 * @returns 
 */
export default function Contact({ ...props }: ContactProps) {

  const handleSummit = () => {

    console.log(' handleSummit==>', 24);
    
  }


  return (
    <div className='flex flex-col justify-center items-center lg:justify-start lg:w-1/2  w-full px-4 '>
      <h1 className='text-center p-4  font-bold'>
        {props.placeHolder.contactUs}
      </h1>
      <Input placeholder={props.placeHolder.name} className='my-1 w-72' />
      <Input placeholder={props.placeHolder.email} className='my-1 w-72' />
      <Input
        placeholder={props.placeHolder.phone}
        className='my-1  mb-5 w-72'
      />
      <SelectBox
        optionlist={props.placeHolder.subjectList}
        label={props.placeHolder.subject}
        className='w-72 '
      />
      <p className='text-center p-4'>{props.placeHolder.message} </p>
      <textarea rows={5} cols={5} className='border border-cyan-500 w-full ' />
      <Captcha siteKey={props.siteKey} onSubmit={handleSummit} summitText={props.submitText}/>
      <Button className='w-fit px-4'>{props.placeHolder.submit}</Button>
      <Address address={props.address} />
    </div>
  );
}
