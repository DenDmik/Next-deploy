import {  useCallback, useEffect, useRef, } from "react";
import { UiButton } from "@/shared/ui-button";
import { NavBar } from "@/widgets/navbar";
// import { Footer } from "@/widgets/footer";
import axios from "axios";

import { InvoiceStatuses, WebApp } from "@twa-dev/types";
import { useTelegram } from "@/hooks/useTelegram";
import { useFormDonat } from "@/features/donats/model/use-form-donat";
import { Footer } from "@/widgets/footer";
// import { Description } from "@/widgets/description";

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
const userName = telegram?.user?.first_name
////////////////////////////////////////
 const donatRef = useRef(0)
 
    const{register, 
        submit,
        resetForm,
        handleSubmit,
        errors,
        watch,
        }=useFormDonat()

donatRef.current = watch('donat')
  const donat = donatRef.current     
//////////////////////////////////////
const chatId = telegram?.user?.id
const queryId = telegram?.queryId
/////////////////////////////
/////////////////////////////////////////////////////
const onSendData = useCallback(() => {

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
const donatCurrent = donat
  const data = {
    donatCurrent,
      queryId,
    chatId,
  }
  if(!donat){
    console.log(donat)
    return
  };
  axios.post('https://e8c0-185-102-186-86.ngrok-free.app/createInvoice',{data})
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
},
[  queryId, chatId,  telegram, donat])
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
  telegram?.MainButton.setParams({text:`Оплатить`})
}
// ////////////////////////////////////

// const userNameTest = 'Клайперон Бенедиктович'
  return (<div className="min-h-screen  bg-gray-300 flex flex-col justify-between">
  <NavBar />
  {/* ///////////////////////// */}
      <div className="flex flex-col justify-around items-center gap-3 my-5 mx-2 ">
        
        <div className="text-amber-500 text-3xl text-center mt-2 ">
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
           className="
           px-2 h-12 rounded  flex  items-center justify-center 
           text-xl font-bold  text-amber-300 text-center
            bg-gray-400 border-yellow-300 
             w-2/3 "
                type="number" 
                placeholder=" звезды ⭐️=>🍺"
                value={donat} 
                onChange={(e)=>setDonat(+e.target.value)}
            />
            <UiButton variant="goldoutlined" onClick={onSendData} className="w-2/3 mt-2 h-12"
            >ЗАПЛАТИТЬ</UiButton> 

            <UiButton type="button" variant="secondary" className="w-2/3 mt-4"
                  onClick={()=>(setDonat(0))}>
                        Очистить форму
            </UiButton> */}
       
       
        <form onSubmit={handleSubmit(submit)} className="w-full mx-auto flex flex-col
        items-center">
             <input 
           className="
           px-2 h-10 rounded  flex  items-center justify-center 
           text-xl font-bold  text-amber-300 text-center
            bg-gray-400 border-yellow-300 
             w-2/3 
             "
                type="number" 
                placeholder=" звезды ⭐️=>🍺"
            {...register('donat',{required:'заполни donat'})}    
            />
            
            {errors.donat&&<div className="h-2 text-sm text-red-400">
                {errors?.donat?.message}</div>}
            <UiButton type="submit" variant="goldoutlined"  className="w-2/3 mt-4"
                        >ЗАПЛАТИТЬ
            </UiButton>
            <UiButton type="button" variant="secondary" className="w-2/3 mt-4"
                       onClick={resetForm}>
                        Очистить форму
            </UiButton>

        </form>
{donat?donat:<div className="text-red-900">not any donat</div>}
        

       </div> 
      {/* ////////////////////////////////// */}
      {/* <Description userName={userName}/> */}
      <Footer/>
      </div>
  );
}
