import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService, type User } from '../services/auth';

type AuthContextValue = {
    user: User;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string) => Promise<void>;
    loginWithGoogle: (credentialResponse: any) => Promise<void>;
    logout: () => void;
    loading: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const session = authService.getSession();
        if (session) setUser(session.user);
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        const res = await authService.login(email, password);
        setUser(res.user);
    };

    const signup = async (email: string, password: string) => {
        const res = await authService.signup(email, password);
        setUser(res.user);
    };

    const loginWithGoogle = async (credentialResponse: any) => {
        const res = await authService.loginWithGoogle(credentialResponse);
        setUser(res.user);
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, loginWithGoogle, logout, loading }}>{children}</AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextValue => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};
