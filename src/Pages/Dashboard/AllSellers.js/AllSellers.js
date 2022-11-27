import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { HiCheckCircle } from "react-icons/hi";

const AllSellers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['name'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    });

    const handleVerifySeller = id =>{
        fetch(`http://localhost:5000/sellers/verified/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount> 0){
                refetch();
            }
        })
    }

    return (
        <div className='my-8'>
            <h2 className="text-3xl text-yellow-700 text-center mb-4">All Sellers</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Verify Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users?.map((user, i) =>
                                <tr key={user._id}>
                                    <td>
                                        <div className="font-bold">{i + 1}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{user.name}</div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <th>
                                        {!user.verified ? <button
                                        onClick={() => handleVerifySeller(user._id)} className="btn btn-primary btn-xs">Verify</button> : 
                                        <p className="text-primary">Verified</p>}
                                    </th>
                                    <th>
                                        <button className="btn bg-red-600 btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default AllSellers;