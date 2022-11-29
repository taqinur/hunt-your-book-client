import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const url = `http://localhost:5000/users?email=${user.email}`;

    const { data: currentUser } = useQuery({
        queryKey: ['_id'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })
    console.log(currentUser[0].verified);

    const handleAddProduct = data => {
        console.log(data);
        const addProduct = {           
            sellerName: user?.displayName,
            sellerVerification: currentUser[0].verified,
            email: user?.email,
            productName: data.productName,
            productImg: data.productImg,
            condition: data.condition,
            resalePrice: data.resalePrice,
            originalPrice: data.originalPrice,
            yearsUsed: data.yearsUsed,
            category_id: data.category_id,
            location: data.location,
            contactNumber: data.contactNumber,
            status: 'available'
            
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your product is added');
                    navigate('../my-products');
                }
            })
            .catch(e => console.error(e));
    }




    return (
        <div className='my-10 flex justify-center items-center'>
            <div className='py-4 px-8 border-2 border-emerald-300 w-4/6 lg:w-3/6'>
                <h2 className="text-3xl text-center">Add A Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input {...register("productName", { required: " Product Name is required" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input {...register("productImg", { required: " Product Image is required" })} type="text" placeholder="Type URL" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <span className="label-text">Condition</span>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-secondary">Excellent</span>
                            <input {...register("condition")} type="radio" value="Excellent" className="radio checked:bg-blue-500" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-secondary">Good</span>
                            <input {...register("condition")} type="radio" value="Good" className="radio checked:bg-blue-500" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-secondary">Fair</span>
                            <input {...register("condition")} type="radio" value="Fair" className="radio checked:bg-blue-500" />
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input {...register("resalePrice", { required: "Resale Price is required" })} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input {...register("originalPrice", { required: "Original Price is required" })} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Years Used</span>
                        </label>
                        <input {...register("yearsUsed", { required: "Years Used is required" })} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <span className="label-text">Category</span>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-secondary">Fiction</span>
                            <input {...register("category_id")} type="radio" value="1" className="radio checked:bg-blue-500" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-secondary">Non Fiction</span>
                            <input {...register("category_id")} type="radio" value="2" className="radio checked:bg-blue-500" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-secondary">Novel</span>
                            <input {...register("category_id")} type="radio" value="3" className="radio checked:bg-blue-500" />
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location", { required: "Location is required" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input {...register("contactNumber", { required: "Contact Number is required" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>


                    <input className='btn btn-primary mt-4 w-full' type="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddProduct;