import { cn } from '@irachus/jscommon';
// import { useTranslation } from 'react-i18next';
export type LogoProps = {
  banner :string,
  url :string
  font?:string
};
export default function Logo({ ...props }: LogoProps) {
  // const { t } = useTranslation();
  const mergedClassName = cn('w-40 text-2xl lg:text-5xl font-logo', props.font );

  return (
    <div className='z-Logo flex items-start'>
      <a href={props.url}>
        <span
          className={mergedClassName}>
          {/* {t(props.banner)} */}
          {(props.banner)}
          </span>
      </a>
    </div>
  );
}
