import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Blog from '../../Pages/Shared/Blog/Blog';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DashboardLayout from '../../Layout/DashboardLayout';
import AllSellers from '../../Pages/Dashboard/AllSellers.js/AllSellers';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';
import AddProduct from '../../Pages/Dashboard/AddProduct/AddProduct';
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element:<AllSellers></AllSellers>
            },
            {
                path: '/dashboard/all-sellers',
                element:<AllSellers></AllSellers>
            },
            {
                path: '/dashboard/all-buyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/add-product',
                element:<AddProduct></AddProduct>
            },
            {
                path: '/dashboard/my-products',
                element:<MyProducts></MyProducts>
            },
            {
                path: '/dashboard/my-orders',
                element:<MyOrders></MyOrders>
            }
        ]
    }
])

export default router;
