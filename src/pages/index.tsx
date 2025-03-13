import { useEffect, useState } from "react";



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
const handleClose=()=>{window.Telegram.WebApp.close()}
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center ">
        <div className="text-red-700 text-4xl text-center">HELLO</div>
        <button 
        className="text-2xl text-amber-300"
        onClick={handleClose} 

        >Close</button>

      </main>
  );
}
