import React from 'react';
import HeartIcon from "./Products/HeartIcon.jsx"


const Products = ({addToCart}) => {
  const products = [
    { id: 1, name: "Product 1", price: 19.99,url:"https://i.pinimg.com/564x/3a/0e/e9/3a0ee9a26c8692c6a68b342f71f3eab2.jpg" },
    { id: 2, name: "Product 2", price: 29.99 ,url:"https://i.pinimg.com/564x/33/a3/93/33a39352e9b641d44d659538ba0ae3b9.jpg"},
    { id: 3, name: "Product 3", price: 39.99 ,url:"https://i.pinimg.com/736x/2d/2f/9f/2d2f9fb285d27584c966f39dbd249ce7.jpg"},
    { id: 4, name: "Product 4", price: 49.99 ,url:"https://i.pinimg.com/736x/61/e4/03/61e4036582c4a03dfec866f335d8b3fa.jpg"}
  ];

  return (
    <section className="py-8 px-4 flex">
      <div className="   container mx-auto grid gap-8  grid-cols-2 p-4  w-full max-w-2xl  bg-orange-100">
        {products.map(product => (
          <div key={product.id} className="relative bg-white rounded-lg shadow-lg  p-4">
            <img className=" h-48 w-full " src={product.url}/>
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3> 
           
            <p className="text-black">${product.price.toFixed(2)}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <HeartIcon />
            
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Products;
