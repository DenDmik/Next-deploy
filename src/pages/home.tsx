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
/////////////////////////////
// const onSendDataKb = useCallback(()=>{
//   const data = {
//     donat,
//     chatId,
//   }
//   telegram?.tg.sendData(JSON.stringify(data))
// },[donat,chatId])
/////////////////////////////////////////////////////
const onSendData = useCallback(() => {
  const data = {
      queryId,
    donat,
    chatId,
  }
  axios.post('https://40d9-185-102-186-35.ngrok-free.app/createInvoice',{data})
  // axios.post('http://localhost:3000/createInvoice',{data})
              
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
////////////////////////////////////////////////////////////////
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

// const userNameTest = 'Клайперон Бенедиктович'
  return (<div className="min-h-screen bg-gray-300">
  <NavBar />
      <main className="flex flex-col justify-around items-center gap-5 my-5 mx-2 ">
        
        <div className="text-amber-500 text-3xl text-center mt-4 ">
        Привет дорогой(ая)     {userName}
        </div>
        <div className="flex flex-col ">
          <span className=" text-3xl font-bold text-teal-500">
          Хочешь цитат ? </span>
          <span className=" text-3xl font-bold text-teal-500">
          Сделай донат !
          </span>
          </div>
        
           {/* <input 
           className=" h-9 border border-amber-500"
                type="text" 
                placeholder="введи кол-во звездочек"
                value={donat} 
                onChange={(e) => setDonat(+e.target.value)} // Устанавливаете состояние при изменении инпута
            /> */}

  <input 
           className="
           px-2 h-10 rounded  flex  items-center justify-center 
           text-xl font-bold  text-amber-300
            bg-gray-400 border-yellow-300 
             w-2/3 "
                type="text" 
                placeholder=" звезды ⭐️=>🍺"
                value={donat} 
                // onChange={(e) => setDonat(+e.target.value)} // Устанавливаете состояние при изменении инпута
                onChange={(e)=>setDonat(+e.target.value)}
            />


            <UiButton variant="goldoutlined" onClick={onSendData} className="w-2/3 mt-4"
            >ЗАПЛАТИТЬ</UiButton>
       
     

      </main>
      <Footer/>
      </div>
  );
}
