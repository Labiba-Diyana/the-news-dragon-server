/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log('Our Location::', location);

    if(loading){
        return  <Spinner animation="border" variant="warning" />
    }

    if(user){
        return children;
    }
    return <Navigate state={{form: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;