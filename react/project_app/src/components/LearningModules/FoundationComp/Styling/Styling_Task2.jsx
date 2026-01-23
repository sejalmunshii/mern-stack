import React from "react";

function Styling_Task2() {

  const groupStyle = {
    display: "flex",
    gap: "10px",
    margin: "20px",
  };

  const buttonStyle = {
    padding: "10px 16px",
    border: "1px solid #ccc",
    background: "#f5f5f5",
    cursor: "pointer",
    borderRadius: "6px",
    fontSize: "14px",
    transition: "0.2s",
  };

  const hoverStyle = {
    background: "#007bff",
    color: "#fff",
    borderColor: "#007bff",
  };

  const [hoverIndex, setHoverIndex] = React.useState(null);

  const buttons = ["All", "Active", "Completed"];

  return (
    <div style={groupStyle}>
      {buttons.map((label, index) => (
        <button
          key={index}
          style={hoverIndex === index ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Styling_Task2;
