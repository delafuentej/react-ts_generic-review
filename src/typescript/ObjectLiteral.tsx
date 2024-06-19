import React from 'react'


interface Person {
    firstName: string;
    secondName: string;
    age:number;
    address: Address;
    isAlive?: boolean;
    // address: {
    //     country:string;
    //     city:string;
    // }
}
interface Address {
    country: string;
    city: string;
}


const ObjectLiteral = () => {
    const person:Person={
        firstName: 'Jesús',
        secondName: 'de la Fuente',
        age:42,
        
    
        address: {
            country: 'Spain',
            city: 'Segovia'
        }
    };

    const{address} = person;
  return (
    <>
    <h3>Objects Literals</h3>
    <pre>
    {JSON.stringify(person, null,2)}
    {JSON.stringify(address, null,2)}

    </pre>
   
      
    </>
  )
}

export default ObjectLiteral
