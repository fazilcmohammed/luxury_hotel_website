import React from 'react'
import { amenities } from '../../assets/constant'

const Amenities = () => {
  return (
    <section className='px-28'>
        <h1 className="section-heading relative text-[3rem] font-cormorant font-bold mb-20 py-10 text-center">
        Hotel Amenities
      </h1>
      <div className='grid grid-cols-3 gap-10 items-center justify-center'>
        {amenities.map((amenity, index) => (
            <div key={index} className='flex flex-col items-center justify-center border-[1px] p-10 border-gray-300 hover:border-gray-950 duration-300 hover:-translate-y-1 min-h-96 '>
                <img src={amenity.icon} alt="" className='w-10'/>
                <h3 className='font-cormorant font-bold text-center text-[20px]'>{amenity.facility}</h3>
                <p className="text-[#707070] font-light my-[1rem] text-center leading-7">{amenity.details}</p>
                <button className='text-[11px] tracking-[0.2rem] mt-5 font-bold uppercase relative readmore-reverse'>read more</button>
                
            </div>
        ))}
      </div>
    </section>
  )
}

export default Amenities