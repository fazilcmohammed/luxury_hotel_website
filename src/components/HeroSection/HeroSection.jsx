import React, { useState, useEffect } from 'react';
import slidingImg1 from '../../assets/images/room_1_a.jpg';
import slidingImg2 from '../../assets/images/slider_1.jpg';
import slidingImg3 from '../../assets/images/slider_2.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const images = [slidingImg1, slidingImg2, slidingImg3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to trigger the fade-in effect

  // Change slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);

  const handleNextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 300); // Duration for fade-out effect before changing image
  };

  const handlePreviousSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
      );
      setFade(true);
    }, 300); // Duration for fade-out effect before changing image
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {/* Render the current image as a background */}
      <div
        className={`w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Overlay and Content */}
        <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
          <h1 className="text-4xl font-cormorant md:text-6xl text-white font-bold transition-transform duration-700 ease-in-out transform">
            {currentIndex === 0 && 'Away from the Hustle and Bustle of City Life'}
            {currentIndex === 1 && 'Experience Luxury Living'}
            {currentIndex === 2 && 'Your Dream Getaway'}
          </h1>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePreviousSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 bg-opacity-50 rounded-full"
        >
          <MdOutlineKeyboardArrowLeft/>
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2  bg-opacity-50 rounded-full"
        >
          <MdOutlineKeyboardArrowRight/>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setFade(true);
                }, 300);
              }}
              className={`w-2 h-2 bg-white rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
