import { useEffect, useState } from "react";
import { UiButton } from "@/shared/ui-button";
import { NavBar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";

export interface Iuser{
  user?:string|null|undefined
}

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // @ts-expect-error проверка
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      // @ts-expect-error проверка
      const tg = window.Telegram.WebApp;
      tg.ready();
      setIsReady(true);
    }
  }, []);

  if (!isReady) return null; 
// @ts-expect-error проверка
const tg = window.Telegram.WebApp

// const[userData,setUserData]= useState<Iuser>({user:null})


const handleClose=()=>{tg?.close()}
// const userInfo =()=>{setUserData({user:tg?.initDataUnsafe?.user?.userName})}
  return (
      <main className="min-h-screen flex flex-col gap-[32px] justify-between items-center ">
        <NavBar isAuthenticated={true}/>
        <div className="text-red-700 text-4xl text-center">HELLO</div>
        <UiButton variant="primary" 
        className="text-2xl text-amber-700"
        onClick={handleClose}>CLOSE</UiButton>
        {/* <UiButton variant="secondary" 
        className="text-2xl text-teal-600"
        onClick={userInfo}>User Info</UiButton> */}
        <span className="h-20 text-3xl text-red-800">user:{tg?.initDataUnsafe?.user?.userName}</span>
        <Footer/>

      </main>
  );
}
