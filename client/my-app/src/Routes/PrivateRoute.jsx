import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children }) => {

    const { user, loading , logOut} = useContext(AuthContext)



    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to='/login' replace></Navigate>
    }

    const decoded = jwtDecode(token);

    // console.log(decoded);

    const decodedHeader = jwtDecode(token, { header: true });
    // console.log(decodedHeader);



    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    // console.log(Date.now())
    // console.log(decoded.exp ,"===>", Date.now() / 1000)

    if (decoded.exp < Date.now() / 1000) {
        logOut();
        return <Navigate to='/login' replace></Navigate>
    }

 
     return children
    

    
}

export default PrivateRoute