import { adjustYear, EnhanceLink } from '@irachus/jscommon';
import Copyright from '../Copyright/Copyright';
import ImageButton from '../ImageButton/ImageButton';

export type SoleProps = {
  internalLinkList?: EnhanceLink[];
  socialNetwork?: EnhanceLink[];
  yearStart?: number;
  brand?: string;
};

export default function Sole({ yearStart = 2000, ...props }: SoleProps) {
  const yearStartChecked = adjustYear(yearStart, 2000);

  return (
    <div className='flex flex-col flex-wrap w-full sm:flex-row items-center justify-between border-t-2 border-neutral-400 pt-5'>
      <div className='z-internalLink flex flex-col'>
        {props.internalLinkList &&
          props.internalLinkList.map((oneLink) => (
            <p className='p-2 sm:px-4'>
              <a href={oneLink.href}>{oneLink.name}</a>
            </p>
          ))}
      </div>

      {props.socialNetwork && (
        <div className='z-socialNetwork flex flex-row'>
          {props.socialNetwork.map((oneLink) => (
            <>
              <p className='p-2 sm:px-4'>
                <a href={oneLink.href}>
                  {oneLink.image && <ImageButton image={oneLink.image} />}
                  {!oneLink.image && oneLink.name ? oneLink.name : ''}
                </a>
              </p>
            </>
          ))}
        </div>
      )}
      {props.brand && (
        <Copyright
          name={props.brand}
          className='p-2 sm:px-4'
          yearStart={yearStartChecked.toString()}
        />
      )}
    </div>
  );
}
