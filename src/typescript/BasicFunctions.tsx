

export const BasicFunctions = () => {
    const sum=(a:number, b:number):string=>{
        return `${a +  b}`;
    };


  return (
    <>
      <h3>Basic Functions</h3>
      
      <span>Result: {sum(2,6)}</span>
    </>
  )
}
