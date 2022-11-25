import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { formState: { errors }, register, handleSubmit } = useForm();
    const {logIn} = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
        .then(res =>{
            const user = res.user;
            console.log(user);
        })
        .catch(err => {setLoginError(err.message)});
    }

    return (
        <div className='my-10 flex justify-center items-center'>
            <div className='w-3/6 lg:w-2/6 py-4 px-8 border-2 border-emerald-300'>
                <h2 className="text-3xl text-center">Log In</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {required: "Email Address is required"})} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input {...register("password",{ required: "Password is required"})} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forgot Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-primary w-full' type="submit" />
                    {errors.email && <p className='text-red-600' role="alert">Alert: {errors.email?.message}</p>}
                    {errors.password && <p className='text-red-600' role="alert">Alert: {errors.password?.message}</p>}
                    {loginError && <p className='text-red-600'>Alert: {loginError.slice(22, -2)}</p>}
                </form>
                <p className="text-center my-4">Do not have an account? <Link className='text-emerald-600' to={'/signup'}>Sign Up Here</Link></p>
                <button className="btn btn-outline btn-primary w-full">Login with Google</button>
            </div>
        </div>
    );
};

export default Login;