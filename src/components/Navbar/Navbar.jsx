import React from 'react'
import { navLinks } from '../../assets/constant'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FiSearch } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className='flex justify-between items-center relative top-0 py-5 px-10'>
      <h1 className='text-[1.3rem] font-bold'>LuxuryHotel</h1>
      <div className='flex items-center'>
        {navLinks.map((link, index)=>(
          <ul key={index} className=''>
            <li className='uppercase text-[12px] font-medium ml-3'>{link.link}</li>
          </ul>
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <FiSearch/>
        <div className='flex gap-2 ml-6'>
          <FaFacebookF/>
          <FaTwitter/>
          <FaInstagram/>          
        </div>
      </div>
    </div>
  )
}

export default Navbar