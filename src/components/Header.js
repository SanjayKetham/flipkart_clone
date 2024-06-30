import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { SiFlipkart } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";

export default function Header() {
  return (
    <div>
      <div className='py-2 lg:py-6 bg-[#047BD5]'>
        <div className="flex flex-wrap items-center justify-between px-4 lg:px-20">
          <h3 className='text-2xl text-white flex items-center'><SiFlipkart className='text-yellow-400'/> Flipkart</h3>
          
          <div className='flex-grow flex items-center justify-center mt-2 lg:mt-0'>
            <input type="text" className='w-full max-w-xs lg:max-w-md pr-8 pl-2 py-2 focus:outline-none' placeholder="Search for Product, Brands and More.." />
            <button type="submit" className='px-4 py-2 font-bold text-white'><IoSearchOutline /></button>
          </div>
          
          <div className='flex items-center mt-2 lg:mt-0'>
            <Link to="/login" className='text-[#047BD5] bg-white px-2 py-1 font-bold focus:outline-none'>Login</Link>
            <a className='font-bold text-white ml-4 lg:ml-16 focus:outline-none' href="#orders">Become a Seller</a>
            <a className='font-bold text-white ml-4 lg:ml-16 focus:outline-none flex items-center' href="">More <MdExpandMore size={20} /></a>
            <a className='font-bold text-white ml-4 lg:ml-16 focus:outline-none flex items-center' href=""><IoCartOutline size={20} /> Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
}
