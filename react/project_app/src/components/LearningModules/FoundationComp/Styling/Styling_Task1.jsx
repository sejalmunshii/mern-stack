import React from "react";

function Styling_Task1() {

  const cardStyle = {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
    fontFamily: "Arial",
    margin: "20px auto",
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "15px"
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px 0",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <img
        style={imageStyle}
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800"
        alt="Card"
      />

      <div style={contentStyle}>
        <h2 style={titleStyle}>Modern Chair</h2>
        <p style={descriptionStyle}>
          Stylish and comfortable chair for your home and office.
        </p>

        <button style={buttonStyle}>Buy Now</button>
      </div>
    </div>
  );
}

export default Styling_Task1;
