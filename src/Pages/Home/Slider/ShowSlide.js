import React from 'react';

const ShowSlide = ({slideItem}) => {
    const{id,next,prev,image}=slideItem;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
          <img src={image} className="w-full h-[500px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
          </div>
          <div className="absolute left-0  top-2/3">
           <h1 className='text-5xl text-white text-fade-in'>Well Come To My Company</h1>
          </div>
        </div> 
    );
};

export default ShowSlide;