import React from 'react'
import { useNavigate } from 'react-router'

function Product() {

    const navigate = useNavigate();
    const product = [
        {
            id: 1,
            img: "https://picsum.photos/200/300"
        },
        {
            id: 2,
            img: "https://picsum.photos/200/302"
        },
        {
            id: 3,
            img: "https://picsum.photos/200/303"
        },
        {
            id: 4,
            img: "https://picsum.photos/200/304"
        },
        {
            id: 5,
            img: "https://picsum.photos/200/305"
        },
    ]
    const handleView = (id) => {
        navigate(`/product/${id}`);
    }
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {product.map((item) => (
                        <div className="col-md-3 mb-4" key={item.id}>
                            <div className="card">
                                <img
                                    src={item.img}
                                    className="card-img-top"
                                    alt="product"
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Product {item.id}</h5>
                                    <button className="btn btn-primary" onClick={() => handleView(item.id)}
                                    >View</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Product