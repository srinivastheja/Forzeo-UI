import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';

const LoginPage = lazy(() => import('../pages/Login'));
const SignupPage = lazy(() => import('../pages/Signup'));
const OverviewPage = lazy(() => import('../pages/Overview'));
const PromptExplorerPage = lazy(() => import('../pages/PromptExplorer'));
const VisibilityScoresPage = lazy(() => import('../pages/VisibilityScores'));
const CitationsPage = lazy(() => import('../pages/Citations'));
const CompetitorsPage = lazy(() => import('../pages/Competitors'));
const InsightsPage = lazy(() => import('../pages/Insights'));
const AlertsPage = lazy(() => import('../pages/Alerts'));
const SettingsPage = lazy(() => import('../pages/Settings'));

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
                <Route index element={<OverviewPage />} />
                <Route path="overview" element={<OverviewPage />} />
                <Route path="prompt-explorer" element={<PromptExplorerPage />} />
                <Route path="visibility-scores" element={<VisibilityScoresPage />} />
                <Route path="citations" element={<CitationsPage />} />
                <Route path="competitors" element={<CompetitorsPage />} />
                <Route path="insights" element={<InsightsPage />} />
                <Route path="alerts" element={<AlertsPage />} />
                <Route path="settings" element={<SettingsPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;
