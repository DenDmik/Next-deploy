import { UiButton } from "@/shared/ui-button"
import Link from "next/link"
import { useTelegram } from "@/hooks/useTelegram";
export type IPrase = {
    id : number
    phrase :string
    writer ?:string
    image ?: string
}
export default function Paid({data}:{data:IPrase}){
    const telegram = useTelegram()
const{phrase,writer}= data
return (
 <div className="max-w-screen-xl mx-auto py-4  bg-white rounded-lg mt-4 border border-gray-200">
    <div className="mx-4 sm:mx-8 p-4 lg:p-10  md:mt-6
  bg-white border border-gray-200 rounded-lg shadow-2xl
  flex flex-col justify-around items-center">
    <h1 className="text-center text-4xl text-amber-500">{phrase}</h1>
    <h1 className="text -center text-2xl text-amber-950">{writer}</h1>
      <Link href="/">
         <UiButton className="px-2 w-2/3 sm:w-1/2 mx-auto  rounded-2xl m-4 sm:mt-10"  variant="goldoutlined">
                           <p className='text-lg/5  text-teal-600'>
                             Back to the Home </p>
         </UiButton>
        </Link>
       <UiButton className="px-2 w-2/3 sm:w-1/2 mx-auto  rounded-2xl m-4 sm:mt-10"
             variant="goldoutlined"
             onClick={telegram?.onClose}>
                       <p className='text-lg/5  text-teal-600'>
                         Close </p>
       </UiButton>
  </div>


 </div>
)
}