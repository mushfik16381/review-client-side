import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async() =>{
                    return fetch(`https://reviews-server.vercel.app/`)
                },
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: async() => {
                    return fetch(`https://reviews-server.vercel.app/services`)
                },
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({params}) =>
                     fetch(`https://reviews-server.vercel.app/services/${params.id}`)
                ,
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/service-add',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/my-reviews',
                loader: async() => {
                    return fetch(`https://reviews-server.vercel.app/reviews`)
                },
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },

    {path: '*', element: <Error></Error>}
])