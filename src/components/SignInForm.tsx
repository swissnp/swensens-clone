import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, ILogin } from "~/common/validation/auth";
import InputField from "~/components/InputField";


export default function SignInForm({onSubmit}: {onSubmit: (data: ILogin) => void}) {
  const { register, handleSubmit } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <form
      className="form-control text-sm leading-normal flex flex-grow"
      id="login-form"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className="relative clear-both -mx-2 table h-auto w-auto text-neutral-500">
        <div className="relative table h-auto w-full px-2 align-top">
          <InputField
            label="อีเมล"
            name="email"
            placeholder="กรอกอีเมล"
            inputtype="email"
            form={register("email")}
          />
        </div>
        <div className="relative table h-auto w-full px-2 align-top">
          <InputField
            label="รหัสผ่าน"
            name="password"
            placeholder="กรอกรหัสผ่าน"
            inputtype="password"
            form={register("password")}
          />
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <button type="submit" className="btn-primary btn">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
