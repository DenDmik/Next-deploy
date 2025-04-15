import { UiButton } from "@/shared/ui-button"
import Link from "next/link"
export default function StepsTable(){
///ReactContext:
    // const{isModalOpen,handleOpenModal,handleCloseModal} = useModal()
//zustand:
    
    return(
<div className=" max-w-screen-xl mx-auto flex flex-col mt-4 md:mt-8 font-Rubik
            lg:flex-row gap-2 sm:gap-10 bg-teal-600  p-6 rounded-2xl md:py-16">
  <div className="flex flex-col justify-between lg:w-1/2">
               <div className="text-4xl font-extrabold">
                  <h1 className="text-white mb-3">Решите задачу с Tech.Wisards</h1>
                  <h1 className="text-yellow-200">в 3  шага</h1> 

                </div>
                <div className="hidden lg:block  ">
                  <p className="text-xl text-white">От решения Вас отделяет всего одна кнопка !</p>
                  <UiButton className='px-2  sm:w-2/4 
                   rounded-2xl mt-4 ' variant='goldoutlined'  >
                  <p className='text-xl/5  text-teal-600'>
                    Получить консультацию 
                  </p>
                  </UiButton>
                  <Link href="/">
                      <UiButton className="px-2 w-2/3 sm:w-1/2 mx-auto  rounded-2xl m-4 sm:mt-10"  variant="goldoutlined">
                       <p className='text-lg/5  text-teal-600'>
                         Back to the Home </p>
                      </UiButton>
            </Link>
                </div>
   </div>
   <div className="flex flex-col lg:w-1/2 pt-3 lg:pt-0 relative text-white">
      <div className="flex flex-row justify-start items-start  relative">
         <span className="text-6xl font-extrabold  pb-3 text-start text-yellow-200 relative z-10">1.</span>
          <div className="flex flex-col grow pl-4">
              <div className=" text-2xl md:text-3xl text-start mb-3  ">Направьте заявку</div>
    {/* <div className="text-lg/6  italic">
    Опишите задачи, определите сроки, бюджет, 
    и какие компетенции вам потребуются.
    </div> */}
                <div className="border-b-2 border-slate-600 my-6"></div>
           </div>
           <div className="absolute left-4 top-14 bottom-0 w-0.5 bg-slate-600 z-0"></div>
      </div>

<div className="flex flex-row justify-start items-start  relative">
  <span className="text-6xl font-extrabold  pb-3 text-start text-yellow-200 relative z-10">2.</span>
  <div className="flex flex-col grow pl-2">
    <div className="text-2xl md:text-3xl text-start mb-3">Систематизируйте запрос</div>
    {/* <div className="text-lg/6 italic">Рассмотрите предложения экспертов, опыт работы подкрепленный
    кейсами и условия сотрудничества.
    </div> */}
    <div className="border-b-2 border-slate-600 my-6"></div>
  </div>
  <div className="absolute left-4 top-14 bottom-0 w-0.5 bg-slate-600  z-0"></div>
</div>

<div className="flex flex-row justify-start items-start relative">
  <span className="text-6xl font-extrabold  pb-3 text-start text-yellow-200 relative z-10">3.</span>
  <div className="flex flex-col grow pl-2">
    <div className="text-2xl md:text-3xl text-start mb-3">Проведите сессию с экспертом</div>
    {/* <div className="text-lg/6 italic">Поговорите с понравившимися экспертами,
    обсудите детали и начинайте работать с лучшими.
     </div> */}
  </div>
</div>
</div>
    <div className="lg:hidden mt-3">
      <p className="text-xl text-white ">От решения Вас отделяет всего одна кнопка !</p>
          <UiButton className='  px-2 w-2/3 sm:w-1/2 mx-auto  rounded-2xl m-4 sm:mt-10 ' variant='goldoutlined'  >
                  <p className='text-lg/5  text-teal-600'>
                    Получить консультацию 
                  </p>
          </UiButton>
           <Link href="/">
                      <UiButton className="px-2 w-2/3 sm:w-1/2 mx-auto  rounded-2xl m-4 sm:mt-10"  variant="goldoutlined">
                       <p className='text-lg/5  text-teal-600'>
                         Back to the Home </p>
                      </UiButton>
            </Link>
     </div>
</div>
    )
}