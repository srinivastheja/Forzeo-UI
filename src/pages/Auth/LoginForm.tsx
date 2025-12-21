import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField, Button, Box, Divider, Typography } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../hooks/useAuth';

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be 6+ characters')
});

type FormValues = z.infer<typeof schema>;

const LoginForm: React.FC = () => {
    const { login, loginWithGoogle } = useAuth();
    const { register, handleSubmit, formState } = useForm<FormValues>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormValues) => {
        await login(data.email, data.password);
    };

    const handleGoogleSuccess = async (credentialResponse: any) => {
        await loginWithGoogle(credentialResponse);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'grid', gap: 2 }}>
            <TextField label="Email" {...register('email')} error={!!formState.errors.email} helperText={formState.errors.email?.message} />
            <TextField label="Password" type="password" {...register('password')} error={!!formState.errors.password} helperText={formState.errors.password?.message} />
            <Button type="submit" variant="contained">Sign in</Button>

            <Divider sx={{ my: 1 }}>
                <Typography variant="caption" color="textSecondary">OR</Typography>
            </Divider>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => console.log('Login Failed')}
                />
            </Box>
        </Box>
    );
};

export default LoginForm;
