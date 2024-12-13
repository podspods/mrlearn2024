import DisplayDateRange from '../DisplayDateRange/DisplayDateRange';
import { DisplaySectionProps } from '../DisplaySection/DisplaySection';
import ReactMarkdown from '../ReactMarkdown/ReactMarkdown';


/**
 *
 * @param section: section;
 * @param    idLang: number;
 * @returns
 */
export default function DisplayNewsSection({ ...props }: DisplaySectionProps) {
  
  return (
    <section className={`news-${props.section.ident.id} w-ful border py-4 border-b-primary-500`}>
      {props.section.ident.title[props.idLang].length > 0 && (
        <span className='text-lg font-medium  p-2 w-full'>
          {props.section.ident.title[props.idLang]}
        </span>
      )}
      <div className='ZnewsBody flex flex-col w-full   items-center justify-center lg:justify-between lg:flex-row'>
        {props.section.text[props.idLang].length > 0 && (
          <div className='w-full lg:w-1/3 text-base text-justify  p-2'>
            <ReactMarkdown>{props.section.text[props.idLang]}</ReactMarkdown>
          </div>
        )}
        {props.section.image.src.length > 0 && (
          <img
            src={props.section.image.src}
            alt={props.section.image.alt[props.idLang]}
            width={props.section.image.width}
            height={0}
            className='mb-4 rounded flex justify-center items-center'
          />
        )}
        {props.section.ident.dateRange && (
          <DisplayDateRange
            dateRange={props.section.ident.dateRange}
            className='ZnewsDate w-full lg:w-1/4 overflow-hidden mt-10  pt-10'
          />
        )}
      </div>
    </section>
  );
}
