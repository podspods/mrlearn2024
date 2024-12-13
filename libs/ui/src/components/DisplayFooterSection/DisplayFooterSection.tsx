import { Section } from '@irachus/jscommon';
import ReactMarkdown from '../ReactMarkdown/ReactMarkdown';

export type DisplayFooterSectionProps = {
  section: Section;
  idLang: number;
};
/**
 * 
 * @param section: PageSection; 
 * @param idLang: number;
}; 
 * @returns 
 */
export default function DisplayFooterSection({
  ...props
}: DisplayFooterSectionProps) {
const text = props.section.text[0] 

  return (
    <div className='z-footerSection flex flex-col justify-center items-center w-[405px]'>
        <img
          src={props.section.image.src}
          alt={props.section.image.alt[props.idLang]}
          width={props.section.image.width}
          height={props.section.image.height}
          className='ImageFooterCard w-[370px] h-[250px] rounded-xl p-2  shadow-xl'
        />
      <a
        href={
          props.section.ident.titleLink[props.idLang]?.length
            ? props.section.ident.titleLink[props.idLang]
            : '#'
        }>
        <h1 className='text-center text-xl p-2'>
          {props.section.ident.title[props.idLang]}
        </h1>
      </a>
      <ReactMarkdown>{`${ props.section.text[props.idLang]}`}</ReactMarkdown>

    </div>
  );
}
