import React,{useState} from 'react'

function Counter() {
    const [index,setIndex]=useState(0);
    const [index1,setIndex1]=useState(0);
    const inc=()=>{
        setIndex1(index1+1)
    }
    const dec=()=>{
        setIndex(index-1)
    }

    return (
        <>
            <div className="d-flex bg-black p-5 m-3 ">
                <div className="col p-3 bg-warning m-3">
                    <button className='btn btn-danger' onClick={dec}>decrement</button>
                    <button className='btn btn-info'>{index}</button>
                </div>
                <div className="col p-3 m-3  bg-warning">
                    <button className='btn btn-info'>{index1}</button>
                    <button className='btn btn-success' onClick={inc}>increment</button>

                </div>
            </div>
        </>
    )
}

export default Counter