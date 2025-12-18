import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return null; // or loader skeleton
    if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
    return children;
};
