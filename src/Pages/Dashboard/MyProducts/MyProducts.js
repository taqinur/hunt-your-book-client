import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading'

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/products?email=${user.email}`;

    const { data: products, isLoading, refetch } = useQuery({
        queryFn: () => fetch(url)
            .then(res => res.json())
    })

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
                                        {product.status} {(product.status==='available') &&
                                            <button className="btn bg-primary btn-xs">Advertise</button>
                                        }
                                    </td>
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

export default MyProducts;