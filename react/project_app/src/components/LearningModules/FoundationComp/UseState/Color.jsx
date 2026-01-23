import React, { useState } from 'react';
import "./color.css"

function Color() {
  const [bgColor, setBgColor] = useState('white');
  return (
    <>
      <div className="container">
        <div className="d-flex">
          
          <div
            className="col-6 w-50 h-100 p-5 border border-3 "
            style={{ backgroundColor: bgColor }}
          ></div>

          <div className="col-6 w-50 d-flex h-100">
            <div
              className="col-25 bg-black p-3"
              onClick={() => setBgColor('black')}
            ></div>

            <div
              className="col-25 bg-success p-3"
              onClick={() => setBgColor('green')}
            >
              <h1>green</h1>
            </div>

            <div
              className="col-25 blue bg-primary p-3"
              onClick={() => setBgColor('blue')}
            >
              <h1>blue</h1>
            </div>

            <div
              className="col-25 bg-warning p-3"
              onClick={() => setBgColor('yellow')}
            >
              <h1>yellow</h1>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Color;
