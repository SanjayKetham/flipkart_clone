import React from 'react';
import shaver from '../shaver.jpeg';
import mensTshirts from '../Mentshirt.jpeg';
import explore from '../explore.jpg';
import nuts from '../nuts.jpeg';
import wire from '../wire.jpeg';

const Home4 = () => {
  return (
    <div className='p-4'>
      <h2 className='font-black text-2xl mb-4'>End of Season Bestsellers</h2>
      <div className='flex flex-col lg:flex-row'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1'>
          <span className='flex flex-col items-center border p-4 shadow-lg'>
            <img src={shaver} alt="Shaver" className='h-40 mb-2'/>
            <p className='text-green-600'>Min. 50% Off</p>
          </span>
          <span className='flex flex-col items-center border p-4 shadow-lg'>
            <img src={mensTshirts} alt="Men's T-Shirts" className='h-40 mb-2'/>
            <p>Men's T-Shirts</p>
            <p className='text-green-600'>Special offer</p>
          </span>
          <span className='flex flex-col items-center border p-4 shadow-lg'>
            <img src={wire} alt="Top Microphones" className='h-40 mb-2'/>
            <p>Top Microphones</p>
            <p className='text-green-600'>Special offer</p>
          </span>
          <span className='flex flex-col items-center border p-4 shadow-lg'>
            <img src={nuts} alt="Dry Fruits" className='h-40 mb-2'/>
            <p>Dry Fruits</p>
            <p className='text-green-600'>Special offer</p>
          </span>
        </div>
        <div className='flex-1 flex items-center justify-center mt-4 lg:mt-0'>
          <img src={explore} alt="Explore Smartphones" className='h-60 sm:h-72 md:h-96 lg:h-full lg:block'/>
        </div>
      </div>
    </div>
  );
};

export default Home4;
