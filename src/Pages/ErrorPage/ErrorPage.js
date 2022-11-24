import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Home from '../Home/Home/Home';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='text-center w-2/5 mx-auto'>
            
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />
            <h1 className="text-xl text-blue-800"><Link to={'/'}> Country roads, <br />
Take me <span className='text-red-700 text-4xl'>Home</span>, <br />
To the place I belong</Link> </h1>
            
                

        </div>
    );
};

export default ErrorPage;