import React from "react";
import img1 from "../../assets/images/room_1_a.jpg";
import img2 from "../../assets/images/room_1_b.jpg";
import img3 from "../../assets/images/room_2_a.jpg";
import img4 from "../../assets/images/room_2_ba.jpg";

const FeaturedRooms = () => {
  return (
    <section className="mx-28 ">
      <h1 className="section-heading relative text-[3rem] font-cormorant font-bold mb-20 py-10 text-center">
        Featured Rooms
      </h1>
      <div className="grid grid-cols-2 items-center justify-center my-20 gap-60">
        <div className="flex">
          <img src={img1} alt="" className="w-80 " />
          <img src={img2} alt="" className="w-80 " />
        </div>
        <div>
          <h1 className="text-[4rem] font-cormorant font-bold leading-tight mb-8">
            King <br /> Bedroom
          </h1>
          <p className="text-gray-500 font-light w-[75%] mb-[1rem]">
            A hotel is an establishment that provides paid lodging on a
            short-term basis. Facilities provided may range from a
            modest-quality mattress in a small room to large suites with bigger.
          </p>
          <button className="text-[11px] tracking-[0.2rem] py-3 font-bold uppercase relative button-underline">
            Room Details
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center justify-center my-32">
        <div>
          <h1 className="text-[4rem] font-cormorant font-bold leading-tight mb-8">
            Queen & <br /> Double Bedroom
          </h1>
          <p className="text-gray-500 font-light w-[75%] mb-[1rem]">
            A hotel is an establishment that provides paid lodging on a
            short-term basis. Facilities provided may range from a
            modest-quality mattress in a small room to large suites with bigger.
          </p>
          <button className="text-[11px] tracking-[0.2rem] py-3 font-bold uppercase relative button-underline">
            Room Details
          </button>
        </div>
        <div className="flex">
          <img src={img4} alt="" className="w-[280px] " />
          <img src={img3} alt="" className="w-[280px] " />
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
