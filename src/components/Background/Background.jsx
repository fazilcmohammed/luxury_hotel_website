import React from 'react';
import slidingImg1 from "../../assets/images/room_1_a.jpg";
import slidingImg2 from "../../assets/images/slider_1.jpg";
import slidingImg3 from "../../assets/images/slider_2.jpg";

const Background = ({heroCount}) => {

        if (heroCount===1) {
           return <div
           className="w-full h-[600px] bg-cover bg-center absolute top-0 -z-10"
           style={{ backgroundImage: `url(${slidingImg1})` }}
         ></div>
        }
        else if(heroCount===2){
           return <div
           className="w-full h-[600px] bg-cover bg-center absolute top-0 -z-10"
           style={{ backgroundImage: `url(${slidingImg2})` }}
         ></div>
        }
        else if(heroCount === 3){
           return <div
           className="w-full h-[600px] bg-cover bg-center absolute top-0 -z-10"
           style={{ backgroundImage: `url(${slidingImg3})` }}
         ></div>
        }

}

export default Background