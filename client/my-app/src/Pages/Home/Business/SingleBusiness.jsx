import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { FaStar } from 'react-icons/fa';
import { MdProductionQuantityLimits } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SingleBusiness = ({ item }) => { 
    const navigate = useNavigate();

    const jao = () => {
        navigate('/businessdetails', { state: { item: item } }); 
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl shadow-slate-600">
            <figure>
                <img
                    className='h-[10rem] rounded-2xl mt-4'
                    src={item.img}
                    alt={item.page_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.page_name}</h2>
                <div className='flex gap-6'>
                    <div className='flex gap-2 items-center'>
                        <AiFillLike className='text-blue-400 text-2xl' />
                        <p>{item.likes}</p>
                    </div>
                    <div>
                        <p className='flex gap-2 items-center'>
                            <MdProductionQuantityLimits className='text-2xl' /> 
                            {item.number_of_products}
                        </p>
                    </div>
                    <div className='flex items-center gap-2 text-orange-500'>
                        {item.rating} <FaStar />
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-slate-500 text-white text-lg hover:bg-orange-500" onClick={()=>jao()}>Details</button>
                </div>
            </div>
        </div>
    )
}

export default SingleBusiness;
