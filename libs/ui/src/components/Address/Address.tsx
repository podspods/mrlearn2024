
export type AddressProps = {
  address : string []

}
export default function Address({...props}: AddressProps) {
  return (
    <div className=' p-4 w-full '>
      {props.address.map ((line) => 
       <p> {line}</p>
      )}
 
    </div>
  )
}
