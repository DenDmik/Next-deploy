
import { UiButton } from '@/shared/ui-button';
import { useTelegram} from '@/hooks/useTelegram'
import Link from 'next/link';




export type UiNavBarProps = {
    isAuthenticated: boolean;
  };

export function NavBar({
    // isAuthenticated,
  }: {
    isAuthenticated: boolean;
  }){

const telegram = useTelegram()

  return (

    <header className=" p-4 shadow-md sticky  top-0 left-0 right-0 z-50
     bg-gray-100 min-w-full md:p-6"  >
      <div className=" max-w-screen-xl mx-auto  flex justify-between items-center">
        <div className="flex items-center sm:space-x-3">
          {/* <img src={logo.src} alt="Company Logo" className="h-8 w-8 md:h-10 md:w-10" /> */}

          <div className= ' navbar flex flex-row'>
          <span className="text-lg sm:text-2xl lg:text-3xl font-bold font-serif text-black" >Tech.</span>
          <span className="text-lg sm:text-2xl lg:text-3xl font-bold font-serif  text-black " >Wizards </span>
          
        </div>
      </div>

        {/* Навигационные кнопки */}
      <nav className='flex items-center gap-2 sm:space-x-4 sm:space-y-0'>
          {/* <Link href="/experts"> */}
          
         <UiButton disabled={false} variant="primary" type='button' 
             onClick={
              (e)=>{
                e.preventDefault(); 
            document.getElementById('1')?.scrollIntoView({behavior:'smooth',block:'start'})}
           }
             >Эксперты
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
          {/* кнопка временно отсутствует для лендинга */}
          <Link href="/stepstable">
            <UiButton disabled={false} variant="primary">
              StepsTable
            </UiButton>
          </Link>

          {/* Кнопка Вход/Выход в зависимости от авторизации */}
          {/* кнопка временно отсутствует для лендинга */}
          {/* {isAuthenticated ? (
            <SignOutButton />
          ) : (
            <Link href="/sign-up-otp">
              <UiButton disabled={false} variant="goldoutlined">
                <p className='text-teal-600'>
                  Вход
                </p>
              </UiButton>
            </Link>
          )} */}
        </nav>
      </div>
      
    </header>
  );
}