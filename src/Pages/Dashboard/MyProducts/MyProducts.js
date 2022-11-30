import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading'

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const url = `https://hunt-your-book-server.vercel.app/products?email=${user.email}`;

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleAdvertise = id =>{
        console.log(id);
        fetch(`https://hunt-your-book-server.vercel.app/products/ad/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount> 0){
                refetch();
                toast.success('Advertised successfully');
            }
        })
    }

    const handleDelete = product => {
        fetch(`https://hunt-your-book-server.vercel.app/products/${product._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${product.productName} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='my-8'>
            <h2 className="text-3xl text-yellow-700 text-center mb-4">My Products</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products?.map((product, i) =>
                                <tr>
                                    <td>
                                        <div className="font-bold">{i + 1}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{product.productName}</div>
                                    </td>
                                    <td>
                                        {product.resalePrice}
                                    </td>
                                    <td>
                                        {product.status} & { !product.advertised ?
                                            <button onClick={() => handleAdvertise(product._id)} className="btn bg-primary btn-xs">Advertise</button> :<p className="text-primary">Advertised</p>
                                        }
                                    </td>
                                    <th>
                                        <button onClick={()=> handleDelete(product)} className="btn bg-red-600 btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyProducts;