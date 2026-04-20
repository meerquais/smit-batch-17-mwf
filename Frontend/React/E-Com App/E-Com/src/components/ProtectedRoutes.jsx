import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({children}) {
  
    const {user} = useSelector(s =>s.auth);

    if(!user) return <Navigate to="/login" />

    return children;
    
}

export default ProtectedRoutes;
