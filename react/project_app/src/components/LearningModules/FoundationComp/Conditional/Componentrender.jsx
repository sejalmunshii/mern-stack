import React,{useState} from 'react'
import Form from './Form'

function Componentrender() {
const[comp,setComp]=useState(false)

  return (
    <>
{comp?(
   <p>Please Login</p> 
):(
<button onClick={()=>setComp(true)}>click</button>
)
}
{comp && <Form/>}
    </>
  )
}

export default Componentrender