import React from 'react'

export default function Contact() {
    return (
        
        <div className="relative flex items-top justify-center min-h-[500px] bg-white sm:items-center sm:pt-0">
            <div className="bg-white text-lg w-48 p-3 ml-20 ">
                <div>
                    <h4 className="">Type of issue</h4>
                    <ul className="text-base">
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">Help with your issues</li>
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">Help with your orders</li>
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">Help with other issues</li>
                    </ul>
                </div>
                <br/>
                <hr/> 
                <br/>
                <div>
                    <h4 className="">Help Topics</h4>
                    <ul className="text-base">
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">Delivery Related</li>
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">Login and Account</li>
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">Refund Related</li>
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">Payment</li>
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">Order Related</li>
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">Returns</li>
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">UPI</li>
                        <li className="hover:bg-gray-100 hover:underline text-orange-400 ">Others</li>
                    </ul>
                </div>
            </div>
            
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <i class="fa-solid fa-location-dot"></i>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Delhi Inc, Street, State, Postal Code
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <i class="fa-solid fa-phone"></i>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 1234567890
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <i class="fa-solid fa-envelope"></i>
                                
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    info@someone.org
                                </div>
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label for="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Mobile Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}