import React, { useState, useEffect } from "react";
import { navLinks } from "../../assets/constant";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between w-full items-center py-5 px-28 transition-all duration-300 ${
        isScrolled ? 'bg-white text-black shadow-mdk' : 'bg-transparent text-white'
      } fixed z-10`}
    >
      <h1 className="text-[1.3rem] font-bold">LuxuryHotel</h1>
      <div className="flex items-center">
        {navLinks.map((link, index) => (
          <ul key={index} className="">
            <li className="uppercase text-[12px] font-medium ml-10">
              <a href="#" className="cursor-pointer relative nav-link-underline-white">
                {link.link}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <FiSearch />
        <div className="flex gap-2 ml-6">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
