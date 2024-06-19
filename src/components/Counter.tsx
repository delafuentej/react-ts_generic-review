import React, {useState} from 'react'

const Counter = () => {
    const[count, setCount]= useState<number>(10);

    const increaseBy=()=>{
        return setCount((prev)=> prev + 1);
    }

    const decreaseBy=()=>{
        return setCount((prev)=> prev -1);
    }
  return (
    <>
    <h3>Couter: {count}</h3>
    <div>
        <button
            onClick={increaseBy}
        >+1</button>
        &nbsp;
        <button
            onClick={decreaseBy}
        >-1</button>

    </div>
    </>
  )
}

export default Counter;
