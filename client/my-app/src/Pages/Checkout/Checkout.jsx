import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import one from '../../assets/images/banner/4.jpg';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Checkout = () => {
    const data = useLoaderData();
    const { _id, product_title,price,image } = data;

    const {user} = useContext(AuthContext)
  
    const handleSubmit = (e) => {
        e.preventDefault() ;
        const name = e.target.name.value;
        const date = e.target.date.value;
        const email = e.target.email.value;

        const order = {
           customerName : name, 
           email : email,
           date : date, 
           title : product_title ,
           item_id : _id ,
           price : price,
           img : image
        }

        console.log(order)

        fetch("http://localhost:5000/bookings" , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(order)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            Swal.fire({
                title: "Item Added Successfully",
                icon: "success"
              });
       
        })

        e.target.reset() ;
    }

    return (
        <div className='lg:mb-32 mb-20'>
            
          
            <div>
                <div className="relative w-full">
                    <img src={one} className="w-full rounded-xl lg:h-[20rem] " />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white lg:pl-20 pl-10 '>
                            <h2 className='lg:text-[2.8125rem] text-3xl font-bold px-5 py-5 bg-orange-700 rounded-3xl '>{product_title}</h2>
                        </div>
                    </div>

                </div>
            </div>

           <Link to='/' > <button className=' text-cyan-700 text-6xl lg:mt-32 mt-20 mb-6' > <IoArrowBackCircleSharp /></button></Link>

            <div className='bg-slate-700 lg:p-24  rounded-3xl px-4 py-10'>

                <form className='flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-6 mt-6' onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="name" defaultValue={user ?.displayName} required placeholder="Your Name" className="w-full border rounded-md py-4 px-4 text-xl leading-6 font-normal" />
                    </div>
                    <div>
                        <input type="date" name="date" defaultValue="2024-01-01" required placeholder="Date" className="w-full border rounded-md py-4 px-4 text-xl leading-6 font-normal" />
                    </div>
                    <div>
                        <input type="email" name="email" defaultValue={user.email} required placeholder="Your Email" className="w-full border rounded-md py-4 px-4 text-xl leading-6 font-normal" />
                    </div>
                    <div>
                        <input type="text" name="price" defaultValue={`$`+price} className="w-full border rounded-md py-4 px-4 text-xl leading-6 font-normal" />
                    </div>


                   
                    <div className="col-span-2 mt-4">
                        <button className=' bg-gray-800 py-3 text-white font-normal text-2xl w-full rounded-md hover:bg-red-500'>Order Confirm</button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default Checkout;
