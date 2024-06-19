import React from 'react'

export const BasicTypes = () => {
    const name:string ='Jesús';
    const age:number= 42;
    const isActive:boolean= true;
    const powers:string[]= ['React','ReactNative','Angular'];
    powers.push('Node.js')

  return (
    <>
        <h3>BasicTypes</h3>
        {name} {age} {isActive ? 'true': 'false'}
        <br></br>
        {powers.join(', ')}
    </>
    
  )
}
