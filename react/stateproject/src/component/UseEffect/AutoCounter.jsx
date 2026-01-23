import React, { useEffect, useState } from 'react'

function AutoCounter() {

    const[count,setCount]=useState(0);
  
    useEffect(()=>{
        const interval = setInterval(() => {
            setCount(count => count + 1); 
        }, 2000);

        return () => clearInterval(interval);
    },[])

  return (
    <>
  
  <div className="container">
    <div className="counter bg-black">
          <h1 className='text-light p-5' >Auto Counter</h1>
    <h2 className='text-light p-5 m-5 '>count:{count}</h2>
    </div>
  </div>
    </>
  )
}

export default AutoCounter;