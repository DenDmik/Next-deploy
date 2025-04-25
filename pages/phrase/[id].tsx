
import Paid, { IPrase } from "@/pages/paid";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page(){
    const router = useRouter();
    const { id } =  router.query;
    const[data,setData]= useState<IPrase>()
    useEffect(() => {
        if (!id) return; // Проверяем наличие id
    
        //////////////////////////
        axios.post('https://40d9-185-102-186-35.ngrok-free.app/bd/1',{d:''})
              
  .then(function (response) {
    console.log(response);
  const data = response.data
  setData(data)
    
    

    
  })
  .catch(function (error) {
    console.log(error);
    alert(`ERROR:${error}`)
  })

        ///////////////////////////////
    
      }, [id]); // Зависимость от id
      
      if(!data) return
     return(
        <Paid  data ={data}/>
     )
}
//🍺