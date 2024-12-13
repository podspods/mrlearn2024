import { isValidImageUrl, PicPosition, Section, SectionType } from '@irachus/jscommon';
import ReactMarkdown from '../ReactMarkdown/ReactMarkdown';
import DisplayNewsSection from '../DisplayNewsSection/DisplayNewsSection';
import DisplayFooterSection from '../DisplayFooterSection/DisplayFooterSection';
import DisplayProlog from '../DisplayProlog/DisplayProlog';
import DisplayEpilog from '../DisplayEpilog/DisplayEpilog';

export type DisplaySectionProps = {
  section: Section;
  idLang: number;
};
/**
 *
 * @param section: section;
 * @param    idLang: number;
 * @returns
 */
export default function DisplaySection({ ...props }: DisplaySectionProps) {

  const flexDirection = (direction: PicPosition) => {
    console.log('direction 21==>', direction);
    
    switch (direction) {
      case PicPosition.Left:
        return 'float-left';
      case PicPosition.Right:
        return 'float-right';
      default:
        return 'flex flex-col justify-center items-center';
    }
  };

  const classImg = `${flexDirection(
    props.section.image.position || PicPosition.Center
  )}`;

  switch (props.section.ident.type) {
    case SectionType.PROLOG:
      return <DisplayProlog section={props.section} idLang={props.idLang} />;
      case SectionType.EPILOG:
        return <DisplayEpilog section={props.section} idLang={props.idLang} />;
        case SectionType.NEWS:
        return <DisplayNewsSection section={props.section} idLang={props.idLang} />;
      case SectionType.FOOTER:
      return (
        <DisplayFooterSection section={props.section} idLang={props.idLang} />
      );
    // case SectionType.CTA:
    //   return <DisplayCTA section={props.section} idLang={props.lang} />;

    
    default:
      return (
        <section className={`z-news-${props.section.ident.id}`}>
          <div className='flex flex-col'>
            {props.section.ident.title[props.idLang] && (
              <h1 className='py-2 font-bold text-center text-lg lg:text-left'>
                {props.section.ident.title[props.idLang]}
              </h1>
            )}

            <div>
              {isValidImageUrl(props.section.image?.src) && (
                <img
                  className={`${classImg} rounded-lg p-4`}
                  src={props.section.image?.src || ''}
                  alt={props.section.image?.alt[props.idLang] || ''}
                  width={props.section.image?.width || 0}
                  height={0} // auto ?
                />
              )}
              {props.section.text[props.idLang]?.length > 0 && (
                <div className='text-justify p-4'>
                  <ReactMarkdown>
                    {props.section.text[props.idLang]}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </section>
      );
  }
}
