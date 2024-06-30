import React, { useState, useContext } from 'react';
import { Mycontext } from '../Mycontext'; 
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { users } = useContext(Mycontext);
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const user = users.find(user => 
      user.username === formData.username && user.password === formData.password
    );
    if (user) {
     
      navigate('/')
    } else {
      {formData && <p className="text-green-600 mt-2 text-center">Invalid Username or Password!</p>}

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              className="w-full mb-9 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Login
            </button>
            <Link to='/register' className='ml-20'>Not Registerd yet?sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
