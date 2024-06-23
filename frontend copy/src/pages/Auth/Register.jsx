import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username)
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Confirm Password:', confirmPassword)
    
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  };

  return (
    <div className=" bg-gray-100 flex justify-center items-center bg-gradient-to-r from-slate-500 to-gray-100">
      
      <div className=" bg-slate-800 p-8 rounded text-white shadow-md w-full sm:w-96 m-20">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="bg-slate-200 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" >
              Email
            </label>
            <input
              className="bg-slate-200 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="bg-slate-200 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" >
              Confirm Password
            </label>
            <input
              className=" bg-slate-200 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm text-white">
            Already Have an Account?{' '}
            <Link
              to="/Login"
              className="text-orange-300 hover:underline focus:outline-none focus:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Register