import React, { useContext } from 'react';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import {  Navigate, useLocation } from 'react-router-dom';


import { AuthContext } from '../src/Components/provider/AuthProvider';
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation();

    if(loading){
        return <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>;
    }
    
        if(user){
            return children;
        }
        return <Navigate state={location.pathname} to='/login'></Navigate>
    };

export default PrivateRoute;