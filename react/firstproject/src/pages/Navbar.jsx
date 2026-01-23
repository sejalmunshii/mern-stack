 import React from 'react'
import Button from './button'
import { Link } from 'react-router'
function Navbar() {
    const sign=()=>{
        alert("Signing Up..")
        return(setTimeout(()=>{
               alert("signing succesfull")
        },1000))
    }
  return (
    <>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 mt-5 border-bottom bg-dark rounded">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none text-light ms-5">Logo
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li> <Link className="nav-link" aria-current="page" to="/Section1">Home</Link></li>
        <li> <Link className="nav-link" aria-current="page" to="/About">about</Link></li>
        <li> <Link className="nav-link" aria-current="page" to="/Section2">menu</Link></li>
        <li> <Link className="nav-link" aria-current="page" to="/Form">contact</Link></li>
        <li> <Link className="nav-link" aria-current="page" to="/Product">product</Link></li>
      </ul>

      <div class="col-md-3 text-end">
        
        <li><a href="#" class="nav-link px-3 link-success" onClick={sign}>sign up</a></li>
      </div>
    </header>
    </>
  )
}

export default Navbar