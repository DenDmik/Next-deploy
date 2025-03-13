import { UiLink } from "@/shared/ui-link";

export function Footer(){
return (
    <div id="contacts" className="min-w-full bg-yellow-50 border-y-[1px] border-yellow-300
      bottom-0 flex flex-col justify-center items-center pt-2  gap-2 ">
      <h1 className="text-lg font-semibold">Contact us</h1>
      <div className="flex justify-center items-center">
        <UiLink className=" !p-0 underline"
        href={''}
         >
              <h6>Telegram |</h6>   
        </UiLink> 
        <UiLink className=" !p-0 ml-4 underline"
        href={''}
         >
              <h6> Facebook |</h6>   
        </UiLink>
        <UiLink className=" !p-0 ml-4 underline"
        href={''}
         >
              <h6> Email</h6>   
        </UiLink>
        </div> 
               <UiLink className=" !p-0 underline"
        href={''}
         >
              <h1 className="text-base">Политика персональных данных</h1>   
        </UiLink>
        <UiLink className=" !p-0 mb-2 underline "
        href={''}
         >
              <h2 className="text-base">Отказ от ответственности</h2>   
        </UiLink>


     </div>
)
}