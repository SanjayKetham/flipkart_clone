import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { MyProvider } from './Mycontext';
import Home from './components/Home';


const root = document.getElementById('root');
const VirtualRoot = ReactDOM.createRoot(root);

VirtualRoot.render(
  <React.StrictMode>
    <BrowserRouter basename='flipkart_clone'>
      <MyProvider> 
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          
        </Routes>
      </MyProvider>
    </BrowserRouter>
  </React.StrictMode>
);

