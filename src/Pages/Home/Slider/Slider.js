import React from 'react';

import car1 from "../../../assets/car-1.jpg";
import car2 from "../../../assets/car-2.jpg";
import car3 from "../../../assets/car-3.jpg";
import car4 from "../../../assets/car-4.jpg";

import ShowSlide from './ShowSlide';
import "./Slider.css";

const Slider = () => {
  const slideItems=[
    {
     id:1,
     next:2,
     prev:4,
     image:car1

  },
    {
     id:2,
     next:3,
     prev:1,
     image:car2

  },
    {
     id:3,
     next:4,
     prev:2,
     image:car3

  },
    {
     id:4,
     next:1,
     prev:3,
     image:car4

  }
]

    return (
        <div className="carousel w-full">
       
        {
            slideItems.map(slideItem=><ShowSlide
            key={slideItem.id}
            slideItem={slideItem}
            ></ShowSlide>)
        }
       
      </div>
    );
};

export default Slider;