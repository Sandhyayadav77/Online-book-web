import React, { useEffect } from 'react'
import AdminProductsList from '../../features/admin/components/AdminProductsList'

const AdminHome = () => {
    useEffect(()=>{
        console.log("Welcome to Admin Page")
    })
    return (
        <>
            <AdminProductsList />

        </>
    )
}

export default AdminHome