import { useCallback, useEffect, useState, } from "react";
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
 const [donat,setDonat]= useState<number>()

useEffect(()=>{
  telegram?.tg.ready()
},[telegram?.tg])
const userName = telegram?.user?.username
//////////////////////////////////////
const queryId = telegram?.queryId
const onSendData = useCallback(() => {
  const data = {
      queryId,
    donat,
  }
  fetch('https://0355-185-102-186-131.ngrok-free.app/createInvoice', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
  })
}, [donat])

useEffect(() => {
  telegram?.tg.onEvent('mainButtonClicked', onSendData)
  return () => {
  telegram?.tg.offEvent('mainButtonClicked', onSendData)
  }
}, [onSendData])

if(donat == 0){
  telegram?.MainButton.hide()
}else{
  telegram?.MainButton.show();
  telegram?.MainButton.setParams({text:`Оплатить ${donat}`})
}
// ////////////////////////////////////


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
        <div className="h-20 text-3xl text-red-800">DONAT
           <input 
           className="mx-auto"
                type="number" 
                value={donat} 
                onChange={(e) => setDonat(+e.target.value)} // Устанавливаете состояние при изменении инпута
            />
        </div>
       
        <Footer/>

      </main>
  );
}
