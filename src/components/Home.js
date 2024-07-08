import React, { useState } from 'react';
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
  const [show, setShow] = useState(0);

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
        <span
          className='relative flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'
          onMouseLeave={() => setShow(0)}
        >
          <img
            src={Fashion}
            alt="Fashion"
            className='w-20 h-20 cursor-pointer'
            onMouseEnter={() => setShow(1)}
          />
          <p
            onMouseEnter={() => setShow(1)}
            className='flex items-center cursor-pointer'
          >
            Fashion
            <MdExpandMore size={20} className={`transition-transform ${show === 1 ? 'rotate-180' : ''}`}/>
          </p>
          {show === 1 && (
            <div
              className='absolute z-[999] bg-white border mt-24 rounded shadow-lg py-2 w-60'
              onMouseEnter={() => setShow(1)}
              onMouseLeave={() => setShow(0)}
            >
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Men's Top Wear</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Men's Bottom Wear</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Women's Ethnic</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs '>Men's Footwear</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Women's Footwear</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Watches and Accessories</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Women Western</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Bags, Suitcases and Luggage</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Kids</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Essentials</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Winter</div>
            </div>
          )}
        </span>
        <span className='relative flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Electronics} alt="Electronics" className='w-20 h-20 cursor-pointer' onMouseEnter={() => setShow(2)}/>
          <p onMouseLeave={() => setShow(0)} onMouseEnter={() => setShow(2)} className='flex items-center cursor-pointer'>
            Electronics
            <MdExpandMore size={20} className={`transition-transform ${show === 2 ? 'rotate-180' : ''}`}/>
          </p>
          {show === 2 && (
            <div className='absolute z-[999] bg-white border mt-24 rounded shadow-lg py-2 w-60'
            onMouseEnter={() => setShow(2)}
              onMouseLeave={() => setShow(0)}>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Audio</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Electronics GST Store</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Cameras & Accessories</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs '>Computer Peripherals</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Gaming</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Health & Personal Care</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Laptop Accessories</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Laptop and Desktop</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Mobile Accessory</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Powerbank</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Smart Home automation</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Smart Wearables</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Storage</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Tablets</div>
            </div>
          )}
        </span>
        <span className='relative flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Furniture} alt="Home & Furniture" className='w-20 h-20 cursor-pointer' onMouseEnter={() => setShow(3)}/>
          <p onMouseLeave={() => setShow(0)} onMouseEnter={() => setShow(3)} className='flex items-center cursor-pointer'>
            Home & Furniture
            <MdExpandMore size={20} className={`transition-transform ${show === 3 ? 'rotate-180' : ''}`}/>
          </p>
          {show === 3 && (
            <div className='absolute z-[999] bg-white border mt-24 rounded shadow-lg py-2 w-60' onMouseEnter={() => setShow(3)}
            onMouseLeave={() => setShow(0)}> 
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Furniture</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Living Room Furniture</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Kitchen & Dining</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs '>Bedroom Furniture</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Space Saving Furniture</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Home Decor</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Tools & Utility</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Work Space Furniture</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Kids Furniture</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Lightings & Electricals</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Cleaning & Bath</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Pet & Gardening</div>
            </div>
          )}
        </span>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Appliances} alt="Appliances" className='w-20 h-20'/>
          <p>Appliances</p>
        </span>
        <span className='flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Travel} alt="Travel" className='w-20 h-20'/>
          <p>Travel</p>
        </span>
        <span className='relative flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Beauty} alt="Beauty, Toys & More" className='w-20 h-20 cursor-pointer' onMouseEnter={() => setShow(4)}/>
          <p onMouseLeave={() => setShow(0)} onMouseEnter={() => setShow(4)} className='flex items-center cursor-pointer'>
            Beauty, Toys & More
            <MdExpandMore size={20} className={`transition-transform ${show === 4 ? 'rotate-180' : ''}`} />
          </p>
          {show === 4 && (
            <div className='absolute z-[999] bg-white border mt-24 rounded shadow-lg py-2 w-60' onMouseEnter={() => setShow(4)}
            onMouseLeave={() => setShow(0)}>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Beauty</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Toys</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Baby Care</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs '>Sports & Fitness</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Books</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Music</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Stationery</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Automotive</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Food & Nutrition</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Gift Cards</div>
            </div>
          )}
        </span>
        <span className='relative flex flex-col items-center mx-4 mb-4 w-1/3 sm:w-1/4 lg:w-auto'>
          <img src={Wheelers} alt="Two Wheelers" className='w-20 h-20 cursor-pointer' onMouseEnter={() => setShow(5)}/>
          <p onMouseLeave={() => setShow(0)} onMouseEnter={() => setShow(5)} className='flex items-center cursor-pointer'>
            Two Wheelers
            <MdExpandMore size={20} className={`transition-transform ${show === 5 ? 'rotate-180' : ''}`}/>
          </p>
          {show === 5 && (
            <div className='absolute z-[999] bg-white border mt-24 rounded shadow-lg py-2 w-60' onMouseEnter={() => setShow(5)}
            onMouseLeave={() => setShow(0)}>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Scooters</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Motorcycles</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Electric Bikes</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs '>Accessories</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Helmets</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Riding Gear</div>
              <div className='px-10 py-2 hover:bg-blue-50 text-xs'>Service & Repair</div>
            </div>
          )}
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
