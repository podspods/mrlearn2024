
export type TrainAccessProps = {
  title: string;
  text: string[];
};
export default function TrainAccess({ ...props }: TrainAccessProps) {
  return (
    <div className=' p-4'>
      <h1 className='text-center font-bold'>{props.title}</h1>
      {props.text.map((line) => (
        <p className='text-left'>{line}</p>
      ))}
    </div>
  );
}
