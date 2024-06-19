import { useState } from "react";

interface Options {
    initialValue:number;
}

export default function useCounter({initialValue}:Options) {
    const[count, setCount]= useState<number>(initialValue);

    const increaseBy=()=>{
        return setCount((prev)=> prev + 1);
    }

    const decreaseBy=()=>{
            return setCount((prev)=> prev -1);
 }

  return {
    //Properties:
    count,
    //Methods:
    increaseBy,
    decreaseBy,

  }
}
