import React, { useState, useEffect } from "react";
import { navLinks } from "../../assets/constant";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import hamburger and close icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flex justify-between w-full items-center py-4 px-6 md:px-28 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md "
          : "bg-transparent text-white"
      } fixed z-10`}
    >
      <h1 className="text-[1.3rem] font-bold">LuxuryHotel</h1>

      {/* Hamburger Menu Icon for small screens */}
      <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-white text-black lg:bg-transparent lg:text-white lg:static lg:flex lg:items-center lg:justify-center lg:space-x-10`}
      >
        {navLinks.map((link, index) => (
          <ul key={index} className="md:flex">
            <li
              className={`uppercase nav-link-underline-white relative text-[12px] font-medium py-2 px-4 md:p-0 ${
                isScrolled ? "text-black lg:nav-link-underline-black my-5 " : "lg:text-white hover:text-orange-500 ease-in-out duration-300"
              }`}
            >
              <a
                href="#"
                className="cursor-pointer relative nav-link-underline"
              >
                {link.link}
              </a>
            </li>
          </ul>
        ))}
      </div>

      {/* Search and Social Icons */}
      <div className="hidden md:flex justify-center items-center">
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
