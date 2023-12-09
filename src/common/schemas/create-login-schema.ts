import { z } from 'zod';

export const createLoginSchema = () => {
  return z.object({
    email: z.string().trim().nonempty('Enter email').email('Invalid email address'),
    password: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(6, 'Min number of characters 6')
      .regex(
        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
        'Password must contain A-z, 0-9',
      )
      .max(20, 'Max number of characters 20'),
  });
};
