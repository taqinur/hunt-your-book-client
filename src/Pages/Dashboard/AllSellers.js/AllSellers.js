import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const { data: users = [],isLoading , refetch } = useQuery({
        queryKey: ['name'],
        queryFn: async () => {
            const res = await fetch('https://hunt-your-book-server.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    });

    const handleVerifySeller = id =>{
        fetch(`https://hunt-your-book-server.vercel.app/sellers/verified/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount> 0){
                refetch();
                toast.success('Verified successfully');
            }
        })
    }

    const handleDelete = user => {
        console.log(user._id);
        fetch(`https://hunt-your-book-server.vercel.app/users/${user._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${user.name} deleted successfully`);
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
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
                                        <button onClick={()=> handleDelete(user)} className="btn bg-red-600 btn-xs">Delete</button>
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