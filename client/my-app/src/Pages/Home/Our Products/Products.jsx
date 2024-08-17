import React, { useEffect, useState } from 'react';
import SingleService from './SingleProducts';
import { TbCalendarTime } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";

const Services = () => {

    const [services, setServices] = useState([]);
    const [acc, setAcc] = useState(true);

    useEffect(() => {
        fetch(`https://handicraft-bd.vercel.app/products?sort=${acc ? 'asc' : 'des'}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [acc]);

    return (
        <div className='mt-[8.25rem] mb-32'>
            <div className='flex flex-col gap-5 items-center mb-12'>
                <p className='font-bold text-xl text-[#FF3811]'>Products</p>
                <p className='font-bold text-[2.8125rem]'>Our Products</p>
                <p className='text-[#737373] font-normal text-base leading-loose text-center lg:w-[44.8125rem]'>
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <div className="dropdown mb-5">
                    <button className="dropdown-button btn btn-sm btn-outline">
                        Price: {acc ? "Low To High" : "High To Low"}
                        <svg className="fill-current w-4 h-4 ml-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.293l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414-1.414L5.293 7.293z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className="dropdown-content menu dropdown-menu-right shadow bg-base-100 rounded-box w-auto min-w-max">
                        <button className="dropdown-item btn btn-sm" onClick={() => setAcc(true)}>Low To High</button>
                        <button className="dropdown-item btn btn-sm" onClick={() => setAcc(false)}>High To Low</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6'>
                {
                    services.map((el) => (
                        <SingleService key={el._id} item={el} />
                    ))
                }
            </div>

            <div className='flex flex-col lg:flex-row justify-between gap-9 lg:gap-0 bg-black lg:px-[4.5rem] lg:py-24 rounded-2xl mt-[8rem] py-6 items-center'>
                <div className='flex gap-5 items-center text-white w-72 lg:w-full'>
                    <TbCalendarTime className='text-orange-400 text-4xl' />
                    <div className='flex flex-col gap-2'>
                        <p className='lg:text-lg text-xl font-medium'>We are open monday-friday</p>
                        <p className='lg:text-3xl font-bold'>7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center text-white w-72 lg:w-full'>
                    <FiPhoneCall className='text-orange-400 text-4xl' />
                    <div className='flex flex-col gap-2'>
                        <p className='lg:text-lg text-xl font-medium'>Have a question?</p>
                        <p className='lg:text-3xl font-bold'>+0123456789</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center text-white w-72 lg:w-full'>
                    <FaMapLocationDot className='text-orange-400 text-4xl' />
                    <div className='flex flex-col gap-2'>
                        <p className='lg:text-lg text-xl font-medium'>Our address</p>
                        <p className='lg:text-3xl font-bold'>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
