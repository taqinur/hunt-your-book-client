import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.photoURL);
    return (
        <div className='mt-10'>
            <h2 className='text-center text-2xl'>
                <img
                    className="mb-3 h-24 w-24 mx-auto rounded-full shadow-lg"
                    src={user?.photoURL || <FaUser></FaUser>} alt='' />
                Name: {user?.displayName} <br />
                Email: {user?.email}</h2>
        </div>
    );
};

export default Dashboard;