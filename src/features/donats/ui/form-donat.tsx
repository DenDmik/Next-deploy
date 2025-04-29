import { UiButton } from "@/shared/ui-button"
import { useFormDonat } from "../model/use-form-donat"
import { useTelegram } from "@/hooks/useTelegram"
import { useRef } from "react"

export function UiFormDonat(){
    const telegram = useTelegram()
    // const [donat,setDonat]= useState<number>()
    const donat = useRef(0)
    const{register, 
        submit,
        resetForm,
        handleSubmit,
        errors,
        onSendDataF,
        isValid,
        watch,
        }=useFormDonat()

//         useEffect(() => {
//   telegram?.tg.onEvent('mainButtonClicked', ()=>{if(donat)onSendData(donat)})
//   return () => {
//   telegram?.tg.offEvent('mainButtonClicked',()=>{if(donat)onSendData(donat)})
//   }
// }, [onSendData,telegram?.tg,donat])
// useEffect(()=>{
//     const formValues = watch('donat')
//     setDonat(formValues)
// },
// [onSendData,donat]
// )
donat.current = watch('donat')


if(!isValid){
  telegram?.MainButton.hide()
}else{
  telegram?.MainButton.show();
  telegram?.MainButton.setParams({text:`Оплатить`})
  telegram?.MainButton.onClick(()=>{onSendDataF(donat.current)})
}

    return(
        <>
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
{donat.current?donat.current:<div className="text-red-900">not any donat</div>}
        </>
    )
}