import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleService = ({ item }) => {

    const { _id, product_title, image, price , description } = item;

    return (

        <Link to={`/checkout/${_id}`} >
            <div className="card w-96 bg-base-100 shadow-xl shadow-slate-600">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-[15rem]" />
                </figure>
                <div className="card-body ">
                    <h2 className="text-[1.4rem] font-bold">{product_title}</h2>
                    <p className='text-sm text-gray-500'>{description}</p>
                    <div className="flex items-center justify-end">
                        <p className='text-[#e46833e6] font-semibold text-xl'>Price : {price} </p>
                        <button className=' text-3xl text-orange-500 animate-pulse flex items-center'><FaArrowCircleRight /></button>
                    </div>
                </div>
            </div>

        </Link>
    )

}

export default SingleService