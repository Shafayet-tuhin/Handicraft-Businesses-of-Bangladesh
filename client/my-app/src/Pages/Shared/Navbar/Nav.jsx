import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpg'
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';

const Nav = () => {

    const { user, logOut } = useContext(AuthContext)

    const [theme , setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme") : "light")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme") 
        document.querySelector("html").setAttribute("data-theme", localTheme)
    },[theme])


    const handleLogout = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('token')
                Swal.fire({
                    title: "Logout Successful",
                    icon: "success"
                  });
            }
            )
            .catch((err) => console.log(err))
    }

    const handleTheme = (e) => {
        if(e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    return (
        <div className="navbar bg-base-100 h-28 mb-8 mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link className='btn' to='/' >Home</Link></li>
                    {/* <li><Link className='btn' to='/about' >About</Link></li> */}
                    {
                        user ?
                            <>
                                <li><Link className='btn' to= '/bookings'> My Product Cart </Link></li>
                               
                            </>
                            : <>
                           
                            <li><Link className='btn' to='/register' >Register</Link></li>
                            </>
                    }
                    {/* <li><Link>Blog</Link></li>
                    <li><Link>Content</Link></li> */}
                    </ul>
                </div>
                <Link to='/' className="text-xl hidden lg:block " >
                    <img src={logo} alt="" className='lg:w-[9rem] w-[6rem]  rounded-2xl'/>
                </Link>
                

{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


<label className="flex cursor-pointer gap-2 ml-5 ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={handleTheme}/>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>


{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                <li><Link className='btn bg-gray-700 text-white hover:bg-gray-600 hover:text-orange-300' to='/' >Home</Link></li>
{/* <li><Link className='btn' to='/about' >About</Link></li> */}
{
    user ?
        <>
            <li><Link className='btn bg-gray-700 text-white hover:bg-gray-600 hover:text-orange-300' to='/bookings'> My Product Cart </Link></li>
          
        </>
        : <>
     
        <li><Link className='btn bg-gray-700 text-white hover:bg-gray-600 hover:text-orange-300' to='/register' >Register</Link></li>
        </>
}
{/* <li><Link>Blog</Link></li>
<li><Link>Content</Link></li> */}

                </ul>
            </div>
            <div className="navbar-end">
               {
                user ? <>
                {
                    user.photoURL ? <img src={user.photoURL} className='w-11 rounded-xl mr-4' alt="" /> : <img className='w-11 rounded-xl mr-4' src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504='  alt="" />
                }
                 <button className='btn bg-gray-700 text-white hover:bg-gray-600 hover:text-orange-300'  onClick={handleLogout} >Logout</button>
                </>
                : <Link className='btn bg-gray-700 text-white hover:bg-gray-600 hover:text-orange-300' to='/login' >Login</Link>
               }
            </div>
        </div>
    )
}

export default Nav