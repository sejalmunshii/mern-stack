import React, { useEffect, useState } from 'react'

function MouseTracker() {
        const[position,setPosition]=useState({x:0,y:0})

        useEffect(()=>{
            const handleMouse=(event)=>{
                setPosition(
                    {   x:event.clientX,
                        y:event.clientY,
                    }
                );
            };
            window.addEventListener("mousemove",handleMouse);


            return()=>{
                window.removeEventListener("mousemove",handleMouse);
            }
        },[])

  return (
    <>
     <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Mouse Position Tracker</h1>
      <p style={{ fontSize: "24px" }}>
         X: <strong>{position.x}</strong> | Y: <strong>{position.y}</strong>
      </p>
    </div>
    </>
  )
}

export default MouseTracker