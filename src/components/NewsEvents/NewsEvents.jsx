import React from "react";
import { news_events } from "../../assets/constant";

const NewsEvents = () => {
  return (
    <section className="mx-10 md:mx-28 flex flex-col lg:flex-row items-start justify-between py-40">
      <div className="flex flex-col ">
        <h1 className="section-heading-left text-center md:w-[350px] relative text-[3rem] font-cormorant font-bold mb-0 pb-10 md:text-start">
          News & Events
        </h1>
        <p className="mb-[1rem] text-center md:text-left text-gray-500">
          A hotel is an establishment that <br /> provides paid lodging on a short-term <br />
          basis.
        </p>
        <button className="text-[11px] items-center justify-center md:justify-start flex md:text-left tracking-[0.2rem] py-3 font-bold uppercase  ">
            <a href="" className="relative button-underline">all posts</a>
          </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 ">
        {news_events.map((events, index) => (
          <div key={index}>
            <img src={events.img} alt="" className="w-96" />
            <h2 className='font-cormorant font-bold text-start text-[20px] mt-7'>{events.title}</h2>
            <p className="text-[14px] mb-[15px] mt-2 text-gray-500">
              {events.date} - by <span className="text-orange-500">{events.author}</span>
            </p>
            <p className="text-md text-gray-500 text-[1rem] my-5">{events.content}</p>
            <button className="text-[11px] tracking-[0.2rem] py-3 font-bold uppercase relative button-underline">
              read more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsEvents;
