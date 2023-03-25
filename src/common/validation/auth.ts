import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง").min(1,"กรุณากรอกอีเมล"),
  password: z.string().min(8,"ตั้งรหัสผ่านอย่างน้อย 8 ตัวอักษร").max(50,"ตั้งรหัสผ่านไม่เกิน 50 ตัวอักษร"),
});

export const signUpSchema = loginSchema.extend({
  sex: z.enum(['male', 'female', 'unidentify']),
  telephone : z.string().min(10,"กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลัก").max(10,"กรุณากรอกเบอร์โทรศัพท์ไม่เกิน 10 หลัก"),
  firstname : z.string().min(2,"กรุณากรอกอย่างน้อย 2 ตัวอักษร").max(20,"กรุณากรอกไม่เกิน 20 ตัวอักษร"),
  lastname : z.string().min(2,"กรุณากรอกอย่างน้อย 2 ตัวอักษร").max(20,"กรุณากรอกไม่เกิน 20 ตัวอักษร"),
  birthDay : z.date()
});

export type ILogin = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;