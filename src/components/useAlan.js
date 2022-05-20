import {useEffect, useRef} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

function useAlan({getQue}){
    
    const alanBtnInstance = useRef(null);
    
    const fetchQue=async(category, name)=>{
      const ques = getQue(category) 
      console.log("in fetch: "+ ques);      
     }

    useEffect(()=>{
     if (!alanBtnInstance.current) {
       alanBtnInstance.current = alanBtn({
        key:"376729e07c783b8326aca26103e0fd7a2e956eca572e1d8b807a3e2338fdd0dc/stage",
       onCommand:async(data)=>{
       if(data.category){
         console.log(data.category)
         if(data.category === 'book') fetchQue('10','book');
         if(data.category === 'music') fetchQue('12','music');
         if(data.category === 'film') fetchQue('11','film');
      } },
     })
     }
    },[])
    
  return null;
}
export default useAlan;