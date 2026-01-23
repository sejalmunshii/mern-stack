import React, { useState, useEffect } from "react";

function AnimatedText() {
  const words = ["React Developer", "Frontend Enthusiast", "Web Designer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <h2 className="text-secondary mt-2">{words[index]}</h2>;
}

export default AnimatedText;
