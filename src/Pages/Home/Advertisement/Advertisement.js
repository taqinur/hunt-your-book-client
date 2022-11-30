import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const Advertisement = () => {
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['_id'],
        queryFn: () => fetch('https://hunt-your-book-server.vercel.app/products/advertised')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
    })

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className='my-8'>
            <h2 className='text-4xl text-center text-primary' >Advertised Products</h2> <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
                {products?.map(product => 
                <div key={product._id} className="card card-compact w-96 bg-base-100 shadow-xl h-6/6" >
                    <figure><img src={product.productImg} alt="" style={{ height: '200px' }} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-emerald-700 ">{product.productName}</h2>
                        <p>Price: BDT {product.resalePrice} <br />
                            Original Price: BDT {product.originalPrice} <br />
                            Used for {product.yearsUsed} years In {product.condition} Condition</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Advertisement;