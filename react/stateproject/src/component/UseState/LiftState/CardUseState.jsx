import React from 'react'

function CardUseState(props) {
  return (
    <>
    <h1>hello ji</h1>
    <input type='text' onChange={(e)=>{props.setName(e.target.value)}}/>
    <p>Your name:{props.name}</p>
    </>
  )
}

export default CardUseState