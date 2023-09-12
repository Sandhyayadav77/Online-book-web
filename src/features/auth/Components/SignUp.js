import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, SubmitHandler } from "react-hook-form"
// import {
//     increment,
//     incrementAsync,
//     selectCount,
// } from '../authSlice';
import { Link } from 'react-router-dom';

export function SignUp() {
    // const count = useSelector(selectCount);
    // const dispatch = useDispatch();
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    console.log(errors)
    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create an account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" >
                        {/* name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Full Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required", maxLength: 20 })}
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5  px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                        </div>
                        {/* email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    {...register("email", {
                                        required: "Email is required", pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                    type="email"
                                    autoComplete="email"
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5  px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                            </div>
                        </div>
                        {/* mobile */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Mobile
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    {...register("phone", { required: "Phone Number is required" })}
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5  px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}

                            </div>
                        </div>
                        {/* School*/}
                        <div>
                            <label htmlFor="school" className="block text-sm font-medium leading-6 text-gray-900">
                                School name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="school"
                                    {...register("schoolName", { required: "School Name is required" })}
                                    type="text"
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5  px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.schoolName && <p className='text-red-500'>{errors.schoolName.message}</p>}

                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    {...register("password", {
                                        required: "Password is required", pattern: {
                                            value: passwordPattern,
                                            message: 'Password must meet the following criteria:\n'+
                '- Minimum length of 8 characters\n'+
                '- At least one uppercase letter\n'+
                '- At least one lowercase letter\n'+
                '- At least one digit\n'+
                '- At least one special character (@, $, !, %, *, ?, &)',
                                        },
                                    })}
                                    type="password"
                                    autoComplete="current-password"
                                    // required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    {...register("confirmPassword", { required: "Confirm Password is required" ,
                                    validate:(value, formValues)=> value=== formValues.password || 'Password not matching'})}
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}

                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already registered ?{' '}
                        <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
