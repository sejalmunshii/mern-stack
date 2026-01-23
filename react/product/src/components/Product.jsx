import React from 'react'

function Product(props) {

    console.log(props);
    
    return (
        <>
            <div className="card" style={{width:"18rem"}}>
                <img src={props.product.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.product.title}</h5>
                        <p className="card-text">{props.product.description}</p>
                        
                    </div>
            </div>
        </>
    )
}

export default Product;