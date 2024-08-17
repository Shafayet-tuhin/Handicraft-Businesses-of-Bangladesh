import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";
import MyBookings from "../Pages/Bookings/MyBookings";
import PrivateRoute from "./PrivateRoute";
import BusinessDetails from "../Pages/Home/Business/BusinessDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/bookings",
        element: <PrivateRoute><MyBookings /></PrivateRoute>,
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><Checkout /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:"/businessdetails",
        element:<BusinessDetails/>,
        
      }
    ]
  },
]);

export default router