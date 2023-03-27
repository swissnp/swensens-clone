import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type ISignUp } from "~/common/validation/auth";
import { DatePicker } from "antd";
import InputField from "~/components/InputField";
import SexSelector from "~/components/SexSelector";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useRouter } from "next/router";
import { TRPCClientError } from "@trpc/client";
import type { signUpRouter } from "~/server/api/routers/routers";
dayjs.extend(customParseFormat);


export function isTRPCClientError(
  cause: unknown
): cause is TRPCClientError<typeof signUpRouter> {
  return cause instanceof TRPCClientError;
}

export default function SignUpForm({
  onSubmit,
}: {
  onSubmit: (data: ISignUp) => Promise<{
    status: number;
    message: string;
    result: string;
  }>;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    trigger,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });
  const router = useRouter();
  return (
    <form
      className="form-control text-sm leading-normal"
      id="register-form"
      onSubmit={handleSubmit(async (data) => {
        try {
          await onSubmit(data);
          await router.push({
            pathname: "/login",
            query: { SignUpSuccess: "true" },
          });
        } catch (e) {
          if (isTRPCClientError(e)) {
            if (e.data?.code === "CONFLICT") {
              setError("email", { message: "อีเมลนี้ถูกใช้งานแล้ว" });
            } else {
              setError("root.serverError", {
                message: "เกิดข้อผิดพลาดบางประการ",
              })
            }
          }
        }
      })}
    >
      <div className="relative clear-both -mx-2 table h-auto w-full table-auto text-neutral-500">
        <div className="relative float-left block w-1/2 flex-none px-2">
          <InputField
            label="ชื่อ"
            name="firstname"
            placeholder="กรอกชื่อ"
            inputtype="text"
            form={register("firstname")}
            error={errors.firstname}
          />
        </div>
        <div className="relative float-left block w-1/2 flex-none px-2">
          <InputField
            label="นามสกุล"
            name="lastname"
            placeholder="กรอกนามสกุล"
            inputtype="text"
            form={register("lastname")}
            error={errors.lastname}
          />
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <InputField
            label="เบอร์โทรศัพท์"
            name="tel"
            placeholder="กรอกเบอร์โทรศัพท์"
            inputtype="number"
            form={register("telephone")}
            error={errors.telephone}
          />
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <InputField
            label="อีเมล"
            name="email"
            placeholder="กรอกอีเมล"
            inputtype="email"
            form={register("email")}
            error={errors.email}
          />
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <InputField
            label="รหัสผ่าน"
            name="password"
            placeholder="กรอกรหัสผ่าน"
            inputtype="password"
            form={register("password")}
            error={errors.password}
          />
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <SexSelector set={setValue} trigger={trigger} />
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <label className="relative mr-2 mb-2 ml-px cursor-default text-neutral-700">
            ของขวัญวันเกิดรอคุณอยู่
          </label>
          <div className="py-2">
            <DatePicker
              style={{ width: "100%", height: "48px" }}
              format="DD/MM/YYYY"
              placeholder="DD/MM/YYYY"
              onChange={async (date, dateString) => {
                setValue("birthDay", dayjs(dateString, "DD/MM/YYYY").toDate());
                await trigger("birthDay");
              }}
            />
          </div>
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
            register
          </button>
        </div>
      </div>
    </form>
  );
}
