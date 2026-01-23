import React, { useEffect, useState } from 'react'

function DataFetch_OnClick() {
  const [product, setProduct] = useState([]);
  const [fetchNow, setFetchNow] = useState(false); 

  useEffect(() => { 
    if (!fetchNow) return;

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProduct(data));

  }, [fetchNow]); 

  return (
    <div className="container mt-4 d-flex ">
     <div className="button">
         <button 
        className="btn btn-dark mb-3 m-5"
        onClick={() => setFetchNow(true)} 
      >
        Fetch Products
      </button>
     </div>

      <div className="row g-4">
        {product.map((u) => (
          <div key={u.id} className="col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={u.image}
                className="card-img-top p-3"
                alt="product"
                height="200"
                style={{ objectFit: "contain" }}
              />
              <div className="card-body">
                <h6 className="card-title">{u.title.slice(0, 30)}...</h6>
                <p className="text-muted small">{u.description.slice(0, 50)}...</p>
                <p className="fw-bold text-success">${u.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default DataFetch_OnClick;
