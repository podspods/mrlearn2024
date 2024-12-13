import { cn, isDateInRange, Level, Section, Status } from '@irachus/jscommon';
import ReactMarkdown from '../ReactMarkdown/ReactMarkdown';
import DisplayDateRange from '../DisplayDateRange/DisplayDateRange';


export type DisplayScoopProps = {
  scoop: Section;
  idlang: number;
  preview? : boolean
};
export default function DisplayScoop({preview=false, ...props }: DisplayScoopProps) {
  const currentDate = new Date();
  const isVisible: boolean =
    props.scoop.ident.status === Status.VALIDE &&
    isDateInRange(currentDate, props.scoop.ident.dateRange);

  const colorBorderLevel = (level: Level) => {
    switch (level) {
      case Level.WARNING:
        return `border-warning-900 bg-warning-500`;
        break;
      case Level.ERROR:
        return `border-danger-900 bg-danger-500`;
        break;
      default:
        return `border-info-900 bg-info-500`;
        break;
    }
  };
  const baseClass = 'border  text-neutral-500 p-4 font-semibold text-2xl';
  const levelClass = colorBorderLevel(props.scoop.ident.level);
  const className = cn(baseClass, levelClass);
  return (
    <div>
      {!preview && isVisible && (
        <div className={className}>
          <ReactMarkdown>{props.scoop.text[props.idlang]}</ReactMarkdown>
        </div>
      )}
      { preview && (
        <div className={className + ' border-dashed'}>
          <ReactMarkdown>{props.scoop.text[props.idlang]}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
