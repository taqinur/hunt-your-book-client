import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const { data: categories = [] } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    console.log(categories)

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
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Categories
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-primary">
                                    <li><Link to={'/category/1'}>Fiction</Link></li>
                                    <li><Link to={'/category/2'}>Non Fiction</Link></li>
                                    <li><Link to={'/category/3'}>Novel</Link></li>
                                </ul>
                            </li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="w-24 rounded-full"> <img src="logo.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal dropdown-content p-2 bg-primary">
                        <li><Link to={'/'}>Home</Link></li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Categories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-primary menu-compact z-50">
                                <li><Link to={'/category/1'}>Fiction</Link></li>
                                <li><Link to={'/category/2'}>Non Fiction</Link></li>
                                <li><Link to={'/category/3'}>Novel</Link></li>
                            </ul>
                        </li>
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
            </div>
        </div>
    );
};

export default Navbar;