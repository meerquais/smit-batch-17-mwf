import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email('Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = z
  .object({
    displayName: z.string().min(3, 'Display name must be at least 3 characters'),
    email: z.email('Email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export const resetPasswordSchema = z.object({
  email: z.email('Email is required'),
});

export const postSchema = z.object({
  content: z.string().max(500, 'Content must be 500 chars or less'),
  mediaUrl: z.string().url('Media URL must be valid').optional().or(z.literal('')),
});

export const profileSchema = z.object({
  displayName: z.string().min(3, 'Display name must be at least 3 characters'),
  bio: z.string().max(150, 'Bio must be 150 chars or less').optional(),
  avatar: z.string().url('Avatar URL must be valid').optional().or(z.literal('')),
});
