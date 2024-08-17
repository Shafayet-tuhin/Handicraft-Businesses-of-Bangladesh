import React from 'react'
import { FaClock } from "react-icons/fa";
import one from '../../../assets/images/WhyChooseUs/1.jpg'
import three from '../../../assets/images/WhyChooseUs/3.jpg'
import four from '../../../assets/images/WhyChooseUs/4.jpg'
import five from '../../../assets/images/WhyChooseUs/5.jpg'
import six from '../../../assets/images/WhyChooseUs/6.jpg'



const Why = () => {
    return (
        <div className='lg:mb-32 mb-20'>
            <div className='flex flex-col items-center gap-5 mb-12'>
                <p className='text-[#FF3811] text-xl font-bold'>Core Features</p>
                <p className='text-[2.8125rem] font-bold '>Why Choose Us</p>
                <p className='lg:w-[44.8125rem] text-center text-[#737373] text-base font-normal'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>


           <div className='flex lg:flex-row lg:justify-between gap-6 flex-col'>

                    <div className='flex lg:flex-col justify-center gap-2 items-center py-8 lg:px-10 rounded-2xl shadow-lg  '>
                        <img src={one} alt=""  className='h-[3.33rem]'/>
                        <p className='text-[#444444] lg:text-lg font-bold '>Expert Team</p>
                    </div>

                    <div className='flex lg:flex-col justify-center gap-2 items-center py-8 lg:px-10 rounded-2xl shadow-lg  bg-[#FF3811] text-white'>
                        <FaClock className='w-[3.3rem] h-[3.33rem]'/>
                        <p className=' text-lg font-bold '>Expert Team</p>
                    </div>

                    <div className='flex lg:flex-col justify-center gap-2 items-center py-8 lg:px-10 rounded-2xl shadow-lg  '>
                        <img src={three} alt=""  className='h-[3.33rem]'/>
                        <p className='text-[#444444] lg:text-lg font-bold '>Expert Team</p>
                    </div>

                    <div className='flex lg:flex-col justify-center gap-2 items-center py-8 lg:px-10 rounded-2xl shadow-lg  '>
                        <img src={four} alt=""  className='h-[3.33rem]'/>
                        <p className='text-[#444444] lg:text-lg font-bold '>Expert Team</p>
                    </div>
                    
                    <div className='flex lg:flex-col justify-center gap-2 items-center py-8 lg:px-10 rounded-2xl shadow-lg  '>
                        <img src={five} alt=""  className='h-[3.33rem]'/>
                        <p className='text-[#444444] lg:text-lg font-bold '>Expert Team</p>
                    </div>

                    <div className='flex lg:flex-col justify-center gap-2 items-center py-8 lg:px-10 rounded-2xl shadow-lg  '>
                        <img src={six} alt=""  className='h-[3.33rem]'/>
                        <p className='text-[#444444] lg:text-lg font-bold '>Expert Team</p>
                    </div>
           </div>

        </div>
    )
}

export default Why