import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import SingleBooking from './SingleBooking'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const MyBookings = () => {


    const { user ,setLoading } = useContext(AuthContext)
    const navigate = useNavigate()

    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`

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
                console.log(data)
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
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.acknowledged) {
                            const remain = bookings.filter(item => item._id !== id)
                            setBookings(remain)
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
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}` // Include authorization header
                    },
                    body: JSON.stringify({
                        status: "confirmed"
                    })
                })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data.acknowledged) {
                        // Update the status of the confirmed booking in the local state
                        const updatedBookings = bookings.map(booking => {
                            if (booking._id === id) {
                                return { ...booking, status: 'confirmed' };
                            }
                            return booking;
                        });
                        setBookings(updatedBookings);
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