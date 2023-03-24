import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

export const signUpSchema = loginSchema.extend({
  sex: z.enum(['male', 'female', 'unidentify']),
  telephone : z.string().min(10).max(10),
  firstname : z.string().min(2).max(20),
  lastname : z.string().min(2).max(20),
  birthDay : z.date()
});

export type ILogin = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;