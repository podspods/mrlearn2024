import { string2Id } from '@irachus/jscommon';

export type LocalisationProps = {
  text: string[];
};
/**
 * @param text: string[]; 
 * @returns 
 */
export default function Localisation({ ...props }: LocalisationProps) {
  return (
    <div className='z-Localisation flex flex-col items-center lg:items-end'>
    {props.text.map((line) => (
        <div className='zlineLoc flex flex-col items-center lg:items-end' key={string2Id(line)}>{line}</div>
      ))}
    </div>
  );
}
