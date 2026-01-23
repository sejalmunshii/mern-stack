import React from 'react'
import reactLogo from '../assets/react.svg';
import { Link } from 'react-router';

function Front() {
  return (
    <>
      <div className="text-center mt-5">

        <Link to="">
          <img 
            src={reactLogo}
            alt="React logo"
            className="d-block mx-auto"
            style={{ width: "150px", height: "200px" }}
          />
        </Link>

        <h1 className="fw-bold display-5 mt-3">React</h1>
        <p className="fs-4 text-secondary">
          The library for web and native user interfaces
        </p>

        <div className="mt-3">
          <Link 
            to="/learning" 
            className="btn text-light px-4 py-2 me-3"
            style={{ backgroundColor: "#034d66ff", borderRadius:"20px" }}
          >
            Learn
          </Link>

          <Link 
            to="/learning" 
            className="btn px-4 py-2"
            style={{ borderRadius:"20px", border:"1px solid #034d66ff", color:"#034d66ff" }}>
            API Reference
          </Link>
        </div>
      </div>
    </>
  );
}

export default Front;
