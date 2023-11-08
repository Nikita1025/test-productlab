import { z } from 'zod';

export const createLoginSchema = () => {
  return z.object({
    email: z.string().trim().nonempty('Enter email').email('Invalid email address'),
    password: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(6, 'Min number of characters 6')
      .max(20, 'Max number of characters 20'),
  });
};
