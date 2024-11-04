import React, { useState, useEffect } from "react";
import slidingImg1 from "../../assets/images/room_1_a.jpg";
import slidingImg2 from "../../assets/images/slider_1.jpg";
import slidingImg3 from "../../assets/images/slider_2.jpg";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const images = [slidingImg1, slidingImg2, slidingImg3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const handleNextSlide = () => {
    console.log("Next button clicked"); // Debugging log
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 300);
  };

  const handlePreviousSlide = () => {
    console.log("Previous button clicked"); // Debugging log
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setFade(true);
    }, 300);
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {/* Image Background */}
      <div
        className={`w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex items-center justify-center h-full mx-20">
          <h1 className="text-4xl md:text-7xl z-10 text-white font-bold font-cormorant text-center">
            {currentIndex === 0 && (
              <>
                Away from the Hustle <br /> and Bustle of City Life
              </>
            )}
            {currentIndex === 1 && "Experience Luxury Living"}
            {currentIndex === 2 && "Your Dream Getaway"}
          </h1>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePreviousSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 z-50"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 z-50"
        >
          <MdOutlineKeyboardArrowRight />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                console.log("Dot clicked:", index); // Debugging log
                setFade(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setFade(true);
                }, 300);
              }}
              className={`w-2 h-2 bg-white rounded-full cursor-pointer ${
                index === currentIndex ? "bg-opacity-100" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
