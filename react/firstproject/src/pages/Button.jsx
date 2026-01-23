import React from 'react'

function Button() {
    const button=()=>{
        alert("hello")
    }
  return  (
    <>
    <button type="button" class="btn btn-success me-5" onClick={button}>login</button>
    </>
  )            
}
export default Button;