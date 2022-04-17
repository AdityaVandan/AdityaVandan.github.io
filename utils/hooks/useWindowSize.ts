import { useEffect, useState } from "react";

function useWindowSize() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const setDimensions = () => {
    if(typeof window !== 'undefined'){
      setHeight(window?.innerHeight);
      setWidth(window?.innerWidth);
    }
  }

  useEffect(()=>{
    setDimensions();

    window.addEventListener('resize', setDimensions);

    return () =>{
      window.removeEventListener('resize', setDimensions);
    }
  },[]);
 
  return [width, height];
}

export default useWindowSize;
