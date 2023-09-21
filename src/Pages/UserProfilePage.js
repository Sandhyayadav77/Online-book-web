import React from 'react'
import { UserProfile } from '../features/user/components/UserProfile'

const UserProfilePage = () => {
  return (
    <>
       <div className=' px-9 py-6 sm:px-6'>
        <h1 className='text-2xl font-medium text-gray-900'>My Profile</h1>
      </div>
    <UserProfile/></>
  )
}

export default UserProfilePage