import { useEffect, } from "react";
import { UiButton } from "@/shared/ui-button";
import { NavBar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";

import { WebApp } from "@twa-dev/types";
import { useTelegram } from "@/hooks/useTelegram";

declare global {
  interface Window {
    Telegram: {
      WebApp: WebApp;
    };
  }
}

export interface Iuser{
  user?:string|null|undefined
}

export default function Home() {
const telegram = useTelegram()

useEffect(()=>{
  telegram?.tg.ready()
},[telegram?.tg])
const userName = telegram?.user?.username

// const userInfo =()=>{setUserData({user:tg?.initDataUnsafe?.user?.userName})}
  return (
      <main className="min-h-screen flex flex-col gap-[32px] justify-between items-center ">
        <NavBar isAuthenticated={true}/>
        <div className="text-red-700 text-4xl text-center">HELLO</div>
        <UiButton variant="primary" 
        className="text-2xl text-amber-700"
        onClick={telegram?.onClose}>CLOSE</UiButton>
        {/* <UiButton variant="secondary" 
        className="text-2xl text-teal-600"
        onClick={userInfo}>User Info</UiButton> */}
        <span className="h-20 text-3xl text-red-800">user:{userName}</span>
        <Footer/>

      </main>
  );
}
