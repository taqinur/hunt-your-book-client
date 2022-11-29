import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <div className='bg-primary'>
            <div className="navbar w-5/6 text-base-100 mx-auto p-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            {user?.uid ? <li><Link to={'/dashboard'}>Dashboard</Link></li> : <></>}
                            <li><Link to={'/blog'}>Blog</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="w-24 rounded-full"> <img src="logo.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal dropdown-content p-2 bg-primary">
                        <li><Link to={'/'}>Home</Link></li>
                        {user?.uid ? <li><Link to={'/dashboard'}>Dashboard</Link></li> : <></>}
                        <li><Link to={'/blog'}>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.uid ?
                        <>
                            <Link className='mx-2 text-white'>
                                {user?.displayName}
                            </Link>
                            <button onClick={handleLogOut} className="btn btn-accent">Log Out</button>
                        </>
                        : <Link to={'/login'} className="btn btn-accent">Log in</Link>}
                </div>
                {user?.uid &&
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost bg-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>}
            </div>
        </div>
    );
};

export default Navbar;