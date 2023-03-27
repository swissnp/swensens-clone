import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type ILogin } from "~/common/validation/auth";
import InputField from "~/components/InputField";
import { type SignInResponse } from "next-auth/react";
import { useRouter } from "next/router";
export default function SignInForm({
  onSubmit,
}: {
  onSubmit: (data: ILogin) => Promise<SignInResponse | undefined>;
}) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  return (
    <form
      className="form-control flex flex-grow text-sm leading-normal"
      id="login-form"
      onSubmit={handleSubmit(async (data) => {
        const response = await onSubmit(data);
        if (response?.error) {
          const error = response;
          if (error.status === 401) {
            setError("root.serverError", {
              type: "401",
              message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
            });
          } else {
            setError("root.serverError", {
              message: "เกิดข้อผิดพลาดบางประการ",
            });
          }
        } else {
          await router.push("/");
        }
      })}
    >
      <div className="relative clear-both -mx-2 table h-auto w-auto text-neutral-500">
        <div className="relative table h-auto w-full px-2 align-top">
          <InputField
            label="อีเมล"
            name="email"
            placeholder="กรอกอีเมล"
            inputtype="email"
            form={register("email")}
            error={errors.email}
          />
        </div>
        <div className="relative table h-auto w-full px-2 align-top">
          <InputField
            label="รหัสผ่าน"
            name="password"
            placeholder="กรอกรหัสผ่าน"
            inputtype="password"
            form={register("password")}
            error={errors.password}
          />
        </div>
        <div className="relative table px-2 ">
          {errors.root?.serverError ? (
            <div className="pb-3 text-error">
              {errors.root.serverError.message}
            </div>
          ) : null}
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <button
            type="submit"
            className={`btn-primary btn ${!isValid ? "btn-disabled" : ""} ${
              isSubmitting ? "loading" : ""
            }`}
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
