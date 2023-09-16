import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom';
import { selectItems, updateCartAsync } from './CartSlice';





export function Cart() {
  const dispatch = useDispatch();
  const items= useSelector(selectItems)
  console.log(items)
  const [open, setOpen] = useState(true)
 const totalAmount = items.reduce((amount, item) => {
  const price = parseFloat(item.productDetails.classDetails.book.price.replace(/[^0-9.]/g, ''));
  return price * item.quantity + amount;
}, 0);
  const totalItems= items.reduce((total, item)=> item.quantity + total,0)
  const handleQuantity = (e, item)=>{
dispatch(updateCartAsync({...item, quantity:+e.target.value}))
  }
  
  return (
    <>
      <div className="mx-auto max-w-screen px-6 lg:px-8 my-4  ">

        <div className="flex h-full flex-col  bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <p className="text-lg font-medium text-gray-900">Shopping cart</p>

            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.productDetails.classDetails.book.images[2]}
                          // alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <p href={item.href}>{item.subjectName}</p>
                              <p href={item.href}>{item.className}</p>
                              <p>{item.publisherName}</p>
                            </h3>
                            <p className="ml-4">{item && item.productDetails && item.productDetails.classDetails.book && item.productDetails.classDetails.book.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{item.productDetails.classDetails.book.title}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">

                          <label className='text-gray-500' htmlFor="qty">Qty </label>
                          <select onChange={(e)=>handleQuantity(e,item)} className="py-2 px-1 border  border-gray-200 mr-6 focus:outline-none">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </select>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p> ${totalAmount}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total Items in Cart</p>
              <p>🛒 {totalItems} Items</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <Link
                to='/checkout'
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <Link to='/'>
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={() => setOpen(false)}
                  > 
                     &nbsp; Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
