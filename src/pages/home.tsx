import { useCallback, useEffect, useState, } from "react";
import { UiButton } from "@/shared/ui-button";
import { NavBar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";
import axios from "axios";

import { InvoiceStatuses, WebApp } from "@twa-dev/types";
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
//  const [ name, setName] = useState('')

useEffect(()=>{
  telegram?.tg.ready()
},[telegram?.tg])
const userName = telegram?.user?.username
////////////////////////////////////////
const handleInvoiceClose = (status:InvoiceStatuses) => {
  if (status === 'paid') {
    // Перенаправление при успешной оплате
    telegram?.MainButton.hide()
    const id = 1
    window.location.href = `/phrase/${id}`; 
  } else {
    // Стандартное закрытие для других случаев
    telegram?.onClose?.();
  }
};
//////////////////////////////////////
const chatId = telegram?.user?.id
const queryId = telegram?.queryId
const onSendData = useCallback(() => {
  const data = {
      queryId,
    donat,
    chatId,
  }
  axios.post('https://dae9-2a00-7c80-0-3b4-00-14.ngrok-free.app/createInvoice',{data})
              
  .then(function (response) {
    console.log(response);
    const invoice = response.data.invoice
    console.log(invoice)
    // telegram?.tg.openInvoice(invoice, telegram.onClose)
    telegram?.tg.openInvoice(invoice,(status)=>{handleInvoiceClose(status)} )

    
  })
  .catch(function (error) {
    console.log(error);
    alert(`ERROR:${error}`)
  })
}, [donat,telegram?.tg,queryId,chatId,telegram?.onClose])

useEffect(() => {
  telegram?.tg.onEvent('mainButtonClicked', onSendData)
  return () => {
  telegram?.tg.offEvent('mainButtonClicked', onSendData)
  }
}, [onSendData,telegram?.tg])

if(donat == 0|| donat == undefined){
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
        <span className="h-20 text-3xl text-red-800">DONAT </span>
           <input 
           className=" h-9 border border-amber-500"
                type="text" 
                placeholder="введи кол-во звездочек"
                value={donat} 
                onChange={(e) => setDonat(+e.target.value)} // Устанавливаете состояние при изменении инпута
            />
             <button className="h-20 text-3xl text-red-800"
             onClick={onSendData}
             >ОПЛАТИТЬ </button>
       
       {/* <span className="h-20 text-3xl text-red-800">{name}</span> */}
        <Footer/>

      </main>
  );
}
