import React,{useState} from 'react'

function Showhide() {
    const[isvisible,setValue]=useState(false)
  

  return (
    <>
     <button onClick={() =>setValue (!isvisible) }>
        {isvisible ? "show" :"hide"}
     </button>
        {isvisible && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, asperiores quod ad veritatis cum molestias a, doloribus nemo officia ratione assumenda eaque incidunt adipisci nulla deserunt voluptas facere, dolor dolore!</p> }
    </> 
  )
}

export default Showhide;