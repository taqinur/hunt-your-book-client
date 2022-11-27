import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import findAdmin from '../hooks/findAdmin';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = findAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile lg:w-11/12 mx-auto">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        
                        {/* {
                            // isAdmin && <>
                                
                            // </>
                        } */}
                        <li><Link className='border-2 mb-2 hover:text-white hover:bg-primary' 
                        to="/dashboard/all-sellers">All Sellers</Link></li>
                        <li><Link className='border-2 hover:text-white hover:bg-primary' 
                        to="/dashboard/all-buyers">All Buyers</Link></li>

                    </ul>

                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default DashboardLayout;