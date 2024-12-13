import { Section } from '@irachus/jscommon';
import ReactMarkdown from '../ReactMarkdown/ReactMarkdown';

export type DisplayEpilogProps = {
  section: Section;
  idLang: number;
};
/**
 * @param section: section;
 * @param    idlang: number;
 * @returns
 */
export default function DisplayEpilog({ ...props }: DisplayEpilogProps) {
  return (
    <section className={`section-prolog`}>
      {props.section.text[props.idLang]?.length > 0 && (
        <div className='text-justify p-4 bg-slate-200'>
          <ReactMarkdown>{props.section.text[props.idLang]}</ReactMarkdown>
        </div>
      )}
    </section>
  );
}
