import { useContext } from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from '../context/AuthContext.js';

const RequireAuth = () => {
    const { state } = useContext(AuthContext);
    const location = useLocation();
    const userData = JSON.parse(localStorage.getItem('userData'))

    return (
        (state?.isLoggedIn || userData)
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />

    )
}

export default RequireAuth