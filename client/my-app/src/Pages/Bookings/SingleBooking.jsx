import React from 'react'
import Swal from 'sweetalert2'

const SingleBooking = ({ item, handleDelete, handleConfirm }) => { 

    const { _id, date, img, price, customerName,title, email, status } = item;

    const Hdelete = (id) => {
        handleDelete(id);
    }

    return (
        <tr>
            <th>
                <button className="btn btn-circle btn-sm" onClick={() => Hdelete(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className=" rounded-lg w-20 h-20">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                {title}
            </td>
            <td>{email}</td>
            <td> {date}</td>
            <td>${price}</td>
            <th>
                {

                    status === "confirmed" ? <button onClick={() => handleConfirm(_id)} className="btn btn-outline text-green-500">Confirmed</button> :
                        <button onClick={() => handleConfirm(_id)} className="btn btn-outline text-red-500">Confirm Item</button>
                }
            </th>
        </tr>
    )
}

export default SingleBooking
