import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type ISignUp } from "~/common/validation/auth";
import { DatePicker } from "antd";
import InputField from "~/components/InputField";
import SexSelector from "~/components/SexSelector";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);


export default function SignUpForm({onSubmit}: {onSubmit: (data: ISignUp) => void}) {
  const { register, handleSubmit, getValues, setValue, formState: { errors, isValid, isSubmitting } } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  return (
    <form
      className="form-control text-sm leading-normal"
      id="register-form"
      onSubmit={
        handleSubmit((data) => onSubmit(data))
      }
    >
      <div className="relative clear-both -mx-2 table table-auto h-auto w-full text-neutral-500">
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
          <button className="btn" onClick={() => console.log(getValues(),isValid,errors)}>
            test
          </button>
        </div>
        <div className="relative clear-both table h-auto w-full px-2 align-top">
          <button type="submit" className={ `btn-primary btn ${!isValid ? 'btn-disabled':''} ${isSubmitting ? 'loading':''}`}>
            register
          </button>
        </div>
      </div>
    </form>
  );
}
