
import { UiButton } from '@/shared/ui-button';
import { useTelegram} from '@/hooks/useTelegram'




export type UiNavBarProps = {
    isAuthenticated: boolean;
  };

export function NavBar(){

const telegram = useTelegram()

  return (

    <header className=" p-4 shadow-md sticky  top-0 left-0 right-0 z-50
     bg-gray-400 min-w-full md:p-6"  >
      <div className=" max-w-screen-xl mx-auto  flex justify-between items-center">
        <div className="flex items-center sm:space-x-3">

          <div className= ' navbar flex flex-col'>
          <span className="text-lg sm:text-2xl lg:text-3xl/ font-bold font-serif text-black" >Цитатник</span>
          <span className="text-lg sm:text-2xl lg:text-3xl font-bold font-serif  text-black " >Донатник </span>
          
        </div>
      </div>

        {/* Навигационные кнопки */}
      <nav className='flex items-center gap-2 sm:space-x-4 sm:space-y-0'>
          {/* <Link href="/experts"> */}
          
         <UiButton disabled={false} variant="primary" type='button' 
             onClick={telegram?.onClose}
             >Закрыть
         </UiButton>
          {/* </Link> */}
          {/* кнопка временно присутствует для лендинга */}
          {/* <Link href="/contacts"> */}
            <UiButton disabled={false} variant="primary" type='button' 
             onClick={(e)=>{e.preventDefault(); 
              document.querySelector('#contacts')?.scrollIntoView({behavior:'smooth',block:'nearest',})}
             }
             > Контакты
            </UiButton>
          {/* </Link> */}
          {/* <Link href="/stepstable">
            <UiButton disabled={false} variant="primary">
              StepsTable
            </UiButton>
          </Link> */}

        </nav>
      </div>
      
    </header>
  );
}