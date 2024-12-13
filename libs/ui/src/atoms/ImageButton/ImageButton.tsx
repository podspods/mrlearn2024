import { cn, ImageType } from '@irachus/jscommon';
import Tooltip from '../../molecules/Tooltip/Tooltip';

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  textHover?: string;
  image : ImageType
};
/**
 * 
 * @param textHover?: string; 
 * @param image : ImageType 
 * @returns 
 */
export default function ImageButton({...props}: IconButtonProps) {
  const baseClass = 'font-sans cursor-pointer select-none rounded';
  const color = 'bg-primary-200 text-primary-800';
  const transition = 'transition-all ease-in-out duration-200';
  const hover =  'hover:bg-primary-100 hover:shadow-xl';
  const active = props.disabled ? '' : 'active:scale-7O';
  const cursor = props.disabled ? 'cursor-not-allowed' : 'cursor-pointer';
  const className = cn(
    hover,
    baseClass,
    color,
    transition,
    cursor,
    active,
    props.className
  );

  if (props.textHover)
    return (
      <Tooltip message={props.textHover}>
        <button {...props}>
          <img
            src={props.image.src}
            alt={props.image.alt[0]}
            width={props.image.width}
            height={props.image.height}
          />
        </button>
      </Tooltip>
    );
  return (
    <button {...props}>
      <img src={props.image.src} alt={props.image.alt[0]} width={props.image.width} height={props.image.height} />
    </button>
  );
}
