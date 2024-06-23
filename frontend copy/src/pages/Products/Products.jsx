import React from 'react'
import { useState, useEffect } from 'react'
import HeartIcon from './HeartIcon'


const Products = () => {
  

  const [products,setProducts]=useState([])
  useEffect(()=>{
    const products = [
      { id: 1, name: "iPhone 15 pro", price: 19.99 ,url:"https://i.pinimg.com/564x/3a/0e/e9/3a0ee9a26c8692c6a68b342f71f3eab2.jpg"},
      { id: 2, name: "Product 2", price: 29.99 ,url:"https://i.pinimg.com/564x/0d/4b/80/0d4b807403904804a6a06bc48f599c7a.jpg"},
      { id: 3, name: "Product 3", price: 39.99 ,url:"https://i.pinimg.com/736x/2d/2f/9f/2d2f9fb285d27584c966f39dbd249ce7.jpg"},
      { id: 4, name: "Product 4", price: 49.99 ,url:"https://i.pinimg.com/736x/61/e4/03/61e4036582c4a03dfec866f335d8b3fa.jpg"},
      { id: 5, name: "Product 5", price: 59.99 ,url:"https://i.pinimg.com/564x/33/a3/93/33a39352e9b641d44d659538ba0ae3b9.jpg"},
      { id: 6, name: "Product 6", price: 69.99 ,url:"https://i.pinimg.com/736x/0d/0b/80/0d0b8088b45b9e0c97a80bfbb537e382.jpg"}
    ];
    setProducts(products);
  },[]);

  return (
    <section className="mx-auto w-full max-w-7xl bg-orange-100 p-4 overflow-auto">
      <div className="container max-w-5xl grid gap-8 ml-20 grid-cols-3 ">
        {products.map(product => (
          <div key={product.id} className="relative bg-white  rounded-lg shadow-md p-4">
            <img src={product.url}  className="h-48 w-full  "/>
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            
            >
              Add to Cart
            </button>
            <HeartIcon/>

            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
