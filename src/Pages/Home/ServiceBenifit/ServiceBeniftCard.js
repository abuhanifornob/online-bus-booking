import React from 'react';

const ServiceBeniftCard = ({beniftCard}) => {
    const{discreption,name,image,bagColer}=beniftCard;
    return (
        <div className={`card shadow-2xl ${bagColer} transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}>
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl h-[100px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{discreption}</p>
        
        </div>
      </div>
    );
};

export default ServiceBeniftCard;