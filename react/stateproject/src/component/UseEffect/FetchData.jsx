import React, { useEffect, useState } from "react";

function FetchData() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const nextProduct = () => {
    if (index < users.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevProduct = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <div className="text-bg-dark p-3">
      <h1>Learning useEffect</h1>
      <hr />
      <h2>API Data Fetch</h2>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src={users[index].image}
          className="card-img-top"
          alt={users[index].title}
        />
        <div className="card-body">
          <h5 className="card-title">{users[index].title}</h5>
          <p className="card-text">{users[index].description}</p>

          <button
            className="btn btn-danger"
            onClick={prevProduct}
          >
            Previous
          </button>

          <button
            className="btn btn-success ms-3 px-5"
            onClick={nextProduct}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default FetchData;
