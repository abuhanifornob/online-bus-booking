import React from 'react';
import driver from "../../../assets/Driver.png";
import inside_car from "../../../assets/inside in car.jpg";
import peaceofmind from "../../../assets/peace of mind.png";
import save_mony from "../../../assets/Save Mone.png";
import save_time from "../../../assets/Save Time.png";
import earn_mone from "../../../assets/Earn Mony.jpg";
import ServiceBeniftCard from './ServiceBeniftCard';


const ServiceBenifit = () => {
    const serviceBenifits=[
        {
        id:1,
        image:driver,
        bagColer:'bg-gradient-to-r from-sky-500 to-indigo-500',
        name:"Skiled Driver",
        discreption:"You will be transported to your destination with utmost care by skilled drivers"
    },
        {
        id:2,
        image:inside_car,
        bagColer:'bg-gradient-to-r from-violet-500 to-fuchsia-500',
        name:"Beautiful Environment",
        discreption:"In our national system you will find a beautiful environment that will touch your heart"
    },
        {
        id:3,
        image:peaceofmind,
        bagColer:'bg-gradient-to-r from-sky-500 to-indigo-500',
        name:"Peace of Mind",
        discreption:"We have a beautiful environment that will remove the fatigue of your commute and bring peace to your mind"
    },
        {
        id:4,
        image:save_mony,
        bagColer:'bg-gradient-to-r from-sky-500 to-indigo-500',
        name:"Peace of Mind",
        discreption:"We have a beautiful environment that will remove the fatigue of your commute and bring peace to your mind"
    },
        {
        id:5,
        image:save_time,
        bagColer:'bg-gradient-to-r from-sky-500 to-indigo-500',
        name:"Save time",
        discreption:"No more waiting in line at the rental counter. Book your car online and save time"
    },
        {
        id:6,
        image:earn_mone,
        bagColer:'bg-gradient-to-r from-sky-500 to-indigo-500',
        name:"Peace of Mind",
        discreption:"We have a beautiful environment that will remove the fatigue of your commute and bring peace to your mind"
    },
]
    return (
        <div className='mt-24 '>
            <h2 className='text-3xl text-whi font-bold'>Why take our service?</h2>
            <h3>We will provide you with the best transportation in all respects</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20'>
               {
                serviceBenifits.map(card=><ServiceBeniftCard
                key={card.id}
                beniftCard={card}
                >

                </ServiceBeniftCard>)
               }
            </div>
            
        </div>
    );
};

export default ServiceBenifit;