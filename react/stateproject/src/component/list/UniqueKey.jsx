import React from 'react'

const UniqueKey = () => {
    const unique = [8,"Roshan","dharmik","hardi"]
  return (
    <>
    <ul>
       {unique.map((unique,index)=>
       (
        <li id={unique}>{index}-{unique}</li>
       )) 
       } 
    </ul>
    
    </>
  )
}

export default UniqueKey;