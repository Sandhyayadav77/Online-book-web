import React from 'react'
import UserOrders from '../features/user/components/UserOrders'

const UserOrderPage = () => {
  return (
    <>
      <div className=' px-9 py-6 sm:px-6'>
        <h1 className='text-2xl font-medium text-gray-900'>My Orders</h1>
      </div>

      <UserOrders />
    </>
  )
}

export default UserOrderPage