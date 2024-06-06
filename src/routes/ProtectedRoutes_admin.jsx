

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoutes_admin = ({ Component }) => {
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navigate('/login');
        }
    }, []);
  return (
    <>
    <Component />
    </>
  )
}


