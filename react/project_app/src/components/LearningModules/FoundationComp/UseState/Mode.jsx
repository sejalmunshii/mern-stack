import React, { useState } from 'react'
function Mode() {
    const [mode, setMode] = useState(false)

    const color = () => {
        setMode(!mode)
    }
    return (
        <>
            <div className={`container bg-${mode?'dark':'light'} text-${mode?'light':'dark'}`}>
                <button onClick={color} className='bg-warning'>dark/light</button>
            </div>
        </>
    )
}

export default Mode