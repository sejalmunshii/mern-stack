import React, { useState } from 'react'

function Notification() {
    const [notify, setNotify] = useState(false)

    if(notify==true){
        alert("button is click")
    }

    return (
        <>
           <button onClick={()=>setNotify(true)}>click</button>
        </>
    )
}

export default Notification