import React from 'react'
import one from '../../../assets/images/team/1.jpg'
import two from '../../../assets/images/team/2.jpg'
import three from '../../../assets/images/team/3.jpg'

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Teams = () => {
    return (
        <div className='mb-[8.12rem]'>
            <div className='flex flex-col items-center gap-5 mb-12'>
                <p className='text-[#FF3811] text-xl font-bold'>Team</p>
                <p className='text-[2.8125rem] font-bold '>Meet Our Team</p>
                <p className='lg:w-[44.8125rem] text-center text-[#737373] text-base font-normal'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <div className="card bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={one} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-[#444444] text-2xl font-bold">Car Maintenance Expert </h2>
                        <p className='text-[#737373] text-xl font-semibold'> Shafayet Tuhin</p>
                        <div className='flex gap-5 text-3xl mt-3'>
                            <FaFacebook className='text-blue-600' />
                            <FaTwitter className='text-blue-500' />
                            <FaLinkedin className='text-blue-800' />
                            <FaInstagram className='text-orange-600' />
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={two} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-[#444444] text-2xl font-bold">Car Body Expert</h2>
                        <p className='text-[#737373] text-xl font-semibold'>Rubayet Rahin</p>
                        <div className='flex gap-5 text-3xl mt-3'>
                            <FaFacebook className='text-blue-600' />
                            <FaTwitter className='text-blue-500' />
                            <FaLinkedin className='text-blue-800' />
                            <FaInstagram className='text-orange-600' />
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={three} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-[#444444] text-2xl font-bold">Car Engine Expert</h2>
                        <p className='text-[#737373] text-xl font-semibold'>Yeamin Ahon</p>
                        <div className='flex gap-5 text-3xl mt-3'>
                            <FaFacebook className='text-blue-600' />
                            <FaTwitter className='text-blue-500' />
                            <FaLinkedin className='text-blue-800' />
                            <FaInstagram className='text-orange-600' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Teams