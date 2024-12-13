import { Section } from '@irachus/jscommon';
import ReactMarkdown from '../ReactMarkdown/ReactMarkdown';

export type DisplaySectionProps = {
  section: Section;
  idLang: number;
};
/**
 *
 * @param section: section;
 * @param   langId: number;
 * @returns
 */
export default function DisplayProlog({ ...props }: DisplaySectionProps) {
  return (
    <section className={`z-section-prolog`}>
      {props.section.text[props.idLang]?.length > 0 && (
        <div className='text-justify p-4'>
          <ReactMarkdown>{props.section.text[props.idLang]}</ReactMarkdown>
        </div>
      )}
    </section>
  );
}
