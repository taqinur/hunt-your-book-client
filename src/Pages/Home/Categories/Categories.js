import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='my-8'>
            <h2 className="text-center text-4xl text-primary">Categories</h2> <hr />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    categories?.map(category =>
                        <Link to={`/category/${category.category_id}`}>
                            <div className="card px-10 mx-28 bg-primary shadow-xl mb-6">
                                <div className="card-body text-base-100">
                                    <h4 className='text-accent text-center'>{category.title}</h4>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;