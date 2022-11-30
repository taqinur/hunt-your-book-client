import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import ProductCard from './ProductCard';

const CategoryDetails = () => {
    const {category_id} = useLoaderData();
    const url = `https://hunt-your-book-server.vercel.app/products?category_id=${category_id}`;

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['_id'],
        queryFn: () => fetch(url)
            .then(res => res.json())
            .then(data => {
                return data;
            })
    })
    
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className='py-6 mb-8'>
        <div>
            <p className="text-5xl text-center mt-10 font-bold text-emerald-700">Available Books</p>
            <p className='text-center mt-3 font-semibold text-violet-600'>Find Your Favorite Books!</p>
        </div>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data?.map(product => <ProductCard
                key={product._id}
                product={product}
                refetch={refetch}
                >refetch();</ProductCard>
                )
            }
        </div>
        </div>
    );
};

export default CategoryDetails;