import React from 'react';
import Grocery from '../Grocery.webp';
import Mobiles from '../Mobiles.webp';
import Fashion from '../Fashion.jpg';
import Electronics from '../Electronics.png';
import Furniture from '../Furniture.jpg';
import Appliances from '../Appliances.webp';
import Travel from '../Travel.webp';
import Beauty from '../Beauty.png';
import Wheelers from '../Wheelers.png';
import { MdExpandMore } from "react-icons/md";
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';
import Home7 from './Home7';

const Home = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-around items-center py-4'>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Grocery} alt="Grocery" className='w-20 h-20'/>
          <p>Grocery</p>
        </span>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Mobiles} alt="Mobiles" className='w-20 h-20'/>
          <p>Mobiles</p>
        </span>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Fashion} alt="Fashion" className='w-20 h-20'/>
          <p className='flex items-center'>
            Fashion
            <MdExpandMore size={20} />
          </p>
        </span>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Electronics} alt="Electronics" className='w-20 h-20'/>
          <p className='flex items-center'>
            Electronics
            <MdExpandMore size={20} />
          </p>
        </span>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Furniture} alt="Home & Furniture" className='w-20 h-20'/>
          <p className='flex items-center'>
            Home & Furniture
            <MdExpandMore size={20} />
          </p>
        </span>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Appliances} alt="Appliances" className='w-20 h-20'/>
          <p>Appliances</p>
        </span>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Travel} alt="Travel" className='w-20 h-20'/>
          <p>Travel</p>
        </span>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Beauty} alt="Beauty, Toys & More" className='w-20 h-20'/>
          <p className='flex items-center'>
            Beauty, Toys & More
            <MdExpandMore size={20} />
          </p>
        </span>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Wheelers} alt="Two Wheelers" className='w-20 h-20'/>
          <p className='flex items-center'>
            Two Wheelers
            <MdExpandMore size={20} />
          </p>
        </span>
      </div>
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
    </div>
  );
}

export default Home;
