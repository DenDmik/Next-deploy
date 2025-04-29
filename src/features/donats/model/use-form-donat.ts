import { useTelegram } from "@/hooks/useTelegram";
import { InvoiceStatuses } from "@twa-dev/types";
import axios from "axios";
// import { useCallback } from "react";
import {  SubmitHandler, useForm } from "react-hook-form";

export interface IForm{
    donat:number
}


export function useFormDonat(){
    const { register, handleSubmit, formState:{errors,isValid},reset,control,watch,
      } = useForm<IForm >({
        mode:'all'
      })

const telegram = useTelegram()
telegram?.tg.ready()
const chatId = telegram?.user?.id
const queryId = telegram?.queryId


      const onSendDataF = (donat:number) => {

const handleInvoiceClose =(status:InvoiceStatuses) => {
  console.log(status)
  if (status === 'paid') {
    // Перенаправление при успешной оплате
    telegram?.MainButton.hide()
    const id = 1
    window.location.href = `/phrase/${id}`; 
  } else {
    // Стандартное закрытие для других случаев
    telegram?.onClose?.();
  }
}
const donatCurrent = donat
        const data = {
            queryId,
          donatCurrent,
          chatId,
        }
        if(!donat)return;
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
      }


      const submit:SubmitHandler<IForm>=((data)=>{
        const donat = data.donat        
        onSendDataF(donat)
        reset()
      })
      const resetForm =()=>{
        reset()
      }
    return {
        register,
          submit,
          resetForm,
          handleSubmit,
          errors,
          control,
          onSendDataF,
          isValid,
          watch,
        }
    
}


