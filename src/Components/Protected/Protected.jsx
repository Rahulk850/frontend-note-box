import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const Protected = () => {
    const token = localStorage.getItem("auth-token");
    if(!token){
        return <Navigate to = "/login" />;
    }
  return (<Outlet/>)
}
