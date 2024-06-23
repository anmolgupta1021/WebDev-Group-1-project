import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="  bg-gray-100 flex justify-center items-center bg-gradient-to-r from-slate-500 to-gray-100">
      <div className="bg-slate-800 p-8 rounded shadow-md w-full sm:w-96 m-20">
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 bg-orange-">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className= " bg-slate-200 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="bg-slate-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm text-white">
            New Customer?{' '}
            <Link
              to="/Register"
              className="text-orange-300 hover:underline focus:outline-none focus:underline"
            >
              Register 
            </Link>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
