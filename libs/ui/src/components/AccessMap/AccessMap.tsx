'use client'
import {
  APIProvider,
  Map,
  MapCameraChangedEvent
} from '@vis.gl/react-google-maps';
import { GpsPosition } from '@irachus/jscommon';
import TrainAccess, { TrainAccessProps } from '../../atoms/TrainAccess/TrainAccess';

export type AccessMapProps = {
  accessText :string ;
  apiKey :string 
  defaultCenter : GpsPosition
  trainAccess : TrainAccessProps


};
/**
 * 
 * @param accessText :string ; 
 * @param apiKey :string  
 * @param defaultCenter : GpsPosition 
 * @param trainAccess : TrainAccessProps 
 * @returns 
 */
export default function AccessMap({ ...props }: AccessMapProps) {
  const center = { lat: 48.8588443, lng: 2.2943506 };

  return (
    <div className='flex flex-col  justify-center items-center lg:w-2/3  w-full px-4'>
      <h1 className='text-center p-4  font-bold'>{props.accessText}</h1>
      <div className='w-full  pb-[90%]  border border-neutral-500'>
      <APIProvider
        apiKey={props.apiKey}
        onLoad={() => console.log('Maps API has loaded.')}>
          <Map
            defaultZoom={13}
            defaultCenter={props.defaultCenter}
            onCameraChanged={(ev: MapCameraChangedEvent) =>
              console.log(
                'camera changed:',
                ev.detail.center,
                'zoom:',
                ev.detail.zoom
              )
            }></Map>
      </APIProvider>
      </div>
      <TrainAccess title={props.trainAccess.title} text={props.trainAccess.text} />
    </div>
  );
}
