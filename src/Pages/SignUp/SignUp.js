import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { formState: { errors }, register, handleSubmit } = useForm();
    const handleSignup = data => {
        console.log(data);
    }

    return (
        <div className='my-10 flex justify-center items-center'>
            <div className='w-3/6 lg:w-2/6 py-4 px-8 border-2 border-emerald-300'>
                <h2 className="text-3xl text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input {...register("password", { required: "Password is required" })} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Buyer</span>
                            <input {...register("role")} type="radio" value="buyer" className="radio checked:bg-blue-500" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Seller</span>
                            <input {...register("role")} type="radio" value="seller" className="radio checked:bg-blue-500" />
                        </label>
                    </div>
                    <input className='btn btn-primary w-full' type="submit" />
                    {errors.email && <p className='text-red-600' role="alert">Alert: {errors.email?.message}</p>}
                    {errors.password && <p className='text-red-600' role="alert">Alert: {errors.password?.message}</p>}
                </form>
                <p className="text-center my-4">Have an account? <Link className='text-emerald-600' to={'/login'}>Log In Here</Link></p>
            </div>
        </div>
    );
};

export default SignUp;