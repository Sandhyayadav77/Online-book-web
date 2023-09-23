import React from 'react'
import { useParams } from 'react-router-dom'
import { AdminProductDetails } from '../../features/admin/components/AdminProductDetails'

const AdminProductetailsPage = () => {
  const params= useParams()
  // console.log(params)
  return (
    <>
        <AdminProductDetails/>
    </>
  )
}

export default AdminProductetailsPage