import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import SingleBooking from './SingleBooking'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const MyBookings = () => {

    const { user ,setLoading } = useContext(AuthContext)
    const navigate = useNavigate()

    const [bookings, setBookings] = useState([])

    const url = `https://handicraft-bd.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
            method : 'GET',
            headers : {
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.error === true) {
                navigate('/login')
                setLoading(false)
                return
              }

                setBookings(data)
               
            })
            .catch(err => console.error(err))
    }, [url])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://handicraft-bd.vercel.app/bookings/${id}`, {
                    method: "DELETE",
                    headers:{
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                })
                    .then((res) => res.json())
                    .then((data) => {
                        const { message, Data } = data;


                        if (message === "success") {
                            setBookings(Data)
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }


    const handleConfirm = (id) => {
        const check = bookings.find(item => item._id === id);
    
        if (check.status === 'confirmed') {
            return;
        }
    
        Swal.fire({
            title: "Do you want to confirm",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes Update Item",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://handicraft-bd.vercel.app/bookings/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}` // Include authorization header
                    },
                    body: JSON.stringify({
                        email:user.email,
                    })
                })
                .then((res) => res.json())
                .then((data) => {
                    
                    if (data.acknowledged) {
                       setBookings(data.result)
                        Swal.fire({
                            title: "Item has been Confirmed",
                            icon: "success"
                        });
                    } else {
                        throw new Error('Confirmation was not acknowledged');
                    }
                })
                .catch((error) => {
                    console.error("Error confirming item:", error);
                    Swal.fire({
                        title: "Error",
                        text: "There was an error confirming the item. Please try again later.",
                        icon: "error"
                    });
                });
            }
        });
    };
    
    


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            {/* <label>
                                <input type="checkbox" className="checkbox" />
                            </label> */}
                        </th>
                        <th>Item Pic</th>
                        <th>Item Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((el) => {
                            return (
                                <SingleBooking key={el._id} item={el} handleDelete={handleDelete} handleConfirm={handleConfirm} />

                            )
                        })
                    }

                </tbody>


            </table>
        </div>
    )
}

export default MyBookings