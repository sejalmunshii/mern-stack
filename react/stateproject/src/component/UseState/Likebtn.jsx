import React,{useState} from 'react'
import { CiHeart } from "react-icons/ci";

function Likebtn() {
    const [index,setIndex]=useState('like')
    const [color,setColor]=useState('primary')


    const click=()=>{
      setIndex('liked')
      setColor('danger')
    }
  return (
    <>
     <button className={`btn btn-${color}`} onClick={click}>{index}</button>

    </>
  )
}

export default Likebtn;