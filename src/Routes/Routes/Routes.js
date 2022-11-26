import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Blog from '../../Pages/Shared/Blog/Blog';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminDashboard from '../../Pages/Dashboard/AdminDashboard/AdminDashboard';
import DashboardLayout from '../../Layout/DashboardLayout';
import BuyerDashboard from '../../Pages/BuyerDashboard/BuyerDashboard';
import AllSellers from '../../Pages/Dashboard/AllSellers.js/AllSellers';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';

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
        children: [
            {
                path: '/dashboard',
                element:<AdminDashboard></AdminDashboard>
            },
            {
                path: '/dashboard/all-sellers',
                element:<AllSellers></AllSellers>
            },
            {
                path: '/dashboard/all-buyers',
                element:<AllBuyers></AllBuyers>
            }
        ]
    }
])

export default router;
