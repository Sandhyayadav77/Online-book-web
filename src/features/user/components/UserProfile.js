import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo, updateUserAsync } from '../userSlice';
import { useForm, handleSubmit } from 'react-hook-form';

export function UserProfile() {
  const [selectedEditIndex, setSelectedEditIndex] = useState(-1);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  //TODO: We will add payment section when we work on backend.
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("hello")
  }
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  // console.log(user)
  const handleEdit = (addressUpdate, index) => {
    const newUser = { ...user, addresses: [...user.addresses] }
    newUser.addresses.splice(index, 1, addressUpdate);
    console.log(newUser)
    dispatch(updateUserAsync(newUser));
  }
  const handleRemove = (e, index) => {
    const newUser = { ...user, addresses: [...user.addresses] }
    newUser.addresses.splice(index, 1);
    console.log(newUser)
    dispatch(updateUserAsync(newUser));
    setSelectedEditIndex(-1);
  }

  const handleEditForm = (index) => {
    setSelectedEditIndex(index);
    const address = user.addresses[index]
    setValue('name', address.name.slice(0, 1).toUpperCase() + address.name.slice(1));
    setValue('email', address.email.slice(0, 1).toUpperCase() + address.email.slice(1));
    setValue('city', address.city.slice(0, 1).toUpperCase() + address.city.slice(1));
    setValue('state', address.state.slice(0, 1).toUpperCase() + address.state.slice(1));
    setValue('street', address.street.slice(0, 1).toUpperCase() + address.street.slice(1));
    setValue('phone', address.phone);
    setValue('pincode', address.pincode);

  }
  const handleAdd = (address) => {
    const newUser = { ...user, addresses: [...user.addresses, address] };
    dispatch(updateUserAsync(newUser));
    setShowAddAddressForm(false);
  }
  return (
    <>
      <div className="mx-auto max-w-screen px-6 lg:px-8 my-4">
        <div className="flex h-full flex-col bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <h1 className="text-lg font-medium text-gray-900">Name:  {user?.name.slice(0, 1).toUpperCase() + user?.name.slice(1)} </h1>
            <br />
            <h1 className="text-base font-medium text-gray-900">Email address: {user?.email}</h1>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <button
              // onClick={e => { setShowAddAddressForm(true); setSelectedEditIndex(-1) }}
              onClick={e => {
                setShowAddAddressForm(true);
                setSelectedEditIndex(-1);
                reset(); // Add this line to reset the form
              }}
              type="submit"
              className="rounded-md my-5 bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add New Address
            </button>
            {showAddAddressForm ?
              <form
                noValidate
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                  handleAdd(data);
                  reset();
                })}>
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("name", { required: "Name is required", maxLength: 20 })}
                          id="name"
                          className="block w-full rounded-md border-0 py-1.5  px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                      </div>
                    </div>


                    <div className="sm:col-span-4">
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
                          className="block  px-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone Number
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"

                          {...register("phone", {
                            required: "Phone Number is required",
                            pattern: {
                              value: /^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}$/,
                              message: 'Invalid phone number',
                            },
                          })}
                          type="tel"
                          className="block w-full  px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}

                      </div>
                    </div>



                    <div className="col-span-full">
                      <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("street", { required: "Street address is required" })}
                          id="street-address"
                          className="block w-full  px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.street && <p className='text-red-500'>{errors.street.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("city", { required: "City is required" })}
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0  px-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.city && <p className='text-red-500'>{errors.city.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("state", { required: "State is required" })}
                          id="state"
                          className="block w-full rounded-md border-0 py-1.5   px-2   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.state && <p className='text-red-500'>{errors.state.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                        ZIP / Pin code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("pincode", { required: "Pin Code is required" })}
                          id="pin-code"
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.pincode && <p className='text-red-500'>{errors.pincode.message}</p>}
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-x-6">

                        <button
                             onClick={e => {
                              setShowAddAddressForm(false);
                              reset(); // Add this line to reset the form
                            }}
                          type="submit"
                          className="px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Add Address
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form> : null}
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <p className="mt-0.5 text-sm text-gray-500">Your Address</p>
            {user?.addresses.map((address, index) => (
              <div>
                {selectedEditIndex === index ?
                  <form noValidate onSubmit={handleSubmit(data => {
                    console.log(data);
                    handleEdit(data, index);
                  })}>
                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("name", { required: "Name is required", maxLength: 20 })}
                              id="name"
                              className="block w-full rounded-md border-0 py-1.5  px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                          </div>
                        </div>


                        <div className="sm:col-span-4">
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
                              className="block  px-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone Number
                          </label>
                          <div className="mt-2">
                            <input
                              id="phone"

                              {...register("phone", {
                                required: "Phone Number is required",
                                pattern: {
                                  value: /^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}$/,
                                  message: 'Invalid phone number',
                                },
                              })}
                              type="tel"
                              className="block w-full  px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}

                          </div>
                        </div>



                        <div className="col-span-full">
                          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                            Street address
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("street", { required: "Street address is required" })}
                              id="street-address"
                              className="block w-full  px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.street && <p className='text-red-500'>{errors.street.message}</p>}
                          </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            City
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("city", { required: "City is required" })}
                              id="city"
                              autoComplete="address-level2"
                              className="block w-full rounded-md border-0  px-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.city && <p className='text-red-500'>{errors.city.message}</p>}
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                            State / Province
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("state", { required: "State is required" })}
                              id="state"
                              className="block w-full rounded-md border-0 py-1.5   px-2   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.state && <p className='text-red-500'>{errors.state.message}</p>}
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                            ZIP / Pin code
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("pincode", { required: "Pin Code is required" })}
                              id="pin-code"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.pincode && <p className='text-red-500'>{errors.pincode.message}</p>}
                          </div>
                          <div className="mt-6 flex items-center justify-end gap-x-6">

                            <button
                              onClick={e => setSelectedEditIndex(-1)}
                              type="submit"
                              className="px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Edit Address
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form> : null}
                <div key={index} htmlFor={address.pincode} className="flex flex-col justify-start items-start sm:flex-row sm:justify-between gap-x-6 py-5 px-4 rounded-sm border border-gray-300 my-3">
                  <div className="flex min-w-0 flex-auto ">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm leading-6 text-gray-900">{address.name}</p>
                      <p className="text-sm leading-6 text-gray-900">Street: {address.street}</p>
                      <p className="text-sm leading-6 text-gray-900">City: {address.city}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between">
                    <div className="text-sm leading-6 text-gray-900 sm:mr-[80px]">
                      <p>Phone: {address.phone}</p>
                      <p>State: {address.state}</p>
                      <p>Pincode: {address.pincode}</p>
                    </div>

                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <button
                        onClick={(e) => handleEditForm(index)}
                        type="button"
                        className="px-3 py-1 font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200 rounded-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => handleRemove(e, index)}
                        type="button"
                        className="px-3 py-1 font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200 rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
}
