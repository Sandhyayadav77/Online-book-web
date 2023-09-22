import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, SubmitHandler } from "react-hook-form"
import {
    CreateUserAsync,
    selectLoggedInUser
} from '../authSlice';
import { Link, Navigate } from 'react-router-dom';

export const SignUp = memo(() => {
    const user = useSelector(selectLoggedInUser);
    const dispatch = useDispatch();
    const phoneNumberPattern = /^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(CreateUserAsync(
            {
                name: data.name,
                email: data.email,
                phone: data.phone,
                school_Name: data.schoolName,
                password: data.password,
                addresses: [], 
                role :'user'
            // this role can be directly given on backend 
            }
        ))
        console.log(data);
    };
    console.log(errors)
    return (
        <>
            {user?.email}
            {user ? (
                <Navigate to='/' replace={true} />
            ) : (
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
                                        {...register("phone", {
                                            required: "Phone Number is required",
                                            pattern: {
                                                value: /^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}$/,
                                                message: 'Invalid phone number',
                                            },
                                        })}
                                        // required
                                        className="block w-full rounded-md border-0 py-1.5  px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}

                                </div>
                            </div>
                            {/* profession */}
                            <div>
                                <label htmlFor="profession" className="block text-sm font-medium leading-6 text-gray-900 pb-4">
                                    Are you a teacher or a student?
                                </label>
                                <div className="flex justify-start space-x-4">
                                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="teacher">
                                        Teacher
                                    </label>
                                    <input
                                        type="radio"
                                        id="teacher"
                                        name="profession"  // Make sure this name is unique within your form
                                        value="teacher"
                                        {...register("profession")}
                                    />

                                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="student">
                                        Student
                                    </label>
                                    <input
                                        type="radio"
                                        id="student"
                                        name="profession"  // Make sure this name is unique within your form
                                        value="student"
                                        {...register("profession")}
                                    />
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
                                                message: 'Password must meet the following criteria:\n' +
                                                    '- Minimum length of 8 characters\n' +
                                                    '- At least one uppercase letter\n' +
                                                    '- At least one lowercase letter\n' +
                                                    '- At least one digit\n' +
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
                                        {...register("confirmPassword", {
                                            required: "Confirm Password is required",
                                            validate: (value, formValues) => value === formValues.password || 'Password not matching'
                                        })}
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
                </div>)}
        </>
    );
}
)