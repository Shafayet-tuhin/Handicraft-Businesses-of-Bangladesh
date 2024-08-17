import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import { FaBackspace, FaBackward, FaStar } from 'react-icons/fa';
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaCalendarAlt } from 'react-icons/fa';
import { IoArrowBackCircleSharp } from "react-icons/io5";

const BusinessDetails = () => {
    const location = useLocation();
    const { item } = location.state;


    return (
        <div className="container mx-auto p-4 md:p-8 bg-gray-100 dark:bg-base-200 min-h-screen">

         
             <Link to='/' > <IoArrowBackCircleSharp className='text-5xl text-orange-400 animate-pulse' /> </Link>
            

            <h1 className='text-3xl md:text-5xl font-bold  text-center mb-8 md:mb-12'>
                Business Details
            </h1>

            <div className='flex flex-col items-center bg-white dark:bg-base-100 shadow-lg rounded-lg p-6 md:p-8'>
                <img 
                    src={item.img} 
                    alt={item.page_name} 
                    className='w-24 h-24 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-6' 
                />
                
                <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
                    {item.page_name}
                </h2>

                <p className=' text-center text-sm md:text-lg mb-4 px-4 md:px-6'>
                    {item.page_description}
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full text-sm md:text-lg'>
                    <div className='flex items-center justify-center bg-gray-200 rounded-lg p-3 md:p-4'>
                        <MdProductionQuantityLimits className='text-2xl md:text-3xl text-gray-700 mr-2' />
                        <p className='text-gray-800 font-medium'>Products: {item.number_of_products}</p>
                    </div>
                    <div className='flex items-center justify-center bg-gray-200 rounded-lg p-3 md:p-4'>
                        <AiFillLike className='text-2xl md:text-3xl text-blue-500 mr-2' />
                        <p className='text-gray-800 font-medium'>Likes: {item.likes}</p>
                    </div>
                    <div className='flex items-center justify-center bg-gray-200 rounded-lg p-3 md:p-4'>
                        <FaStar className='text-2xl md:text-3xl text-yellow-500 mr-2' />
                        <p className='text-gray-800 font-medium'>Rating: {item.rating}</p>
                    </div>
                    <div className='flex items-center justify-center bg-gray-200 rounded-lg p-3 md:p-4'>
                        <FaCalendarAlt className='text-2xl md:text-3xl text-green-500 mr-2' />
                        <p className='text-gray-800 font-medium'>Years of Operation: {item.years_of_operation} years</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessDetails;
