import React from 'react'
import useCounter from '../hooks/useCounter';

function CounterWithHook() {

    const{count, increaseBy, decreaseBy} =useCounter({initialValue:2});
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

export default CounterWithHook;
