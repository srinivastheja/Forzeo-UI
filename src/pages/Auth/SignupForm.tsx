import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField, Button, Box } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be 6+ characters'),
    confirm: z.string()
}).refine((data) => data.password === data.confirm, { message: "Passwords don't match", path: ['confirm'] });

type FormValues = z.infer<typeof schema>;

const SignupForm: React.FC = () => {
    const { signup } = useAuth();
    const { register, handleSubmit, formState } = useForm<FormValues>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormValues) => {
        await signup(data.email, data.password);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'grid', gap: 2 }}>
            <TextField label="Email" {...register('email')} error={!!formState.errors.email} helperText={formState.errors.email?.message} />
            <TextField label="Password" type="password" {...register('password')} error={!!formState.errors.password} helperText={formState.errors.password?.message} />
            <TextField label="Confirm Password" type="password" {...register('confirm')} error={!!formState.errors.confirm} helperText={formState.errors.confirm?.message} />
            <Button type="submit" variant="contained">Create account</Button>
        </Box>
    );
};

export default SignupForm;
