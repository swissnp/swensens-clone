import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, ISignUp } from "~/common/validation/auth";
import { useCallback } from "react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { DatePicker } from "antd";
import InputField from "~/components/InputField";
import SexSelector from "~/components/SexSelector";
import dayjs from "dayjs";
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const nameValidator = (value: string): string => {
  if (value.length < 2) {
    return "กรุณากรอกอย่างน้อย 2 ตัวอักษร";
  }
  return "";
};
const telValidator = (value: string): string => {
  if (value.length < 10) {
    return "กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลัก";
  }
  return "";
};
const emailValidator = (value: string): string => {
  if (!value) {
    return "กรุณากรอกอีเมล";
  } else {
    if (value.includes("@") && value.includes(".")) {
      return "";
    } else {
      return "กรุณากรอกอีเมลให้ถูกต้อง";
    }
  }
};
const passwordValidator = (value: string): string => {
  if (value.length < 8) {
    return "ตั้งรหัสผ่านอย่างน้อย 8 ตัวอักษร";
  }
  return "";
};

export default function SignUpForm({onSubmit}: {onSubmit: (data: ISignUp) => void}) {
  const { register, handleSubmit, getValues, setValue } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
  });
  return (
    <form
      className="form-control text-sm leading-normal"
      id="register-form"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className="relative clear-both -mx-2 table h-auto w-full text-neutral-500">
        <div className="relative float-left block w-1/2 flex-none px-2">
          <InputField
            label="ชื่อ"
            name="firstname"
            placeholder="กรอกชื่อ"
            validator={nameValidator}
            inputtype="text"
            form={register("firstname")}
          />
        </div>
        <div className="relative float-left block w-1/2 flex-none px-2">
          <InputField
            label="นามสกุล"
            name="lastname"
            placeholder="กรอกนามสกุล"
            validator={nameValidator}
            inputtype="text"
            form={register("lastname")}
          />
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <InputField
            label="เบอร์โทรศัพท์"
            name="tel"
            placeholder="กรอกเบอร์โทรศัพท์"
            inputtype="number"
            validator={telValidator}
            form={register("telephone")}
          />
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <InputField
            label="อีเมล"
            name="email"
            placeholder="กรอกอีเมล"
            inputtype="email"
            validator={emailValidator}
            form={register("email")}
          />
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <InputField
            label="รหัสผ่าน"
            name="password"
            placeholder="กรอกรหัสผ่าน"
            inputtype="password"
            validator={passwordValidator}
            form={register("password")}
          />
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <SexSelector set={setValue} />
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
              onChange={(date, dateString) => {
                setValue("birthDay", dayjs(dateString, "DD/MM/YYYY").toDate());
              }}
            />
          </div>
          <button className="btn" onClick={(e) => console.log(getValues())}>
            test
          </button>
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <button type="submit" className="btn-primary btn">
            register
          </button>
        </div>
      </div>
    </form>
  );
}
