import React from 'react'
import Product from './components/Product';

let productData = [];

const fact = () => {
  fetch("https://fakestoreapi.com/products/1")
    .then(res => res.json())
    .then(data =>{
      productData = data;
      console.log(productData[0])
    });
}
fact()
function App() {

  return (
    <>
      <Product product={productData}/>
    </>
  )
}

export default App