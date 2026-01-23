import React, { useState } from 'react'

function Btnclick() {
    const [name, setName] = useState('');

    const handleEvent =  () => {
        alert("Namaste React")
    }


  return (
    <>
    
    <div className='col text-bg-dark p-3 w-50 m-auto'>
        <h2 className='text-center text-decoration-underline'>Event Handling In React</h2>
      <button className='btn btn-info' onClick={() => alert("Hello React")}>Hello</button>
      <br /><br />
      <button className='btn btn-primary ' onClick={handleEvent}>Namaste</button>
      <br /><br />
    </div>
    </>
  )
}

export default Btnclick