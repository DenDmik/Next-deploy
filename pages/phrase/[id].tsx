
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
    
        const fetchData = async ():Promise<IPrase|undefined> => {
          try {
            const response = await axios.get(
              `https://dae9-2a00-7c80-0-3b4-00-14.ngrok-free.app/bd/${id}`
            );
            console.log(response.data);
            setData(response.data)
            return response.data
          } catch (error) {
            console.error('Error:', error);
            alert(`ERROR: ${error instanceof Error ? error.message : 'Unknown error'}`);
          }
        };
    
        fetchData();
      }, [id]); // Зависимость от id
      
      if(!data) return
     return(
        <Paid  data ={data}/>
     )
}
//🍺