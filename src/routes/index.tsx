import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';

const LoginPage = lazy(() => import('../pages/Login'));
const SignupPage = lazy(() => import('../pages/Signup'));
const DashboardPage = lazy(() => import('../pages/Dashboard'));

export const AppRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Route>

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<DashboardPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;
