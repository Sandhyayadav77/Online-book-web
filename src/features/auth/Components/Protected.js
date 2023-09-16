import React from 'react'
import { selectLoggedInUser } from '../authSlice';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = ({children}) => {
    const user = useSelector(selectLoggedInUser);
    if (!user) {
        return <Navigate to='/login' replace={true} ></Navigate>
    }
    return children;
}

export default Protected