import { isValidImageUrl, Section } from '@irachus/jscommon';
import ReactMarkdown from '../ReactMarkdown/ReactMarkdown';


export type DisplayCTAProps = {
  section: Section;
  idLang: number;
};
/**
 *
 * @param section: PageSection;
 * @param idLang: number;
 * @returns
 */
export default function DisplayCTA({ ...props }: DisplayCTAProps) {
  return (
    <div className='z-sectionCTA flex flex-col justify-center items-center lg:justify-start lg:items-start w-full'>
      {props.section.ident.title[props.idLang].length > 0 && (
        <h1 className='font-bold pb-4'>{props.section.ident.title[props.idLang]}</h1>
      )}
      <div className='z-body flex flex-col w-full  lg:block'>
        {isValidImageUrl(props.section.image?.src) && (
          <img
            src={props.section.image.src}
            alt={props.section.image.alt[props.idLang]}
            width={props.section.image.width}
            height={0}
            className='lg:float-left m-2 ml-4 rounded-lg'
          />
        )}
        <div className='z-textCTA lg:float-right bg-neutral-200 rounded-lg p-2 m-2 mr-4'>
          {props.section.textCTA[props.idLang] && (
            <ReactMarkdown>{props.section.textCTA[props.idLang]}</ReactMarkdown>
          )}
        </div>
        {props.section.text[props.idLang] && (
          <div className='z-text-body text-justify p-2 m-2'>
            <ReactMarkdown>{props.section.text[props.idLang]}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
