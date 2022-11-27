import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.displayName);
    const { formState: { errors }, register, handleSubmit } = useForm();


    return (
        <div className='my-10 flex justify-center items-center'>
            <div className='py-4 px-8 border-2 border-emerald-300 w-4/6 lg:w-3/6'>
                <h2 className="text-3xl text-center">Add A Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Years Used</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller's Name</span>
                        </label>
                        <input {...register("name")} defaultValue={user.displayName} type="text" className="input input-bordered w-full max-w-xs" readOnly />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                    
                    <input className='btn btn-primary mt-4 w-full' type="submit" />
                    {errors.name && <p className='text-red-600' role="alert">Alert: {errors.name?.message}</p>}
                    {errors.email && <p className='text-red-600' role="alert">Alert: {errors.email?.message}</p>}
                    {errors.password && <p className='text-red-600' role="alert">Alert: {errors.password?.message}</p>}
                </form>
                
            </div>
        </div>
    );
};

export default AddProduct;