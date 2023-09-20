import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoggedInUserOrdersAsync, selectLoggedInUserOrders } from '../userSlice';
import { selectLoggedInUser } from '../../auth/authSlice';
import { Link } from 'react-router-dom';

const UserOrders = () => {
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders = useSelector(selectLoggedInUserOrders);

  useEffect(() => {
    if (user && user.data && user.data.id) {
      dispatch(fetchLoggedInUserOrdersAsync(user.data.id));
    }
  }, [user]);

  return (
    <>
      <div>
        {orders.map((order) => (
          <div key={order.id} className="mx-auto max-w-screen px-6 lg:px-8 my-4">
            <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <p className="text-lg font-medium text-gray-900"> Items In My Orders</p>
                </div>
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {order.items.map((item) => (
                        <li key={item.id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item?.productDetails?.classDetails?.book?.images[2]}
                              alt={item?.productDetails?.classDetails?.book?.title} // Use a meaningful alt text
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
                                <p className="ml-4">{item?.productDetails?.classDetails?.book?.price}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                {item?.productDetails?.classDetails?.book?.title}
                              </p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <label className="text-gray-500" htmlFor="qty">
                                Qty : {item.quantity}
                              </label>
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
                  <p>${order.totalAmount}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total Items in Cart</p>
                  <p>🛒 {order.totalItems} Items</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserOrders;
