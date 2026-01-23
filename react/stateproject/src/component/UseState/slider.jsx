import React, { useState } from "react";

function Slider() {
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/303",
    "https://picsum.photos/200/306",
    "https://picsum.photos/200/310",
  ];

  const [index, setimage] = useState(0);

  const next = () => {
    setimage((e) => (e + 1) % images.length);
  };

  const prev = () => {
    setimage((e) => (e - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container text-center p-4">
      <h2 className="mb-3"> Image Slider</h2>

      <div className="slider-box mx-auto">
        <img
          src={images[index]}
          alt="slider"
          className="slider-image"
        />

        <div className="buttons mt-3">
          <button className="btn btn-dark mx-2" onClick={prev}>
             Prev
          </button>
          <button className="btn btn-dark mx-2" onClick={next}>
            Next 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
