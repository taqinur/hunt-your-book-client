import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register } = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='my-10 flex justify-center items-center'>
            <div className='w-3/6 lg:w-2/6 py-4 px-8 border-2 border-emerald-300'>
                <h2 className="text-3xl text-center">Log In</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forgot Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-primary w-full' type="submit" />
                </form>
                <p className="text-center my-4">Do not have an account? <Link className='text-emerald-600' to={'/signup'}>Sign Up Here</Link></p>
                <button className="btn btn-outline btn-primary w-full">Login with Google</button>
            </div>
        </div>
    );
};

export default Login;