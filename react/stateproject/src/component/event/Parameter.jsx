import React,{use, useState} from 'react'

function Parameter() {

    const[name,setName]=useState('');

    let alertName=(e)=>{
        setName(e.target.value);
        alert(name);
        console.log(name)
    }
  return (
    <>
      <ul className='d-flex'>
        <li>sejal</li>
        <button onClick={alertName} value={'sejal'}>click</button>
        <li>hardi</li>
        <button onClick={alertName} value={'hardi'}>click</button>
        <li>aastha</li>
        <button onClick={alertName} value={'aastha'}>click</button>
        <li>rohan</li>
        <button onClick={alertName} value={'rohan'}>click</button>
        <li>arun</li>
        <button onClick={alertName} value={'arun'}>click</button>
        <li>dharmik</li>
        <button onClick={alertName} value={'dharmik'}>click</button> 
      </ul>
    </>
  )
}

export default Parameter