import React from 'react';
import index from '../index';
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoGiftOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { MdOutlineStarBorder } from "react-icons/md";
import visacard from '../visacard.svg';

const Home7 = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg py-8'>
        <div className='mt-10 px-5'>
          <h6 className='text-gray-500 text-xs'>ABOUT</h6>
          <ul className='my-3'>
            <li className='text-white text-sm font-bold'>Contact Us</li>
            <li className='text-white text-sm font-bold'>About Us</li>
            <li className='text-white text-sm font-bold'>Careers</li>
            <li className='text-white text-sm font-bold'>Flipkart Stories</li>
            <li className='text-white text-sm font-bold'>Press</li>
            <li className='text-white text-sm font-bold'>Corporate Information</li>
          </ul>
        </div>

        <div className='mt-10 px-5'>
          <h6 className='text-gray-500 text-xs'>GROUP COMPANIES</h6>
          <ul className='my-3'>
            <li className='text-white text-sm font-bold'>Myntra</li>
            <li className='text-white text-sm font-bold'>Cleartrip</li>
            <li className='text-white text-sm font-bold'>Shopsy</li>
          </ul>
        </div>

        <div className='mt-10 px-5'>
          <h6 className='text-gray-500 text-xs'>HELP</h6>
          <ul className='my-3'>
            <li className='text-white text-sm font-bold'>Payments</li>
            <li className='text-white text-sm font-bold'>Shipping</li>
            <li className='text-white text-sm font-bold'>Cancellation & Returns</li>
            <li className='text-white text-sm font-bold'>FAQ</li>
            <li className='text-white text-sm font-bold'>Report Infringement</li>
          </ul>
        </div>

        <div className='mt-10 px-5'>
          <h6 className='text-gray-500 text-xs'>CONSUMER POLICY</h6>
          <ul className='my-3'>
            <li className='text-white text-sm font-bold'>Cancellation & Returns</li>
            <li className='text-white text-sm font-bold'>Terms Of Use</li>
            <li className='text-white text-sm font-bold'>Security</li>
            <li className='text-white text-sm font-bold'>Privacy</li>
            <li className='text-white text-sm font-bold'>Sitemap</li>
            <li className='text-white text-sm font-bold'>Grievance Redressal</li>
            <li className='text-white text-sm font-bold'>EPR Compliance</li>
          </ul>
        </div>

        <div className='bg-gray-500 h-px my-7'></div>

        <div className='mt-10 px-5'>
          <h6 className='text-gray-500 text-xs'>Mail Us:</h6>
          <ul className='my-3'>
            <li className='text-white text-sm font-bold'>Flipkart Internet Private Limited,</li>
            <li className='text-white text-sm font-bold'>Buildings Alyssa, Begonia &</li>
            <li className='text-white text-sm font-bold'>Clove Embassy Tech Village,</li>
            <li className='text-white text-sm font-bold'>Outer Ring Road, Devaraabeesanahalli Village,</li>
            <li className='text-white text-sm font-bold'>Bengaluru, 560103</li>
            <li className='text-white text-sm font-bold'>Karnataka, India</li>
          </ul>
          <div>
            <h6 className='text-gray-500'>Social:</h6>
            <ul className='flex text-white'>
              <li><a href='https://www.facebook.com/flipkart'><CiFacebook className='text-white' size={20} /></a></li>
              <li><a href='https://x.com/flipkart'><FaXTwitter className='ml-6 text-white' size={20} /></a></li>
              <li><a href='https://www.youtube.com/flipkart'><PiYoutubeLogo className='ml-6 text-white' size={20} /></a></li>
            </ul>
          </div>
        </div>

        <div className='mt-10 px-5'>
          <h6 className='text-gray-500 text-xs'>Registered Office Address:</h6>
          <ul className='my-3'>
            <li className='text-white text-sm font-bold'>Flipkart Internet Private Limited,</li>
            <li className='text-white text-sm font-bold'>Buildings Alyssa, Begonia &</li>
            <li className='text-white text-sm font-bold'>Clove Embassy Tech Village,</li>
            <li className='text-white text-sm font-bold'>Outer Ring Road, Devaraabeesanahalli Village,</li>
            <li className='text-white text-sm font-bold'>Bengaluru, 560103</li>
            <li className='text-white text-sm font-bold'>Karnataka, India</li>
            <li className='text-white text-sm font-bold'>CIN: U51109KA2012PTC066107</li>
            <li className='text-white text-sm font-bold'>Telephone: 044-45614700 / 044-67415600</li>
          </ul>
        </div>

        <div className='bg-gray-500 h-px mt-7'></div>
      </div>

      <ul className='bg text-white flex flex-col lg:flex-row gap-4 p-4'>
        <li className='text-xs flex items-center'>
          <CiShop className='text-yellow-400' size={15} />
          <p className='text-white ml-2'>Become a Seller</p>
        </li>
        <li className='text-xs flex items-center lg:ml-24'>
          <MdOutlineStarBorder className='text-yellow-400' size={15} />
          <p className='text-white ml-2'>Advertise</p>
        </li>
        <li className='text-xs flex items-center lg:ml-24'>
          <IoGiftOutline className='text-yellow-400' size={15} />
          <p className='text-white ml-2'>Gift Cards</p>
        </li>
        <li className='text-xs flex items-center lg:ml-24'>
          <IoIosHelpCircleOutline className='text-yellow-400' size={15} />
          <p className='text-white ml-2'>Help Center</p>
        </li>
        <li className='text-xs mt-4 lg:mt-0 lg:ml-auto'>
          <footer className='text-white'>&copy; 2007-2024 Flipkart.com</footer>
        </li>
        <li className='mt-4 lg:mt-0 lg:ml-16'>
          <img src={visacard} alt='Visa' />
        </li>
      </ul>
    </div>
  )
}

export default Home7;
