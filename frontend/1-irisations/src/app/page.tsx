'use client'
import { by2 } from '@irachus/jscommon';
import { Button } from '@irachus/ui';
import '../styles.css'
export default function Home() {

  const handleClick = () =>{

    console.log('click ==>',8 );
    
  }
  return (
   <>
   <p className='border-primary-400 border bg-primary-200'>{by2(2)}</p>
   <Button  onClick={handleClick}>button children</Button>
   <p className='bg-secondary-500'>{by2(3)}</p>

  </>
  );
}