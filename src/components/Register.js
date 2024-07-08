import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../mutations'; 

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerUser({
        variables: {
          name: formData.name,
          email: formData.email,
          password: formData.password
        },
      });
      console.log('Registration successful:', data);
      navigate('/login');
    } catch (err) {
      console.error('Error registering user:', err.message);
      console.error('Error details:', err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
        {error && <p className="text-red-600 mt-2 text-center">Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default Register;
