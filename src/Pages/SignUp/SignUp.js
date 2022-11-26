import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const { formState: { errors }, register, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const [signupError, setSignupError] = useState('');

    const handleSignup = data => {
        setSignupError('');
        console.log(data);
        createUser(data.email, data.password)
        .then(res =>{
            const user = res.user;
            console.log(user);
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(e => console.log(e));
        })
        .catch(err => setSignupError(err.message));
    }

    const saveUser = (name, email, role) =>{
        const user ={name, email, role};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }

    return (
        <div className='my-10 flex justify-center items-center'>
            <div className='w-3/6 lg:w-2/6 py-4 px-8 border-2 border-emerald-300'>
                <h2 className="text-3xl text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input {...register("password", { required: "Password is required", minLength: {value: 6, message:'Password should be minimum 6 characters long'} })} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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
                    {errors.name && <p className='text-red-600' role="alert">Alert: {errors.name?.message}</p>}
                    {errors.email && <p className='text-red-600' role="alert">Alert: {errors.email?.message}</p>}
                    {errors.password && <p className='text-red-600' role="alert">Alert: {errors.password?.message}</p>}
                    {signupError && <p className='text-red-600'>Alert: {signupError.slice(22, -2)}</p>}
                </form>
                <p className="text-center my-4">Have an account? <Link className='text-emerald-600' to={'/login'}>Log In Here</Link></p>
            </div>
        </div>
    );
};

export default SignUp;