import React from "react";
export function useTelegram() {
     const [isReady, setIsReady] = React.useState(false);
    
      React.useEffect(() => {
        if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
          const tg = window.Telegram.WebApp;
          tg.ready();
          setIsReady(true);
        }
      }, []);
    
      if (!isReady) return null; 
    const tg = window.Telegram.WebApp
    

    const onClose = () => {
        tg.close()
    }
    const MainButton = tg.MainButton


    const onToggleButton = () => {
        if(MainButton.isVisible) {
            MainButton.hide();
        } else {
            MainButton.show();
        }
    }
   
    
    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
        MainButton,
        
    }
}