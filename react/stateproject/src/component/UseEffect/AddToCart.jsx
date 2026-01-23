import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function AddToCart() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(()=> {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleAddToCart = (item) => {
    const exist = cart.find((p) => p.id === item.id);

    if (exist) {
      alert("Item already in cart!");
    } else {
      setCart([...cart, item]);
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-4">
        <a className="navbar-brand fw-bold text-warning"> Fake Store</a>

        <div className="text-white position-relative fs-5">
          <FaShoppingCart />

          <span
            className="badge bg-danger position-absolute"
            style={{ top: "-12px", right: "-10px" }}
          >
            {cart.length}
          </span>
        </div>
      </nav>

      <div className="container mt-4">
        <h2 className="text-center mb-4 fw-bold">Products</h2>

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
                  <p className="text-muted small">
                    {u.description.slice(0, 50)}...
                  </p>
                  <p className="fw-bold text-success">${u.price}</p>

                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleAddToCart(u)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddToCart;
