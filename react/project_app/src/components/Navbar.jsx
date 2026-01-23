import React, { useState } from 'react';
import { Link } from 'react-router';
import reactLogo from '../assets/react.svg';
import './Navbar.css';
  import { FaSun, FaMoon } from 'react-icons/fa';


function Navbar({theme,settheme}) {
  const [hover, setHover] = useState(false);

  const toggleBtn=(()=>{
    settheme(theme === "dark"?"light":"dark")
  })
 

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 mt-5 border-bottom bg-dark rounded">

      <div>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
          className='logoimg'
            src={reactLogo}
            alt="React logo"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              padding:"10px",
              height:"70px",
              willChange: "filter",
              transition: "filter 300ms",
              filter: hover
                ? "drop-shadow(0 0 1em #61dafbaa)"
                : "drop-shadow(0 0 0 transparent)",
              cursor: "pointer",
              animation: "logo-spin infinite 5s linear"
            }}
          />
        </a>
      </div>

      <nav>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link className="nav-link text-white" to="/">Home</Link></li>
          <li><Link className="nav-link text-white" to="/about">About</Link></li>
          <li><Link className="nav-link text-white" to="/team">Team</Link></li>
          <li><Link className="nav-link text-white" to="/learning">Learn React</Link></li>
        </ul>
      </nav>


      <div>
        <button onClick={toggleBtn} className='btn btn-outline-secondary rounded-circle' style={{width:"45px",height:"45px"}} >

          {theme=="dark"?<FaSun size={20} />:<FaMoon size={20}/>}

        </button>
      </div>
    </header>
  );
}

export default Navbar;
