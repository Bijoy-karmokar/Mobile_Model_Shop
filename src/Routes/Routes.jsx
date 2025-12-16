import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Favoutite from "../pages/Favoutite";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayouts,
        errorElement:<ErrorPage />,
        children:[
            {
                index:true,
                Component: Home,
                loader:()=> fetch('/phones.json')
            },
            {
                path:'/about',
                Component:About
            },
            {
                path:"/cart",
                Component:Cart
            },
            {
                path:"/favourite",
                Component:Favoutite
            },
            {
                path:"/phone-details",
                Component:PhoneDetails
            },
            {
                path:'*',
                Component:ErrorPage
            }
        ]
    }
])
export default router;