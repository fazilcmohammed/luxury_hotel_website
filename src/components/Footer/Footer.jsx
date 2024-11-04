import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-10 md:px-28 flex flex-col lg:flex-row">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start gap-10 md:gap-40 text-gray-800">
        {/* About Us Section */}
        <div className="flex flex-col ">
          <h2 className="text-lg font-bold text-center md:text-left font-cormorant mb-4">
            About Us
          </h2>
          <p className="text-sm mb-4 text-center md:text-left">
            A hotel is an establishment that provides paid lodging on a
            short-term basis. Facilities provided may range from a
            modest-quality.
          </p>
          <button className="text-[11px] tracking-[0.2rem] py-3 font-bold uppercase text-center md:text-left ">
            <a href="" className="relative button-underline">
              read more
            </a>
          </button>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col items-center justify-center">
          <ul className="space-y-2">
            <h2 className="text-lg font-bold font-cormorant mb-4">
              Navigation
            </h2>
            <li>
              <a href="#" className="text-sm hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-600">
                Rooms
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-600">
                Amenities
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-600">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="w-[100%]">
          <div className="flex gap-5 md:gap-20 justify-between">
            <div>
              <h2 className="text-lg font-bold font-cormorant mb-4">Address</h2>
              <p className="text-sm mb-2">273 South Riverview Rd.</p>
              <p className="text-sm mb-4">New York, NY 10011</p>
            </div>
            <div>
              <h2 className="text-lg font-bold font-cormorant mb-4">
                Telephone
              </h2>
              <p className="text-sm mb-2">+1 234 5678 910</p>
              <p className="text-sm">+2 234 5678 910</p>
            </div>
          </div>

          {/* Telephone Section */}

          <div className="my-10 md:m-0">
            <h2 className="text-lg font-bold font-cormorant mb-4">
              Join our newsletter
            </h2>
            <p className="text-sm mb-4">
              Be the first to know our latest updates and news!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-2 w-full text-sm focus:outline-none"
              />
              <button className="bg-black text-white px-4 text-sm font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
