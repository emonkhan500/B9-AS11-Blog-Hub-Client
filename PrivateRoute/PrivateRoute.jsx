import React, { useContext } from 'react';
import {  Navigate, useLocation } from 'react-router-dom';


import { AuthContext } from '../src/Components/provider/AuthProvider';
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation();

    if(loading){
        return <h1>Loading ....</h1>;
    }
    
        if(user){
            return children;
        }
        return <Navigate state={location.pathname} to='/login'></Navigate>
    };

export default PrivateRoute;