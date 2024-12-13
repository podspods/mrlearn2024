import { MenuItem } from '@irachus/jscommon';

export type MenuNavProps = {

  itemList: MenuItem[] 

};
export default function MenuNav({ ...props }: MenuNavProps) {
  return (

    <div className='flex flex-wrap justify-start items-start text-base'>
     {props.itemList.map ((item) => 
      <a className={'p-2'} href = {item.href} key={item.id} >{item.name?.toLocaleUpperCase()|| ''}</a>
    )}
    </div>
  );
}