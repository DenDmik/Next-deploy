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
const{phrase,writer,image}= data
return (
 <div className="max-w-screen-xl mx-auto py-4  bg-gray-300
 rounded-lg mt-4 border border-yellow-300">

   

    <div className=" mx-4 sm:mx-8  md:mt-6
  bg-white rounded-lg shadow-2xl
  flex flex-col justify-around">

{/* <Image src={`${image}`} alt="cat" 
       width={500}
       height={300}
       priority={true}
      //  fill={true}
       style={{objectFit: "contain"}}
       loading="eager"
       quality={75}
        className=" absolute 
         rounded-lg" /> */}
  <div 
  className="bg-local bg-cover bg-center rounded-lg"
  style={{ 
    backgroundImage: `url(${image})`
  }}
>
    <h1 className="text-center py-6 my-4 text-4xl text-amber-500">{phrase}</h1>
    <h1 className="text-center text-2xl text-amber-500">{writer}</h1>

  
  


     <Link href="/">
          <UiButton className=" z-20 px-2 w-2/3 sm:w-1/2 mx-auto  rounded-2xl m-4 sm:mt-10"  variant="goldoutlined">
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

 </div>
)
}