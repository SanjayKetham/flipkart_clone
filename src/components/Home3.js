import React from 'react'
import keyboard from '../keyboard.jpeg'
import watch from '../watch.jpg'
import oneplus from '../oneplus.jpeg'
import des from '../des.jpeg'
import cam from '../cam.jpeg'
import epictravel from '../epictravel.jpg'

const Home3 = () => {
  return (
    <div className='ml-10 mt-4'>
      <h2 className='font-black text-2xl mb-4'>Best of Electronics</h2>
      <div className='flex justify-between items-start'>
        <div className='flex justify-around items-start flex-wrap flex-grow'>
          <span className='flex flex-col items-center border p-4 m-2 shadow-lg w-48'>
            <img src={oneplus} alt="Best TrueWireless headphones" className='w-32 h-32 object-cover'/>
            <p className='font-bold text-center'>Best TrueWireless headph..</p>
            <p className='text-center'>From 999</p>
          </span>
          <span className='flex flex-col items-center border p-4 m-2 shadow-lg w-48'>
            <img src={cam} alt="Top Mirrorless Cameras" className='w-32 h-32 object-cover'/>
            <p className='font-bold text-center'>Top Mirrorless Cameras</p>
            <p className='text-center'>From 5,000</p>
          </span>
          <span className='flex flex-col items-center border p-4 m-2 shadow-lg w-48'>
            <img src={des} alt="Monitors" className='w-32 h-32 object-cover'/>
            <p className='font-bold text-center'>Monitors Dell Top Rated</p>
            <p className='text-center'>From 20,000</p>
          </span>
          <span className='flex flex-col items-center border p-4 m-2 shadow-lg w-48'>
            <img src={watch} alt="boAt Watches" className='w-32 h-32 object-cover'/>
            <p className='font-bold text-center'>boAt Watches 80% offers</p>
            <p className='text-center'>From 1,099</p>
          </span>
          <span className='flex flex-col items-center border p-4 m-2 shadow-lg w-48'>
            <img src={keyboard} alt="Keyboards" className='w-32 h-32 object-cover'/>
            <p className='font-bold text-center'>Top Selling Dell Keyboards</p>
            <p className='text-center'>From 1,099</p>
          </span>
        </div>
        <span className='flex flex-col items-center m-2'>
          <img src={epictravel} alt="Epic Travel" className='w-48 h-full object-cover'/>
        </span>
      </div>
    </div>
  )
}

export default Home3
