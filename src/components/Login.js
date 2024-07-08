import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../mutations';

const Login = () => {
  const navigate = useNavigate();
  const [LoginUser, { loading, error }] = useMutation(LOGIN_USER);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const variables = {
        email: formData.email,
        password: formData.password,
      };
      console.log('Submitting with variables:', variables);
      const { data } = await LoginUser({ variables });
      console.log('Login successful:', data);
      navigate('/');
    } catch (err) {
      console.error('Error Logging user:', err.message);
      console.error('Error details:', err);
      if (err.networkError && err.networkError.result && err.networkError.result.errors) {
        console.log('Error response:', err.networkError.result.errors);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error.message}</p>}
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="email"
              name="email"
              id="email"
              value={formData.email}
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
              className="w-full mb-9 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <Link to='/register' className='block text-center text-blue-500 hover:underline'>
              Not registered yet? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
