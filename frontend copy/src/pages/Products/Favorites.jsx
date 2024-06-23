
import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
     
    

    return (
        <div className="mx-auto w-full max-w-7xl bg-orange-100" >
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
                <p className="text-gray-600 mt-2">Discover our latest products and deals!</p>
            </header>

      
            <section className="mb-8 flex grid-cols-2">
                <div className='ml-3'>
                    <div className="grid grid-cols-3 gap-4 bg-orange-100">
                        <div className="p-4 border shadow-md bg-white">
                            <img src="https://i.pinimg.com/564x/a3/19/e7/a319e72d956f350d82801c5d650b26f5.jpg" alt="Product 1" className="w-full h-40 object-cover mb-4 " />
                            
                            <h3 className="text-lg font-medium">Macbook M2 Pro</h3>
                            <p className="text-gray-600">$190.99</p>
                            <Link to="/product/1" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block mr-12">
                                Add To Cart
                            </Link>
                            <Link to="/product/1" className=" ">
                                <i class="fa-regular fa-heart"></i>
                            </Link>
                        </div>
                        <div className="p-4 border shadow-md bg-white">
                            <img src="https://i.pinimg.com/736x/a4/cf/db/a4cfdb1d7745e89403bcaa19f14f0b94.jpg" alt="Product 1" className="w-full h-40 object-cover mb-4" />
                            <h3 className="text-lg font-medium">Product 1</h3>
                            <p className="text-gray-600">$19.99</p>
                            <Link to="/product/1" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block">
                                Read More->
                            </Link>
                        </div>
                        <div className="p-4 border shadow-md bg-white">
                            <img src="https://i.pinimg.com/736x/61/e4/03/61e4036582c4a03dfec866f335d8b3fa.jpg" alt="Product 1" className="w-full h-40 object-cover mb-4" />
                            <h3 className="text-lg font-medium">Product 1</h3>
                            <p className="text-gray-600">$19.99</p>
                            <Link to="/product/1" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block">
                                Read More->
                            </Link>
                        </div>
                    </div>
                    <br/>
                    <div className="grid grid-cols-3 gap-4 bg-orange-100">
                        <div className="p-4 border shadow-md bg-white">
                            <img src="https://i.pinimg.com/564x/51/df/cf/51dfcf569a14d401ae62f61223207c3c.jpg" alt="Product 1" className="w-full h-40 object-cover mb-4" />
                            <h3 className="text-lg font-medium">Product 1</h3>
                            <p className="text-gray-600">$19.99</p>
                            <Link to="/product/1" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block">
                                Read More->
                            </Link>
                        </div>
                        <div className="p-4 border shadow-md bg-white">
                            <img src="https://i.pinimg.com/564x/0d/0b/80/0d0b8088b45b9e0c97a80bfbb537e382.jpg" alt="Product 1" className="w-full h-40 object-cover mb-4" />
                            <h3 className="text-lg font-medium">Product 1</h3>
                            <p className="text-gray-600">$19.99</p>
                            <Link to="/product/1" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block">
                                Read More->
                            </Link>
                        </div>
                        <div className="p-4 border shadow-md bg-white">
                            <img src="https://i.pinimg.com/564x/83/82/33/838233dad27ddc5ba81c10c99141bb01.jpg" alt="Product 1" className="w-full h-40 object-cover mb-4" />
                            <h3 className="text-lg font-medium">Product 1</h3>
                            <p className="text-gray-600">$19.99</p>
                            <Link to="/product/1" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block">
                                Read More->
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

      
            <section className="bg-gray-100 p-8 rounded-md text-center">
                <h2 className="text-2xl font-bold mb-4">Get 10% Off Your First Order!</h2>
                <p className="text-gray-600 mb-4">Sign up  and receive a discount code.</p>
                <form className="flex justify-center items-center">
                    <input type="email" placeholder="Enter your email" className="p-2 border rounded-l-md focus:outline-none"/>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md ml-2">
                        Sign Up
                    </button>
               </form>
            </section>
        </div>
    );
}
